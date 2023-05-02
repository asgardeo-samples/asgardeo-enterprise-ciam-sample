## A B2C CIAM use case that handle account registration, login and account management for consumer facing digital services:

Kfone is a hypothetical telecommunications company that provides telecom and digital services and products to individuals.

They provide a self-service portal to customers who consume their products, so that from the portal their customers can monitor the usage of the subscribed package, manage the  subscription with addons, upgrades , view and manage bill payments, view loyalty points, benefits and redeem benefits, etc. Customers can access the self-service portal via web or mobile (a sample mobile frontend is not available at this point to showcase the scenario). 

Kfone's self-service portal provides self-registration capability to their customers with mobile number verification, or even they can bring their own social Identities (Google, Facebook) to login into the application.
{image of signup/login}

Once successfully registered, users can log in to the self-service portal.
The self-service portal will show the user’s active service package (Data, voice, SMS, etc.)
Other services and products provided by the company are also listed in the portal, so that the user can subscribe or buy. The self care portal, which is a single page application (SPA) is accessing various APIs related to the business case to provide these facilities. 
{image of self service portal}

Kfone, also provides a view for the user to manage his/her account, update profile, engage a 2FA option from next login, likewise.
{image of account management view}

### Solution Architecture using Asgardeo and Choreo:

Below is how Asgardeo is being used to handle account registration, login and account management use cases of Kfone, and to handle access for APIs defined and managed in Choreo

{solution diagram}

### End user experience story:

Let’s suppose, John Louise is a new customer who has purchased a new mobile subscription from Kfone. John accesses the Kfone website (https://kfone.life) and clicks the sign-in button to use the Kfone self-service portal. Then he will get the login screen where the signup option is available. This is served from Asgardeo.

John registers using his google account.
Once the registration is complete, John is prompted for his Kfone mobile number for verification. When John provides his number, an OTP will be sent to his phone via SMS. John needs to provide this OTP to continue with the application.
John has now successfully registered with Kfone, and he is now able to view his package and billing information.

Further, John can also access his account-related information and further secure his account using the MyAccount portal. This portal is provided by Asgardeo (White labeling my account portal to match with enterprise branding is yet to be supported in Asgardeo )
Navigate to the security tab
Using this portal, John can configure multi-factor authentication options like the authenticator app or FIDO-compliant security keys like Yubikey, Apple touch id, etc.
Navigate to consent
John can also view and revoke consents he has provided for the application.

### Setup Guide:

Refer [the setup guide](#setup-guide) in order to setup the usecase sample.

