<template>
  <div class="header">
    <!-- 定义搜索区域 -->
    <div class="search">
    <!-- 搜索框 -->
      <div class="search_style">
          <i class="iconfont icon-sousuo"></i>
          <input type="search" >
      </div>
      <div class="camera">
        <a>
            <i class="iconfont icon-camera-s">
              <p>发表</p>
            </i>  
        </a> 
      </div>
    </div>
  </div>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'Head',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// style样式
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  /* 头部高度 */
  .header{
    top: 0px;
    left: 0px;
    
    width: 100%;
    position:fixed;
  }
  /* 搜索范围样式 */
  .search{
    width: 100%;
    height: 50px;
    background: #D43D3E;
    position: relative;
  }
  /* 搜索框周边样式 */
  .search .search_style{ 
    position: absolute;
    left: 20px;
    top:9px;
    width: 80%;
    height: 60%;
    display: flex;
    background:white; 
    border-radius: 3px;
  }
  /* 搜索框左边的搜索标签 */
   .search .search_style i{
     height: 100%;
     font-size: 15px;
     padding: 7px 0px 7px 15px;
   } 
  /* input框设置 */
  .search .search_style input{
    width: 100%;
    height: 100%;
    outline: none;  
  } 
  /* 相机按钮 */
  .search .camera{
    position: absolute;
    top: -10px;
    right: 10px;
    height: 100%;
    
  }
  /* 相机按钮的图标 */
  .search .camera i{
    top:6px;
    right: -5px;
    font-size: 40px;
    color: white;
    position: absolute;
  }
  /* 图标下的字 */
  .search .camera i>p{
    margin-top: -10px;
    margin-left: 7px;  
    font-size: 10px;
  }
 
  
 
</style>


