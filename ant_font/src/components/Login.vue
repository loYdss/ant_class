<template>
    <el-container>
        <el-header> <Nav></Nav></el-header>
        <el-main>
           <div class='main_contain'>
               <div class='contain_left'>
                <img src="../assets/login_one.png" class='login_img'>
               </div>
               <div class='contain_right' id='login'>
                    <h3>欢迎来到**</h3>
                    <div class='name'>
                       <el-input v-model="name" placeholder="用户名/邮箱/手机号"></el-input>
                    </div>
                    <div class='password'>
                        <el-input v-model="password" placeholder="用户密码" type="password"></el-input>
                    </div>
                    <div class='submit'>
                        <el-button type="success" round>登录</el-button>
                    </div>
                     <div class='submit'>
                        <el-button type="success" round>注册</el-button>
                    </div>
               </div>
               <div class="clearfix">
               </div>
           </div>
           
        </el-main>
        <el-footer></el-footer>
    </el-container>

</template>
<script>
import Nav from "./Navigation";
export default {
    name: 'HelloWorld',
    data() {
    return {
      imgArray: [
        { pic: "01", src: require("../assets/login_one.png") },
        { pic: "02", src: require("../assets/login_two.png") },
        { pic: "03", src: require("../assets/login_three.png") },
        { pic: "04", src: require("../assets/login_four.png") }
      ],
       name: '',
       password: ''
    };
  },
  components: {
    Nav
  },
  mounted(){
      var width = document.body.clientWidth;
      window.addEventListener('resize',()=>{
          if(width < 1000){
              document.getElementById('login').style.marginLeft="5.9rem";
          }
      })
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
}
.contain_left {
    margin-top: 6.25rem;
    margin-left: 11.25rem;
    margin-bottom: 1rem;
    height: 30rem;
    background-color: #eee;
    width: 28.125rem;
    float: left;
    box-shadow: 0px 0px 3px  #888888;
}
.contain_right {
    margin-top: 6.25rem;
    height: 30rem;
    width: 28.125rem;
    margin-bottom: 1rem;
    float: left;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px 1px #888888;
}
.contain_right > h3 {
    margin-top: 2rem;
    text-align: center;
    font-weight: 100;
    font-size: 1.75rem;
}
.login_img {
    margin: 15% 15%;
    width: 70%;
    height: 70%;
}
.clearfix {
    clear: both;
}
.name,.password {
    margin: 1rem 1rem;
    display: inline-block;
    margin-left: 20%;
    width: 19.375rem;
}
.submit {
    margin: 2rem 6rem;

}
</style>
