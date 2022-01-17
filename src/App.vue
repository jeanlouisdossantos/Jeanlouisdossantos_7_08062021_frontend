<template>
  <div id="nav">
    <div class="navlist">
      <router-link to="/login">Connexion | </router-link>
      <router-link to="/signup">Inscription | </router-link>
      <router-link to="/" v-if="token">Voir les post | </router-link>
      <router-link to="/about">A propos | </router-link>
      <router-link to="/User" v-if="token" >User | </router-link>
    </div>

    <div class="createPost">
      <router-link to="/createpost" v-if="token">
        <Button
          v-if="token"
          label="Créer un nouveau post"
          icon="pi pi-power-off"
          iconPos="right"
        />
      </router-link>
    </div>

    <div class="logout">
      <Button
        v-if="token"
        label=""
        icon="pi pi-power-off"
        iconPos="right"
        @click="logout"
      />
    </div>
  </div>

  <router-view />
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  computed: { ...mapState(["token"]),
  ...mapGetters(['isLogged', 'isLogged'])
               },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
