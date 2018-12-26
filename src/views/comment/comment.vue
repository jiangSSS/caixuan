<template>
    <div>
        <Header></Header>
        <!-- <img src="" alt=""> -->
        <div class="commentList clearfix">
            <div class="professor fll">
                <img src="http://ue.caixuan.net/jingsai_weixin/images/%E8%B5%9B%E4%BA%8B%E8%AF%A6%E6%83%85/u531.svg" alt="">
                <span>张灵晨</span>
                <span>华为技术专家</span>
            </div>
            <div class="comment_desc">项目创新新较好，技术框架有待导师进一步指导，技术实现质量有待优化。实现方式可参照在线教学视频学习。</div>
            <div></div>
        </div>
         <div class="commentList clearfix">
            <div class="professor fll">
                <img src="http://ue.caixuan.net/jingsai_weixin/images/%E8%B5%9B%E4%BA%8B%E8%AF%A6%E6%83%85/u531.svg" alt="">
                <span>张灵晨</span>
                <span>华为技术专家</span>
            </div>
            <div class="comment_desc">项目创新新较好，技术框架有待导师进一步指导，技术实现质量有待优化。实现方式可参照在线教学视频学习。</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/header.vue"
    export default {
        components:{
            Header
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
    .commentList{
        border-bottom: 1px solid #e2e2e2
    }
    .professor{
        padding: .3rem 0;  
        width: 2rem ;
        text-align: center; 
    }
    .professor span{
        display: block;
        font-size: .26rem
    }
    .comment_desc{
        padding: .4rem .1rem 0;
        font-size: .26rem;
        line-height: .4rem;
    }
    
</style>