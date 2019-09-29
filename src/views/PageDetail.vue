<template>
  <div class="detailPage">
    <div class="bar">
      <div class="return">
        <b @click="goBack()"><</b>
      </div>
      <div class="title">
        <b>今日头条</b>
      </div>
      <div class="other">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <!-- 新闻内容 -->
    <div class="newsContent">
      <h3>
        <b>{{news.title.rendered}}</b>
      </h3>
      <hr />

      <div v-html="news.content.rendered" class="detail_content"></div>
    </div>
    <!-- 评论 -->
    <br />
    <div class="time" v-model="time">评论总数: {{time}}</div>
    <div v-for="comment in commentList">
      <div class="showNewsComment" v-if="commentList.length!=0">
        <img style="width:10%" :src="pic" />
        <a>{{comment.author_name}}</a>
        <br />
        <hr />
        <div class="comment_content" v-html="comment.content.rendered"></div>
      </div>
    </div>

    <!-- 弹出窗口 -->
    <div v-if="active" class="publish">
      <div class="import">
        <input v-model="user_comment" type="text" placeholder="优质评论将会被优先展示" />

        <div class="submit">
          <span @click="sendComment()">发布</span>
        </div>
      </div>
      <div class="import_buttons" style="margin-top:10px;">
        <div class="checkbox">
          <input type="checkbox" />
          <span>同时转发</span>
        </div>

        <div class="other">
          <span>@</span>
          <span>#</span>
          <span>😁</span>
        </div>
      </div>
    </div>
    <div class="userControl">
      <div @click="showComment()" class="comment">
        <i class="iconfont icon-icon_xie"></i>
        <!-- <input  placeholder='写评论...'> -->
        写评论...
      </div>
      <div class="buttons">
        <i class="iconfont icon-pinglun1"></i>
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-dianzan"></i>
        <i class="iconfont icon-zhuanfa"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      news: {
        id: "",
        content: {
          rendered: ""
        },
        title: {
          rendered: ""
        }
      },
      active: false,
      changeColor: true,
      commentList: [],
      post: "",
      pic: "showNewsComment",
      time: 0,
      user_comment: ""
    };
  },
  methods: {
    // 提交评论
    sendComment() {
      let newsId = this.$route.query.newsId;
      let token = localStorage.getItem("token");
      console.log(token);
      console.log(newsId);
      var obj = {
        content: this.user_comment,
        post: newsId
      };
      if (token == null) {
        alert("请先登录您的账号");
      } else {
        console.log(this.user_comment);
        this.axios
          .post("http://115.29.42.191:8001/wp-json/wp/v2/comments", obj, {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer " + token
            }
          })
          .then(res => {
            if (res.status == 201) {
              console.log("评论发送成功");
              location.reload();
            } else {
              alert("评论失败");
            }
          });
      }
    },
    goBack() {
      history.back(-1);
    },
    // 点击写评论弹出评论窗口,再点关闭
    showComment() {
      if (this.active == false) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
    // 显示文章评论
    showNewsComment(newsId) {
      this.axios
        .get("http://115.29.42.191:8001/wp-json/wp/v2/comments")
        .then(res => {
          // console.log(res.length);
          // for循环判断 如果下标为i的res 的post与新闻id相同,才把它放入数组
          var comment = res.data;
          for (let i = 0; i < comment.length; i++) {
            if (comment[i].post == newsId) {
              this.time++;
              // this.commentList = res[i];
              this.commentList.push(comment[i]);

              this.pic = comment[i].author_avatar_urls[24];
            }
          }
        });
    }
  },
  mounted() {
    var newsId = this.$route.query.newsId;
    //
    // console.log(newsId);
    this.axios
      .get("http://115.29.42.191:8001/wp-json/wp/v2/posts/" + newsId)
      .then(res => {
        this.news = res.data;
      });

    this.showNewsComment(newsId);
  }
};
</script>
<style scoped>
.detailPage {
  background: #f4f5f6;
}
.bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #f4f5f6;
  border-bottom: 1px solid gainsboro;
  color: #595959;
  display: flex;
  justify-content: space-between;
}
.bar i {
  font-size: 20px;
  margin-right: 15px;
}
.title b {
  position: absolute;
  left: 50%;
  width: 80px;
  margin-left: -40px;
}
.newsContent {
  /* position: absolute; */
  width: 90%;
  margin-left: 15px;

  border: 1px solid #595959;
}

.detailPage {
  width: 100%;
}
.detail_content {
  width: 100%;
}
.userControl {
  height: 30px;
  position: fixed;
  background: white;
  width: 100%;
  bottom: 0px;
  display: flex;
  /* justify-content:space-between; */
}
.comment {
  margin-left: 10px;
  /* width:60px; */
  flex: 1;
  font-size: 14px;
  /* border: 1px solid black; */
  border-radius: 20px;
  margin-bottom: 5px;
  background: #f4f5f6;
}
.comment i {
  font-size: 12px;
  margin-left: 10px;
}
.comment input {
  width: 80%;
  flex: 1;
  margin-left: 10px;
  background: #f4f5f6;
  outline: none;
  border-style: none;
}
.buttons i {
  flex: 1;
  font-size: 24px;
  padding: 11px;
}
.publish {
  height: 110px;
  width: 100%;
  z-index: 300;
  background: white;
  position: fixed;

  bottom: 50px;
}
.import {
  display: flex;
  vertical-align: middle;
}
.import input {
  height: 30px;
  margin-left: 10px;
  margin-top: 15px;
  flex: 5;
  background: #f4f5f6;

  color: #595959;
  border-radius: 10px;
  outline: none;
  border: none;
}
.import .submit {
  margin-top: 10px;
  margin-left: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 20px;
}
/* 评论区 */
.showNewsComment {
  width: 90%;
  margin-left: 5%;
  border: 1px solid #ccc;
  margin-top: 50px;
}
.showNewsComment a {
  text-decoration: none;
  color: #595959;
  margin-left: 10px;
  /* display: block; */
  height: 100%;
}
.comment_content {
  margin-left: 40px;
}
.time {
  margin-left: 5%;
}
.import_buttons div {
  display: inline;
}

.checkbox input {
  margin-left: 10px;
}
.checkbox span {
  height: 100%;

  align-items: center;
  font-size: 12px;
  margin-left: 10px;
}
.import_buttons .other {
  /* padding-right: 3px; */
  position: absolute;
  right: 8px;
}
.import_buttons .other span {
  margin-right: 10px;
}
</style>