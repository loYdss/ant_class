<template>
      <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
            <div class="exercise">
                <ul>
                    <li class="singleChoose">
                        <div class="ex-title">
                            <span class="rank">1</span>
                            <span class="type">单选</span>
                            <span class="subject">
                                <p>
                                    where are you from ?
                                </p>
                            </span>
                            <span class="modify">
                                  <el-button type="danger" size="medium">修改</el-button>
                            </span>
                        </div>
                        <div class="ex-answer">
                            <ul>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>

                            </ul>
                        </div>
                    </li>


                     <li class="singleChoose">
                        <div class="ex-title">
                            <span class="rank">1</span>
                            <span class="type">单选</span>
                            <span class="subject">
                                <p>
                                    where are you from ?
                                </p>
                            </span>
                            <span class="modify">
                                  <el-button type="danger" size="medium">修改</el-button>
                            </span>
                        </div>
                        <div class="ex-answer">
                            <ul>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>

                            </ul>
                        </div>
                    </li>

                     <li class="singleChoose">
                        <div class="ex-title">
                            <span class="rank">1</span>
                            <span class="type">单选</span>
                            <span class="subject">
                                <p>
                                    where are you from ?
                                </p>
                            </span>
                            <span class="modify">
                                  <el-button type="danger" size="medium">修改</el-button>
                            </span>
                        </div>
                        <div class="ex-answer">
                            <ul>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>
                                <li>
                                    <input type="radio" name="1">
                                    <span class="ex-item">A</span>
                                     <span class="ex-item-content">China</span>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </el-main>
    </el-container>

</template>
<script>
import Nav from "./Navigation";
export default {
    components:{
        Nav
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
    margin-right: .5rem;
    font-size: 1.5rem;
}
.type {
    padding: 2px 6px 0px 6px;
    background-color: #0068b6;
    color: #ffffff;
    border-radius: 3px;
    margin-right: .5rem

}
.ex-answer {
    margin-top: .5rem;
}
.subject {
    display: inline-block;
}
.ex-item {
    margin-left: .5rem;
    margin-right: .5rem;
}
.ex-answer li input {
    margin-left: 9.5rem;
}
.modify > button {
  padding: .5rem .5rem;
}
</style>
