<template>
  <div>
    <button @click="run">Run</button>
  </div>
</template>

<script>
export default {
  methods: {
    run() {
      const s = new Date()
      this.$store.dispatch('pushData')
      const took = new Date() - s
      alert('Run took: ' + took + 'ms')
      window.location.reload()
    }
  }
};
</script>
