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
Update this for using github repo as source

## Importing component

Once this library has been added to your repo, you can use components by importing them:

```
import MyComponent from 'benchprep-components'
```

And use them normally from there.
