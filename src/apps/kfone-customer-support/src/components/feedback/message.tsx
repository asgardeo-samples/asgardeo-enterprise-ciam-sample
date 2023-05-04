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

import clsx from 'clsx';
import {DetailedHTMLProps, FC, LiHTMLAttributes, ReactElement, useMemo} from 'react';

/**
 * Props for the Message component.
 */
export interface MessageProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  /**
   * The username to be displayed.
   */
  username: string;
  /**
   * The message to be displayed.
   */
  message: string;
}

/**
 * A component to display a message.
 *
 * @param props - The props for the component.
 * @returns The message button component.
 */
export const Message: FC<MessageProps> = ({className, username, message}: MessageProps): ReactElement => {
  const classes: string = clsx('flex items-center my-6 space-x-2', className);

  const initials: string | null = useMemo<string | null>(() => {
    const fullName = username?.split(' ');

    if (fullName !== undefined && fullName?.length > 0) {
      return `${fullName?.shift()?.charAt(0)}${fullName?.pop()?.charAt(0)?.toUpperCase()}`;
    }

    return null;
  }, [username]);

  return (
    <li className={classes}>
      <a href="#" className="block relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 64 64" version="1.1">
          <circle fill="#E60000" width="64" height="64" cx="32" cy="32" r="32" />
          <text
            x="50%"
            y="50%"
            style={{
              color: '#ffffff',
              lineHeight: '1',
            }}
            alignment-baseline="middle"
            text-anchor="middle"
            font-size="26"
            font-weight="400"
            dy=".1em"
            dominant-baseline="middle"
            fill="#ffffff"
          >
            {initials}
          </text>
        </svg>
      </a>
      <div className="flex flex-col">
        <span className="text-sm text-gray-900 font-semibold ml-2">{username}</span>
        <span className="text-sm text-gray-400 ml-2">{message}</span>
      </div>
    </li>
  );
};
