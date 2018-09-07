<template>
    <el-container>
  <el-header><Nav></Nav></el-header>
  <el-main>
      <div class="form-group">
          <p>介绍</p>
          <el-input v-model="exam.title" placeholder="请输入内容"></el-input>
          <p>试卷名称</p>
          <el-input v-model="exam.describe" placeholder="请输入内容"></el-input>
           <el-button type="success" size="medium" id='end' @click="createExam()">完成</el-button>
        </div>
  </el-main>
</el-container>
</template>
<script>
import Nav from "./Navigation";
export default {
     data() {
    return {
      index:0,
      exam:{
        describe:'',
        title:''
      }
    }
  },
  components: {
    Nav
  },
  methods:{  
      createExam(){
          this.$http.post('/Exam',{
            title: this.exam.describe,
            describe: this.exam.title
          }).then((res)=>{
              this.index = res.data.id;
              this.$router.push({name:'addExam',params: {id:this.index}});
          })
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
    overflow: hidden;
}
#next,#end {
    margin-top: 2rem;
    width: 30rem;
    height: 3rem;
}
#end {
  float: right;
  margin-right: 25rem;
}
.button {
  color: #fff;
}
.button:visited{
  color: #fff;
}
</style>
