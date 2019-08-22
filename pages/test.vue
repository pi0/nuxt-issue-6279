<template>
  <div>
    Last iteration took: {{ took }}ms

    <button @click="run">Click Me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      took: 'N/A'
    }
  },
  methods: {
    run() {
      const s = new Date()
      this.$store.dispatch("apiCall");
      this.took = new Date() - s
    }
  }
};
</script>
