chatbot-dialogflow
===================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a React based chatbot application running on WebSocket in server which interacts to [Dialogflow](https://dialogflow.cloud.google.com/) using their interactive cloud based REST APIs.

In order to use and configure dialogflow, please follow the steps mentioned here: https://github.com/googleapis/nodejs-dialogflow

Visit: https://cloud.google.com/sdk/install
1) You have to install sdk into your computer
2) That will enable you to run the code
3) Log in to your associated gmail account
4) Run `gcloud auth application-default login`
5) Edit package.json and replace "path-to-credentials.json" in server script `cross-env GOOGLE_APPLICATION_CREDENTIALS=\"path-to-credentials.json\" nodemon server.js` with the downloaded credentials json file after creating service account.
6) Create config folder and create dev.js and following details:

```
module.exports = {
    googleProjectID: '<<project_id_from_credentials_json>>',
    dialogFlowSessionID: '<<static_or_random_session_id>>',
    dialogFlowSessionLanguageCode: 'en-US',
    googleClientEmail: '<<email_id_from_credentials_json>>',
    googlePrivateKey: '<<private_key_from_credentials_json>>'
}
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn server`


Runs the server in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
