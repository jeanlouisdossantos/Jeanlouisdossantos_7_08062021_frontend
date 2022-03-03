<template>
  <!-- englober dans une balsie form -->
<div class="welcome">
  <h2>Bienvenue</h2>
  <br>
  <img :src="companylogo" alt="Logo de groupomania">
</div>


  <div class="container">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="username" />
        <label for="username">Votre nom d'utilisateur</label>
      </span>
      <Message severity="error" v-if="errormessage">Login obligatoire</Message>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="password" v-model="password" />
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
import companylogo from "../assets/groupomania.png"

export default {
  data() {
    return {
      companylogo: companylogo,
      username: null,
      password: null,
      errormessage: false,
    };
  },
  methods: {
    onvalidatebuttonclicked() {
      const userlogin = {};
      userlogin.email = this.username;
      userlogin.password = this.password;
      if(this.username===null){this.errormessage=true}

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
@keyframes rotation {
  to {transform: rotate3d(0,1,0,360deg);;}
}

img{
  animation: rotation 1s ease-in 0.3s ;
}

input{
  height: 80px
}
.inputfield {
  width: 150px;
  height: auto;
  margin: 30px auto;
}

.inputfield div{
  width: 140%
}
</style>
