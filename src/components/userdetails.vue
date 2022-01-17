<template>
<div class="container">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="name" type="text" v-model.lazy="name" />
        <label for="name">Votre nom</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="firstname" type="text" v-model.lazy="firstname" />
        <label for="firstname">Votre prénom</label>
      </span>
    </div>
    <!-- date de naissance -->
    <div class="inputfield">
      <span class="p-float-label">
        <Calendar id="birthdate" v-model.lazy="birthdate" dateFormat="dd.mm.yy" />
        <Label for="birthdate"> Votre date de naissance</Label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="email" type="text" v-model="email" />
        <label for="email">Votre adresse mail</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="password" v-model="password" />
        <label for="password">Votre mot de passe</label>
      </span>
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

import { getUserDetails, updateUserDetails } from "../api/user.api"; 
import store from "../store";

export default {
  data() {
    return {
      user : null,
      name: null,
      firstname: null,
      birthdate:null,
      email : null,
      password : null,
      isAdmin : null

    };
  },
  methods : {
    onvalidatebuttonclicked() {
      const user = {name : "testmisajour",firstname : "testmisajour", password : this.password};
      updateUserDetails(store.state.token, user).then(
        this.$router.push("/")
      ).catch(error => console.log(error) )
      

      
    },
  },
  created(){getUserDetails(store.state.token).then(response=> {
    this.user = response.data
    this.name = response.data.name
    this.firstname = response.data.firstname
    this.birthdate = response.data.birthdate
    })}
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