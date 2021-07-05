<template>


  <div class="container">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="username" />
        <label for="username">Username</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="password" type="text" v-model="password" />
        <label for="password">Password</label>
      </span>
    </div>

    <Button label="Envoyer" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script>
// import Button from "primevue/button";
export default {
  
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>

.inputfield {
  width: 150px;
  margin : 30px auto
}
</style>