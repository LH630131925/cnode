<template>
  <div class="page-tab">
      <ul class="head">
          <li v-for="item in showList" :key='item.id' @click="fn1(item.tab)">
              <span :class="{'active':item.tab==value}">{{item.title}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Tabs",
    props:{
        showList:{
            type:Array,
            required:true
        },
        value:{
            type:String,
            default:""
        }
    },
    methods:{
        fn1(tab){
            this.$emit("input",tab)
        }
    }
}
</script>
<style lang="scss" scoped>
    .head{
        margin: 0 auto;
        width: 800px;
        background: #f6f6f6;
        padding: 10px;
        border-radius: 3px 3px 0 0;
        height: 50px;
        box-sizing: border-box;
        ::after{
            content: ".";
            width: 0;
            height: 0;
            overflow: hidden;
            display: block;
            clear: both;
        }
        li{
            float: left;
            width:100px;
            height: 30px;
            list-style: none;
            text-align: center;
            line-height: 30px;
            span{
                width:80px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                font-size: 16px;
                color: #80bd01;
                border-radius: 3px;
            }
            .active{
                background:#80bd01 ;
                color: white;
                border-radius: 3px;
            }
        }

    }
</style>