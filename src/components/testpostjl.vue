<template>
  <div id="maincontainer" class="test">
    <Card
      class="card"
      v-for="post in posts"
      :key="post.postid"
      id="post.postid"
    >
      <template #header class="header">
        <img id="defaultlogo" alt="company logo" :src="companylogo" v-if="!post.imageurl" />
        <img :src="post.imageurl" alt="" class="imgcontainer" />

        <Likes :likesarray=post.like :postid=post.postid v-on:refresh="showrefresh" />


      </template>
      <template #title>
        <p>{{ post.title }}</p>
      </template>

      <template #content>
        {{ post.content }}

        <div class="supprimmer">
          <Button
            label="Supprimer"
            @click="deleteOnePost(post.postid, post.user_id)"
            class="p-button-danger"
            v-if="isOwnPost(post.user_id)"
          />
        </div>
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
import { getAllPost, createOneComment, deleteOnePost } from "../api/post.api";
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
        .then(() => {
          this.$router.push("/");
          getAllPost().then((response) => {
            this.posts = response.data;
          });
          this.commentcontent = null;
        })
        .catch((error) => console.log(error));
    },
    deleteOnePost(postid) {
      const posttodelete = postid;
      const token = store.state.token;
      deleteOnePost(posttodelete, token);
    },
    isOwnPost: function(user) {
      return user == store.state.userid || store.state.isAdmin;
    },
    showrefresh(){ 
      console.log("refreshed")
    getAllPost().then((response) => {
      this.posts = response.data;
      console.log(this.posts);
    })  
      
      }
  },

  created() {
    getAllPost().then((response) => {
      this.posts = response.data;
      console.log(this.posts);
    });
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: column wrap;
}
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
.imgcontainer {
  width: 200px;
}

div.commentaire > div > div{
  margin : 10px 0px
}
</style>
