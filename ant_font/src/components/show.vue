<template>
     <footer class="footer">
    <ul>
      <li v-for="lis in ul" :key="lis.num">{{lis.li}}</li>
    </ul>
    <p>
      Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved
    </p>
    <input placeholder="请输入" v-model="test">
    <button @click="setAuthor">测试</button>
  </footer>
</template>
<script>
export default {
     data() {
         return {
           ul: [
          { num: "01",li: '琉璃之金' },
          { num: "02",li: '朦胧之森' },
          { num: "03",li: '缥缈之滔' },
          { num: "04",li: '逍遥之火' },
          { num: "05",li: '璀璨之沙' }
        ]
         }
     },
     computed: {
      author () {
        return this.$store.state.author
      }
    },
    methods: {
　setAuthor: function () {
　　　this.$store.commit('newAuthor',this.test)
　}
}
}
</script>
<style scoped>

</style>
