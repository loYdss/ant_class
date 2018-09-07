<template>
 <div class='main_nav'>
        <el-menu
        :default-active="activeIndex" 
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="0"><router-link to='/'><img src="../assets/antLogo.png"></router-link></el-menu-item>
            <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
            <span class="visitor" v-if="!isLogin.success">
            <router-link to='/login'><el-menu-item index="2">登录</el-menu-item></router-link>
            </span>
            <keep-alive v-if="isLogin.success">
              <el-submenu index="3" v-if="!isLogin.admin">
                <template slot="title">{{sid}}</template>
                <el-menu-item index="4-1" @click="logout()">退出登录</el-menu-item>
              </el-submenu>
              <el-submenu index="4" v-if="isLogin.admin">
                <template slot="title">{{tid}}</template>
                <el-menu-item index="5-1" @click="logout()">退出登录</el-menu-item>
              </el-submenu>
              <!-- <el-menu-item index="3" v-if="!isLogin.admin">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item> -->
            </keep-alive>
            
        </el-menu>
    </div>  
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      isLogin: this.$store.state.isLogin,
      sid: "学生一号",
      tid: "老师一号"
    };
  },
  methods:{
    logout(){
      let answer = confirm("确认登出吗？");
      console.log(answer);
      if(answer) {
        localStorage.clear();
        location.reload();
      }
    }
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
  font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
}
.main_nav {
  min-width: 20rem;
}
.main_nav li {
  display: inline-block;
  padding: 0rem 0.5rem 0rem 0.5rem;
}
.main_nav li:nth-child(3),
.main_nav li:nth-child(4) {
  float: right;
  padding: 0rem 1rem 0rem 1rem;
}
.main_nav img {
  width: 5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.2rem;
}
.visitor {
  float: right;
}
.visitor li {
  height: 100%;
}
a:visited {
  color: #ffffff;
}

.nav_right a {
  color: #ffffff;
}
</style>
