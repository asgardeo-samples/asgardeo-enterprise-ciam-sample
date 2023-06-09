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

import React, {useEffect} from 'react';
import {useAuthContext} from '@asgardeo/auth-react';
import {BusinessPlansSection, DealsSection, EntertainmentSection} from '../components';
import {HeroSection, QuickActionsSection, UnlimitedPlansSection} from '../components';
import {GeneralLayout} from '../layouts';
import {appConfig} from '../configs';

export const HomePage = () => {
  const {state, trySignInSilently, signIn} = useAuthContext();
  const {isAuthenticated, isLoading} = state;

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      return;
    }

    trySignInSilently()
      .then(response => {
        if (!response) {
          signIn();
        }
      })
      .catch(() => {
        signIn();
      });
  }, [isAuthenticated, isLoading, signIn, trySignInSilently]);

  const handleLogin = () => {
    window.open(appConfig.selfcareAppUrl, '_self');
  };

  return (
    <GeneralLayout handleLogin={handleLogin} state={state}>
      <HeroSection />
      <QuickActionsSection />
      <DealsSection />
      <UnlimitedPlansSection />
      <BusinessPlansSection />
      <EntertainmentSection />
    </GeneralLayout>
  );
};
