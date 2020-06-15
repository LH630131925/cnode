<template>
  <div class="page-body">
      <ul class="cell">
          <li v-for="item in myList" :key="item.id">
            <span class="img">
              <img :src="`${item.author.avatar_url}`" >
            </span>
            <span >
                <a>{{item.reply_count}}</a>
                <a>/</a>
                <a>{{item.visit_count}}</a>
            </span>
            <span class="tag">{{ item.tab | mytap }}</span>
            <span class="content">{{item.title}}</span>
            <span class="tiem">{{ item.last_reply_at | mytime }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"MyBody",
    props:{
        myList:{
            type:Array,
            required:true
        }
    },
    computed:{
     
    },
    filters:{
        mytime(val){
            var cha = Date.now() - new Date(val)
            var date = new Date(cha)
            if(date.getDate() == 1){
                return `${date.getHours()}时前`
            }else{
                return `${date.getDate() - 1 }天${date.getHours()}时前`
            }
        },
        mytap(val){
            var mytap = ""
            if(val==""){
                mytap = "置顶"
            }else if(val == "share"){
                mytap = "分享"
            }else if(val == "job"){
                mytap = "招聘"
            }else if(val == "ask"){
                mytap = "问答"
            }else{
                mytap="精品"
            }
            return mytap
        }
    }

}
</script>
<style lang="scss" scoped>
    .cell{
        margin: 0 auto;
        width: 800px;
        line-height: 40px;
        font-size: 8px;
        // ::after{
        //     content: ".";
        //     width: 0;
        //     height: 0;
        //     overflow: hidden;
        //     display: block;
        //     clear: both;
        // }
        li{
            height: 40px;
            list-style: none;
            span{
                margin-right: 30px;
            }
        }
        .img{
            height: 20px;
            width: 20px;
            img{
                width:20px;
                height: 20px;
            }
        }
        .tag{
            width:20px;
            height: 20px;
            background: #80bd01;
            color: white;
        }
        .content{
            font-size: 14px;
        }
        .tiem{
            float: right;
        }
    }
</style>