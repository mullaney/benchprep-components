# Benchprep Components

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

## Initial Demos

The mockups for the initial components were provided by Atiyya: https://www.figma.com/proto/P2GpzhnaT86j5Esfz7eZwj/Sample-UI-LIbrary?node-id=1%3A163&scaling=min-zoom
