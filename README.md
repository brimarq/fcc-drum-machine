# Front End Libraries Projects - Build a Drum Machine

## [Working CodePen Demo](https://codepen.io/brimarq/full/LBOOab)

- Objective: Build a CodePen app that is functionally similar to this: [https://codepen.io/freeCodeCamp/full/MJyNMd](https://codepen.io/freeCodeCamp/full/MJyNMd).

- Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

- You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

- User Stories:

  - [x] #1: I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

  - [x] #2: Within `#drum-machine` I can see an element with a corresponding `id="display"`.

  - [x] #3: Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique `id` that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.

  - [x] #4: Within each `.drum-pad`, there should be an HTML5 `<audio>` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an `id` corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

  - [x] #5: When I click on a `.drum-pad` element, the audio clip contained in its child `<audio>` element should be triggered.

  - [x] #6: When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `<audio>` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `"Q"`, pressing the `W` key should trigger the drum pad which contains the string `"W"`, etc.).

  - [x] #7: When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

- You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: `https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js`

- Once you're done, submit the URL to your working project with all its tests passing.

- Remember to use the Read-Search-Ask method if you get stuck.

<br />
<br />

---

## Getting Started with Create React App

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
