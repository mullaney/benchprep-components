<template>
  <div class="action-card-row">
    <!-- Put Action Cards in this slot -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ActionCardRow'
}
</script>

<style lang="scss">
.action-card-row {
  display: flex;
  justify-content: space-around;
}
</style>

<docs>
```jsx
<ActionCardRow style="background: pink">
  <ActionCard/>
  <ActionCard/>
  <ActionCard/>
</ActionCardRow>
```
</docs>
