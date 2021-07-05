<template>
  <div class="home">
     <Testpostjl msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Testpostjl from '../components/testpostjl.vue'

export default {
  name: 'Home',
  components: {
    Testpostjl,
  }
}
</script>
