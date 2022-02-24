<template>
<div class="welcome">
  <h2>Bienvenue</h2>
  <br>
  <img :src="companylogo" alt="Logo de groupomania">
</div>

  <div class="container">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="name" type="text" v-model="name" />
        <label for="name">Votre nom</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="firstname" type="text" v-model="firstname" />
        <label for="firstname">Votre prénom</label>
      </span>
    </div>
    <!-- date de naissance -->
    <div class="inputfield">
      <span class="p-float-label">
        <Calendar id="birthdate" v-model="birthdate" dateFormat="dd.mm.yy" />
        <Label for="birthdate"> Votre date de naissance</Label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="email" type="text" v-model="email" />
        <label for="email">Votre adresse mail</label>
      </span>
      <Message severity="error" v-if="incorrectmail"
        >Format Email incorrect</Message
      >
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="text" v-model="password" />
        <label for="password">Votre mot de passe</label>
        
      </span>
       <Message severity="error" v-if="incorrectpassword.oneLowercase"
        >doit contenir une lettre minuscule</Message
      >
         <Message severity="error" v-if="incorrectpassword.oneUppercase"
        >doit contenir une lettre Majuscule</Message
      >
         <Message severity="error" v-if="incorrectpassword.oneNumber"
        >doit contenir un chiffre</Message
      >
    </div>
    <div>
      <Button
        label="Envoyer"
        icon="pi pi-check"
        iconPos="right"
        @click="onvalidatebuttonclicked"
      />
    </div>
  </div>
</template>

<script>
import { signup } from "../api/auth.api";
import companylogo from "../assets/groupomania.png"

export default {
  data() {
    return {
      companylogo: companylogo,
      name: null,
      firstname: null,
      birthdate: null,
      email: null,
      password: null,
      incorrectmail: null,
      incorrectpassword: {
        oneLowercase: true,
        oneUppercase: true,
        oneNumber: true,
      },
    };
  },
  methods: {
    onvalidatebuttonclicked() {
      // controle coherence adresse mail
      const emailregex = /[a-z0-9.]+@[a-z]+.[a-z]{2,3}/i;

      if (!emailregex.test(this.email)) {
         (this.incorrectmail = true);
      }

      // controle cohérence mdp
      const hasonelowercase = /[a-z]/;
      const hasOneUpperCase = /[A-Z]/;
      const hasOneNumber = /[0-9]/;

      this.incorrectpassword.oneLowercase = !hasonelowercase.test(this.password);
      this.incorrectpassword.oneUppercase = !hasOneUpperCase.test(this.password);
      this.incorrectpassword.oneNumber = !hasOneNumber.test(this.password);

      const usersubscribing = {};
      usersubscribing.name = this.name;
      usersubscribing.firstname = this.firstname;
      usersubscribing.birthdate = this.birthdate;
      usersubscribing.email = this.email;
      usersubscribing.password = this.password;
      signup(usersubscribing)
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch(console.log("erreur"));
    },
  },
};
</script>

<style scoped>
.container {
  border: 2px red dotted;
  border-radius: 10px;
  margin: 20px;
}
.inputfield {
  width: 200px;
  margin: 30px auto;
}
.p-inputtext {
  width: 200px;
}
</style>
