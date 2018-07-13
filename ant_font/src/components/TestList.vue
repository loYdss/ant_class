<template>
    <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
            <div class="main_contain">
                <div class="row">
                    <h1>使用帮助</h1>
                    <div class="help">
                        <img src="../assets/help.jpg">
                    </div>
                </div>
                <div class="tip">
                        <h5>学习指南</h5>
                        <p>1. 我的课程只包含本学期使用作业系统的课程，作业数量为已布置的作业。</p>
                        <p>2. 点击"开始学习"按钮进行</p>
                </div>
          </div>
        </el-main>
        <el-footer><div class="footer"></div></el-footer>
    </el-container>

</template>
<script>
import Nav from "./Navigation"
export default {
  components: {
    Nav
  }
}
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
        \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
        background-color: #f4f8fa;
}
.main_contain {
    height: 10rem;
    width: 72rem;
    margin: 2rem 3rem;
    border-radius: 4px;
    background-color: #fff;
    padding-top: 1px;
    border: 2px solid #e5e6e8;
    display: inline-block;
}
.row {
    height: 8rem;
    width: 10rem;
    margin: 1rem 4rem;
    float: left;
}
.row > h1 {
    text-align: center;
    background-color: #fff;
    color: #f9af48;
}
.footer {
    height: 100rem;
}
.help {
    height: 6rem;
}
.help > img {
    width: 100%;
    height: 100%;
    background-size: contain;
}
.tip {
    float: left;
    background-color: #fff;
    margin: 1.2rem 0rem;
}
.tip > h5 {
    background-color: #fff; 
    margin-left: .5rem;
    color: rgb(128, 128, 128);
}
.tip > p {
    background-color: #fff; 
    margin: .5rem .5rem;
    color: rgb(128, 128, 128);
}
</style>
