<template>
  <div class="header">
    <mt-header :title="title" class="header-title">
      <mt-button class="left-header" icon="back" slot="left" @click="$router.back()">报道查看</mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    computed: {
      title() {
        return this.$route.meta.title
      }
    },

  };
</script>

<style scoped lang="scss">
  .header-title {
    background: #1abc9c;
    font-size: .35rem;
    height: .88rem;
  }
  .left-header{
    font-size: .22rem;
    line-height: .4rem
  }
  /deep/ .mint-header-title{
    font-size: .4rem
  }
</style>