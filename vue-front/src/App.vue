<template>
  <div id="appRoot">
    <v-app class="app">
      <!-- <Header></Header> -->
      <NavDrawer></NavDrawer>
      <Header/>
      <v-content id="nav">
        <transition name="fade" mode="out-in">
        <!-- <transition :name="transitionName" mode="out-in"> -->
          <router-view/>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import Header from './components/Header'
import NavDrawer from './components/NavDrawer'

export default {
  components: {
    Header,
    NavDrawer
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
}

#nav {
  background-color: #EBF0F6;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
