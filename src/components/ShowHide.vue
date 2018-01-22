<div>This is the show hide part of the app.</div>

<button (v-on:click="trigger") class="button">toggle</button>

{{ msg }}

<script>
export default {
  name: 'ShowHide',
  data () {
    return {
      msg: 'This is the showHide component'
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
