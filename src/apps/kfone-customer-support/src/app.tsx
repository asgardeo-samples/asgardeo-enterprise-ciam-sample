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

import {RouterProvider} from 'react-router-dom';
import {BasicUserInfo, useAuthContext} from '@asgardeo/auth-react';
import {router} from './router/router';
import './app.css';
import {DetailedHTMLProps, FC, HTMLAttributes, ReactElement, useEffect} from 'react';
import {PreLoader} from './components';

/**
 * The props for the App component.
 */
export type AppProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * App component.
 *
 * @param props - Props for the component.
 * @return App component.
 */
export const App: FC<AppProps> = (): ReactElement => {
  const {state, trySignInSilently, signIn} = useAuthContext();
  const {isAuthenticated, isLoading} = state;

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      return;
    }

    trySignInSilently()
      .then((response: boolean | BasicUserInfo) => {
        if (!response) {
          signIn();
        }
      })
      .catch(() => {
        signIn();
      });
  }, [isAuthenticated, isLoading, signIn, trySignInSilently]);

  if (isLoading || !isAuthenticated) {
    return <PreLoader />;
  }

  return <RouterProvider router={router} />;
};
