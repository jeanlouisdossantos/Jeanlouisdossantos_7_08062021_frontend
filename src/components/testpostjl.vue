<template>

  <div id="maincontainer" class="test">
    <Card>
      <template #header>
        <img
          id="defaultlogo"
          alt="company logo"
          :src="companylogo"
          v-if="(posts[0].imageurl = 'bla')"
        />
        <img src="" alt="" v-else />
      </template>
      <template #title>
        <p>{{ posts[0].title }}</p>
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </template>
      <template #footer>
        <Card id="commentcard">
          <template #content style="margin-left: 40px">
            <h4>COmmentaire 1</h4>
            <p>comentaire 1 blablabla</p>
          </template>
        </Card>
      </template>
    </Card>
  </div>
</template>

<script>
import companylogo from "../assets/groupomania.png";

export default {
  data() {
    return {
      companylogo: companylogo,
      message1: "message1",
      text: "test",
      posts: [
        {
          postid: 2,
          user_id: 2,
          title: "test 2",
          content: "test 2",
          imageurl: "bla",
          created_at: "2021-06-30T21:43:46.000Z",
          like: [],
        },
      ],
    };
  },
  name: "test",
  props: ["message"],
  methods: {
    alert: () => {
      alert(this.text);
    },
  },
};
</script>

<style scoped>
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