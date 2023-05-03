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
 * Represents the authentication configuration of the application.
 */
export interface AuthConfig {
  /**
   * The endpoint URL of the Security Token Service (STS).
   * If `undefined`, the application will use the default STS endpoint.
   */
  stsTokenEndpoint: string | undefined;
}

export const authConfig = {
  stsTokenEndpoint: process.env.REACT_APP_STS_TOKEN_ENDPOINT,
};
