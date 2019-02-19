<template>
  <v-card class="card">
    <v-layout row wrap>
      <v-flex lg-12>
        <i v-if="card.status != 'done'" class="material-icons deleteIcon">delete</i>
        <div class="cardTitle">{{card.title}}</div>
        <div class="cardDescription">{{card.desc}}</div>
        <div class="iconCenter">
          <span class="iconPad">
            <v-btn round outline color="teal" class="btn-langage">
              <span class="name-langage"># {{card.langage}}</span>
              <div style="width:5px;"></div>
              <img alt="Vue logo" src="../assets/logo.png" class="logo-langage">
            </v-btn>
          </span>
          <i class="material-icons iconsAlign">
            schedule
          </i>
          <span class="iconPad">
            15 dec
          </span>
          <i class="material-icons iconsAlign">
            monetization_on
          </i>
          <span class="iconPad">{{toDollar(card.amount)}}</span>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    card: Object
  },
  methods: {
    toDollar(amount) {
      return amount + '$'
    }
  }
}
</script>


<style scoped>

    .deleteIcon {
        color: #364F6B;
        font-size: 15px;
        float: right;
    }


    .cardTitle {
        font-weight: 500;
        font-size: 18px;
        color: #005587;
        padding-top: 15px;
    }

    .cardDescription {
        line-height: 14px;
        font-size: 14px;
        letter-spacing: 0.450484px;
        color: rgba(0, 0, 0, 0.87);
        padding-bottom: 7px;
    }

    .iconsAlign {
        vertical-align: middle;
    }

    .iconPad {
        padding-right: 23px;
    }

    .title {
        text-align: left;
        color: #364F6B;
        padding-bottom: 10px;
    }

    .listBorder {
        background-color: white;
        border: 2px solid white;
        border-radius: 7px;
        padding: 16px;
        height: 72vh;
        overflow: auto;
        margin-bottom: -10px;
    }

    .heightBorder {
        height: 77vh;
    }

    .main {
        padding: 35px;
    }

    .material-icons {
        color: #364F6B
    }

    .addButton {
        border-radius: 0px 0px 10px 10px;
        text-transform: none !important;
        height: 56px;
        color: white;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 18px;
    }

    .card {
        text-align: left;
        padding-left: 16px;
        padding-right: 8px;
        padding-bottom: 17px;
        padding-top: 8px;
    }

    .btn-langage {
      margin-top: 16px;
      height: 27px !important;
      padding-left: 11px !important;
      padding-right: 11px !important;
    }
    .name-langage {
      font-size: 12px;
      color: #5EA3A3;
    }
    .logo-langage {
      height: 15px;
      width: 15px;
    }

</style>
