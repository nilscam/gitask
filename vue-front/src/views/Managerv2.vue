<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap class="main">

            <!-- <v-flex lg4>
                <h4 class="title">New Tasks</h4>
                <div class="listBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in newTasks"
                                lg12>
                            <v-card class="card">
                                <v-layout row wrap>
                                    <v-flex lg-12>
                                        <i class="material-icons deleteIcon">delete</i>
                                        <div class="cardTitle">{{card.title}}</div>
                                        <div class="cardDescription">{{card.description}}</div>
                                        <div class="iconCenter">
                                            <span class="iconPad">
                                              <v-btn round outline color="teal" class="btn-langage">
                                                <span class="name-langage"># Vuejs</span>
                                                <div style="width:5px;"></div>
                                                <img alt="Vue logo" src="../assets/logo.png" class="logo-langage">
                                              </v-btn>
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                schedule
                                            </i>
                                            <span class="iconPad">
                                        {{card.date}}
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                monetization_on
                                            </i>
                                            <span class="iconPad">
                                        {{card.amount}}
                                            </span>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </div>
                <v-btn block color="#364F6B" large="18px" class="addButton">Block Button</v-btn>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">In progress</h4>
                <div class="listBorder heightBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in progressTasks"
                                lg12>
                            <v-card class="card">
                                <v-layout row wrap>
                                    <v-flex lg-12>
                                        <i class="material-icons deleteIcon">delete</i>
                                        <div class="cardTitle">{{card.title}}</div>
                                        <div class="cardDescription">{{card.description}}</div>
                                        <div class="iconCenter">
                                            <span class="iconPad">
                                              <v-btn round outline color="teal" class="btn-langage">
                                                <span class="name-langage"># Vuejs</span>
                                                <div style="width:5px;"></div>
                                                <img alt="Vue logo" src="../assets/logo.png" class="logo-langage">
                                              </v-btn>
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                schedule
                                            </i>
                                            <span class="iconPad">
                                        {{card.date}}
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                monetization_on
                                            </i>
                                            <span class="iconPad">
                                        {{card.cost}}
                                            </span>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">Done</h4>
                <div class="listBorder heightBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in doneTasks"
                                lg12>
                            <v-card class="card">
                                <v-layout row wrap>
                                    <v-flex lg-12>
                                        <div class="cardTitle">{{card.title}}</div>
                                        <div class="cardDescription">{{card.description}}</div>
                                        <div class="iconCenter">
                                            <span class="iconPad">
                                              <v-btn round outline color="teal" class="btn-langage">
                                                <span class="name-langage"># Vuejs</span>
                                                <div style="width:5px;"></div>
                                                <img alt="Vue logo" src="../assets/logo.png" class="logo-langage">
                                              </v-btn>
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                schedule
                                            </i>
                                            <span class="iconPad">
                                              15 dec
                                            </span>
                                            <i class="material-icons iconsAlign">
                                                monetization_on
                                            </i>
                                            <span class="iconPad">
                                        {{card.cost}}
                                            </span>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex> -->


            <v-flex lg4>
                <h4 class="title">New Tasks</h4>
                <div class="listBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in newTasks" lg12>
                          <TaskCard :card="card"/>
                        </v-flex>
                    </v-layout>
                </div>
                <v-btn block color="#364F6B" large="18px" class="addButton">Create New Task</v-btn>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">In progress</h4>
                <div class="listBorder heightBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in progressTasks" lg12>
                          <TaskCard :card="card"/>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>

            <v-flex lg4>
                <h4 class="title">Done</h4>
                <div class="listBorder heightBorder">
                    <v-layout row wrap>
                        <v-flex v-for="card in doneTasks" lg12>
                          <TaskCard :card="card"/>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import tasks from '../fakedata/tasks.js'
import TaskCard from '../components/TaskCardv2'

export default {
  components: {
    TaskCard
  },
  data: () => ({
    // newTasks: [
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    // ],
    // progressTasks: [
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    // ],
    // doneTasks: [
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    //     { title: 'Fix vue Js', description: "Lorem ipsum dolor sit amet, consectetuer adipiscing …", date: '15 dec', cost: '25$'},
    // ]
    tasks
  }),
  computed: {
    newTasks: () => tasks.filter(task => task.status == 'waiting'),
    progressTasks: () => tasks.filter(task => task.status == 'progress'),
    doneTasks: () => tasks.filter(task => task.status == 'done')
  }
}
</script>

<style scoped>

    .deleteIcon {
        color: #364F6B;
        font-size: 15px;
        float: right;
    }


    .cardTitle {
        font-weight: 500;
        font-size: 18px;
        color: #005587;
        padding-top: 15px;
    }

    .cardDescription {
        line-height: 14px;
        font-size: 14px;
        letter-spacing: 0.450484px;
        color: rgba(0, 0, 0, 0.87);
        padding-bottom: 7px;
    }

    .iconsAlign {
        vertical-align: middle;
    }

    .iconPad {
        padding-right: 23px;
    }

    .title {
        text-align: left;
        color: #364F6B;
        padding-bottom: 10px;
    }

    .listBorder {
        background-color: white;
        border: 2px solid white;
        border-radius: 7px;
        padding: 16px;
        height: 72vh;
        overflow: auto;
        margin-bottom: -10px;
    }

    .heightBorder {
        height: 77vh;
    }

    .main {
        padding: 35px;
    }

    .material-icons {
        color: #364F6B
    }

    .addButton {
        border-radius: 0px 0px 10px 10px;
        text-transform: none !important;
        height: 56px;
        color: white;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 18px;
    }

    .card {
        text-align: left;
        padding-left: 16px;
        padding-right: 8px;
        padding-bottom: 17px;
        padding-top: 8px;
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

</style>
