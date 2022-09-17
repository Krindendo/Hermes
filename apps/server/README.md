## Hermes server application

The file structure has been copied from:

GeekyAnts / express-typescript

## Routes:

```javascript
//Auth
router.post("api/v1/accounts/register"); // {}
router.post("api/v1/accounts/get-login-options"); // {}
router.post("api/v1/accounts/login-with-email"); // {}
router.post("api/v1/accounts/logout"); // {}

router.post("api/v1/accounts/refresh-token"); // {}
router.post("api/v1/accounts/revoke-token"); // {}
router.post("api/v1/accounts/verify-email"); // {}
router.post("api/v1/accounts/validate-reset-token"); // {}
router.post("api/v1/accounts/forgot-password"); // {}
router.post("api/v1/accounts/reset-password"); // {}

router.get("api/v1/accounts/{id}"); // {}
router.put("api/v1/accounts/{id}"); // {}
router.delete("api/v1/accounts/{id}"); // {}

//Transfer Files

router.post("api/v1/upload"); // {}
```

## Auth Logic

After registering, the user will receive an email with a QR code. In that QR code, there will be an email and a long-term password. After scanning the QR code through the application, the application will remember the email and password. That QR code will be valid for a maximum of 5 minutes or until someone scans it. That QR code can be read only by this mobile application. QR code will be coded.

In the mobile application will be saved an email and a long-term password that will be generated every 15 days. The user will receive a notification when it is necessary to change the password. User can refuse to change password if he is not in the secure location. Changing the password can be frozen for as long as necessary, but the maximum is one month. With the mobile app, it is possible to request a short-term password that will be used to log in to the website. A short-term password will expire after 5 minutes. Opening the application will require entering a pattern or code.

- If the user loses his phone, he will be able to request a new QR code. Button is located in web application.
- If the user forgets the code for the mobile application, he will have to request a new QR code.
- It is possible to delete the account only if the user logs in via the web application.
