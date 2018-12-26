<template>
    <div>
        <div>
            <van-steps :active="active" active-color="#1abc9a" class="steps">
                <van-step><span>2018年12月</span><br><span>报名截止</span></van-step>
                <van-step><span>2019年2月</span><br><span>初审</span></van-step>
                <van-step><span>2019年6月</span><br><span>分区赛</span></van-step>
                <van-step><span>2019年8月</span><br><span>决赛</span></van-step>
            </van-steps>
        </div>
        <div class="formTitle">初审结果</div>
        <div>
            <table width="97%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <th>阶段</th>
                    <!-- <th>赛题</th> -->
                    <th>是否晋级</th>
                    <th>排名</th>
                    <th>成果报告</th>
                    <th>专家评语</th>
                </tr>
                <tr>
                    <td>初审</td>
                    <!-- <td>华为云杯</td> -->
                    <td>是</td>
                    <td>2</td>
                    <td>良好</td>
                    <td @click="handleLook">查看</td>

                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                active:1
            };
        },
        methods: {
            handleLook(){
                this.$router.push({path:"/comment"})
            }
        }
    };
</script>

<style scoped lang="scss">
    .steps span {
        font-size: .2rem;
        width: 6rem
    }

    .van-step--horizontal:last-child .van-step__title {
        margin-top: .7rem
    }
    /deep/ .van-step__title span {
        margin-top: .8rem;
        // color: #1abc9a;
        text-align: center;
        margin: 0 auto;
        box-sizing: border-box
    }
     /deep/ .van-step__title span:active{
         color: #1abc9a
     }
    /deep/ .van-step--horizontal .van-step__title{
        margin-top: .8rem;
    }
    /deep/ .van-step--horizontal.van-step--finish .van-step__line,/deep/ .van-step--horizontal.van-step--finish .van-step__circle{background: #1abc9a}
    .formTitle {
        margin-left: .2rem;
        border-left: 4px solid #1abc9a;
        padding-left: .2rem
    }
    table {
        border-right: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        margin: .2rem auto; 
    }
    table th{
        background: #f2f2f2;
        font-weight: 300;
        color: #999
    }
    table td,
    table th {
        border-left: 1px solid #e2e2e2;
        border-top: 1px solid #e2e2e2;
        height: .8rem;
        width: 2rem      
    }
    table {
        text-align: center;
    }

    table td img {
        width: 50px;
        height: 25px;
    }

    table tr td:nth-child(4),table tr td:nth-child(5) {
        color: #1abc9a
    }
</style>