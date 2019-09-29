<template>
    <div class="allNews">
        <div @click="handleClick(news.id)" class="news">
            <b class="title">{{news.title.rendered}}</b>
            <br>
            <img style="width:90%;" :src="news.thumbnail">
            <div class="news_detail">
                <span>作者:{{news.author}}</span>
                <span>评论数:</span>
                <span>时间:{{news.date}}</span>
            </div>
            
        </div>    
    </div>
</template>

<script>
    export default {
        name: 'Main', 
        props:[
            'news'
        ],
        data(){
            return{
               
            }
            
        },
        
        methods:{
            
            handleClick(id){
                this.$emit('click',id)
                
            },
        },
        mounted(){
           
        },
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
   .allNews{
       position: relative;

       width: 100%;
       /* left: 8%; */
       margin-top: 10px;
       padding: 10px;
       
    
   }
   .news_detail{
       font-size:14px;
   }
   .news_detail span{
       margin-left: 5px;
       color: #678086;
   }
   
   
</style>
