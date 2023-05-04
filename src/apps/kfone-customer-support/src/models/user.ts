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

import {PastBillingCycle} from './billing';

/**
 * Represents a user with their interaction statistics.
 */
export interface User {
  /**
   * The email of the user.
   */
  email: string;
  /**
   * The number of visits the user made using their smartphone.
   */
  smartphoneVisits: number;
  /**
   * The number of visits the user made using their IoT devices.
   */
  iotDevicesVisits: number;
  /**
   * The number of visits the user made to mobile subscription related pages.
   */
  mobileSubscriptionVisits: number;
  /**
   * The number of visits the user made to TV subscription related pages.
   */
  tvSubscriptionVisits: number;
  /**
   * The interaction score of the user.
   */
  interactionScore: number;
}

/**
 * An interface representing user information.
 */
export interface UserInfo {
  /**
   * Personal details of the user.
   */
  personalDetails: {
    emails: string[];
    meta: {
      created: string;
      location: string;
      lastModified: string;
      resourceType: string;
    };
    roles: {
      display: string;
      value: string;
      $ref: string;
    }[];
    name: {
      givenName: string;
      familyName: string;
    };
    id: string;
    userName: string;
    'urn:scim:wso2:schema': {
      country: string;
      preferredChannel: string;
      userSource: string;
      mobileNumberVerified: string;
      idpType: string;
      dateOfBirth: string;
      userAccountType: string;
    };
    phoneNumbers: [
      {
        type: string;
        value: string;
      },
    ];
  };
  /**
   * Subscription usage information of the user.
   */
  subscriptionUsage: {
    userId: string;
    callMinutesUsed: number;
    mobileDataUsed: number;
    subscription: {
      id: number;
      connectionType: string;
      freeCallMinutes: number;
      freeDataGB: number;
    };
    usage: [
      {
        month: number;
        year: number;
        allocatedMinutesUsage: number;
        allocatedDataUsage: number;
        additionalPurchases: [
          {
            additionalData: number;
            additionalMinutes: number;
          },
        ];
      },
    ];
  };
  /**
   * Billing data of the user.
   */
  billingData: {
    currentBillingCycle: {
      year: number;
      month: string;
      amount: number;
      due: string;
      status: string;
    };
    pastBillingCycles: PastBillingCycle[];
  };
  /**
   * Connection status of the user.
   */
  connectionStatus: {
    status: string;
    reason?: string;
  };
}
