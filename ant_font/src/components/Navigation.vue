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
            <el-menu-item index="2">单词</el-menu-item>
            <el-menu-item index="3">听力</el-menu-item>
            <el-menu-item index="4">测试</el-menu-item>
            <el-menu-item index="5"><router-link to='/login'>登录</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to='/register'>注册</router-link></el-menu-item>
             <el-menu-item index="6"><router-link to='/register'>注册</router-link></el-menu-item>
        </el-menu>
    </div>  
</template>
<script>
export default {
    data() {
    return {
      activeIndex: "1"
    };
  }
}
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
  text-align: center;
  padding: 0rem .5rem 0rem .5rem;
}
.main_nav img {
  width: 5rem;
  margin-bottom: .5rem;
  margin-right: .2rem;
}

.nav_right a {
    color: #ffffff;
}
</style>
