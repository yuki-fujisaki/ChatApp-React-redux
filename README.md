# SetUp

## Install Homebrew, Nodebrew ,Node.js

Install them, any method is fine.
run `node -v` and check if yours is more than v14.15.5.

## Install Material-UI

`npm i @material-ui/core`
`npm i @material-ui/icons`

## Firebase

### install firebase

`npm i firebase@8.10.0`

### Launch firebase project

Then Launch a project

### setup .env

Make `.env` in the directly below the your project
Fill out in those blank refering to SDK snipets in firebase setting, and make sure if radio button of configuration checked.
**caution:** Put PROJECT_ID in databaseURL

```.env
    REACT_APP_FIREBASE_APIKEY="〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇"
    REACT_APP_FIREBASE_DOMAIN="〇〇〇〇〇〇〇〇〇〇.firebaseapp.com"
    REACT_APP_FIREBASE_DATABASE="https://PROJECT_ID.firebaseio.com"
    REACT_APP_FIREBASE_PROJECT_ID="〇〇〇〇〇〇〇〇〇〇"
    REACT_APP_FIREBASE_STORAGE_BUCKET="〇〇〇〇〇〇〇〇.appspot.com"
    REACT_APP_FIREBASE_SENDER_ID="〇〇〇〇〇〇〇〇〇〇"
    REACT_APP_FIREBASE_APP_ID="〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇"
```

## Firebase Authentication

From firebase console in your project, launch Authentication and enable functionality of email and Google account

## Firebase Could FireStore

From firebase console in your project, launch CouldFireStore and enable functionality of Could FireStore

**caution:**
Change `allow read, write: if false;` into `allow read, write: if true;` in FireStore' rules tab.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
