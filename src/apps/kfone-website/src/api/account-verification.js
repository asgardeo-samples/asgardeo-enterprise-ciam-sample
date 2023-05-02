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
 * Initiates phone verification for a given email and mobile number.
 * @async
 * @function
 * @param {string} email - The email address of the user.
 * @param {string} mobile - The mobile number of the user.
 * @returns {Promise} - A promise that resolves with the response data on successful verification,
 * and rejects with an error message on unsuccessful verification.
 * @throws {Error} - Throws an error if there is an issue while initiating phone verification.
 */
export const initiatePhoneVerify = async (email, mobile) => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/scim+json',
    },
    method: HttpMethod.POST,
    data: {
      email,
      mobile,
    },
    url: `${appConfig.baseAPIEndpoint}/account-verification-api-2/1.0.0/initiate`,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response.data;
  } catch (error) {
    throw new Error('Error while initiating phone verification.');
  }
};

/**
 * Verifies phone number for a given email and mobile number.
 * @async
 * @function
 * @param {string} email - The email address of the user.
 * @param {string} mobile - The mobile number of the user.
 * @returns {Promise} - A promise that resolves with the response data on successful verification,
 * and rejects with an error message on unsuccessful verification.
 * @throws {Error} - Throws an error if there is an issue while verifying the phone number.
 */
export const verifyPhone = async (email, mobile) => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/scim+json',
    },
    method: HttpMethod.POST,
    data: {
      email,
      mobile,
    },
    url: `${appConfig.baseAPIEndpoint}/account-verification-api-2/1.0.0/verify`,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response;
  } catch (error) {
    throw new Error('Error while verifying phone number.');
  }
};
