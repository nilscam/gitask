<template>
  <div class="card task">

    <!-- Visible part -->
    <div class="my-card-header">
      <div class="info-header">
        <h5 class="position-absolute">
          <span :class="`badge ${hidden ? 'badge-secondary' : 'badge-success'}`">{{hidden ? 'Hidden' : 'Visible'}}</span>
        </h5>
      </div>
      <div style="flex: 1;"></div>
      <img :src="computeTrash" height="18" alt="Delete" class="delete-logo" data-toggle="modal" data-target="#delete-task">
      <modal-confirmation @confirm="deleteTask" id="delete-task"/>
    </div>

    <div data-toggle="collapse" :href="`#${id}`" aria-expanded="true" :aria-controls="id" :id="`heading-${id}`" class="card-body text-left">
      <div class="my-card-header">
        <div class="my-card-header-left">
          <h5 class="card-title">Fix front vueJs</h5>
          <h5 class="card-subtitle mb-2 text-muted">Vuejs</h5>
        </div>
        <div class="my-card-header-right">
          <h4><span class="badge badge-pill badge-success">10,00$</span></h4>
          <h6><span class="badge badge-light">commit 5ff0dd0fe59</span></h6>
        </div>
      </div>


    </div>

    <!-- Hidden part -->
    <div :id="id" class="collapse" :aria-labelledby="`heading-${id}`">
      <div class="card-body">
          <span class="d-block">Increment the current Version of erer version to 2.2 for compatible rerz dsfsdfs</span>
          <div class="mt-3">
            <button @click="hidden = !hidden" type="button" :class="`btn ${hidden ? 'btn-outline-success' : 'btn-outline-secondary'}`">{{hidden ? 'Publish' : 'Hide'}}</button>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import Trash from "../assets/waste-bin.svg";
import ModalConfirmation from "./ModalConfirmation";

export default {
  props: {
    id: String
  },
  components: {
    ModalConfirmation
  },
  data: () => ({
    hidden: true
  }),
  computed: {
    computeTrash () {
      // return Computer ? idea
      return Trash;
    }
  },
  methods: {
    deleteTask() {
      console.log('delete');
    }
  }
}
</script>

<style scoped>
.task {
  margin: 10px 0;
  border-radius: 2px;
}

.my-card-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.my-card-header-left {
  flex: 1;
}
.my-card-header-right {
  text-align: right;
}


.info-header {
  position: relative;
  top: 10px;
  left: 10px;

}
.delete-logo {
  cursor: pointer;
  position: relative;
  top: 5px;
  right: 10px;
  margin-top: 5px;
}




</style>
