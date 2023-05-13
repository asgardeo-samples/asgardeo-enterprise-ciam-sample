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

export const appConfig = {
  asgardeoClientId: process.env.REACT_APP_ASGARDEO_CLIENT_ID ?? '',
  asgardeoServicesUrl: process.env.REACT_APP_ASGARDEO_SERVICES_URL ?? '',
  asgardeoLoginCallbackUrl: process.env.REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL ?? '',
  asgardeoLogoutCallbackUrl: process.env.REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL ?? '',
  choreoApiBaseUrl: process.env.REACT_APP_CHOREO_API_BASE_URL,
  choreoClientId: process.env.REACT_APP_CHOREO_CLIENT_ID ?? '',
  choreoPublicAppClientId: process.env.REACT_APP_CHOREO_PUBLIC_APP_CLIENT_ID,
  choreoPublicAppClientSecret: process.env.REACT_APP_CHOREO_PUBLIC_APP_CLIENT_SECRET,
  choreoOrganization: process.env.REACT_APP_CHOREO_ORGANIZATION ?? '',
  choreoTokenEndpoint: process.env.REACT_APP_CHOREO_TOKEN_ENDPOINT,
  endpoints: {
    stsTokenEndpoint: process.env.REACT_APP_CHOREO_TOKEN_ENDPOINT,
  },
  selfcareAppUrl: process.env.REACT_APP_KFONE_SELFCARE_URL,
};
