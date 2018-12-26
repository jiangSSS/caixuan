<template>
  <div>
    <div>
      <a href="http://www.baidu.com">HelloWorld</a>
    </div>
    <div>
      <a href="https://jingsai.test.caixuan.net/cWapJs/team/ctrl/joinTeam.jsp">caixuan</a>
    </div>
    <router-link to="/center">center</router-link>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    methods: {
      handleclick() { }
    }
  };
</script>

<style scoped>

</style>