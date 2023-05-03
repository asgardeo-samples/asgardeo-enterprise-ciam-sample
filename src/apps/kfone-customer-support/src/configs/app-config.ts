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

/**
 * The configuration object for the application.
 */
export interface AppConfig {
  /**
   * The base API endpoint for the application.
   * @remarks This endpoint is used for all API calls.
   */
  baseAPIEndpoint: string | undefined;
}

export const appConfig: AppConfig = {
  baseAPIEndpoint: process.env.REACT_APP_BASE_API_ENDPOINT,
};
