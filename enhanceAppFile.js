import Fiddle from './components/fiddle.vue'
import Shrink from './components/shrink.vue'

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component('fiddle', Fiddle)
  Vue.component('shrink', Shrink)
}