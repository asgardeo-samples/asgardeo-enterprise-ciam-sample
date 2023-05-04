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
 * The default authentication and token exchange configuration object.
 */
export const authConfig = {
  baseUrl: process.env.REACT_APP_ASGARDEO_BASE_URL ?? '',
  clientID: process.env.REACT_APP_ASGARDEO_CLIENT_ID ?? '',
  signInRedirectURL: process.env.REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL ?? '',
  signOutRedirectURL: process.env.REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL ?? '',
  scope: ['openid', 'profile', 'email'],
  stsConfig: {
    client_id: process.env.REACT_APP_CHOREO_CLIENT_ID ?? '',
    orgHandle: process.env.REACT_APP_CHOREO_ORGANIZATION ?? '',
    scope: [
      'apim:api_manage',
      'apim:subscription_manage',
      'apim:tier_manage',
      'apim:admin',
      'apim:publisher_settings',
      'environments:view_prod',
      'environments:view_dev',
      'apim:api_generate_key',
    ],
  },
  stsTokenEndpoint: process.env.REACT_APP_STS_TOKEN_ENDPOINT,
  resourceServerURLs: process.env.REACT_APP_BASE_API_ENDPOINT ?? '',
};
