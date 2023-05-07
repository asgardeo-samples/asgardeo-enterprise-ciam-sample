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

import {SecureRoute, useAuthContext} from '@asgardeo/auth-react';

/**
 * A wrapper around the `SecureRoute` component from `@asgardeo/auth-react`.
 *
 * @param props - Props for the component.
 * @returns A `SecureRoute` component.
 */
export const SecureRouteWithRedirect = ({component, path}) => {
  const {signIn, trySignInSilently} = useAuthContext();

  const callback = () => {
    trySignInSilently()
      .then(response => {
        if (!response) {
          signIn();
        }
      })
      .catch(() => {
        signIn();
      });
  };

  return <SecureRoute exact path={path} component={component} callback={callback} />;
};
