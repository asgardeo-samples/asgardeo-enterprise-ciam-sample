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

import {useAuthContext} from '@asgardeo/auth-react';
import {DetailedHTMLProps, FC, HTMLAttributes, ReactElement} from 'react';
import {DashboardLayout} from '../layouts';
import {PreLoader} from '../components';

const cases = [
  {
    id: '#CASE01',
    description: 'Move sim card to an e-sim',
    isInProgress: true,
    priority: 'MEDIUM',
    dueDate: '22 NOV',
  },
  {
    id: '#CASE02',
    description: 'Support unsubscribe on VAS',
    isInProgress: true,
    priority: 'MEDIUM',
    dueDate: '23 NOV',
  },
  {
    id: '#CASE03',
    description: 'Loyalty points are not transferable',
    isInProgress: true,
    priority: 'MEDIUM',
    dueDate: '15 NOV',
  },
  {
    id: '#CASE04',
    description: 'WIFI Router is not switched on',
    isInProgress: false,
    priority: 'MEDIUM',
    dueDate: '20 OCT',
  },
  {
    id: '#CASE05',
    description: 'Internet issue when a power outage occurs',
    isInProgress: false,
    priority: 'HIGH',
    dueDate: '20 OCT',
  },
];

/**
 * The props for the Case Page component.
 */
export type CasesPageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Case Page component.
 *
 * @returns The Case Page component.
 */
export const CasesPage: FC<CasesPageProps> = ({className}: CasesPageProps): ReactElement => {
  const {state} = useAuthContext();

  return (
    <>
      {state.isAuthenticated && !state.isLoading ? (
        <DashboardLayout>
          <div className="flex flex-wrap">
            {cases.map(item => (
              <div key={item?.id} className="w-full md:w-1/2 lg:w-1/4 pr-4 pb-4">
                <div className="shadow-lg rounded-lg p-4 bg-white w-full">
                  <div className="flex justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <span className="font-bold text-md text-black ml-2">{item?.id}</span>
                        <span className="text-sm text-gray-500 ml-2">{item?.description}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4 space-x-12">
                    {item?.isInProgress ? (
                      <span
                        className={
                          'px-2 py-1 flex items-center font-semibold text-xs rounded-lg text-gray-500 bg-gray-200'
                        }
                      >
                        PROGRESS
                      </span>
                    ) : (
                      <span
                        className={
                          'px-2 py-1 flex items-center font-semibold text-xs rounded-lg text-green-700 bg-green-50'
                        }
                      >
                        COMPLETED
                      </span>
                    )}

                    {item?.priority === 'MEDIUM' ? (
                      <span
                        className={
                          'px-2 py-1 flex items-center font-semibold text-xs rounded-lg ' +
                          'text-green-600 border border-green-600 bg-white'
                        }
                      >
                        MEDIUM
                      </span>
                    ) : (
                      <span
                        className={
                          'px-2 py-1 flex items-center font-semibold text-xs rounded-lg ' +
                          'text-red-400 border border-red-400  bg-white'
                        }
                      >
                        HIGH
                      </span>
                    )}
                  </div>
                  <span
                    className={
                      'px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-lg ' +
                      'font-semibold text-yellow-500 bg-yellow-100'
                    }
                  >
                    DUE DATE : {item?.dueDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardLayout>
      ) : (
        <PreLoader />
      )}
    </>
  );
};
