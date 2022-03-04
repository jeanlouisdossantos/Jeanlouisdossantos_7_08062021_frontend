<template>
  <div id="maincontainer" class="test">
    <Card
      class="card"
      v-for="post in posts"
      :key="post.postid"
      id="post.postid"
    >
      <template #header class="header">
        <div class="post">
          <div class="header1">
            <img
              id="defaultlogo"
              alt="company logo"
              :src="companylogo"
              v-if="!post.imageurl"
            />
            <img
              :src="post.imageurl"
              alt=""
              class="imgcontainer"
              v-if="post.imageurl"
            />
          </div>
          <div class="header2">
            <p>{{ post.title }}</p>
            <span>{{ post.content }}</span>
          </div>
        </div>
        <div class="supprimmer">
          <Button
            label="Supprimer"
            @click="deleteOnePost(post.postid, post.user_id)"
            class="p-button-danger"
            v-if="isOwnPost(post.user_id)"
          />
        </div>
        <Likes
          :likesarray="post.like"
          :postid="post.postid"
          v-on:refresh="showrefresh"
        />
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
      deleteOnePost(posttodelete, token).then(
     () => {getAllPost().then((response) => {
            this.posts = response.data;
          })}
      );
    },
    isOwnPost: function(user) {
      return user == store.state.userid || store.state.isAdmin;
    },
    showrefresh() {
      getAllPost().then((response) => {
        this.posts = response.data;
      });
    },
  },

  created() {
    getAllPost().then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style>
.p-card .p-card-body {
  padding: 0px !important;
}
.p-card .p-card-content {
  padding: 2px !important;
}
</style>

<style scoped>
.header,
.post {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  min-height: 100px;
}
.header1 {
  width: 40%;
  min-width: 200px;
  border: 1px solid grey;
  border-radius: 10px;
}

.header2 {
  width: 40%;
  min-width: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header2 > p {
  color: rgb(66, 83, 179);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0px;
}
.header2 > span {
  font-size: 1.2rem;
  margin: 0px;
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
  width: 120px;

}
.imgcontainer {
  width: 200px;
  height: 100%;
  margin: auto;
}

div.commentaire > div > div {
  margin: 10px 0px;
}
.p-card-title p {
  margin: 5px;
}
.p-card,
.p-card-body {
  padding: 0px;
}
.p-button {
  margin: 10px 0px;
}

.p-card-content div:nth-child(2) {
  margin-top: 15px;
}

.p-card-footer .p-card {
  background: linear-gradient(#8eccff, #b4f1a1);
  padding: 0px;
  margin-top: 5px;
}

.p-card-footer div div {
  margin: 5px;
}
</style>
