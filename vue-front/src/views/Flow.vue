<template>
  <div>

    <!-- Filters -->
    <v-layout row justify-center class="my-layout">
      <v-flex v-for="filter in filters" xs2>
        <v-btn round @click="filter.onClick" class="btn-filter" :ripple="{ class: 'primary--text' }">
          <span :class="filter.name == activeFilter ? 'text-filter-active' : 'text-filter'" >{{ filter.name }}</span>
        </v-btn>
      </v-flex>
    </v-layout>


    <v-layout row justify-center class="mt-5">
      <v-flex xs12 md10>
        <v-layout row justify-center class="my-offers">
          <v-flex sm12 md6>
            mdr
          </v-flex>
          <v-flex sm12 md6>
            toto
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
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

/* filters */
.my-layout {
  margin-top: 32px;
}
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
