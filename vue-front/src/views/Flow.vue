<template>
  <div>

    <!-- Filters -->
    <v-layout row justify-center class="my-layout-filter">
      <v-flex v-for="filter in filters" xs2>
        <v-btn round @click="filter.onClick" class="btn-filter" :ripple="{ class: 'primary--text' }">
          <span :class="filter.name == activeFilter ? 'text-filter-active' : 'text-filter'" >{{ filter.name }}</span>
        </v-btn>
      </v-flex>
    </v-layout>


    <v-layout row justify-center wrap class="my-layout-content">
          <v-flex v-for="task in tasks" md5 sm12 ma-4>
            <v-card class="my-class-card">

              <v-card-title primary-title>
                  <div class="headline my-title">{{ task.title }}<span class="task-author">by Marc Vlotarde</span></div>
                  <v-spacer></v-spacer>
                  <div class="triangle-left"></div>
                  <div class="my-date-limit">
                    <v-icon color="#364F6B" small>event</v-icon>
                    <span>15/12/2018</span>
                  </div>

                  <div class="desc">
                    <span>Lorem ipsum dolor sit amet, vidit mutat euismod eu his, affert postea epicurei ea eos, usu te omnium doctus voluptaria ipsum dolor sit amet, vidit muta…  </span>
                  </div>

                  <v-btn round outline color="teal" class="btn-langage">
                    <span class="name-langage"># Vuejs</span>
                    <div style="width:5px;"></div>
                    <img alt="Vue logo" src="../assets/logo.png" class="logo-langage">
                  </v-btn>
                  <v-spacer></v-spacer>
                  <span class="price-text">{{task.amount}} $</span>
                </v-card-title>

            </v-card>
          </v-flex>
    </v-layout>
  </div>
</template>

<script>
import tasks from '../fakedata/tasks'

export default {
  data () {
    return {
      tasks,
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
.my-layout-filter {
  font-family: Lato;
  margin-top: 32px;
}
.btn-filter {
  min-width: 180px;
  box-shadow: 0px 0px 15px rgba(20, 68, 121, 0.1) !important;
  text-transform: none !important;
}
.text-filter {
  height: 15px;
  font-size: 13px;
  color: #A7B2C9;
}
.text-filter-active {
  height: 15px;
  font-size: 13px;
  color: #0A2968;
}



/* tasks */
.my-layout-content {
  font-family: Lato;
  margin-top: 50px;
}

.my-class-card {
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(20, 68, 121, 0.1);
  border-left: 10px solid #5EA3A3;
}


.my-title {
  font-weight: 500;
  font-size: 24px;

  color: #303441;
}
.task-author {
  margin-left: 8px;
  font-size: 12px;

  color: rgba(48, 52, 65, 0.503255);
}

/* dateicon */
.my-date-limit {
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color:  #EBF0F6;
  color: #364F6B;
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

.desc {
  text-align: left;
  padding-top: 5px;
  font-size: 16px;

  color: #303441;

}

.btn-langage {
  margin-top: 16px;
  height: 27px !important;
  padding-left: 11px !important;
  padding-right: 11px !important;
}
.name-langage {
  font-size: 12px;
  color: #5EA3A3;
}
.logo-langage {
  height: 15px;
  width: 15px;
}

.price-text {
  font-weight: bold;
  font-size: 23px;
  color: #5EA3A3;
}

</style>
