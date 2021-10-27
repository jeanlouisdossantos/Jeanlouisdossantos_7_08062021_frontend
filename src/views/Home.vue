<template>
  <div class="home">
    
         <Testpostjl />
  </div>
</template>

<script>
// @ is an alias to /src

import Testpostjl from '../components/testpostjl.vue'
import store from "../store/index"
export default {
  store,
  name: 'Home',
  components: {
    Testpostjl,
  },
  computed: {
    messageBienvenue (){
      return this.$store.state.message
    }
  }
}
</script>
