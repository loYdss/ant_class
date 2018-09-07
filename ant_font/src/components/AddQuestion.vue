<template>
     <el-container>
  <el-header><Nav></Nav></el-header>
  <el-main>
        <div class="form-group">
          <p class="title">题目</p>
          <el-input v-model="question.title" placeholder="请输入内容" required="required"></el-input>
          <p class="title">A</p>
          <el-input v-model="question.a" placeholder="请输入内容" required="required"></el-input>
          <p class="title">B</p>
          <el-input v-model="question.b" placeholder="请输入内容" id="button"></el-input>
          <p class="title">C</p>
          <el-input v-model="question.c" placeholder="请输入内容" id="button"></el-input>
          <p class="title">D</p>
          <el-input v-model="question.d" placeholder="请输入内容" id="button"></el-input>
          <p class="title">答案</p>
          <el-input v-model="question.answer" placeholder="请输入内容"></el-input>
          <el-button type="success" size="medium" id='end' class="button" @click="addQuestion()">添加</el-button>
          <router-link to='admin_testlist'><el-button type="success" size="medium" id='end' class="button">返回</el-button></router-link>
        </div>
  </el-main>
  </el-container>
</template>
<script>
import Nav from "./Navigation";
export default {
  data() {
    return {
      input: "",
      disable:false,
      question:{
        title:'',
        a:'',
        b:'',
        c:'',
        d:'',
        answer:''
      },
    };
  },
  components: {
    Nav
  },
  methods:{
    addQuestion(){
      this.$http.post('/Bank/question',{
        title:this.question.title,
        a:this.question.a,
        b:this.question.b,
        c:this.question.c,
        d:this.question.d,
      }).then((res)=>{
        alert('添加成功');
        this.$router.push('admin_testlist');
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
#end {
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
.button:visited {
  color: #fff;
}
.title {
  text-align: center;
}
</style>
