<template>
  <div>
    <button @click="increment">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'DummyButton',
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    times() {
      return this.count > 1
        ? 'times'
        : 'time';
    },
    text() {
      return `I have been clicked ${this.count} ${this.times}`;
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<docs>
Just a dummy button for counting.

```jsx
<DummyButton />
```
</docs>
