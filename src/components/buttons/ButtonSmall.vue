<template>
  <button
    :class="type"
    class="button-small"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonSmall',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'https://wmx-api-production.s3.amazonaws.com/public/benchprep/css/branding.css';

.button-small {
  background: var(--gray-70);
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  padding: 7px 14px;

  &.primary {
    background: var(--primary)
  }

  &.secondary {
    background: var(--secondary)
  }
}
</style>

<docs>
Small Button / Primary
```jsx
  <ButtonSmall type="primary">Study Now</ButtonSmall>
```
Small Button / Secondary
```jsx
  <ButtonSmall type="secondary">Study Now</ButtonSmall>
```
</docs>
