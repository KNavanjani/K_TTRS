# MERN - TRAIN TICKET RESERVATION APPLICATION

> Train ticket reservation application built with the MERN stack along with Redux for state management, Reactstrap and react-transition-group.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Installing Dependencies](#installing-dependencies)
- [App Info](#app-info)

## Folder Structure

```bash

### After creation this project should look like this:

TRAIN-TICKET-RESERVATION/
README.md
node_modules/
package.json
server.js
client/
-node_modules/
-public/
--favicon.ico
--index.html
--manifest.json
-src/
--App.css
--App.js
--App.test.js
--index.js
--serviceWorker.js
--setupProxy.js
--store.js
--actions/
---authActions.js
---creditCardPaymentActions.js
---errorActions.js
---govEmpActions.js
---itemActions.js
---mobileBillPaymentActions.js
---trainActions.js
---types.js
--components/
---auth/
----LoginModal.js
----LogoutModal.js
----RegisterModal.js
---AppNavbar.js
---AvailableTrainList.js
---BookASeatModal.js
---CreditCardPaymentModal.js
---HomePageContents.js
---ItemModal.js
---MobileBillPaymentModal.js
---TrainList.js
--reducers/
---authReducer.js
---creditCardPaymentReducer.js
---errorReducer.js
---govEmpReducer.js
---index.js
---itemReducer.js
---mobileBillPayment.js
---trainReducer.js
--images/
config/
-default.json
middleware/
-auth.js
models/
-creditCardPayment.js
-govEmps.js
-mobileBillPayment.js
-tickets.js
-trains.js
-User.js
routes/
-api/
--auth.js
--creditCardPayment.js
--govEmps.js
--mobileBillPayment.js
--tickets.js
--trains.js
--users.js

```

## Quick Start

Add your MONGO_URI to the default.json file. Set an env var for that and the jwtSecret on deployment

## Available Scripts

In the project directory, you can run:

```bash

### Run the client & server with concurrently
npm run dev

### Run the Express server only
npm run server

### Run the React client only
npm run client


# Server runs on http://localhost:8280 and client on http://localhost:3000
```

## Installing Dependencies

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

```

## App Info

### Author

HNavanjani

### Version

1.0.0
