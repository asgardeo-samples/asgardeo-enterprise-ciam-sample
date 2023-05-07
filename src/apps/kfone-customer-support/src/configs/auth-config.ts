/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import {AuthReactConfig} from '@asgardeo/auth-react';
import {STSClientConfig} from '@asgardeo/token-exchange-plugin';
import {appConfig} from './app-config';

/**
 * Represents the configuration options for authentication and token exchange.
 */
export type AuthConfig = AuthReactConfig & STSClientConfig;

/**
 * The default authentication and token exchange configuration object.
 */
export const authConfig: AuthConfig = {
  baseUrl: appConfig.asgardeoServicesUrl,
  clientID: appConfig.asgardeoClientId,
  signInRedirectURL: appConfig.asgardeoLoginCallbackUrl,
  signOutRedirectURL: appConfig.asgardeoLogoutCallbackUrl,
  scope: ['openid', 'profile'],
  disableTrySignInSilently: false,
  stsConfig: {
    client_id: appConfig.choreoClientId,
    orgHandle: appConfig.choreoOrganization,
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
  stsTokenEndpoint: appConfig.choreoTokenEndpoint,
  resourceServerURLs: [appConfig.choreoApiBaseUrl as string],
};
