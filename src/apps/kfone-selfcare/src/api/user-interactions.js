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
 * @function
 * @returns {function} - Returns a function that calls AsgardeoSPAClient.getInstance().httpRequest.
 */
const httpRequest = AsgardeoSPAClient.getInstance().httpRequest.bind(AsgardeoSPAClient.getInstance());

/**
 * Record user interactions with different subscription types.
 * @function
 * @param {string} email - The email address of the user.
 * @param {Object} interactions - Object containing different subscription type visits.
 * @returns {Promise} Promise object representing the response data of the HTTP request.
 * @throws {Error} Throws an error if the HTTP request fails.
 */
export const recordUserInteractions = async (email, interactions) => {
  const {
    smartPhoneVisits = 0,
    iotDevicesVisits = 0,
    mobileSubscriptionVisits = 0,
    tvSubscriptionVisits = 0,
  } = interactions;

  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: HttpMethod.POST,
    data: {
      email,
      smartPhoneVisits,
      iotDevicesVisits,
      mobileSubscriptionVisits,
      tvSubscriptionVisits,
    },
    url: `${appConfig.choreoApiBaseUrl}/user-interactions-api/1.0.0/interactions`,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response;
  } catch (error) {
    throw new Error('Could not record user interactions.');
  }
};
