<template>
  <div id="Test">
      <div class="wrap" v-gotop>
          <div class="inner">我是内部</div>
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang="scss" scoped>
    .wrap{
        width: 100%;
        height: 300px;
        background: pink;
        overflow: scroll;
        .inner{
            width: 100%;
            height: 3000px;
            background: white;
        }
    }
</style>