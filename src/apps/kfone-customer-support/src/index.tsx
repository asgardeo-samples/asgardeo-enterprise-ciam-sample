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

import React, {DetailedHTMLProps, FC, HTMLAttributes, ReactElement} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {AuthProvider} from '@asgardeo/auth-react';
import {TokenExchangePlugin} from '@asgardeo/token-exchange-plugin';
import {MdErrorOutline} from 'react-icons/md';
import {authConfig} from './configs';
import {App} from './app';

/**
 * Root component props interface.
 */
export type RootProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Render root component with configs.
 *
 * @returns Root element with configs.
 */
export const Root: FC<RootProps> = (): ReactElement => {
  if (
    !(
      authConfig.signInRedirectURL &&
      authConfig.baseUrl &&
      authConfig.clientID &&
      authConfig.resourceServerURLs &&
      authConfig.stsTokenEndpoint &&
      authConfig.stsConfig?.client_id &&
      authConfig.stsConfig?.orgHandle
    )
  ) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="w-[400px] flex flex-col items-center">
          <MdErrorOutline color="red" size={36} />
          <span className="text-lg my-4 text-center">
            One or more values are missing from <code>.env</code> file. Please check and restart the app.
          </span>
          <br />
          <a
            href={
              'https://github.com/wso2/devrel/blob/Kubecon-demos/kfone-customer-support/README.md' +
              '#lets-setup-the-environment-variables'
            }
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 underline text-sm"
          >
            Learn more
          </a>
        </p>
      </div>
    );
  }

  return (
    <AuthProvider config={authConfig} plugin={TokenExchangePlugin.getInstance()}>
      <App />
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
