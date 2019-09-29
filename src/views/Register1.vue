<template>
  <div id="show">
    <h1>账号注册</h1>
    <form id="reg" action="#" method="post">
      <br />
      <br />
      <div class="reg_info">
        <span class="info_name">用户名</span>
        <input v-model="username" type="text" placeholder="请设置用户名" id="username" />
      </div>
      <div class="reg_info">
        <span class="info_name">密码</span>
        <input v-model="password1" type="password" placeholder="请设置登录密码" id="userpwd" />
      </div>
      <div class="reg_info">
        <span class="info_name">确认密码</span>
        <input v-model="password2" type="password" id="userpwd2" placeholder="请输入确认密码" />
      </div>
      <!-- <input type="submit" value="注册">	 -->
      <div @click="goReg()" class="goLogin">
        <h3>></h3>
      </div>
    </form>
    <div class="tag">
      <a @click="goLogin()">·密码登录·</a>
      <a @click="goBack()">返回·</a>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "register	",
  data() {
    return {
      username: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/loginpage");
    },
    goBack() {
      history.back(-1);
    },
    // 注册
    goReg() {
      var username = this.username;
      var password = this.password1;
      var checkpass = this.password2;

      if (password != checkpass) {
        alert("两次密码不一致,请重新输入.");
        return;
      }
      var obj = qs.stringify({
        username: username,
        password: password
      });
      // 调接口
      this.axios
        .post("http://115.29.42.191:8001/wp-json/auth/v1/register", obj)
        .then(res => {
          if (res.status == false) {
            alert(res.data);
          } else {
            alert("注册成功");
            this.$router.push("/loginpage");
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
/* input[type=submit]{
		display: block;
		width: 150px;
		height: 50px;
		background: #F8595A;
		border: solid #F8595A;
		border-radius: 5px;
		left: 50%;
		margin-left: -75px;
		color: #FFF;
		font-size: 20px;
		top:350px;
		position: absolute;
        border: 1px solid black;
	} */
.goLogin {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: gainsboro;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 350px;
  text-align: center;
  line-height: 70px;
  font-size: 50px;
}
h3 {
  color: #f4f5f6;
}
.tag {
  width: 100%;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  font-size: 14px;
  text-decoration: none;
  color: #ccc;
  top: 500px;
}
</style>