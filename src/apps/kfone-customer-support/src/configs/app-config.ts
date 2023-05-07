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
   * The client ID of your Asgardeo application.
   */
  asgardeoClientId: string;
  /**
   * The base URL of your Asgardeo organization's services.
   */
  asgardeoServicesUrl: string;
  /**
   * The callback URL to redirect to after successful authentication with Asgardeo.
   */
  asgardeoLoginCallbackUrl: string;
  /**
   * The callback URL to redirect to after successful logout from Asgardeo.
   */
  asgardeoLogoutCallbackUrl: string;
  /**
   * The base URL of the hosted resource APIs.
   * The portion of any API URL up to and excluding the name of the API.
   */
  choreoApiBaseUrl?: string;
  /**
   * The consumer ID of your Choreo application.
   */
  choreoClientId: string;
  /**
   * The secret of your Choreo application.
   */
  choreoClientSecret: string;
  /**
   * The organization of the Choreo-hosted API.
   */
  choreoOrganization: string;
  /**
   * Choreo STS token endpoint.
   */
  choreoTokenEndpoint: string;
  /**
   * Endpoints for various services.
   */
  endpoints: {
    /**
     * Security Token Service endpoint.
     */
    stsTokenEndpoint: string;
  };
}

export const appConfig: AppConfig = {
  asgardeoClientId: process.env.REACT_APP_ASGARDEO_CLIENT_ID ?? '',
  asgardeoServicesUrl: process.env.REACT_APP_ASGARDEO_SERVICES_URL ?? '',
  asgardeoLoginCallbackUrl: process.env.REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL ?? '',
  asgardeoLogoutCallbackUrl: process.env.REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL ?? '',
  choreoApiBaseUrl: process.env.REACT_APP_CHOREO_API_BASE_URL as string,
  choreoClientId: process.env.REACT_APP_CHOREO_CLIENT_ID ?? '',
  choreoClientSecret: process.env.REACT_APP_CHOREO_CLIENT_SECRET as string,
  choreoOrganization: process.env.REACT_APP_CHOREO_ORGANIZATION ?? '',
  choreoTokenEndpoint: process.env.REACT_APP_CHOREO_TOKEN_ENDPOINT as string,
  endpoints: {
    stsTokenEndpoint: process.env.REACT_APP_CHOREO_TOKEN_ENDPOINT as string,
  },
};
