<template>
  <div>
    <span class="like" :class="{ green: hasliked }" @click="likepost"
      ><i class="fas fa-thumbs-up"></i
    ></span>
    <span class="countnumber">{{ likescount }}</span>
    <span class="like" :class="{ red: hasdisliked }" @click="dislikepost"
      ><i class="fas fa-thumbs-down"></i
    ></span>
  </div>
</template>

<script>
import store from "../store";
import { createlike, deletelike, getlikes } from "../api/like.api";
export default {
  data() {
    return {
      likesdata: this.likesarray,
      userid: store.state.userid,
    };
  },
  methods: {
    likepost: function() {
      if (this.hasliked) {
        deletelike(
          { userid: store.state.userid, type: "LIKE", postid: this.postid },
          store.state.token
        );
      } else {
        createlike(
          { userid: store.state.userid, type: "LIKE", postid: this.postid },
          store.state.token
        );
      }
      // this.$emit("refresh");
      getlikes(this.postid, store.state.userid).then((likes) => {
        this.likesdata = likes.data.like;
      });
      this.count = this.likesdata.length;
    },
    dislikepost: function() {
      if (this.hasdisliked) {
        /**delete dislike */
        deletelike(
          { userid: store.state.userid, type: "DISLIKE", postid: this.postid },
          store.state.token
        );
      } else {
        /**create dislike */
        createlike(
          { userid: store.state.userid, type: "DISLIKE", postid: this.postid },
          store.state.token
        );
      }
      // this.$emit("refresh");
      getlikes(this.postid, store.state.userid).then((likes) => {
        this.likesdata = likes.data.like;
      });
      this.count = this.likescount;
    },
  },
  props: ["likesarray", "postid"],

  computed: {
    hasliked: function() {
      return (
        this.likesdata.filter(
          (likes) => likes.userid == this.userid && likes.type == "LIKE"
        ).length >= 1
      );
    },
    hasdisliked: function() {
      return (
        this.likesdata.filter(
          (likes) => likes.userid == this.userid && likes.type == "DISLIKE"
        ).length >= 1
      );
    },
    likescount: function() {
      return (
        this.likesdata.filter((likes) => likes.type == "LIKE").length -
        this.likesdata.filter((likes) => likes.type == "DISLIKE").length
      );
    },
  },
};
</script>
<style scoped>
.like{
  font-size: 2rem
}
.green {
  color: green;
  font-size: 2rem;
}
.red {
  color: red;
  font-size: 2rem;
}

.countnumber{
  font-size: 2rem;
  margin : 0 15px;
}
</style>
