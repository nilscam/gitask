<template>
  <v-navigation-drawer dark id="appDrawer" fixed permanent app :width="180">


    <div class="title-drawer">

      <img :src="computeLogo" class="app-logo">
      <div class="title-drawer-right">
        <span class="title-text">Gi<strong>Task</strong></span>
        <span class="mode-text">Developper</span>
      </div>

    </div>



    <div class="my-spacer"/>

    <div class="my-list-actions">
      <div class="my-row ripple" @click="HandleClick('flow')">
        <div class="my-btn-content">
          <svg :class="routeActive == 'flow' ? 'logo-active' : 'logo'" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve"><g><g><g><rect x="213.333" y="0" width="170.667" height="128"/><rect x="0" y="0" width="170.667" height="213.333"/><rect x="0" y="256" width="170.667" height="128"/><rect x="213.333" y="170.667" width="170.667" height="213.333"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <h5 class="text-menu">FLOW</h5>
        </div>
      </div>
      <div class="my-row ripple" @click="HandleClick('dashboard')">
        <div class="my-btn-content">
          <svg x="0px" y="0px" :class="routeActive == 'dashboard' ? 'logo-active' : 'logo'"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M435.143,129.356c-6.796-6.795-17.463-7.797-25.407-2.384c-29.926,20.398-180.03,122.969-196.162,139.1
				c-23.394,23.395-23.394,61.459,0,84.854c11.697,11.696,27.063,17.545,42.427,17.545c15.364,0,30.729-5.849,42.427-17.545
				c16.131-16.132,118.701-166.236,139.1-196.162C442.939,146.821,441.938,136.153,435.143,129.356z M270.142,322.641
				c-7.797,7.799-20.486,7.799-28.283,0c-7.798-7.797-7.799-20.482-0.004-28.28c6.268-6.194,48.885-36.588,101.319-73.035
				C306.728,273.76,276.334,316.375,270.142,322.641z"/><path d="M92.231,401.523l-24.69,12.044C49.475,381.325,40,345.338,40,308.499c0-26.991,4.977-52.842,14.06-76.683l28.291,13.57
				c2.79,1.338,5.735,1.972,8.636,1.972c7.453,0,14.608-4.185,18.047-11.355c4.776-9.959,0.576-21.906-9.384-26.683l-27.932-13.398
				c34.717-56.62,94.784-96.095,164.283-102.505v30.081c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V93.402
				c23.828,2.169,46.884,8.237,68.771,18.117c10.065,4.545,21.912,0.066,26.457-9.999c4.545-10.068,0.068-21.913-10-26.458
				C328.063,60.091,292.659,52.499,256,52.499c-68.38,0-132.667,26.628-181.02,74.98C26.629,175.832,0,240.119,0,308.499
				c0,50.53,14.998,99.674,43.373,142.115c3.822,5.715,10.141,8.886,16.639,8.886c2.954,0,5.946-0.655,8.757-2.026l41-20
				c9.928-4.843,14.05-16.816,9.207-26.744C114.133,400.803,102.159,396.682,92.231,401.523z"/><path d="M489.436,203.271c-4.544-10.067-16.387-14.547-26.458-10c-10.067,4.545-14.544,16.39-9.999,26.457
				C465.601,247.686,472,277.553,472,308.499c0,36.894-9.506,72.939-27.625,105.218l-25.777-12.275
				c-9.971-4.748-21.906-0.515-26.656,9.459c-4.749,9.972-0.514,21.907,9.459,26.656l42,20c2.763,1.315,5.692,1.944,8.588,1.944
				c6.5,0,12.82-3.175,16.637-8.886C497.002,408.173,512,359.029,512,308.499C512,271.84,504.408,236.436,489.436,203.271z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g></svg>
          <h5 class="text-menu">DASHBOARD</h5>
        </div>
      </div>
      <div class="my-row ripple" @click="HandleClick('profile')">
        <div class="my-btn-content">
          <svg :class="routeActive == 'profile' ? 'logo-active' : 'logo'" x="0px" y="0px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve"><g><g id="person"><path d="M204,204c56.1,0,102-45.9,102-102S260.1,0,204,0c-56.1,0-102,45.9-102,102S147.9,204,204,204z M204,255
			C135.15,255,0,288.15,0,357v51h408v-51C408,288.15,272.85,255,204,255z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          <h5 class="text-menu">PROFILE</h5>
        </div>
      </div>
    </div>

    <div class="my-spacer"/>


  </v-navigation-drawer>

</template>

<script>
import DashBoard from '../assets/icons/dashboard.svg'
import Person from '../assets/icons/person.svg'
import Flow from '../assets/icons/flow.svg'
import Logo from '../assets/icons/logo.svg'

export default {
  data() {
    return {
      routeActive: 'dashboard',
      routes: [
        'flow',
        'dashboard',
        'profile'
      ]
    }
  },
  methods: {
    HandleClick(routeName) {
      this.routeActive = routeName
      this.$router.push({ name: routeName });

    }
  },
  computed: {
    computeDashboard: () => DashBoard,
    computePerson: () => Person,
    computeFlow: () => Flow,
    computeLogo: () => Logo
  }
}
</script>

<style scoped>
#appDrawer {
  background-color: #364F6B;
  font-family: Lato;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title-drawer {
  padding: 20px;
  display: flex;
  width: 90%;
  flex-direction: row;
}
.title-drawer-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.title-text {
  font-size: 24px;
  margin-bottom: -5px;
}
.mode-text {
  font-size: 12px;
}













.my-list-actions {
  cursor: pointer;
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.my-spacer {
  flex: 1;
}

.my-row {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-btn-content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  /* fill: white; */
  fill: rgba(255, 255, 255, 0.5);
  width: 32px;
  height: 32px;
}
.logo-active {
  fill: rgba(255, 255, 255, 1);
  width: 42px;
  height: 42px;
}

.text-menu {
  padding-top: 5px;
  font-size: 12px;
}


















/* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #4a6079 radial-gradient(circle, transparent 1%, #4a6079 1%) center/80000%;
}
.ripple:active {
  background-color: #5e7288;
  background-size: 100%;
  transition: background 0s;
}


</style>
