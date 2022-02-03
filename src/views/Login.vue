<template>
  <!-- englober dans une balsie form -->
  <div class="container">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="username" />
        <label for="username">Votre nom d'utilisateur</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="text" v-model="password" />
        <label for="password">Mot de passe</label>
      </span>
    </div>

    <Button
      label="Envoyer"
      icon="pi pi-check"
      iconPos="right"
      @click="onvalidatebuttonclicked"
    />
  </div>
</template>

<script>
import { login } from "../api/auth.api";
// import Button from "primevue/button";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onvalidatebuttonclicked() {
      const userlogin = {};
      userlogin.email = this.username;
      userlogin.password = this.password;

      login(userlogin)
        .then((re) => {
          const datastore = {};
          datastore.token = re.data.token;
          datastore.isadmin = re.data.isAdmin;
          datastore.userid = re.data.userId;
          this.$store.commit("login", datastore);
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.inputfield {
  width: 150px;
  margin: 30px auto;
}
</style>
