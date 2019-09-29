-=\<template>
  <div class="footer">
    <div class="box">
      <a @click="goPath('/')">
        <i id="er" class="iconfont icon-home1"></i>
        <br />
        <div class="p">首页</div>
      </a>
    </div>

    <div class="box">
      <a @click="goPath('/xiguavideo')">
        <i id="si" class="iconfont icon-bofangsanjiaoxing"></i>
        <br />
        <div class="p">西瓜视频</div>
      </a>
    </div>

    <div class="box">
      <a @click="goPath('/svideo')">
        <i class="iconfont icon-paishipin"></i>
        <br />
        <div class="p">小视频</div>
      </a>
    </div>

    <div class="box">
      <a @click="goPath('/login')">
        <i class="iconfont icon-weidenglu"></i>
        <br />
        <div class="p">未登录</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  methods: {
    goPath(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style>
.footer {
  left: 0px;
  bottom: 0px;
  background: #f4f5f6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
}
.footer .box {
  margin-top: 3px;
  height: 50px;
}
.footer .box i {
  margin-left: 8px;
  font-size: 20px;
  color: #595959;
  /* display: block; */
  /* position: relative; */
}
.c1 {
  margin-left: 2px;
}
#er {
  margin-right: 9px;
}
#si {
  margin-left: 15px;
}
.p {
  display: block;
  text-align: center;
  font-size: 10px;
  color: #595959;
  text-align: center;
}
</style>