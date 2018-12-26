<template>
  <div>
    <Header></Header>
    <van-tabs color="#1abc9c">
      <van-tab title="参赛项目" class="project_content">
        <Project></Project>
      </van-tab>
      <van-tab title="赛事进程" class="project_content">
        <Process></Process>
      </van-tab>
      <van-tab title="我的队伍" class="project_content">
        <Team></Team>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Header from "@/components/Header/header.vue"
  import Project from "@/views/join_game/game_project/gameProject.vue"
  import Process from "@/views/join_game/process/process.vue"
  import Team from "@/views/join_game/myTeam/myTeam.vue"
  export default {
    components: {
      Header,
      Project,
      Process,
      Team
    },
    data() {
      return {
       
      };
    },
    methods: { 
     
    }
  };
</script>


<style scoped lang="scss">
  /deep/ .van-tab span{
    color: #1abc9c;
  }
</style>