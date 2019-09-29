<template>
  <div id="show">
    <h1>账号登录</h1>
    <form id="reg" action="#" method="post">
      <br />
      <br />
      <div class="reg_info">
        <span class="info_name">用户名</span>
        <input v-model="username" type="text" placeholder="请输入用户名" id="username" />
      </div>
      <div class="reg_info">
        <span class="info_name">密码</span>
        <input v-model="password" type="password" placeholder="请输入登录密码" id="userpwd" />
      </div>

      <div @click="login()" class="goLogin">
        <h3>></h3>
      </div>
    </form>
    <div class="tag">
      <a @click="goRegister()">·账号注册·</a>
      <a @click="goBack()">返回·</a>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "loginpage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goBack() {
      history.back(-1);
    },
    login() {
      // console.log(this.username);
      // console.log(this.password);
      var obj = qs.stringify({
        username: this.username,
        password: this.password
      });
      // console.log(obj);
      this.axios
        .post("http://115.29.42.191:8001/wp-json/jwt-auth/v1/token", obj)
        .then(res => {
          if ((res.status = true)) {
            alert("登陆成功");

            localStorage.setItem("token", res.token);

            this.$router.push("/");
          } else {
            alert("登录失败,请检查您的用户密码是否正确");
          }
        });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  color: #f8595a;
  text-align: center;
}
body {
  font-family: 微软雅黑;
}
#show {
  margin-top: 300px;

  width: 100%;
  height: 100%;
  /* background: red; */
  margin: 0 auto;
  margin-top: 80px;

  position: absolute;

  background: #fff;
}
#reg {
  height: 300px;
  width: 100%;
}
/* input框 */
#reg .reg_info {
  margin-left: 30px;
  height: 50px;

  margin-bottom: 10px;
  margin-top: 10px;
}
.reg_info > .info_name {
  width: 80px;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-weight: bold;
  /*border: 1px solid #F00;*/
  float: left;
  text-align: right;
  margin-right: 3px;
}
.reg_info > input {
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  font-size: 16px;
  left: 50%;
  margin-left: -60px;
  position: absolute;
}
.reg_info > input:focus {
  outline: none;
  border-color: #488ee7;
}
/* 按钮 */
.goLogin {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: gainsboro;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 300px;
  text-align: center;
  line-height: 70px;
  font-size: 50px;
}
h3 {
  color: #f4f5f6;
}
.tag {
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  font-size: 14px;
  text-decoration: none;
  color: #ccc;
  top: 500px;
}
</style>