<template>
    <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
            <div class="main_contain">
                <div class="row">
                    <h1>使用帮助</h1>
                    <div class="help">
                        <img src="../assets/help.jpg">
                    </div>
                </div>
                <div class="tip">
                        <h5>学习指南</h5>
                        <p>1. 我的课程只包含本学期使用作业系统的课程，作业数量为已布置的作业。</p>
                        <p>2. 点击"开始学习"按钮进行</p>
                </div>
          </div>
          <div class="contain">
              <div class="testlist">
                  <h1>测试列表</h1>
                   
              </div>
              <div class="detail">
                  <table class="table">
                      <thead>
                      <tr>
                          <th>序号</th>
                           <th>描述</th>
                            <th>试卷名称</th>
                              <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in items" :key="index" v-if="!(item.status-1)">
                        <td>{{item.id}}</td>
                         <td>{{item.describe}}</td>
                          <td>{{item.title}}</td>
                           <td class="center">
                               <el-button type="danger" size="medium" @click="deleteExam(item.id)">删除试卷</el-button>
                           </td>
                    </tr>
                  </tbody>
                  </table>
                   <router-link to='/addQuestion'><el-button type="success" size="medium" class="create">上传题库</el-button></router-link>
                   <router-link to="/createExam" ><el-button type="success" size="medium" @click="createExam()" class="exam">新建试卷</el-button></router-link>
                   <router-link to="/addListen" ><el-button type="success" size="medium" class="listen">上传音频</el-button></router-link>
              </div>
          </div>
        </el-main>
    </el-container>

</template>
<script>
import Nav from "./Navigation";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    Nav
  },
  created() {
    this.$http.get("/Exam").then(res => {
      this.items = res.data;
    });
  },
  methods: {
    deleteExam(index) {
      let conf = confirm("确定删除?");
      if (conf) {
        this.$http.delete(`/Exam/${index}`).then(res => {
          location.reload();
        });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
  text-decoration: none;
}
.el-container {
  background-color: #f4f8fa;
  height: 100%;
}
.main_contain {
  height: 10rem;
  width: 72rem;
  margin: 2rem 3rem;
  border-radius: 4px;
  background-color: #fff;

  border: 2px solid #e5e6e8;
  display: inline-block;
}
.row {
  height: 8re m;
  width: 10rem;
  margin: 1rem 4rem;
  float: left;
}
.row > h1 {
  text-align: center;
  background-color: #fff;
  color: #f9af48;
}

.help {
  height: 6rem;
}
.help > img {
  width: 100%;
  height: 100%;
  background-size: contain;
}
.tip {
  float: left;
  background-color: #fff;
  margin: 1.2rem 0rem;
}
.tip > h5 {
  background-color: #fff;
  margin-left: 0.5rem;
  color: rgb(128, 128, 128);
}
.tip > p {
  background-color: #fff;
  margin: 0.5rem 0.5rem;
  color: rgb(128, 128, 128);
}
.contain {
  background-color: #fff;
  width: 72rem;
  border: 2px solid #e5e6e8;
  margin: 2rem 3rem;
  height: 100%;
  border-radius: 4px;
  padding: 1rem 1rem;
}
.contain > div {
  background-color: #fff;
}
.testlist > h1 {
  display: inline-block;
  margin: 2rem 2rem 0 2rem;
  background-color: inherit;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(179, 179, 179);
  width: 62.5rem;
}
.testlist > button {
  padding: 0.5rem 0.5rem;
  float: right;
  margin-top: 2rem;
}
.create:visited {
  color: #fff;
}
.table {
  width: 80%;
  border-spacing: 0;
  border-collapse: collapse;
  line-height: normal;
  margin: 0 4rem 20px 7rem;
  display: table;
  border-collapse: collapse;
  border-color: grey;
}
.table tr {
  border: 2px solid #e5e6e8;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  padding: 8px;
  text-align: center;
}
.center > button {
  padding: 0.5rem 0.5rem;
}
.exam {
  margin-left: 3rem;
  padding: 0.5rem 0.5rem;
  width: 5rem;
}
.create {
  padding: 0.5rem 0.5rem;
  margin-left: 25rem;
  width: 5rem;
}
.listen {
  padding: 0.5rem 0.5rem;
  margin-left: 3rem;
  width: 5rem;
}
</style>
