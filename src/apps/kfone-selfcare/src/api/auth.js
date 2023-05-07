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
import {HttpMethod} from '../models';
import {appConfig} from '../configs';

/**
 * This is a wrapper function for the AsgardeoSPAClient's httpRequest function.
 * @function
 * @returns {function} - Returns a function that calls AsgardeoSPAClient.getInstance().httpRequest.
 * @param {Object} requestConfig - The configuration object to be passed to the httpRequest function.
 */
const httpRequest = AsgardeoSPAClient.getInstance().httpRequest.bind(AsgardeoSPAClient.getInstance());

/**
 * Obtains an access token from the Choreo STS using the client credentials grant type.
 * @function
 * @async
 * @returns {Promise} - A promise that resolves to the HTTP response from the Choreo STS.
 */
export const getAccessToken = async () => {
  const requestConfig = {
    attachToken: false,
    headers: {
      Authorization: `Basic ${btoa(`${appConfig.choreoClientId}:${appConfig.choreoClientSecret}`)}`,
      'Content-Type': 'application/scim+json',
    },
    method: HttpMethod.POST,
    data: {
      grant_type: 'client_credentials',
    },
    url: appConfig.endpoints.stsTokenEndpoint,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response;
  } catch (error) {
    throw new Error(`Error while obtaining access token from Choreo STS: ${error.message}`);
  }
};
