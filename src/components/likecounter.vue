<template>
  <div>
    <h2>Compteur de like</h2>
    <span :class="{ green: hasliked }" @click="likepost"
      ><i class="fas fa-thumbs-up"></i
    ></span>
    <span>{{ count}}{{ likesarray}}</span>
    <span :class="{ red: hasdisliked }" @click="dislikepost"
      ><i class="fas fa-thumbs-down"></i
    ></span>
  </div>
</template>

<script>
import store from "../store";
import { createlike, deletelike } from "../api/like.api";
export default {
  data() {
    return {
      count: this.likesarray.length,
      userid: store.state.userid,
    };
  },
  methods: {
    
    likepost: function() {
      if (this.hasliked) {
        /**delete like */
        deletelike(
          { userid: store.state.userid, type: "LIKE", postid: this.postid },
          store.state.token
        );
      } else {
        /**create like */
        createlike(
          { userid: store.state.userid, type: "LIKE", postid: this.postid },
          store.state.token
        );
        
        

      }
      this.$emit("refresh")
      
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
      this.$emit("refresh")
      
    },
  },
  props: ["likesarray", "postid"],
  
  computed: {
    hasliked: function() {
      return (
        this.likesarray.filter(
          (likes) => likes.userid == this.userid && likes.type == "LIKE"
        ).length >= 1
      );
    },
    hasdisliked: function() {
      return (
        this.likesarray.filter(
          (likes) => likes.userid == this.userid && likes.type == "DISLIKE"
        ).length >= 1
      );
    },
  },
};
</script>
<style scoped>
.green {
  color: green;
  font-size: 24px;
}
.red {
  color: red;
  font-size: 24px;
}
</style>
