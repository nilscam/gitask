<template>
  <div class="manager">
    <h1>Manager</h1>

    <div class="container">
      <div class="row">
        <button type="button" class="col-auto mr-auto btn btn-success">+ Create Task</button>
        <button type="button" class="col-auto btn btn-danger">Boutton au cas ou</button>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-around">

        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <h3><span class="badge badge-pill badge-primary">Waiting</span></h3>
            </div>
            <div class="card-body">
              <ul class="list-group" id="waiting">
                <task-card id="alpha"/>
                <task-card id="beta"/>
              </ul>
            </div>
          </div>
        </div>





        <div class="col-4">
          <h3><span class="badge badge-pill badge-warning">In Progress</span></h3>
        </div>

        <div class="col-4">
          <h3><span class="badge badge-pill badge-success">Done</span></h3>
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
