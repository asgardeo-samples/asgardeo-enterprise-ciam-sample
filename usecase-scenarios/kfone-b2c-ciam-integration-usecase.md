## B2C CIAM use case that handles customer journey time orchestration and provides a unified view:

Kfone is a hypothetical telecommunications company that provides telecom and digital services and products to individuals.

Kfone offers a wide range of digital products and services, including mobile phones, broadband devices, smart devices, as well as satellite TV. 
Suppose Kfone wants to leverage user interactions in various business frontends, like in website, in the self service portal, etc, and identify leads, upsell opportunities and execute more personalized marketing campaigns based on user interactions.
Below are a few such reference use cases.
1. As a prospect interacts with the Kfone website, surfing products, downloading material by providing an email, accessing video content by giving an email, managing such lead identities in a CRM/marketing system so that promotional content can be sent. Then, at a point where the prospect really registers and buys a product or service, convert the respective guest account to a registered identity in the IAM to grant access, with all prior knowledge. (Reference implementation for this use case is not available as of today)
2. A customer who has obtained services and products from Kfone surf on additional plans, products from the Kfone self-service portal. Kfone wants to leverage such user interactions in the self service portal to identify upsell opportunities and to send promotional mails to the user. For example, If a user browses through mobile devices, Kfone will send promotional material to the users related to the next iPhone launch. Underlying Kfone is using Hubspot to track lead/customer interactions and to manage promotions and want to provision the customer account in Hubspot as the user register, and update based on interactions on the user.
{image of a promotional mail}
3. Based on the historical service usage data of the user, Kfone wants to suggest the most suitable packages for the user. Users can switch to the suggested package and become cost-effective while the company benefits from loyal customers. Underlying data from different business services needs to be aggregated and orchestrated, so that the user can view suggestions from the self-service portal.
{image of a suggestion}
4. The customer expects to buy a package suggested, where Kfone wants to enforce the user to have a higher level assurance of his/her identity, which triggers an OTP for the mobile number registered before processing the payments (Reference implementation for this use case is not available as of today)
Kfone wants to provide a holistic view of their customers to help center agents, so they can troubleshoot and help their customers efficiently.
{image of a customer portal view}

### Solution Architecture using Asgardeo and Choreo:
Below is how Asgardeo and Choreo are being used to integrate business systems and APIs in order to achieve the use cases listed above.

{solution diagram}

### End user experience story:


- Receiving promotional emails:
    <p>
    Suppose Michael has been interested in buying a new phone and he keeps browsing several iphone specs from the kfone portal. Based on this interaction Kfone will send promotional material to Michael on the next iPhone launch.
    </p>

- Receiving package suggestions:
    <p>
    Suppose Sam is a loyal Kfone customer and has been using Kfone broadband subscriptions for over two years. His data usage has increased in the last three months than his entitled limit for the current subscription. Thus, he had to pay a higher rate for the additional data he purchased. Kfone will analyze this data via Choreo and provide a more cost-effective subscription option. When Sam logs into the self-service portal, he will be notified regarding the recommended package based on his current usage pattern, and he can switch to the suggested package and become cost-effective while the company benefits from loyal customers.
    </p>

- View customer 360:
    <p>
    ​Suppose Eric has an issue with his broadband connection at home. It had been working well and had suddenly stopped working. He called the Kfone hotline and connected with a customer service agent. David, the Kfone customer service agent, can log in to the support portal via Asgardeo and get a comprehensive view of the Eric when he enters the customer's mobile number. The support portal will pull all the data from Asgardeo, marketing systems, and usage and billing data via Choreo APIs. David can see that John’s credit limit has been exceeded, and he can inform John to settle the bill to unblock the connection. The support portal will help them provide a better and more efficient service to the customer, thereby improving customer satisfaction.
    </p>

### Setup Guide:

Refer [the setup guide](#setup-guide) in order to setup the usecase sample.


