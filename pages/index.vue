<template>
  <div>
    <div v-if="took">Last run took: {{ took }}ms</div>
    <button @click="run">Run</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      took: null
    }
  },
  methods: {
    run() {
      const s = new Date()
      this.$store.dispatch('pushData')
      this.took = new Date() - s
    }
  }
};
</script>
