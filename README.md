# gueno-api

# main features:

-   express
-   axios: axios has good documentation, is easy to use, has a default http error handler, and is also very stable.

# running in dev mode

you need to install and run the following:

-   npm install
-   npm run start:dev

# Test Endpoints (This documentation could be in swagger)

-   gueno-api/emails
-   GET localhost:3007/api/v1/clients/emails/tomas@gueno.com?dateStart=11-09-2022&dateEnd=11-11-2022

-   gueno-api/login
-   POST localhost:3007/api/v1/login
    ´´´
    body:
    {
    "email": "tomas@gueno.com",
    "password": "#Oso2022."
    }
    ´´´
-   gueno-api/createClient
-   POST localhost:3007/api/v1/clients/create

´´´
body:
{
"email": "tomas@gueno.com",
"service": "Jc4",
"subservices": ["List","strings"],
"autoRenewal": false,
"exceedLimit": false,
"limit": 10
}
´´´

# lint project

To improve code readability and reduce bad practices, run the following commands

-   npm run lint
-   npm run prettier-format

# Pending Task

Access_token: the services work fine without the access_token, I thought of two things, the first is the security of saving the access_toker on the server and the second is the expiration time, the latter being valid, the client must call /login every time he wants to consult a Gueno service .
