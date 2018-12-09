<template>
  <v-toolbar
    color="blue-grey darken-4"
    dark
    app
    >

    <img :src="computeLogo" height="36" alt="">
    <v-toolbar-title class="ml-0 pl-3">
      <span class="hidden-sm-and-down">GiTask Developper</span>
    </v-toolbar-title>

    <v-text-field
      flat
      solo
      light
      color="white"
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down textbar"
      >
      </v-text-field>

    <v-spacer></v-spacer>

    <v-menu offset-y origin="center center" class="elelvation-1 icons" :nudge-bottom="14" transition="scale-transition">
      <v-btn icon flat slot="activator">
        <v-badge color="red" overlap>
          <span slot="badge">3</span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>
      <notification-list></notification-list>
    </v-menu>


    <div class="cash icons" @click="cashMoney()">
      <span style="fontSize: 18px">0,00</span>
      <v-btn icon>
          <v-icon medium>monetization_on</v-icon>
      </v-btn>
    </div>

    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="https://randomuser.me/api/portraits/women/13.jpg" alt="Michael Wang"/>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
import NotificationList from './NotificationList';
//import Idea from "../assets/idea.svg";
import Computer from "../assets/computer.svg";

export default {
  components: {
    NotificationList
  },
  data: () => ({
    items: [
      {
        icon: 'account_circle',
        href: '#',
        title: 'Profile',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        }
      },
      {
        icon: 'settings',
        href: '#',
        title: 'Settings',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        }
      },
      {
        icon: 'exit_to_app',
        href: '#',
        title: 'Logout',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
          //window.getApp.$emit('APP_LOGOUT');
        }
      }
    ]
  }),
  computed: {
    computeLogo () {
      // return Computer ? idea
      return Computer;
    }
  },
  methods: {
    cashMoney() {
      // eslint-disable-next-line
      console.log('cash')
      //router redirect
    }
  }
};
</script>

<style scoped>
.cash {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
}
.textbar {
  margin-top: 7px;
  margin-left: 50px;
}
.icons {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
