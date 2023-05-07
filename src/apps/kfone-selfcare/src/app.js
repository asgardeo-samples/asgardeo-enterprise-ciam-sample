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

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NotFoundErrorPage, PrivacyPolicyPage} from './pages';
import {SecureRouteWithRedirect} from './components';
import {ExplorePage, PhoneVerificationPage, MyPlanPage} from './pages/customer-portal';

export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <SecureRouteWithRedirect exact path="/" component={MyPlanPage} />
        <SecureRouteWithRedirect exact path="/explore" component={ExplorePage} />
        <SecureRouteWithRedirect exact path="/verify" component={PhoneVerificationPage} />
        <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="*" component={NotFoundErrorPage} />
      </Switch>
    </Router>
  );
};
