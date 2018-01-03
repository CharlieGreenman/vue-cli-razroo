<div>This is the show hide part of the app.</div>

<button (click)="toggle$.next()" class="button">toggle</button>

<script>
export default {
  name: 'ShowHide',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
