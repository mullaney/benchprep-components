# Process log
A log of the steps taken to create this repo along with some discussion as to the reasons for those steps.

## Goal
Create a demo library that other repos can use to import shared components. These shared components will be built with input from design, so that we can have a common source for the design and implementation of components between design and engineering and a reference for QA, product and other teams.

## Sources
Some blog posts that served as sources:
- https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751
- https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3

## Steps

### Make vue app
Make the vue upp using the vue cli:

```
vue create benchprep-components
```

Add new options in package.json

```
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "build-lib": "vue-cli-service build --target lib --name dummylib src/main.js",
  "lint": "vue-cli-service lint"
},
```

Add main line to package.json

```
  "main": "./dist/componentLibraryDemo.common.js",
```

### Removing App.vue
Because this is a component library, we don't need an App.vue file. The main.js file is simply exporting all of the components for use in other repos.

### Adding DummyButton
We added a DummyButton as an example for future components.
