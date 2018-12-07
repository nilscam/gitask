<template>
  <div id="appRoot">
    <v-app class="app">
      <Header></Header>

      <div id="nav">
        <router-link to="/worker">Worker</router-link> |
        <router-link to="/manager">Manager</router-link>
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  components: {
    Header
  },
  data: () => ({})
};
</script>

<style>
#appRoot {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
