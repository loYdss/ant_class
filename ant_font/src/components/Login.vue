<template>
    <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
           <div class='main_contain'>
               <div class='contain_left'>
                <img src="../assets/login_one.png" class='login_img'>
               </div>
               <div class='contain_right' id='login'>
                    <h3>欢迎来到**</h3>
                    <div class='name'>
                       <el-input v-model="name" placeholder="用户名/邮箱/手机号" prefix-icon="el-icon-ant-yonghutouxiang" id="user">
                       </el-input>
                    </div>
                    <div class='password'>
                        <el-input v-model="password" placeholder="用户密码" type="password" prefix-icon="el-icon-ant-07" id="password"></el-input>
                        <i class="i_password"></i>
                    </div>
                    <router-link to='/' class="register a">还没账号?<span class="spa">去注册</span></router-link>
                    <router-link to='/' class="forget a">忘记密码?</router-link>
                    <div class='submit'>
                        <el-button type="success" round id="login_button" :disabled="disabled">登录</el-button>
                    </div>
               </div>
               <div class="clearfix">
               </div>
           </div>
        </el-main>
    </el-container>
</template>
<script>
import Nav from "./Navigation";
import "../assets/icon/iconfont.css";
export default {
  data() {
    return {
      name: "",
      password: "",
      disabled: false,
    };
  },
  components: {
    Nav
  },
  computed: {
    address() {
    const { name, password } = this
    return {
      name,
      password
    }
  }
  },
  watch:{
       address: {
        handler: function(val) {
            if(val.name==''||val.password==''){
                this.disabled = true;
            }else{
            this.disabled = false; 
        }     
    },
         deep:true
  }
  },
  mounted() {
    this.init_wid();
    let login = document.getElementById('login_button');   
    window.addEventListener("resize", () => {
    let width = document.documentElement.clientWidth;
    this.juj_wid(width);
    });
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
  box-shadow: 0px 0px 3px #888888;
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
  margin: 2rem 5.6rem;
}
.submit > button {
  padding: 0.8rem 8.9rem;
}
.a {
    text-decoration: none; 
}
.spa,.forget {
    color: #209e85;
}
.forget {
    float: right;
    margin-right: 3.3rem;
}
.register {
    color: #999;
    margin-left: 5.8rem;
}
</style>
