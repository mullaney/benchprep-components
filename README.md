# Benchprep Components

- The style guide generated from this repo it automatically deployed to netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/e70a842c-8f5a-4764-848c-a97d4b5c02be/deploy-status)](https://app.netlify.com/sites/bp-styleguide-demo/deploys)
- Static storybook is generated from this repo and deployed to netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/3c32f751-6f37-4a21-8a43-7d9850db796c/deploy-status)](https://app.netlify.com/sites/storybook-bp-components/deploys)

See process_log.md for notes on the steps taken to make this repo.

To see a particular component:

```
vue serve src/components/DummyButton.vue
```

To add this library to another repo use:

```
yarn add ../benchprep-components
```
TODO: Update these directions when using github repo as source

## Importing component

Once this library has been added to your repo, you can use components by importing them:

```
import { MyComponent } from 'benchprep-components'
```

And use them normally from there.

When you update a component, you will need to run this command locally in benchprep-components:

```
yarn build-lib
```

Then in the repo using the library you will need to update package:

```
yarn add ../benchprep-components --check-files
```

TODO: Update these directions when using github repo as source

## Using Styleguidist

To use styleguidist in development:

```
npm run styleguide
// or
yarn styleguide
```

## Using Storybook

To use storybook in development:

```
npm run storybook
// or
yarn storybook
```

## Initial Demos

The mockups for the initial components were provided by Atiyya: https://www.figma.com/proto/P2GpzhnaT86j5Esfz7eZwj/Sample-UI-LIbrary?node-id=1%3A163&scaling=min-zoom
