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

    <!-- <div data-toggle="collapse" :href="`#${data.id}`" aria-expanded="true" :aria-controls="data.id" :id="`heading-${data.id}`" class="card-body"> -->
    <div data-toggle="modal" :data-target="`#${data.id}`" class="card-body text-left task-body">
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
    <!-- <div :id="data.id" class="collapse" :aria-labelledby="`heading-${data.id}`">
      <div class="card-body">
          <span class="d-block">{{ data.desc }}</span>
          <div class="mt-3">
            <button @click="data.visible = !data.visible" type="button" :class="`btn ${data.visible ? 'btn-outline-success' : 'btn-outline-secondary'}`">{{data.visible ? 'Publish' : 'Hide'}}</button>
          </div>
      </div>
    </div> -->



    <modal-task :data="data"/>

<!--
    <div class="modal fade" :id="data.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-1">
                  <img src="Icons/text-document-with-title.png" height="32" width="32">
                </div>
                <div class="col-lg-10">
                    <span class="taskTitle">Unit test Python script</span>
                </div>
                <div class="col-lg-1">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="offset-lg-1 col-lg-3">
                  <span class="taskMembers">Members</span><br>
                  <img src="Icons/man (1).png" height="32" width="32">&nbsp;
                  <img src="Icons/man.png" height="32" width="32">
                </div>
                <div class="col-lg-2">
                  <span class="taskLimit">Limit</span><br>
                  <span class="taskLimitExample">10/12/2018</span>
                </div>
                <div class="col-lg-2">
                  <span class="taskLanguage">Language</span><br>
                  <span class="taskLanguageExample">Python</span>
                </div>
                <div class="offset-lg-3 col-lg-1">
                    <span class="taskPrice">30$</span>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-lg-1">
                  <img src="Icons/github-logo.png" height="32" width="32">
                </div>
                <div class="col-lg-11">
                  <span class="taskRepoGit">Repo Git</span><br>
                  <span class="taskRepoGitExample">https://github.com/kayofeld/script-installation-ordinateur-epitech.git</span>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-lg-1">
                  <img src="Icons/document.png" height="32" width="32">
                </div>
                <div class="col-lg-11">
                  <span class="taskDescription">Description</span><br>
                  <span class="taskDescriptionExample">I am trying to make my python script very user friendly, so I like to write some sort of help for it. What is your advise for this? I could just put in some logic that if the user passed help as a paramater to the script, they get help. Is there a best practise or convention for this?</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div> -->





  </div>
</template>

<script>
import Trash from "../assets/waste-bin.svg";
import ModalConfirmation from "./ModalConfirmation";
import ModalTask from "./ModalTask";

export default {
  props: {
    data: Object
  },
  components: {
    ModalConfirmation,
    ModalTask
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
.task-body {
  cursor: pointer;
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
