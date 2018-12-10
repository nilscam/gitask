<template>
  <div class="manager">
    <div class="container">
      <div class="row">
        <button type="button" class="col-auto mr-auto btn btn-success">+ Create Task</button>
        <button type="button" class="col-auto btn btn-danger">Bouton au cas ou</button>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-around">

        <div class="col-4">
          <div class="card my-card-scrum">
            <div class="card-header bg-primary">
              <h3><span class="text-light">Waiting</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
                <task-card @delete="deleteTask(idx)" v-for="(data, idx) in tasks" v-if="data.status == 'waiting'" :data="data"/>
                <!-- <task-card id="alpha"/> -->
              </ul>
            </div>
          </div>
        </div>





        <div class="col-4">

          <div class="card my-card-scrum">
            <div class="card-header bg-warning">
              <h3><span class="text-light">In Progress</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
                <task-card @delete="deleteTask(idx)" v-for="(data, idx) in tasks" v-if="data.status == 'progress'" :data="data"/>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card my-card-scrum">
            <div class="card-header bg-success">
              <h3><span class="text-light">Done</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
                <task-card @delete="deleteTask(idx)" v-for="(data, idx) in tasks" v-if="data.status == 'done'" :data="data"/>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import TaskCard from '../components/TaskCard';
import tasks from '../fakedata/tasks';

export default {
  components: {
    TaskCard
  },
  data: () => ({
    tasks
  }),
  computed: {
    waitingList() {
      return tasks.filter(task => task.status == 'waiting')
    },
    progressList() {
      return tasks.filter(task => task.status == 'progress')
    },
    doneList() {
      return tasks.filter(task => task.status == 'done')
    }
  },
  methods: {
    deleteTask(idx) {
      tasks.splice(idx, 1)
      // for (let i = 0; i < tasks.length; i++) {
      //   if (tasks[i].id === idx) {
      //     console.log('deleted')
      //     tasks.splice(i, 1)
      //     console.log(tasks);
      //     return
      //   }
      // }
    }
  }
}

</script>

<style scoped>

.manager {
  background-image: url('https://i.imgur.com/o8xrgpA.jpg');
  background-size: cover;
  height: 100%;
}

.task {
  margin: 10px 0;
  border-radius: 2px;
}

.my-card-scrum {
  background-color: rgba(0, 0, 0, 0.0) !important;
  border-color: white;
}


</style>
