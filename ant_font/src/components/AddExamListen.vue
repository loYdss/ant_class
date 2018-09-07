<template>
    <el-container>
  <el-header><Nav></Nav></el-header>
  <el-main>
      <div class="contain">
              <div class="testlist">
                  <h1>添加听力</h1>
              </div>
              <div class="detail">
                  <table class="table">
                      <thead>
                      <tr>
                          <th>序号</th>
                           <th>答案</th>
                            <th>试卷名称</th>
                              <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in items" :key="index">
                        <td>{{item.id}}</td>
                         <td>{{item.answer}}</td>
                          <td>{{item.title}}</td>
                           <td class="center">
                               <el-button type="success" size="medium" @click="addQuestion(item.id)">添加问题</el-button>
                           </td>
                    </tr>
                  </tbody>
                  </table>
              </div>
               <router-link to='/admin_testlist'><el-button type="success" size="medium" class="add">完成</el-button></router-link>
          </div>
  </el-main>
</el-container>
</template>
<script>
import Nav from "./Navigation";
export default {
    components:{
        Nav
    },
    data(){
        return {
            items:[],
            index:0
        }
    },
    created(){
        this.$http.get('/Bank/hear').then((res)=>{
            this.items = res.data;
        })
    },
    methods:{
        addQuestion(index){
            this.$http.post(`/Exam/${this.$route.params.id}/hear`,{
                        hid: index
            }).then((res)=>{
                alert("添加成功");
                console.log(res);
            })
        }
    }
}
</script>
<style scoped>
* {
  font-family: PingFangSC-Light, "Helvetica Neue", Helvetica, "Microsoft YaHei",
    微软雅黑, Arial, SimHei !important;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    list-style: none;
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
    padding: .5rem .5rem;
    float: right;
    margin-top: 2rem;
}
.create:visited {
    color: #fff
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
.table>tbody>tr>td,
.table>tbody>tr>th,
.table>tfoot>tr>td, 
.table>tfoot>tr>th, 
.table>thead>tr>td, 
.table>thead>tr>th {
    padding: 8px;
    text-align: center;
}
.center > button {
  padding: .5rem .5rem;
}
.add {
    padding: .5rem .5rem;
    width: 15rem;
    margin-left: 25rem;
}
</style>
