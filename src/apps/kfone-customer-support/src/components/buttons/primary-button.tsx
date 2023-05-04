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

import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactElement} from 'react';
import clsx from 'clsx';

/**
 * The props for the Primary Button component.
 */
export type PrimaryButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

/**
 * A primary button component.
 *
 * @param props - The props for the component.
 * @returns The primary button component.
 */
export const PrimaryButton: FC<PrimaryButtonProps> = ({
  className,
  disabled,
  ...rest
}: PrimaryButtonProps): ReactElement => {
  const classes: string = clsx(
    'flex text-white right-2.5 bottom-2.5 bg-primary',
    'focus:ring-4 focus:outline-none focus:ring-blue-300',
    'font-medium rounded-lg text-sm px-4 py-2 opacity-100',
    {
      'opacity-50': disabled,
    },
    className,
  );

  return <button className={classes} disabled={disabled} {...rest} />;
};
