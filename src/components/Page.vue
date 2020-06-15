<template>
  <div class="page">
    <ul class="Pagination">
      <li class="pre" @click="fn1($event)">上一页</li>
      <li v-show="nowPage >= 4">···</li>
      <li
        v-for="item in nowShow"
        :key="item"
        @click="fn3(item)"
        :class="[{'active':item == nowPage}]"
      >{{item}}</li>
      <li>···</li>
      <li class="next" @click="fn1($event)">下一页</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
      nowPage: 1
    };
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    fn3(curPage) {
      this.nowPage = curPage;
      this.$emit("current-change", this.nowPage);
    },
    fn1(e) {
      if (e.target.innerText === "上一页") {
        this.nowPage -= 1;
        if (this.nowPage <= 1) {
          this.nowPage = 1;
        }
      } else {
        this.nowPage += 1;
        if (this.nowPage >= this.totalPage) {
          this.nowPage = this.totalPage;
        }
      }
      this.$emit("page-click", this.nowPage);
    }
  },
  computed: {
    nowShow() {
      var val = this.nowPage;
      var arr = [1, 2, 3, 4, 5];
      if (this.nowPage > 3) {
        arr = [val - 2, val - 1, val, val + 1, val + 2];
      }
      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
.Pagination {
  margin: 15px auto;
  width: 400px;;
}
.Pagination li {
  list-style: none;
  border: 1px solid black;
  float: left;
  width: 30px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
.Pagination .pre {
  width: 50px;
}
.Pagination .next {
  width: 50px;
}
.Pagination .active {
  background: pink;
  color: red;
}
</style>