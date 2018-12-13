<template>
  <v-toolbar
    app
    >

    <v-flex xs12 sm6 lg3>
          <v-text-field
            class="my-search-bar"
            color="#364F6B"
            label="Append"
            append-icon="search"
            single-line
            placeholder="Search"
            solo>
          </v-text-field>
    </v-flex>

    <v-spacer></v-spacer>

    <v-menu offset-y origin="center center" class="elelvation-1 icons" :nudge-bottom="14" transition="scale-transition">
      <v-btn icon flat slot="activator" class="my-dropdown">
        <v-badge color="red" overlap  >
          <span slot="badge">3</span>
          <v-icon medium color="#364F6B">notifications</v-icon>
        </v-badge>
      </v-btn>
      <notification-list></notification-list>
    </v-menu>

    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator" class="my-dropdown">
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
    showSearchBar: true,
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

<style>
.icons {
  margin-left: 10px;
  margin-right: 10px;
}
.my-search-bar {
  margin-top: 5px !important;
}
.v-input__control {
  min-height: 32px !important;
  max-width: 230px !important;
}
.v-input__slot {
  border-radius: 50px !important;
  box-shadow: 0px 0px 15px rgba(20, 68, 121, 0.283684) !important;
}
.v-text-field__slot {
  margin-left: 10px;
}


.my-dropdown:focus, .my-dropdown:focus{
    outline: none;
}

</style>
