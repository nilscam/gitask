<template>
  <div id="appRoot">
    <v-app class="app">
      <Header></Header>

      <div id="nav">
        <router-link to="/worker">Worker</router-link> |
        <router-link to="/manager">Manager</router-link>
      </div>
      <transition :name="transitionName" mode="out-in">
        <router-view/>
      </transition>
    </v-app>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  components: {
    Header
  },
  data: () => ({
    transitionName: 'slide-right'
  }),
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
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







.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-right-enter {
  transform: translate(50%, 0);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translate(-50%, 0);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-enter {
  transform: translate(-50%, 0);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translate(50%, 0);
  opacity: 0;
}

</style>
