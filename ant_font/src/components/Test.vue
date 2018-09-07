<template>
      <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
            <div class="exercise">
                <ul v-for="(time,index) in hear" :key='index' >
                     <li class="singleChoose">
                        <div class="ex-title">
                            <span class="rank">{{index+1}}</span>
                            <span class="type">听力</span>
                            <span class="subject">
                                <p>
                                   {{time.title}}
                                </p>
                            </span>
                            <span class="audio">
                                  <audio controls="controls" controlsList="nodownload" :src=time.url>
                                </audio>
                            </span>
                        </div>
                        <div class="ex-answer">
                            <ul>
                                <li>
                                    <input type="radio" :name=hear+index>
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">{{time.a}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=hear+index>
                                    <span class="ex-item">B</span>
                                     <span class="ex-item-content">{{time.b}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=hear+index>
                                    <span class="ex-item">C</span>
                                     <span class="ex-item-content">{{time.c}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=hear+index>
                                    <span class="ex-item">D</span>
                                     <span class="ex-item-content">{{time.d}}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                 <ul v-for="(question,order) in single" :key="order+hear.length" >
                     <li class="singleChoose">
                        <div class="ex-title">
                            <span class="rank">{{order+hear.length+1}}</span>
                            <span class="type">单选</span>
                            <span class="subject">
                                <p>
                                   {{question.title}}
                                </p>
                            </span>
                        </div>
                        <div class="ex-answer">
                            <ul>
                                <li>
                                    <input type="radio" :name=order>
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">{{question.a}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=order>
                                    <span class="ex-item">B</span>
                                     <span class="ex-item-content">{{question.b}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=order>
                                    <span class="ex-item">C</span>
                                     <span class="ex-item-content">{{question.c}}</span>
                                </li>
                                <li>
                                    <input type="radio" :name=order>
                                    <span class="ex-item">D</span>
                                     <span class="ex-item-content">{{question.d}}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <el-button size="medium" type="success" class="submit" @click="getScore()">提交</el-button>
            </div>
        </el-main>
    </el-container>

</template>
<script>
import Nav from "./Navigation";
export default {
  data() {
    return {
      hear: [
],
    single:[
],
    };
  },
  components: {
    Nav
  },
  created(){ 
      this.$http.get(`/Exam/${this.$route.params.id}`).then((res)=>{
          this.hear = res.data.hear;
          this. single = res.data.question;
          console.log(hear);
      })
  },
  methods:{
      getScore:function(){
        let id = this.$route.params.id;
        this.$router.push('/testlist');
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
  list-style: none;
}
.singleChoose {
  border-bottom: 1px dashed #d9d9d9;
}
.ex-title {
  margin-top: 1rem;
}
ul {
  margin-bottom: 10px;
}

.rank {
  margin-left: 6rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
}
.type {
  padding: 2px 6px 0px 6px;
  background-color: #0068b6;
  color: #ffffff;
  border-radius: 3px;
  margin-right: 0.5rem;
}
.ex-answer {
  margin-top: 0.5rem;
}
.subject {
  display: inline-block;
}
.ex-item {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.ex-answer li input {
  margin-left: 9.5rem;
}
.submit {
    height: 2rem;
    width: 20rem;
    margin-left: 28rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>
