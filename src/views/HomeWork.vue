<template>
  <div class="homeWork">
    <Tabs :showList="myList" v-model="tab"></Tabs>
    <Login v-show="!isShow"></Login>
    <my-body :myList="bodyList" v-show="isShow"></my-body>
    <page-my :total-page="20" @current-change="fn1" @page-click="fn2"></page-my>
  </div>
</template>

<script>
import { getTopics } from "../api/post";
import page from "../components/Page.vue";
import Tabs from "../components/Tabs.vue";
import MyBody from "../components/MyBody.vue";
import Login from "../components/Login.vue"

export default {
  data() {
    return {
      myList: [
        { id: 1, title: "全部", tab: "" },
        { id: 2, title: "精华", tab: "good" },
        { id: 3, title: "分享", tab: "share" },
        { id: 4, title: "问答", tab: "ask" },
        { id: 5, title: "招聘", tab: "job" }
      ],
      tab: "",
      bodyList: [],
      pageNumber: 1,
      isShow:true
    };
  },
  watch: {
    tab() {
      this.getTopics(this.pageNumber, this.tab);
    },
    // bodyList:{
    //   handler(){
    //     if(this.isShow == true){
    //       this.isShow = false
    //     }else{
    //       this.isShow = true
    //     }
    //   },
    //   deep:true
    // }
  },
  components: {
    pageMy: page,
    Tabs,
    MyBody,
    Login
  },
  methods: {
    getTopics(val, tab) {
      this.isShow = false
      this.pageNumber = val;
      getTopics(this.pageNumber, 5, tab).then(res => {
        this.bodyList = res.data;
        this.isShow = true
      });
    },
    fn1(val) {
      this.pageNumber = val;
      this.getTopics(this.pageNumber, this.tab);
    },
    fn2(val) {
      this.pageNumber = val;
      this.getTopics(this.pageNumber, this.tab);
    }
  },
  created() {
    this.getTopics(this.pageNumber, this.tab);
  }
};
</script>
<style>
</style>