This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
###Components
----------

**src\App.js**

### 1. App

Supply chain management based on blockchain website


-----
**src\InviewMonitor.js**

### 1. InviewMonitor




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
classNameInView|string|no||
classNameNotInView|string|no|&lt;See the source code&gt;|
classNameAboveView|string|no||
classNameNotAboveView|string|no||
toggleClassNameOnInView|bool|no||
childPropsInView|object|no||
childPropsNotInView|object|no|&lt;See the source code&gt;|
toggleChildPropsOnInView|bool|no||
onInView|func|no||
onNotInView|func|no||
repeatOnInView|bool|no||
useInviewMonitor|func|no|&lt;See the source code&gt;|
intoViewMargin|string|no|&lt;See the source code&gt;|
-----
**src\components\Titles\webTitle.js**

### 1. webTitle




-----
**src\components\footerComponent\footer.js**

### 1. FooterPage

homepage footer


-----
**src\components\forms\BuyToken.js**

### 1. Buy

The page for buying tokens - not active yet


-----
**src\components\forms\loginForm.js**

### 1. LoginForm

login form for users


Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
submit|func|yes||
-----
**src\components\headerComponent\header.js**

### 1. Header

website's header


-----
**src\components\pages\MyAssets.js**

### 1. AssetTab

Shows the assets' information


-----
**src\components\pages\MyPage.js**

### 1. My

redirects user to his/her homepage


-----
**src\components\pages\Transfer.js**

### 1. Transfer

transfer tokens


-----
**src\components\pages\admin.js**

### 1. AdminPage

Admin page for managing users and assets


-----
**src\components\pages\assetTransfer.js**

### 1. Asset

transfer assets to others


-----
**src\components\pages\contact.js**

### 1. ContactPage

contact information


-----
**src\components\pages\homePage.js**

### 1. HomePage

Website homepage


-----
**src\components\pages\loginPage.js**

### 1. Login

login page



Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
submit|func|yes||
-----
**src\components\pages\merchant.js**

### 1. Merchant

Homepage for merchants 


-----
**src\components\pages\normalUser.js**

### 1. User

HomePage for the users who do not have an account


-----
**src\components\pages\products.js**

### 1. Products

our products


-----
**src\components\pages\signUp.js**

### 1. Register

Registration page


Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
submit|func|yes||
-----
**src\components\pages\signedInUser.js**

### 1. User

Homepage for users


-----
**src\components\panels\AdminPanel.js**

### 1. AdminPanel

The side panel for the admin page


-----
**src\components\panels\AssetRequestTable.js**

### 1. AssetReqTab

The form for requesting assets


-----
**src\components\panels\MerchantPanel.js**

### 1. loginPanel

The panel which redirects users to the login page


-----
**src\components\panels\customerPanel.js**

### 1. CustomerPanel

The panel which redirects to the homepage for unregistered users


-----
**src\components\panels\infoCard.js**

### 1. InfoCard

Warning card for unregistered users


-----
**src\components\panels\sidebarSignedin.js**

### 1. loginPanel


Side bar for the users homepage

-----
**src\components\panels\table.js**

### 1. User

users information panel for the admin page



-----
**src\components\pics\wallpaper.js**

### 1. Wallpaper

Homepage wallpaper


-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>

