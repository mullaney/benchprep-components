<template>
  <button
    class="button-favorite"
    @click="handleClick"
  >
    <i
      class="fa"
      :class="{ 'fa-heart-o': !isSelected, 'fa-heart': isSelected }"
      aria-hidden="true"
    />
  </button>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      isSelected: !!this.selected
    }
  },
  methods: {
    handleClick() {
      this.isSelected = !this.isSelected
      this.$emit('favorite-click', this.isSelected)
    }
  }
}
</script>

<style lang="scss">
.button-favorite {
  background: var(--gray-90);
  opacity: 0.4;
  border: none;
  border-radius: 50%;
  height: 32px;
  min-width: 32px;
  text-align: center;
  width: 32px;

  i::before {
    color: var(--gray-00);
    font-size: 18px;
    opacity: 1;
  }

  .fa-heart::before {
    color: var(--red);
    opacity: 1;
  }
}
</style>

<docs>
With no initial value for selected
```jsx
<ButtonFavorite />
```

With initial value set
```jsx
<ButtonFavorite :selected="true" />
```
</docs>
