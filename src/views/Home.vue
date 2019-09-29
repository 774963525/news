<template>
  <div class="home">
    <Head></Head>

    <div class="nav_for">
      <Nav v-for="data in catesList" :cates="data" @click="chooseCates"></Nav>
    </div>

    <div class="main">
      <Main v-for="item in newsList" :news="item" @click="goDetail"></Main>
      <br />
      <br />
      <br />
      <br />
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Foot from "../components/Foot";
export default {
  name: "home",
  components: {
    Head,
    Nav,
    Main,
    Foot
  },
  data() {
    return {
      newsList: {},
      catesList: []
    };
  },
  methods: {
    // 去新闻详细页
    goDetail(news_id) {
      this.$router.push({ path: "/detail", query: { newsId: news_id } });
    },
    // 选择新闻详情页
    chooseCates(cates_id) {
      // 接收到组件传来的值 明确cates的id 将id发给main组件
      // console.log('id为'+cates_id+"的按钮被点击了");

      // 将数据发送给main组件显示
      this.showDiffereceNews(cates_id);
    },
    // 获得默认新闻 id=1
    showDefaultNews() {
      this.axios
        .get(
          "http://115.29.42.191:8001/wp-json/wp/v2/posts?page=1&per_page=20&categories=1"
        )
        .then(res => {
          console.log(res.data);
          this.newsList = res.data;
        });
    },
    // 去特定的新闻页
    showDiffereceNews(id) {
      this.axios
        .get(
          "http://115.29.42.191:8001/wp-json/wp/v2/posts?page=1&per_page=20&categories=" +
            id
        )
        .then(res => {
          this.newsList = res.data;
        });
    },
    // 明了选择新闻分类
    getCates() {
      this.axios
        .get("http://115.29.42.191:8001/wp-json/wp/v2/categories")
        .then(res => {
          this.catesList = res.data;
        });
    }
  },
  mounted() {
    this.showDefaultNews();
    this.getCates();
  }
};
</script>>
<style scoped>
.nav_for {
  margin-top: 50px;
  width: 100%;
  display: inline;
  float: left;
  height: 30px;

  background: #f4f5f6;
  position: fixed;
}
.main {
  margin-top: 80px;
  position: absolute;
  z-index: -1;
}
</style>


