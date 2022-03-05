<template>
  <div id="app">
    <ActivityGenerator />
  </div>
</template>

<script>
import ActivityGenerator from './components/ActivityGenerator.vue'

export default {
  name: 'App',
  components: {
    ActivityGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
