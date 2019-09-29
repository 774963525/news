<template>
   <div class="nav">
        <a  @click="handleClick(cates.id)" >{{cates.name}}</a>
       

    </div>

</template>

<script>
    export default {
        name: 'Nav',
        props:[
            'cates',
        ],
        data(){
            return {
                id:'1',
            }
        },
        methods:{
           getCates(){
                $.get('http://192.168.28.9/laravel-api/public/api/index/cates',(res)=>{
                
                    if(res){
                        
                        this.cates = res.data;
                        // console.log(res);
                    }
                },'json')
            },
            handleClick(id){
                this.id = id;
                
                this.$emit('click',id);
            },
        },
        mounted(){
            
            // this.getCates();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    *{
        margin: 0px;
        padding: 0px;
    }
    .nav{
       
        width: 70px;
        
        height: 30px;
        left: 0px;
        
        align-items: center;
        /* 规定段落中的文字不进行换行 */
        white-space: nowrap;
        background: #F4F5F6;
        /* background: #595959; */
        /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
        -webkit-overflow-scrolling: touch; 
        text-align: justify;
        margin-left: 7px;
        float: left;
        /* position: fixed; */
        
    }
 
    .nav a{  
        color:#595959; 
        text-decoration: none; 
        font-size: 16px;
        padding-left: 7px;
        
    }
    .nav::-webkit-scrollbar{
        display: none;
    }
</style>
