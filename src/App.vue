<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './page/HomeView.vue'
export default {
  name: 'App',
  components: {
      Home,
  }
}
</script>

<style>
/* Import style css */
@import url('./style/reset.css');
/* Import font */
@import url('https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;
}
</style>
