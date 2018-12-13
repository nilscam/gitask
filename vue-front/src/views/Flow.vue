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


    <v-layout row justify-center class="mt-5" wrap>
          <v-flex v-for="i in 10" md5 sm12 ma-4>
            <v-card>

              <v-card-title primary-title>
                  <div class="headline">Fix front Vuejs<span class="task-author">by Marc Vlotarde</span></div>
                  <v-spacer></v-spacer>
                  <div class="triangle-left"></div>
                  <div class="my-date-limit">
                    <v-icon color="#364F6B" small>event</v-icon>
                    <span>15/12/2018</span>
                  </div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
              </v-card-title>

              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>

              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
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


/* tasks */
.my-date-limit {
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:  #EBF0F6;
  color: #364F6B;
  font-family: Lato;
  font-size: 14px;
  padding-right: 3px;
  border-radius: 0 5px 5px 0;
}
.triangle-left {
  width: 0;
  height: 0;
  border-top: 12.5px solid transparent;
  border-bottom: 12.5px solid transparent;

  border-right: 12px solid #EBF0F6;
}
.my-date-limit span {
  height: 17px;
}


</style>
