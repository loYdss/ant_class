<template>
     <el-container>
  <el-header><Nav></Nav></el-header>
  <el-main>
        <div class="form-group">
          <p class="title">题目</p>
          <el-input v-model="question.title" placeholder="请输入内容"></el-input>
          <p class="title">A</p>
          <el-input v-model="question.a" placeholder="请输入内容"></el-input>
          <p class="title">B</p>
          <el-input v-model="question.b" placeholder="请输入内容"></el-input>
          <p class="title">C</p>
          <el-input v-model="question.c" placeholder="请输入内容"></el-input>
          <p class="title">D</p>
          <el-input v-model="question.d" placeholder="请输入内容"></el-input>
          <p class="title">答案</p>
          <el-input v-model="question.answer" placeholder="请输入内容"></el-input>
          <p class="title">音频网址</p>
          <el-input v-model="question.url" placeholder="请输入内容"></el-input>
           <!-- <form method="POST" action="http://192.168.2.21:7001/upload" enctype="multipart/form-data">
          <input name="file" type="file"/>
              <button type="submit">Upload</button>
          </form> -->
          <el-upload
            class="upload-demo"
            ref="upload"
            action="http://localhost:7001/upload/"
            :file-list="fileList"
            :on-success = "text"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          </el-upload>
           <router-link to='/admin_testlist' class="button"><el-button type="success" size="medium" id='end' @click="addQuestion()">完成</el-button></router-link>
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
      question: {
        title: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
        url: ""
      },
      fileList: []
    };
  },
  components: {
    Nav
  },
  methods: {
    addQuestion() {
      this.$http
        .post("/Bank/hear", {
          title: this.question.title,
          a: this.question.a,
          b: this.question.b,
          c: this.question.c,
          d: this.question.d,
          answer: this.question.answer,
          url: this.question.url
        })
        .then(res => {
          console.log(res);
        });
    },
    submitUpload(){
      this.$refs.upload.submit();
    },
    text(res,file,flieList){
      this.question.url = res;
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
#end {
  margin-top: 2rem;
  width: 30rem;
  height: 3rem;
}
#end {
  float: right;
  margin-right: 5rem;
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
