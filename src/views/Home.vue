<template>
  <div class="page-home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <el-table :data="tableData" style="width: 100%" :show-header="false">
          <el-table-column prop="img" label="日期" width="180">
            <template slot-scope="scope">
              <img
              v-if="tableData.length>0"
              :src="`${scope.row.img}`"
              alt
              slot="append"
            />
              <!-- <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{scope.row.tag}}</el-tag> -->
            </template>
            
          </el-table-column>
          <el-table-column prop="abc" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="title" label="地址"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="精华" name="second">删除</el-tab-pane>
      <el-tab-pane label="分享" name="third">角年按时</el-tab-pane>
      <el-tab-pane label="问答" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="招聘" name="five">定时任务补偿</el-tab-pane>
      <el-tab-pane label="客户端测试" name="six">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-pagination
      @next-click="pageNumber = pageNumber + 1"
      @prev-click="pageNumber = pageNumber - 1"
      :current-page="pageNumber"
      :page-size="5"
      :total="1000"
      layout="prev, pager, next"
      @current-change="getTopics"
    ></el-pagination>
    <page-my :total-page="9" @current-change="fn1" @page-click="fn2"></page-my>
  </div>
</template>

<script>
import  { getTopics} from "../api/post";
import  page  from "../components/Page.vue";
export default {
  name: 'Home',
  data() {
    return {
      activeName: "first",
      tableData: [],
      pageNumber: 1
    };
  },
  methods: {
    fn2(now){
      console.log(now);
    },
    fn1(now){
      console.log(now);
    },
    handleClick() {},
    getTopics(val) {
      this.pageNumber = val;
      console.log(this.pageNumber);
      getTopics(this.pageNumber, 5).then(res => {
        var arr1 = [];
        res.data.forEach(item => {
          arr1.push({
            img: item.author.avatar_url,
            abc: `${item.reply_count}/${item.visit_count}`,
            address: item.tab,
            title: item.title
          });
        });
        this.tableData = arr1;
        console.log(arr1);
        this.tam;
      });
    }
    // fn1(){
    //   this.pageNumber = this.pageNumber - 1
    // },
    // fn
  },
  components:{
    "pageMy":page
  },
  mounted() {
    this.getTopics();
  }
};
</script>
<style lang="scss">
.cell {
  img {
    width: 20px;
    height: 20px;
  }
}
</style>