# Kfone Setup Guide


## Pre-requisites


### Asgardeo Setup

1. Start by creating an account in Asgardeo. It is recommended to register with a Social Sign Up option such as Google as this will later help with logging into Choreo as well.
2. Register Google as an IDP in your organization by following the guide in [\[1\]](https://wso2.com/asgardeo/docs/guides/authentication/social-login/add-google-login/#register-asgardeo-on-google).
3. Create 2 SPAs as per the configurations given in the table below by referring to [\[2\]](https://wso2.com/asgardeo/docs/guides/applications/register-single-page-app/#get-the-client-id). Enable Google login for both applications [\[3\]](https://wso2.com/asgardeo/docs/guides/authentication/social-login/add-google-login/#enable-google-login). Note down the Client IDs of both applications.

|       **Application Name**                 | **Authorized Redirect URLs**                           |
| ---------------------- |--------------------------------------------------------|
| Kfone Customer Support | http//localhost:3000                              |
| Kfone Website          | http://localhost:3001, http://localhost:3001/my-kfone |

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


### Pre-requisites

Make sure a Node.js LTS distribution is installed from <https://nodejs.org/en/download/>. 

Verify if you have the LTS version installed using the following commands.

```bash
node -v
npm -v
```

### Website

1. Clone this [repo](https://github.com/asgardeo-samples/asgardeo-enterprise-ciam-sample/)

```
git clone https://github.com/asgardeo-samples/asgardeo-enterprise-ciam-sample/
```

2. Navigate to the `src/apps/kfone-website` directory.

```
cd src/apps/kfone-website
```

3. Install the necessary libraries and dependencies
```
npm install
```

4. Configure environment variables. Get a copy of the \`.env.example\` file and rename it as \`.env\`. Then change the below values, as per the description provided in each .env variable.

```
NODE_ENV=development
HTTPS=true
PORT=3001
REACT_APP_ASGARDEO_CLIENT_ID=&lt;Client ID of the Website application registered in Asgardeo>
REACT_APP_ASGARDEO_BASE_URL=<https://api.asgardeo.io/t/>&lt;Your organization>
REACT_APP_BASE_API_ENDPOINT=&lt;Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API>
REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL=&lt;Post authentication authorized Redirect URL of the Customer Support application registered in Asgardeo>
REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL=&lt;Post logout authorized Redirect URL of the Customer Support application registered in Asgardeo>
REACT_APP_CHOREO_CLIENT_ID=&lt;Client ID of the application registered in Choreo>
REACT_APP_CHOREO_ORGANIZATION=&lt;Your organization>
REACT_APP_CHOREO_AUTH_TOKEN=&lt;Base64 encoded value of &lt;Choreo app client ID:Choreo app client secret>>
REACT_APP_MY_ACCOUNT_URL=<https://myaccount.asgardeo.io/t/>&lt;Your organization>
```

|  **Variable**                          |   **Description**                                                                                      |    **Example**                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| REACT_APP_ASGARDEO_CLIENT_ID           | Client ID of the Website application registered in Asgardeo                                            | &lt;uuid>                                                |
| REACT_APP_ASGARDEO_LOGIN_CALLBACK_URL  | Post authentication authorized Redirect URL of the Customer Support application registered in Asgardeo | https&#x3A;//localhost:3001/my-kfone                     |
| REACT_APP_ASGARDEO_LOGOUT_CALLBACK_URL | Post logout authorized Redirect URL of the Customer Support application registered in Asgardeo         | https&#x3A;//localhost:3001                              |
| REACT_APP_ASGARDEO_BASE_URL            | Asgardeo API URL including the organization                                                            | https&#x3A;//api.asgardeo.io/t/kfone                     |
| REACT_APP_CHOREO_CLIENT_ID             | Client ID of the application registered in Choreo                                                      | &lt;uuid>                                                |
| REACT_APP_BASE_API_ENDPOINT            | Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API            | https&#x3A;//prod.e1-us-east-azure.choreoapis.dev/hvwp   |
| REACT_APP_CHOREO_ORGANIZATION          | The Asgardeo organization name                                                                         | kfone                                                    |
| REACT_APP_MY_ACCOUNT_URL               | URL of the My Account application of your Asgardeo organization                                        | https&#x3A;//myaccount.asgardeo.io/t/kfone               |
| REACT_APP_CHOREO_AUTH_TOKEN            | This is a basic authorization header made using the Choreo application client credentials.             | Base64 encode -> &lt;Choreo clientID:ChoreoClientSecret> |

5. Run the application

```
npm start
```

The application should be up and running in port 3001. Access the application by navigating to <http://localhost:3001> in your browser.




### Support Portal

1. Clone this [repo](https://github.com/asgardeo-samples/asgardeo-enterprise-ciam-sample/)

```
git clone https://github.com/asgardeo-samples/asgardeo-enterprise-ciam-sample/
```

2. Navigate to the `src/apps/kfone-customer-support` directory.

```
cd src/apps/kfone-customer-support
```

3. Install the necessary libraries and dependencies
```
npm install
```

4. Configure environment variables. Get a copy of the \`.env.example\` file and rename it as \`.env\`. Then change the below values, as per the description provided in each .env variable.

```
NODE_ENV=development
HTTPS=true
PORT=3000
REACT_APP_ASGARDEO_CLIENT_ID=&lt;Client ID of the Customer Support application registered in Asgardeo>
REACT_APP_ASGARDEO_BASE_URL=<https://api.asgardeo.io/t/>&lt;Your organization>
REACT_APP_ASGARDEO_CALLBACK_URL=&lt;Authorized Redirect URL of the Customer Support application registered in Asgardeo>
REACT_APP_CHOREO_CLIENT_ID=&lt;Client ID of the application registered in Choreo>
REACT_APP_BASE_API_ENDPOINT=&lt;Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API>
REACT_APP_CHOREO_ORGANIZATION=&lt;Your organization>
REACT_APP_STS_TOKEN_ENDPOINT=https&#x3A;//sts.choreo.dev/oauth2/token
```

| **Variable**                                | **Description**                                                                        |   **Example**                                                     |
| ------------------------------- |--------------------------------------------------------------------------------------------| ------------------------------------------------------ |
| REACT_APP_ASGARDEO_CLIENT_ID    | Client ID of the Customer Support application registered in Asgardeo                       | &lt;uuid>                                              |
| REACT_APP_ASGARDEO_BASE_URL     | Asgardeo API URL including the organization                                                | https&#x3A;//api.asgardeo.io/t/kfone                   |
| REACT_APP_ASGARDEO_CALLBACK_URL | Authorized Redirect URL of the Customer Support application registered in Asgardeo         | http&#x3A;//localhost:3000                             |
| REACT_APP_CHOREO_CLIENT_ID      | Client ID of the application registered in Choreo                                          | &lt;uuid>                                              |
| REACT_APP_BASE_API_ENDPOINT     | Base path of Choreo APIs. The portion of any API URL upto and excluding the name of the API | https&#x3A;//prod.e1-us-east-azure.choreoapis.dev/hvwp |
| REACT_APP_CHOREO_ORGANIZATION   | The Asgardeo organization name                                                             | kfone                                                  |
| REACT_APP_STS_TOKEN_ENDPOINT | Token endpoint in Choreo                                                                   | https&#x3A;//sts.choreo.dev/oauth2/token               |



6. Run the application

```
npm start
```

The application should be up and running in port 3000. Access the application by navigating to <http://localhost:3000> in your browser.
