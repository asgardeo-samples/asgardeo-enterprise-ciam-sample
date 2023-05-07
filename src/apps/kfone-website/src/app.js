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
import {BusinessPage, HomePage, NotFoundErrorPage, PrivacyPolicyPage, WebinarRegistrationPage} from './pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/enterprise" component={BusinessPage} />
        <Route exact path="/enterprise/webinar" component={WebinarRegistrationPage} />
        <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="*" component={NotFoundErrorPage} />
      </Switch>
    </Router>
  );
};
