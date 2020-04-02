<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="w-4 ml-3 shadow">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vs-button color="warning" type="flat" >Hello Vuesax</vs-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
