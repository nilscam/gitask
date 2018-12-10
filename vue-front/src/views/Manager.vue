<template>
  <div class="home">

     <div class="container">
       <div class="row rowMargin">
         <div class="col-lg-10 offset-lg-2">
           <div class="row titleMargin">
             <div class="col-lg-5 titleProject">
               Recent Changes
             </div>
           </div>
           <div class="row">
             <div @click="accessProject('R-Type')" class="col-lg-3 project">
               R-Type
               <span class="badge badge-pill badge-danger pull-right notifinfo">3</span>
             </div>
             <div class="col-lg-3 project">
               Epicture
               <span class="badge badge-pill badge-danger pull-right notifinfo">1</span>
             </div>
           </div>
         </div>
       </div>

       <div class="row rowMargin">
         <div class="col-lg-10 offset-lg-2">
           <div class="row titleMargin">
             <div class="col-lg-5 titleProject">
               Recently Consulted
             </div>
           </div>
           <div class="row">
             <div class="col-lg-3 project">
               R-Type
               <span class="badge badge-pill badge-danger pull-right notifinfo">3</span>
             </div>
             <div class="col-lg-3 project">
               Epicture
               <span class="badge badge-pill badge-danger pull-right notifinfo">1</span>
             </div>
             <div class="col-lg-3 project">
               Gomoku
             </div>
           </div>
         </div>
       </div>

       <div class="row rowMargin">
         <div class="col-lg-10 offset-lg-2">
           <div class="row titleMargin">
             <div class="col-lg-5 titleProject">
               Personal Projects
             </div>
           </div>
           <div class="row">
             <div class="col-lg-3 project">
               Epicture
               <span class="badge badge-pill badge-danger pull-right notifinfo">1</span>
             </div>
             <div class="col-lg-3 project">
               Gomoku
             </div>
             <div class="col-lg-3 project">
               R-Type
               <span class="badge badge-pill badge-danger pull-right notifinfo">3</span>
             </div>
             <div class="col-lg-3 createProject">
               Create Project...
             </div>
           </div>
         </div>
       </div>

     </div>
  </div>
</template>

<script>
export default {
  methods: {
    accessProject(project) {
      this.$router.push({ path: `/dashboard/${project}` });
      // this.$router.push({ name: 'dashboard', params: { project } });
    }
  }
}
</script>

<style scoped>


.rowMargin {
	margin-top: 50px;
}

.project {
	margin-right: 20px;
	margin-top: 20px;
	margin-left: 20px;
	text-align: left;
	font-size: 18px;
	color: #ffffff;
	border-radius: 10px;
	padding-bottom: 50px;
	padding-top: 10px;
	position: relative;
  cursor: pointer;
  background-image: url('https://us.123rf.com/450wm/my123rf88/my123rf881704/my123rf88170400018/76773393-go-game-weiqi-chinese-board-game-or-background.jpg?ver=6');
  transition: .5s ease;
}
.project:hover {
  filter: brightness(70%);
}


.titleProject {
  font-family: Roboto;
	font-size: 27px;
	color: #000000;
	text-align: left;
}
.createProject {
	margin-right: 20px;
	margin-top: 20px;
	margin-left: 20px;
	text-align: center;
	background-color: lightgreen;
	font-size: 18px;
	color: #ffffff;
	border: 2px solid lightgreen;
	border-radius: 10px;
	padding-bottom: 30px;
	padding-top: 30px;
}

.notifinfo {
	position: absolute;
	right: -8px;
	top: -8px;
}

</style>
