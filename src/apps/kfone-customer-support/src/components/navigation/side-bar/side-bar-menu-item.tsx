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

import clsx from 'clsx';
import {DetailedHTMLProps, LiHTMLAttributes, ReactElement, ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';

/**
 * Props for the Side bar menu item component.
 */
export interface SideBarMenuItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  /**
   * The menu item.
   */
  menuItem: {
    /**
     * The URL of the menu item.
     */
    url: string;
    /**
     * The name of the menu item.
     */
    name: string;
    /**
     * The icon of the menu item.
     */
    icon: ReactNode;
  };
}

/**
 * Side bar menu item.
 *
 * @param props - The props for the component.
 * @returns The side bar menu item component.
 */
export const SideBarMenuItem = ({className, menuItem}: SideBarMenuItemProps): ReactElement => {
  const classes: string = clsx('mt-0.5 w-full', className);

  const location: Partial<Location> = useLocation();

  return (
    <li className={classes}>
      <Link
        className={`p-3 bg-blue-500/13 text-md
            ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg
            px-4 transition-colors
                  ${
                    menuItem?.url === location?.pathname
                      ? 'bg-slate-200 font-semibold text-slate-700'
                      : 'font-base text-slate-700'
                  }`}
        to={menuItem?.url}
      >
        <div className="xl:p-2">{menuItem?.icon}</div>
        <span>{menuItem?.name}</span>
      </Link>
    </li>
  );
};
