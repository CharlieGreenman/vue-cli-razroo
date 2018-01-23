<template>
  <div>
    This is the show hide part of the app.
    <button v-on:click="trigger" class="button">toggle</button>
    {{ msg }}
  </div>
</template>

<script lang ="ts">
export default {
  name: 'ShowHide',
  data () {
    return {
      msg: 'This is the showHide component'
    }
  },
  methods: {
    trigger: function (event) {
      console.log('trigger called')
    }
  }
}
</script>

<style scoped>
  .button {
    height: 50px;
    width: 100px;
    background: black;
    color: white;
  }
</style>
