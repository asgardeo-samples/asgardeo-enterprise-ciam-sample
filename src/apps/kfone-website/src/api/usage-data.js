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
 * Get the usage data for a specific user.
 * @function
 * @async
 * @param {string} userId - The ID of the user to get usage data for.
 * @returns {Promise} - A Promise that resolves with the usage data.
 */
export const getUsageData = async userId => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/scim+json',
    },
    method: HttpMethod.GET,
    url: `${appConfig.baseAPIEndpoint}/usage-data-api/1.0.0/getUsageData?userId=${userId}`,
  };

  try {
    const response = await httpRequest(requestConfig);
    return response;
  } catch (error) {
    throw new Error('Could not get usage data.');
  }
};

/**
 * Get a package recommendation for a specific user.
 * @function
 * @async
 * @param {string} userId - The ID of the user to get a package recommendation for.
 * @returns {Promise} - A Promise that resolves with the package recommendation.
 * @throws {Error} - If the recommendation is not found.
 */
export const getPackageRecommendation = async userId => {
  const requestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: HttpMethod.GET,
    params: {
      userId,
    },
    url: `${appConfig.baseAPIEndpoint}/usage-data-api/1.0.0/packageRecommendation`,
  };

  try {
    const response = await httpRequest(requestConfig);

    if (response?.data?.status !== 'Recommendation Found') {
      throw new Error('Recommendation Not Found');
    }

    return response.data;
  } catch (error) {
    throw new Error('Could not get package recommendation.');
  }
};
