# react-ts-generate
Generate templates for react/redux project in Typescript

### What's inside?
* component
* stateful container
* redux all-in-one(state/store, reducer & action/constant)
* redux container
* tslint config


## Getting Started
Let's create a react project from [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

### Create Project
```
npx create-react-app my-app --scripts-version=react-scripts-ts
cd myapp
```

### Install *redux*, *react-redux* and *react-ts-generate*
```
yarn add redux react-redux @types/react-redux
yarn add --dev react-ts-generate
```

### Add run script to package.json
```
"scripts": {
  ...
  "generate": "plop --plopfile node_modules/react-ts-generate/index.js"
}
 ```
 
 ### Done!
 ```
 yarn generate
 
 ----------------------
? [PLOP] Please choose a generator. (Use arrow keys)
❯ tslint setup - a proper configuration 
  component (stateless) - function based component 
  container (stateful) - class based stateful component 
  redux: state, reducer & actions - state, reducer, constants and action creator
  container (redux) - redux based container 
 ```
 
 ## Add your own templates
 Copy [index.js](https://github.com/mingchoi/react-ts-generate/blob/master/index.js) and [templates](https://github.com/mingchoi/react-ts-generate/tree/master/templates) to {PROJECT_ROOT}/internals/generators and updated the generate script, take a look at index.js to understand how the generator works.
