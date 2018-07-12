<template>
 <div class='main_nav'>
        <el-menu
        :default-active="activeIndex" 
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="0"><router-link to='/'><img src="../assets/antLogo.png"></router-link></el-menu-item>
            <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
            <el-menu-item index="2">单词</el-menu-item>
            <el-menu-item index="3">听力</el-menu-item>
            <el-menu-item index="4">测试</el-menu-item>
            <el-menu-item index="5">登录</el-menu-item>
            <el-menu-item index="6">注册</el-menu-item>
        </el-menu>
    </div>  
</template>
<script>
export default {
    data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 1rem 0rem 1rem;
}
.main_nav img {
  width: 6.25rem;
  margin-bottom: .5rem;
  margin-right: .2rem;
}

.nav_right a {
    color: #ffffff;
}
</style>
