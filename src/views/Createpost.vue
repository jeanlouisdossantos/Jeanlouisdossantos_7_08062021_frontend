<template>
  <form action="" method="post" name="createonepost" id="createonepost" enctype="multipart/form-data">
    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="title" type="text" v-model="title" name="title"/>
        <label for="title">Le titre de votre article</label>
      </span>
    </div>

    <div class="inputfield">
      <span class="p-float-label">
        <InputText id="content" type="text" v-model="content" name="content" />
        <label for="content">Votre contenu</label>
      </span>
    </div>

    <div class="inputfield">
      <input type="file" ref="file" @change="onfilechange" name="file">
    </div>

    <div class="inputfield">
      <Button label="Envoyer" @click="createOnePost" />
    </div>
  </form>

</template>

<script>
import { createOnePost } from "../api/post.api";
import store from "../store";

export default {
  data() {
    return {
      title: null,
      content: null,
      file: null,
    };
  },
  methods: {
    createOnePost() {
      const postform = new FormData()
      postform.append("title", this.title)
      postform.append("content", this.content)
      postform.append("file", this.file)
      const post = {}
      const token = store.state.token;
      post.title = this.title
      post.content = this.content
      post.file = this.file
      console.log(postform)
    
      createOnePost(postform, token)
        .then(response => {
          console.log(response)
          this.$router.push("/")})
        .catch((error) => console.log(error));
    },
    onfilechange(){
      this.file = this.$refs.file.files[0];
      
    }
  },
};
</script>

<style scoped>
.inputfield {
  width: 200px;
  margin: 30px auto;
}
</style>