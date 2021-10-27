<template>
  <div id="maincontainer" class="test">
    <Card
      class="card"
      v-for="post in posts"
      :key="post.postid"
      id="post.postid"
    >
      <template #header>
        <img id="defaultlogo" alt="company logo" :src="companylogo" />
        <img :src="post.imageurl" alt="" />
      </template>
      <template #title>
        <p>{{ post.title }}</p>
      </template>
      <template #content>
        {{ post.content }}
      </template>
      <template #footer>
        <Card
          id="commentcard"
          v-for="comment in post.comment"
          :key="comment.id"
        >
          <template #content style="margin-left: 40px">
            <div class="commentaire">
              <p>{{ comment.content }}</p>
            </div>
            <div class="user">
              <p>commentaire de {{ comment.User.user }}</p>
            </div>
          </template>
        </Card>

        <!-- ENglober cela dans un formulaire -->

        <div class="commentaire">
          <h2>Ajouter un commentaire à ce post</h2>
          <div class="container">
            <div class="inputfield">
              <span class="p-float-label">
                <InputText
                  id="commentcontent"
                  type="text"
                  v-model="commentcontent"
                />
                <label for="name">Votre commentaire : </label>
              </span>
            </div>

            <Button
              label="Poster le commentaire"
              @click="createOneComment($event, post.postid)"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import companylogo from "../assets/groupomania.png";
import { getAllPost, createOneComment } from "../api/post.api";
import store from "../store";

export default {
  data() {
    return {
      companylogo: companylogo,
      posts: [],
      commentcontent: null,
    };
  },
  name: "test",
  methods: {
    createOneComment(event, postid) {
      const comment = {};
      comment.content = this.commentcontent;
      comment.post_id = postid;
      const token = store.state.token;

      createOneComment(comment, token)
        .then(() => {this.$router.replace("/");
        })
        .catch((error) => console.log(error));
    },
  },

  created() {
    getAllPost().then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
}
#maincontainer {
  margin-top: 20px;
}
#commentcard {
  margin-left: 40px;
}
#defaultlogo {
  margin-top: 30px;
  width: 120px;
}
</style>
