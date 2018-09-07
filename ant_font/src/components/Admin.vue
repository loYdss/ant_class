<template>
    <el-container>
  <el-header><Nav></Nav></el-header>
  <el-main>
      <div class="main_content">
          <div class="span">
              <div class="span3">
                  <p>W</p>
                  <div>
                      <span class="intro">新建试卷</span>
                  ， 智能安排学习和复习，快速突破词汇瓶颈
                  </div>
                  <hr>
              </div>
              <div class="span3">
                     <p>W</p>
                  <div>
                      <span class="intro">查看试卷</span>
                  ， 智能安排学习和复习，快速突破词汇瓶颈
                  </div>
                  <hr>
              </div>
              <div class="span3">
                     <p>W</p>
                  <div>
                      <span class="intro">背单词</span>
                  ， 智能安排学习和复习，快速突破词汇瓶颈
                  </div>
                  <hr>
              </div>
              <div class="span3">
                     <p>W</p>
                  <div>
                      <span class="intro">背单词</span>
                  ， 智能安排学习和复习，快速突破词汇瓶颈
                  </div>
                  <hr>
              </div>
          </div>
          <div class="quote">
              <p>
                  Winning isn't everything, but wanting it is.
              </p>
               <p>
                   胜利并不能代表一切，而求胜心可以。
              </p>
               <p class="auth">
                   --Arnold Palmer
              </p>
          </div>
      </div>
  </el-main>
</el-container>

</template>
<script>
import Nav from './Navigation'
export default {
    components:{
        Nav
    },
    mounted() {
        let arr = document.getElementsByClassName('span3');
        this.init_user_home(arr);
        window.addEventListener('resize',function(){
        let wid = document.documentElement.clientWidth;
        if(wid < 480){
            for(let i = 0; i < arr.length; i++){
            arr[i].style.marginLeft = '5rem';
        }
        }
        })
    }
}
</script>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
}
.span {
    display: inline-block;
    width: 100%;
    height: 100%;
}
.span3 {
    width: 16rem;
    height: 16rem;
    background-color: #eee;
    float: left;
    cursor: pointer;
    border-radius: 5px;
    min-width: 202px;
    /* 3.125 1.75 0 3 */
}
.span3:hover {
    box-shadow: #CCC 2px 2px 8px;
}
.span3:first-child {
    margin: 6rem 1.75rem 0 1.5rem;
}
.span3:not(:first-child) {

    margin: 6rem 1.75rem 0rem 1.5rem;
}
.span3 > p {
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    color: #ccc;
}
.span3 > div {
    margin: 0 3.125rem;
}
.intro {
    font-weight: bold;
    font-size: 1.125rem;
}
hr {
    margin-top: 1rem;
   border-top:1px solid #ccc;
}
.quote {
    margin-top: 5rem;
    border-radius: 4px;
    margin-left: 5rem;
    background-color: #f0f0f0;
    width: 68rem;
    height: 8rem;
}
.quote {
    font-size: 1.5rem;
}
.quote > p {
    margin: .5rem .5rem;
}
.auth {
    text-align: right;
}
</style>
