<template>
  <div class="go-top" v-show="isShow" >
      <div class="top" @click="goTop" >返回顶部</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        goTop(){
            console.log(this.$el.parentElement.scrollTop);
            this.$el.parentElement.scrollTop = 0
        }
    }
}

</script>
<style lang="scss" scoped>
    .top{
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-radius: 50%;
        color: red;
        background: pink;
        border: 1px solid black;
        z-index: 9999;
        position: fixed;
        right: 0;
        bottom: 20px;
    }
</style>