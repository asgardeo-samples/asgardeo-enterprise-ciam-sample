/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {AsgardeoSPAClient} from '@asgardeo/auth-react';
import {appConfig} from '../configs';
import {HttpMethod, User} from '../models';

/**
 * This is a wrapper function for the AsgardeoSPAClient's httpRequest function.
 *
 * @returns A function that calls AsgardeoSPAClient.getInstance().httpRequest.
 */
const httpRequest = AsgardeoSPAClient!.getInstance()!.httpRequest.bind(AsgardeoSPAClient.getInstance());

/**
 * Retrieves a list of user interactions for the specified category.
 *
 * @param category - The category of user interactions to retrieve.
 * @returns A Promise that resolves to the retrieved user interactions.
 * @throws If an error occurs while retrieving the interactions.
 */
export const sendMarketingMail = async (audience: User[]) => {
  const audienceEmails: string[] = audience.map(user => `emails=${encodeURIComponent(user.email)}`);
  const params: string = audienceEmails.join('&');

  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: HttpMethod.POST,
    params,
    url: `${appConfig.baseAPIEndpoint}/marketing-campaign-api/1.0.0/sendMarketingMail`,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response;
  } catch (error) {
    throw new Error('Error while sending marketing mails.');
  }
};
