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
    /**
     * Specifies the type of button which will change the color of the button
     */
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.button-small {
  background: var(--gray-70);
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 7px 14px;

  a {
    color: white;
    text-decoration: none;
  }

  &.primary {
    background: var(--primary);
  }

  &.secondary {
    background: var(--secondary);
  }

  &.danger {
    background: var(--red);
  }

  &.warning {
    background: var(--yellow);
  }

  &.success {
    background: var(--green);
  }

  &.inverted {
    background: var(--pure-white);
    color: var(--primary);
    border: none;

    a {
      color: var(--primary);
    }
  }
}
</style>

<docs>
Small Buttons
```jsx
<p>Button types:</p>
<div>
  <ButtonSmall type="primary">Primary</ButtonSmall>
  <ButtonSmall type="secondary">Secondary</ButtonSmall>
  <ButtonSmall type="danger">Danger</ButtonSmall>
  <ButtonSmall type="warning">Warning</ButtonSmall>
  <ButtonSmall type="success">Success</ButtonSmall>
</div>
<p>Buttons with longer content</p>
<div>
  <ButtonSmall type="primary">Lorem ipsum dolor sit amet pulvinar accumsan</ButtonSmall>
  <ButtonSmall type="primary">Sed eget faucibus purus,<br />non sagittis massa</ButtonSmall>
</div>
```
</docs>
