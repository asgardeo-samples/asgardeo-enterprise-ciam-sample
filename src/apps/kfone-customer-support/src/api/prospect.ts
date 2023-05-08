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
import {HttpMethod} from '../models';

/**
 * This is a wrapper function for the AsgardeoSPAClient's httpRequest function.
 *
 * @returns A function that calls AsgardeoSPAClient.getInstance().httpRequest.
 */
const httpRequest = AsgardeoSPAClient!.getInstance()!.httpRequest.bind(AsgardeoSPAClient.getInstance());

/**
 * Retrieves the customer 360 view for the specified email.
 *
 * @param email - The email of the customer whose 360 view needs to be retrieved.
 * @returns A Promise that resolves to the retrieved customer 360 view.
 * @throws If no data is found for the specified email or if an error occurs while retrieving the customer 360 view.
 */
export const getCustomer360View = async (email: string) => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: HttpMethod.GET,
    params: {
      email,
    },
    url: `${appConfig.choreoApiBaseUrl}/prospect-360-api/1.0.0/customer-360view`,
  };

  try {
    const response = await httpRequest(requestConfig);

    if (!response?.data) {
      throw new Error('No data found for the specified email.');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error while sending marketing mails.');
  }
};
