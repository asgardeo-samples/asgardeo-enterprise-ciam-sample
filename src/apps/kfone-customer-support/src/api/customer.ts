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
const httpRequest = AsgardeoSPAClient!.getInstance()!.httpRequest.bind(AsgardeoSPAClient.getInstance())!;

/**
 * Retrieves customer information by mobile number.
 *
 * @param mobile - The customer's mobile number.
 * @returns A Promise that resolves with the customer's information.
 * @throws If an error occurs while retrieving the customer information.
 */
export const getCustomerInfo = async (mobile: string): Promise<any> => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      mobile,
    },
    method: HttpMethod.GET,
    url: `${appConfig.baseAPIEndpoint}/kfone-customer-360/1.0.0/customer`,
  };

  try {
    const response = await httpRequest(requestConfig);

    if (!response?.data) {
      throw new Error('No customer information found.');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error while retrieving customer information.');
  }
};
