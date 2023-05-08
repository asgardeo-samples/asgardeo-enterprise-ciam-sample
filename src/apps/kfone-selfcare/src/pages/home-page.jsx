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

import React, {useEffect, useRef} from 'react';
import {useAuthContext} from '@asgardeo/auth-react';
import {useLocation, useHistory} from 'react-router-dom';
import {BusinessPlansSection, DealsSection, EntertainmentSection} from '../components';
import {HeroSection, QuickActionsSection, UnlimitedPlansSection} from '../components';
import {GeneralLayout} from '../layouts';

export const HomePage = () => {
  const {state, signIn, getDecodedIDPIDToken, trySignInSilently} = useAuthContext();
  const query = new URLSearchParams(useLocation().search);
  const reRenderCheckRef = useRef(false);
  const history = useHistory();

  useEffect(() => {
    reRenderCheckRef.current = true;

    (async () => {
      try {
        const now = Math.floor(Date.now() / 1000);
        const decodedIDtoken = await getDecodedIDPIDToken();
        const expiration = decodedIDtoken?.exp;
        if (now < expiration && !query.get('code')) {
          await signIn();
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleLogin = () => {
    if (state?.isAuthenticated) {
      history.push('/');
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
