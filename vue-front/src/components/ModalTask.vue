<template>
  <div class="modal fade root-modal" :id="data.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-1">
                <img :src="computeTextDoc" height="32" width="32">
              </div>
              <div class="col-lg-10">
                  <span class="taskTitle">{{data.title}}</span>
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
                <img :src="randomUsers[0]" height="32" width="32">&nbsp;
                <img :src="randomUsers[1]" height="32" width="32">
              </div>
              <div class="col-lg-2">
                <span class="taskLimit">Limit</span><br>
                <span class="taskLimitExample">10/12/2018</span>
              </div>
              <div class="col-lg-2">
                <span class="taskLanguage">Language</span><br>
                <span class="taskLanguageExample">{{data.langage}}</span>
              </div>
              <div class="offset-lg-2 col-lg-2">
                <h2><span class="badge badge-pill badge-success">{{ computePrice }}$</span></h2>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-1">
                <img :src="computeGit" height="32" width="32">
              </div>
              <div class="col-lg-11">
                <span class="taskRepoGit">Branch &lt;Developpement&gt;</span><br>
                <h5><span class="badge badge-light">commit {{ data.commit }}</span></h5>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-1">
                <img :src="computeDesc" height="32" width="32">
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
          <button type="button" class="btn btn-success">Save changes and Publish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Git from '../assets/icons/github-logo.png'
import TextDoc from '../assets/icons/text-document.png'
import Desc from '../assets/icons/code.svg'
import utils from '../utils'

export default {
  props: {
    data: Object
  },
  data: () => ({
    randomUsers: utils.randomUsersPictures(5)
  }),
  computed: {
    computeGit: () => Git,
    computeTextDoc: () => TextDoc,
    computeDesc: () => Desc,
    computePrice() { return this.data.amount.toFixed(2) }
  }
}
</script>

<style scoped>

.root-modal {
  text-align: left;
}

.taskTitle {
	font-size: 24.22px;
	text-align: left;
}
.taskMembers {
	font-size: 18.22px;
	text-align: left;
}
.taskLimit {
  font-size: 18.22px;
	text-align: left;
}
.taskLimitExample {
	font-size: 13.22px;
	text-align: left;
}
.taskLanguage {
	font-size: 18.22px;
	text-align: left;
}
.taskLanguageExample {
	font-size: 12px;
	color: #000000;
	text-align: left;
}
.taskPrice {
	font-size: 24.22px;
	text-align: left;
}
.taskRepoGit {
	font-size: 18.22px;
	text-align: left;
}
.taskDescription {
	font-size: 18.22px;
	text-align: left;
}
.taskDescriptionExample {
	font-size: 12px;
	color: #000000;
}

</style>
