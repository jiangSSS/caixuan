<template>
    <div>
        <div class="projectName">
            <div class="fll projectTitle team-logo">团队LOGO</div>
            <img class="logo fll" src="../../../../static/image/school_logo.jpg">
            <div><i class="iconfont icon-icon_on_the_right team-logo flr"></i> </div>
        </div>
        <div class="projectName">
            <div class="fll projectTitle">团队名称</div>
            <div class="project_desc" property="data.teamName"></div>
            <div><i class="iconfont icon-icon_on_the_right flr"></i></div>
        </div>
        <div class="projectName">
            <div class="fll projectTitle">所在地区</div>
            <div class="project_desc">北京市朝阳区</div>
            <div><i class="iconfont icon-icon_on_the_right flr"></i></div>
        </div>
        <div class="projectName">
            <div class="fll projectTitle thisTeacher">团队介绍</div>
            <div class="project_desc project_more fll">我们的团队有一个大法师打发时间段发生地方卡刷卡机共同的维护ddddddddd我们的团队有一个大法师打发时间段发生地方卡刷卡机共同的维护ddddddddd</div>
            <div><i class="iconfont icon-icon_on_the_right flr thisTeacher"></i></div>
        </div>
        <div class="projectName teamNum clearfix">
            <div class="fll projectTitle teamMember">团队成员</div>
            <div class="project_teamNum">
                <div class="fll p3">
                    <div class="mt4"> <img class="logo_avatar" src="../../../../static/image/school_logo.jpg"></div>
                    <div class="mt4"><span>张轩浩</span>
                        <van-tag style="background:#1abc9c">队长</van-tag>
                    </div>
                    <div class="mt4">北京工业大学</div>
                </div>
                <div class="fll p3">
                    <div class="mt4"><img class="logo_avatar" src="../../../../static/image/school_logo.jpg"></div>
                    <div class="mt4"><span>张轩浩</span></div>
                    <div class="mt4">北京工业大学</div>
                </div>
            </div>
            <i class="iconfont icon-icon_on_the_right flr teamMember"></i>
        </div>
        <!-- <div class="projectName team_teacher">
            <div class="fll projectTitle thisTeacher">指导老师</div>
            <router-link to="/invitedTeacher" class="">
                <i class="iconfont icon-jjia- invite_teacher"></i>
                <span style="display:block;color: #1abc9c" class="invite mt4">邀请加入</span>
            </router-link>
            <div><i class="iconfont icon-icon_on_the_right flr thisTeacher"></i></div>
        </div> -->
        <div class="projectName">
            <div class="fll projectTitle">团队风采</div>
            <div class="release" @click="handleRelease"><span>发布风采</span><i class="iconfont icon-xinxifabu"></i></div>
            <i class="iconfont icon-icon_on_the_right flr"></i>
        </div>
        <div>
            <div class="teamList clearfix">
                <router-link to="/teamDetail">
                    <img class="logo_avatar fll" src="../../../../static/image/school_logo.jpg">
                    <div class="fll">
                        <p class="userInfo">张浩轩</p>
                        <p class="userInfo">2019集成电路大赛颁奖</p>
                    </div>
                    <div class="userImg">
                        <img class="img_userInfo" src="../../../../static/image/banner-03.jpg" alt="">
                        <img class="img_userInfo" src="../../../../static/image/banner-03.jpg" alt="">
                    </div>
                    <div class="date_userInfo">
                        <span class="fll">今天 11:10</span><span class="nice"><i class="iconfont icon-like"></i>234</span>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
// import $ from ""
    export default {
        data() {
            return {
                // teamMessage:{
                //     teamName:"",

                // }
            };
        },
        methods: {
            handleRelease() {
                this.$router.push("/release")
            },
            getData(){
                console.log("22222222")
                this.$axios.post("/api/cWapJs/center/ajaxTest.jsp").then(res =>{         
                    console.log(res)
                    
                })
            }
        },
        created(){
            this.getData()
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

    .project_more {
        line-height: .44rem;
        padding: .1rem 0;
    }

    .project_content .logo {
        height: 1.2rem;
        margin-left: -3rem
    }

    .logo_avatar {
        height: 1rem;
    }

    .mt4 {
        height: .4rem;
    }

    .p3 {
        padding-right: .3rem
    }

    .teamNum {
        height: 1.8rem;
    }

    .project_teamNum {
        width: 4.8rem
    }

    .desc {
        height: 3.6rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #e2e2e2
    }

    .invite {
        margin-right: 3.3rem
    }

    .team-logo {
        line-height: 1.2rem;
    }

    .teamMember {
        line-height: 1.8rem !important
    }

    .thisTeacher {
        line-height: 1.5rem !important
    }

    .team_title {
        width: 2.4rem
    }

    .team_people img {
        height: 1rem;
    }

    .team_teacher {
        height: 1.5rem;
    }

    .invite_teacher {
        font-size: .8rem;
        margin-top: .2rem;
        margin-left: .2rem;
        color: #999
    }

    .invite {
        margin-top: -.5rem
    }

    .release {
        color: #1abc9c;
        margin-left: 2rem
    }


    .userInfo {
        height: .2rem;
    }

    .img_userInfo {
        width: 3.1rem;
        padding-right: .2rem;
        height: 3rem;


    }

    .date_userInfo {
        padding: .3rem 0;
    }

    .nice {
        margin-left: 2rem
    }

    .nice i {
        color: #f00
    }

    .teamList {
        padding: 0 .4rem
    }
</style>