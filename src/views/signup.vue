<template>
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
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="text" v-model="password" />
        <label for="password">Votre mot de passe</label>
      </span>
    </div>
  </div>
</template>

<script>

// import {signup} from "../api/auth.api";

export default {
  data() {
    return {
      name: null,
      firstmane: null,
      birthdate: null,
      email: null,
      password: null,
    };

  },
  methods : {onvalidatebuttonclicked (){

  } } 
};
</script>

<style scoped>

.container{
    border: 2px red dotted;
    border-radius: 10px;
    margin : 20px


}
.inputfield {
  width: 200px;
  margin: 30px auto;
}
.p-inputtext{
    width: 200px
}
</style>