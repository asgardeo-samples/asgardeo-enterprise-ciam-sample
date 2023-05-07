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
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa'],
        display: ['Noto Sans', 'system-ui', 'sans-serif'],
        body: ['Noto Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E60000',
          50: '#FF9F9F',
          100: '#FF8A8A',
          200: '#FF6161',
          300: '#FF3939',
          400: '#FF1010',
          500: '#E60000',
          600: '#AE0000',
          700: '#760000',
          800: '#3E0000',
          900: '#060000',
        },
        secondary: {
          DEFAULT: '#212738',
          50: '#B7BED4',
          100: '#AAB3CD',
          200: '#909CBE',
          300: '#7685AF',
          400: '#5E6F9F',
          500: '#4E5D85',
          600: '#3F4B6B',
          700: '#303952',
          800: '#212738',
          900: '#0C0E15',
        },
        light: '#f2f2f2',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
