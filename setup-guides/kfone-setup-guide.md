# Kfone Setup Guide

## Pre-requisites

### Repository Setup

1. Clone the repository.

```bash
git clone https://github.com/asgardeo-samples/asgardeo-enterprise-ciam-sample.git
```

### Asgardeo Setup

1. Start by creating an account in Asgardeo. It is recommended to register with a Social Sign Up option such as Google as this will later help with logging into Choreo as well.
2. Register Google as an IDP in your organization by following the guide in [\[1\]](https://wso2.com/asgardeo/docs/guides/authentication/social-login/add-google-login/#register-asgardeo-on-google).
3. Create 2 SPAs as per the configurations given in the table below by referring to [\[2\]](https://wso2.com/asgardeo/docs/guides/applications/register-single-page-app/#get-the-client-id). Enable Google login for both applications [\[3\]](https://wso2.com/asgardeo/docs/guides/authentication/social-login/add-google-login/#enable-google-login). Note down the Client IDs of both applications.

    |       **Application Name**                 | **Authorized Redirect URLs**                           |
    | ---------------------- |--------------------------------------------------------|
    | Kfone Customer Support | [https://localhost:3000]([https//localhost:3000) |
    | Kfone Website          | [https://localhost:3001](https://localhost:3001) |
    | Kfone Selfcare          | [https://localhost:3002/my-kfone](https://localhost:3002/my-kfone) |

4. Register an OIDC standard based application [\[4\]](https://wso2.com/asgardeo/docs/guides/applications/register-standard-based-app/#register-an-application) called “Token App”. Enable only the Client Credentials grant for this application. This client will be used by the Choreo services to obtain access tokens. Note down the Client ID and secret of this application.

### Choreo Setup

1. Login to Choreo using the same credentials used for Asgardeo and switch to the relevant organization.
2. Create an application [\[5\]](https://wso2.com/choreo/docs/consume/manage-application/#step-1-create-an-application)
3. Generate application credentials [\[6\]](https://wso2.com/choreo/docs/consume/manage-application/#step-2-generate-keys). Make sure that “Token exchange”, “Refresh token” grant types are enabled, and that “Allow authentication without the client secret” option is enabled. Note down the application Client ID and Secret.


### Hubspot Setup

&lt;TODO>


### Email Client Setup

&lt;TODO>


### SMS Client Setup

&lt;TODO>


### MongoDB Setup

&lt;TODO>


## API Deployment

For the KFone application to function, it needs a set of APIs and Webhooks to process data and carry out the usecase functionalities. The source code of these services can be found in `src/choreo-apis` directory. Use the [Choreo guide](https://wso2.com/choreo/docs/get-started/quick-start-guide) as a reference to create, deploy, and subscribe these components for receiving external requests.
When deploying these components, use the configurations noted down during Pre-requisites setup as required.

For the B2C use cases, the following list of APIs and Webhooks needs to be deployed.
- Account verification API
- Asgardeo User Registration Webhook
- Kfone Customer 360 API
- Marketing Campaign API
- Usage Data API
- User Interactions API
- Webinar Registration API
- Whitepaper Download API

## Application Setup

### Setup Development Environment

* [🐙 Git](https://git-scm.com/downloads)

    * Description 🗒️ : Open source distributed version control system.
    * Download Link 🔗 : [https://git-scm.com/downloads](https://git-scm.com/downloads)

* [🌐 NodeJS](https://nodejs.org/en/download/)

    * Description 🗒️ : JavaScript runtime.
    * Version: LTS (Latest Stable Version)

        > **Warning**
        > This project requires atleast NodeJS LTS to work. If you have multiple NodeJS versions installed, make sure to use the LTS version.
        > You can check the version of NodeJS by running `node -v`.

    * Download Link 🔗 : [https://nodejs.org/en/download](https://nodejs.org/en/download)

### Website

1. Navigate to the `src/apps/kfone-website` directory.

    ```bash
    cd src/apps/kfone-website
    ```

2. Take a copy of the `.env.example` and set the values as per the description provided in each `.env` variable.

    ```bash
    cp .env.example .env
    ```

|  **Variable**                          |   **Description**                                                                                      |    **Example**                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| REACT_APP_ASGARDEO_CLIENT_ID           | Client ID of the Website application registered in Asgardeo                                            | `<uuid>`                                                |
| REACT_APP_ASGARDEO_SERVICES_URL            | Asgardeo API URL including the organization                                                            | [https://api.asgardeo.io/t/kfone](https://api.asgardeo.io/t/kfone)                     |
| REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL  | Post authentication authorized Redirect URL of the Customer Support application registered in Asgardeo | [https://localhost:3001](https://localhost:3001)                     |
| REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL | Post logout authorized Redirect URL of the Customer Support application registered in Asgardeo         | [https://localhost:3001](https://localhost:3001)                              |
| REACT_APP_CHOREO_API_BASE_URL            | Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API            | [https://prod.e1-us-east-azure.choreoapis.dev/hvwp](https://prod.e1-us-east-azure.choreoapis.dev/hvwp)   |
| REACT_APP_CHOREO_CLIENT_ID             | Client ID of the application registered in Choreo                                                      | `<uuid>`                                                |
| REACT_APP_CHOREO_PUBLIC_APP_CLIENT_ID             | Client ID of the public application registered in Choreo                                                      | `<uuid>`                                                |
| REACT_APP_CHOREO_PUBLIC_APP_CLIENT_SECRET             | Client secret of the public application registered in Choreo                                                      | `<uuid>`                                                |
| REACT_APP_CHOREO_ORGANIZATION          | The Asgardeo organization name                                                                         | kfone                                                    |
| REACT_APP_CHOREO_TOKEN_ENDPOINT          | Choreo STS token endpoint.                                                                         | [https://sts.choreo.dev/oauth2/token](https://sts.choreo.dev/oauth2/token)                                                    |
| REACT_APP_KFONE_SELFCARE_URL               | URL of the The URL of the Kfone Selfcare application.                                        | [https://localhost:3002/my-kfone](https://localhost:3002/my-kfone)               |

3. Install the necessary libraries and dependencies

    ```bash
    npm install
    ```

5. Run the application

    ```bash
    npm start
    ```

The application should be up and running in port 3001. Access the application by navigating to [https://localhost:3001](https://localhost:3001) in your browser.

### Selfcare

1. Navigate to the `src/apps/kfone-selfcare` directory.

    ```bash
    cd src/apps/kfone-selfcare
    ```

2. Take a copy of the `.env.example` and set the values as per the description provided in each `.env` variable.

    ```bash
    cp .env.example .env
    ```

|  **Variable**                          |   **Description**                                                                                      |    **Example**                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| REACT_APP_ASGARDEO_CLIENT_ID           | Client ID of the Website application registered in Asgardeo                                            |  `<uuid>`                                                |
| REACT_APP_ASGARDEO_SERVICES_URL            | Asgardeo API URL including the organization                                                            | [https://api.asgardeo.io/t/kfone](https://api.asgardeo.io/t/kfone)                     |
| REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL  | Post authentication authorized Redirect URL of the Customer Support application registered in Asgardeo | [https://localhost:3002/my-kfone](https://localhost:3002/my-kfone)                     |
| REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL | Post logout authorized Redirect URL of the Customer Support application registered in Asgardeo         | [https://localhost:3001](https://localhost:3001)                              |
| REACT_APP_CHOREO_API_BASE_URL            | Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API            | [https://prod.e1-us-east-azure.choreoapis.dev/hvwp](https://prod.e1-us-east-azure.choreoapis.dev/hvwp)   |
| REACT_APP_CHOREO_CLIENT_ID             | Client ID of the application registered in Choreo                                                      | `<uuid>`                                                |
| REACT_APP_CHOREO_ORGANIZATION          | The Asgardeo organization name                                                                         | kfone                                                    |
| REACT_APP_CHOREO_TOKEN_ENDPOINT          | Choreo STS token endpoint.                                                                         | [https://sts.choreo.dev/oauth2/token](https://sts.choreo.dev/oauth2/token)                                                    |
| REACT_APP_ASGARDEO_MY_ACCOUNT_URL               | URL of the My Account application of your Asgardeo organization                                        | [https://myaccount.asgardeo.io/t/kfone](https://myaccount.asgardeo.io/t/kfone)               |

3. Install the necessary libraries and dependencies

    ```bash
    npm install
    ```

5. Run the application

    ```bash
    npm start
    ```

The application should be up and running in port 3002. Access the application by navigating to [https://localhost:3002/my-kfone](https://localhost:3002/my-kfone) in your browser.

### Support Portal

1. Navigate to the `src/apps/kfone-customer-support` directory.

    ```bash
    cd src/apps/kfone-customer-support
    ```

2. Take a copy of the `.env.example` and set the values as per the description provided in each `.env` variable.

    ```bash
    cp .env.example .env
    ```

|  **Variable**                          |   **Description**                                                                                      |    **Example**                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| REACT_APP_ASGARDEO_CLIENT_ID           | Client ID of the Website application registered in Asgardeo                                            | `<uuid>`                                                |
| REACT_APP_ASGARDEO_SERVICES_URL            | Asgardeo API URL including the organization                                                            | [https://api.asgardeo.io/t/kfone](https://api.asgardeo.io/t/kfone)                     |
| REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL  | Post authentication authorized Redirect URL of the Customer Support application registered in Asgardeo | [https://localhost:3000](https://localhost:3000)                     |
| REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL | Post logout authorized Redirect URL of the Customer Support application registered in Asgardeo         | [https://localhost:3000](https://localhost:3000)                              |
| REACT_APP_CHOREO_API_BASE_URL            | Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API            | [https://prod.e1-us-east-azure.choreoapis.dev/hvwp](https://prod.e1-us-east-azure.choreoapis.dev/hvwp)   |
| REACT_APP_CHOREO_CLIENT_ID             | Client ID of the application registered in Choreo                                                      | `<uuid>`                                                |
| REACT_APP_CHOREO_ORGANIZATION          | The Asgardeo organization name                                                                         | kfone                                                    |
| REACT_APP_CHOREO_TOKEN_ENDPOINT          | Choreo STS token endpoint.                                                                         | [https://sts.choreo.dev/oauth2/token](https://sts.choreo.dev/oauth2/token)                                                    |

3. Install the necessary libraries and dependencies

    ```bash
    npm install
    ```

5. Run the application

    ```bash
    npm start
    ```

The application should be up and running in port 3000. Access the application by navigating to [https://localhost:3000](https://localhost:3000) in your browser.
