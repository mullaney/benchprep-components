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

```json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "build-lib": "vue-cli-service build --target lib --name benchpreComponents src/main.js",
  "lint": "vue-cli-service lint"
},
```

Add main line to package.json

```json
  "main": "./dist/componentLibraryDemo.common.js",
```

### Removing App.vue
Because this is a component library, we don't need an App.vue file. The main.js file is simply exporting all of the components for use in other repos. Instead the src/main.js file will simply import components and export them together as one object:

```js
import './assets/css/style.css'
import ButtonSmall from './components/buttons/ButtonSmall.vue'
import ActionCard from './components/cards/ActionCard.vue'

export { ButtonSmall, ActionCard }
```

### Adding DummyButton
We added a DummyButton as an example for future components.

### Need to use nvm 10+
In order to use styleguidist, we need to use nvm 10+ in this repo only.

### Including CSS with the library
First notice this line in main.js:

```js
import './assets/css/style.css'
```

This allows us to bundle css any external css needed with the components. I've used it to include some fonts and a copy of branding.css.

Also, you have to make sure this is in the vue.config.js:

```js
module.exports = {
  css: { extract: false }
}
```

Otherwise when the library is built, it will seperate the css from the components and save them in separate files.
