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

import React from 'react';
import clsx from 'clsx';

/**
 * Primary button component.
 *
 * @param props - Props for the component.
 * @returns Primary button component.
 */
export const PrimaryButton = ({startIcon, children, endIcon, className, disabled, ...rest}) => {
  const classes = clsx(
    {
      'bg-slate-200 text-slate-400 rounded-lg px-4 py-2 cursor-wait': disabled,
      'transition ease-in-out duration-300 rounded-lg px-4 py-2 bg-primary text-light hover:bg-secondary-600 flex items-center':
        !disabled,
    },
    className,
  );

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {startIcon}
      <h5>{children}</h5>
      {endIcon}
    </button>
  );
};
