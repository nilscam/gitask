<template>
  <div class="card task">

    <!-- Visible part -->
    <div class="my-card-header">
      <div class="info-header">
        <h5 class="position-absolute">
          <span :class="`badge ${data.visible ? 'badge-secondary' : 'badge-success'}`">{{data.visible ? 'Hidden' : 'Visible'}}</span>
        </h5>
      </div>
      <div style="flex: 1;"></div>
      <img :src="computeTrash" height="18" alt="Delete" class="delete-logo" data-toggle="modal" data-target="#delete-task">
      <modal-confirmation @confirm="deleteTask" id="delete-task"/>
    </div>

    <div data-toggle="collapse" :href="`#${data.id}`" aria-expanded="true" :aria-controls="data.id" :id="`heading-${data.id}`" class="card-body text-left">
      <div class="my-card-header">
        <div class="my-card-header-left">
          <h5 class="card-title">{{ data.title }}</h5>
          <h5 class="card-subtitle mb-2 text-muted">{{ data.langage }}</h5>
        </div>
        <div class="my-card-header-right">
          <h4><span class="badge badge-pill badge-success">{{ computePrice }}$</span></h4>
          <h6><span class="badge badge-light">commit {{ data.commit }}</span></h6>
        </div>
      </div>


    </div>

    <!-- Hidden part -->
    <div :id="data.id" class="collapse" :aria-labelledby="`heading-${data.id}`">
      <div class="card-body">
          <span class="d-block">{{ data.desc }}</span>
          <div class="mt-3">
            <button @click="data.visible = !data.visible" type="button" :class="`btn ${data.visible ? 'btn-outline-success' : 'btn-outline-secondary'}`">{{data.visible ? 'Publish' : 'Hide'}}</button>
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
    data: Object
  },
  components: {
    ModalConfirmation
  },
  computed: {
    computeTrash () {
      // return Computer ? idea
      return Trash;
    },
    computePrice () {
      return this.data.amount.toFixed(2)
    }
  },
  methods: {
    deleteTask() {
      this.$emit('delete')
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
