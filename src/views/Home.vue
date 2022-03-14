<template>
  <div class="home">
    
         <Viewpost />
  </div>
</template>

<script>
// @ is an alias to /src

import Viewpost from '../components/viewpost.vue'
import store from "../store/index"
export default {
  store,
  name: 'Home',
  components: {
    Viewpost,
  }
}
</script>
