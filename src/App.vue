<template>
  <div id="nav">
    <div class="navlist">
      <router-link to="/login" v-if="!token">Connexion | </router-link>
      <router-link to="/signup" v-if="!token">Inscription | </router-link>
      <router-link to="/" v-if="token">Voir les post | </router-link>
      <router-link to="/about">A propos | </router-link>
      <router-link to="/User" v-if="token">User | </router-link>
    </div>

    <div class="createPost">
      <router-link to="/createpost" v-if="token">
        <div class="create-post-text" v-if="token">Créé un Post</div>
        <Button v-if="token" label="" icon="pi pi-plus" iconPos="right" />
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
import {  mapState, mapGetters } from "vuex";


export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  computed : {...mapState(["token"]),  ...mapGetters(["isLogged", "isLogged"]) },  
 
}
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
.navlist {
  display: flex;
  align-items: center;
}
.navlist > a {
  vertical-align: middle;
}
.createPost > a {
  display: flex;
}
.create-post-text {
  visibility: hidden;
  margin: auto 5px;
}
@media (min-width: 500px) {
  .create-post-text {
    visibility: visible;
  }
}
@media (max-width: 500px) {
  .navlist {
    flex-direction: column;
  }
  .createPost {
    display: flex;
    align-items: center;
  }

  .create-post-text {
    width: 0px;
  }
}
.createPost > a {
  height: 68px;
}
.logout {
  display: flex;
  align-items: center;
  padding: 10px;
}
.logout > button {
  height: 48px;
}
</style>
