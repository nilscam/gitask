<template>
  <v-layout row justify-center>

    <v-flex v-for="filter in filters" class="" xs2>
      <v-btn round @click="filter.onClick" class="btn-filter" :ripple="{ class: 'primary--text' }">
        <span :class="filter.name == activeFilter ? 'text-filter-active' : 'text-filter'" >{{ filter.name }}</span>
      </v-btn>
    </v-flex>
    <!-- <v-flex lg3 sm6 xs12>
      <v-btn>
        New
      </v-btn>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      <v-btn>
        Date
      </v-btn>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      totot
    </v-flex>
    <v-flex lg3 sm6 xs12>
      toto
    </v-flex> -->
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      activeFilter: 'New',
      filters: [
        { name: 'New', onClick: this.handleNew },
        { name: 'Date', onClick: this.handleDate },
        { name: 'Price', onClick: this.handlePrice },
        { name: 'Technology', onClick: this.handleTechnology }
      ]
    }
  },
  methods: {
    handleNew() {
      this.activeFilter = 'New'
    },
    handleDate() {
      this.activeFilter = 'Date'
    },
    handlePrice() {
      this.activeFilter = 'Price'
    },
    handleTechnology() {
      this.activeFilter = 'Technology'
    }
  }
}
</script>

<style scoped>
.btn-filter {
  min-width: 180px;
  box-shadow: 0px 0px 15px rgba(20, 68, 121, 0.1) !important;
  text-transform: none !important;
}
.text-filter {
  font-family: Lato;
  height: 15px;
  font-size: 13px;
  color: #A7B2C9;
}
.text-filter-active {
  font-family: Lato;
  height: 15px;
  font-size: 13px;
  color: #0A2968;
}
</style>
