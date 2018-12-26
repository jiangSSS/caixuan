<template>
  <div>
       <div class="projectName">
          <div class="fll projectTitle">项目名称</div>
          <div class="project_desc">嵌入式芯片设计</div>
          <i class="iconfont icon-icon_on_the_right flr"></i>
        </div>
        <div class="projectName">
          <div class="fll projectTitle thisTeacher">项目介绍</div>
          <div class="project_desc project_more fll">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div class="flr"> <i class="iconfont icon-icon_on_the_right thisTeacher"></i> </div>
        </div>
        <div class="projectName">
          <div class="fll projectTitle">路演视频</div>
          <video src="../../../../static/image/videoa.mp4" width="110" height="100" controls="controls" autoplay="autoplay"/>
          <video src="../../../../static/image/videoa.mp4" width="110" height="100" controls="controls" autoplay="autoplay"/>
        </div>
        <div class="projectResults clearfix">
          <div class="fll projectTitle">项目成果</div>
          <div class="timeResults fll"><span>阶段成果</span><i class="iconfont icon-iconset0340 middle"></i></div>
          <div class="timeResults fll"><span>阶段报告</span><i class="iconfont icon-jia"></i></div>
        </div>
        <!-- 进度条 -->
        <van-steps direction="vertical" :active="active" active-color="#00b2ff">
          <van-step>
            <h3>阶段报告</h3>
            <p>2016-07-12 12:40</p>
          </van-step>
          <van-step>
            <div>
              <img class="" style="width:1rem;" src="../../../../static/image/school_logo.jpg" alt="">
            </div>
          </van-step>
          <van-step>阶段成果</van-step>
          <van-step>阶段报告</van-step>
        </van-steps>
        <van-button @click="nextStep">下一步</van-button>
  </div>
</template>

<script>
export default {
 
  data() {
      return {
        active:3,
        list:[]
      };
    },
    methods: { 
      nextStep() {
        this.active = ++this.active % 4;
      }
    }
};
</script>

<style scoped lang="scss">

  .projectTitle {
    width: 1.8rem
  }

  .project_content .projectName {
    line-height: 1rem;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem
  }

  .project_desc {
    line-height: 1rem;
    width: 4.8rem;
    // 换行显示
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    // 显示两行
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .timeResults {
    color: #1abc9c;
  }

  .project_more {
    line-height: .44rem;
    padding: .1rem 0;
  }

  // 阶段成果
  .projectResults {
    display: flex;
    justify-content: space-between;
    line-height: .88rem;
    padding: 0 .4rem;
    // border-bottom: 1px solid #e2e2e2
  }
//   .middle{
//       font-size: .4rem;
//   }
    .thisTeacher {
        line-height: 1.5rem !important
    }
</style>
