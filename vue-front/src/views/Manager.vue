<template>
  <div class="manager">
    <h1>Manager</h1>

    <div class="container">
      <div class="row">
        <button type="button" class="col-auto mr-auto btn btn-success">+ Create Task</button>
        <button type="button" class="col-auto btn btn-danger">Bouton au cas ou</button>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-around">

        <div class="col-4">
          <div class="card">
            <div class="card-header bg-primary">
              <h3><span class="text-light">Waiting</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
                <task-card id="alpha"/>
              </ul>
            </div>
          </div>
        </div>





        <div class="col-4">

          <div class="card">
            <div class="card-header bg-warning">
              <h3><span class="text-light">In Progress</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
              </ul>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div class="card">
            <div class="card-header bg-success">
              <h3><span class="text-light">Done</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import TaskCard from '../components/TaskCard'

export default {
  components: {
    TaskCard
  }
}

</script>

<style scoped>
.task {
  margin: 10px 0;
  border-radius: 2px;
}
</style>
