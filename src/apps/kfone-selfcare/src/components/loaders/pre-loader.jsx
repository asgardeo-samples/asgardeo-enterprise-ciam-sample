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
import {GiCrossedAirFlows} from 'react-icons/gi';
import clsx from 'clsx';

/**
 * A pre loader component for the app.
 *
 * @param props - Props injected to the component.
 * @returns Pre Loader component.
 */
export const PreLoader = ({className, ...rest}) => {
  const classes = clsx('animate-pulse flex w-screen h-screen justify-center items-center', className);

  return (
    <div className={classes} {...rest}>
      <h1 className="flex items-center text-primary text-2xl font-title">
        <GiCrossedAirFlows size={30} />
        <div className="ml-2">Kfone</div>
      </h1>
    </div>
  );
};
