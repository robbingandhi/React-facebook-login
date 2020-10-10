This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This Login page is built using bootstatp,reactstarp,react.js.

## 1️⃣ Keeping components small

Keeping components small is one of the React best practices that can work wonders.
 ⁣
## 2️⃣ Avoid component hell

When it comes to components, it is very easy to overdo it and write even the tiniest snippets of code as components.

There is no point in making every paragraph, span, or div a component.⁣

## 3️⃣ Reduce the use of stateful components

Stateless, or functional, components are generally better than stateful components when it comes to performance. The reason is that there is no state and no lifecycle method. In other words, less code to be executed and also transpiled.⁣

## 4️⃣ Use functional component with hooks instead of classes

👉No Class means no ‘this’⁣

👉Fewer lines = better performance⁣

👉Easier to read⁣

👉Easier to understand⁣

👉Easier to test⁣

## 5️⃣ Don't use props in initial state

##  Making user registration and login fast and easy is an important part of developing a new application. Not so long ago, registration forms were mandatory, and, often, users didn’t like them much. These forms required that users manually populate data, sometimes 10 or even more input fields, and not every user wanted to spend their precious time on that. Because of that, a lot of web applications lost potential users. Additionally we had login forms, in which users had to enter their usernames/emails and passwords. Often, users would forget their passwords and wouldn’t bother going through the process of password recovery, because they would find it tedious. So again, our new and shiny application would lose its users.

## Authentication Workflow
When users want to register for our application, they will click the “Signup with Facebook”. When the button is clicked, our client application will request an access token from Facebook. Then, the user will be presented with a dialog to allow the application to access some of their Facebook data. If the user gives their permission, our client application will get the Facebook access token in response. At this moment we can access user data from the client application, but an account is not yet created at our backend. In order to create new user account, our client application sends a request to our backend with the Facebook access token. The backend needs to verify the Facebook access token, so it is sends a verification request directly to Facebook. If the Facebook token is valid, the Facebook server will send user data back to our application. Upon receiving this data, the backend server has verified that the user credentials are valid and will create a user profile in our application with data received from Facebook. After that, the backend needs to create a JSON Web Token (JWT) which will be used to identify the user. This token is then sent in a response to the client application. The client application will receive JWT and save it for further use.

## Creating a New Facebook Application
In order to make it possible for users to log into our application with their Facebook accounts, we need to create an application on the Facebook developers page. This is a necessary step for getting an application ID and an application secret code required for all future communication between our application and Facebook. 
After we have created our application, we need to add some application domains. This can be done on the application page, via the settings menu item. In the App Domains field, just for development purposes, we will add localhost. When our application is ready to be released, we will need to replace this with the real application domain.

 ### In the project directory, you can run:

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
