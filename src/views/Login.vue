<template>
    <div>
        <div  class="login">
            <div  @click="goForm()" class="loginbutton">
                未登录
            </div>
        </div>
        
       
        <div class="main">
            <div class="common">
                <div class="main_menu">
                    <b>常用</b>
                    查看全部 
                </div>
                <div class="row">
                    <div class="row1">
                        <a>
                            <i class="iconfont icon-wodeguanzhu"></i><br>
                            <span>我的关注</span>
                        </a>
                    </div>
                    <div class="row1">
                        <a>
                            <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing"></i><br>
                            <span>消息通知</span>
                        </a>
                    </div>
                    <div class="row1">
                        <a>
                            <i class="iconfont icon-shoucang"></i><br>
                            <span>我的收藏</span>
                        </a>
                    </div>
                    <div class="row1">
                        <a>
                            <i class="iconfont icon-lishi"></i><br>
                            <span>阅读历史</span>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="row1">
                        <a>
                            <i class="iconfont icon-qianbao"></i><br>
                            <span>我的钱包</span>
                        </a>
                    </div>
                    <div class="row1">
                            <a>
                                <i class="iconfont icon-jinglingqiu-"></i><br>
                                <span>我的钱包</span>
                            </a>
                    </div>
                    <div class="row1">
                            <a>
                                <i class="iconfont icon-feedback"></i><br>
                                <span>我的钱包</span>
                            </a>
                    </div>
                    <div class="row1">
                            <a>
                                <i class="iconfont icon-xitongshezhi"></i><br>
                                <span>我的钱包</span>
                            </a>
                    </div>

                </div>
            </div>
        </div>
        
        <Foot></Foot>
    </div>
</template>
<script>
    import Foot from "../components/Foot"
export default {
    name:'login',
    components:{
        Foot,
      
    },
    data(){
        return {
            active:false,
        }
    },
    methods:{
        goForm(){
            this.$router.push('/loginpage');
        }
    }
}
</script>
<style scoped>

/* 登录区域 */
.login{
    height: 150px;
    width: 100%;
    position: relative;
    background:#F4F5F6;
}
/* 登录按钮 */
.loginbutton{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #F8595A;
    position: absolute;
    left:50%;
    margin-left: -50px;
    top: 25px;
    text-align: center;
    line-height: 100px;
}
/* 主界面 */
.main{
        margin-top: 5px;
        width: 100%;
        background:#F4F5F6;
        height: 200px;
    }
.main .main_menu{
    
    height: 30px;
    /* border: 1px solid seagreen; */
    font-size: 14px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 9px;
    /* margin: 20px; */
}
.main .main_menu b{
    color: #595959;
}
.main .main_menu {
    color: #595959;
}
.main .common .row{
    display: flex;
    /* justify-content: space-between; */
}
.main .common .row .row1{
    flex: 1;
    margin-top: 7px;
}
.main .common .row .row1 i{
    margin-left: 30px;
    font-size: 25px;
    margin-top: 5px;
    align-content: center;
    position: absolute;
    
}
.main .common .row .row1 span{
    font-size: 13px;
    margin-top: 20px;
    margin-left: 20px;
    
}
/* .login_form{
    z-index: 100;
    position: absolute;
    top: 0px;
    
    border: 1px solid black;
    background: #F4F5F6;

} */

</style>