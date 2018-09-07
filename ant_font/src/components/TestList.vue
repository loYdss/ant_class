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
                             <th>成绩</th>
                              <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                        <tr v-for="(item,index) in items" :key="index"  v-if="!(item.status-1)">
                            <td>{{index}}</td>
                            <td>{{item.describe}}</td>
                            <td>{{item.title}}</td>
                            <td>{{score[index]}}</td>
                            <td class="center">
                               <el-button type="success" size="medium" class="create" @click="seeExam(item.id,index)">开始测试</el-button>
                           </td>
                        </tr>
                  </tbody>
                  </table>
              </div>
          </div>
        </el-main>
    </el-container>

</template>
<script>
import Nav from "./Navigation";
export default {
    data(){
      return {
          items:[],
          index:0,
          score:[]
      }
  },
  components: {
    Nav
  },
  created(){
      // console.log(this.$store.state.isLogin.admin == undefined);
        this.$http.get('/Exam').then((res)=>{
        this.items = res.data;
        let num = Math.random()*100;
        //将随机数向下取整
        num = Math.floor(num);
        this.score[this.$store.state.eid] = num;
      })
  },
  methods:{
    seeExam: function(id,index){
        this.$store.dispatch('getEid',index);
        this.$router.push({name:'test',params: {id:id}});
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
.create:visited {
    color: #fff;
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
  margin: 2rem 2rem 0 2rem;
  background-color: inherit;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(179, 179, 179);
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
</style>
