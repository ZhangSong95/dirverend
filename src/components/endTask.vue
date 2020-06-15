<template>
  <div class="wrap">
    <!--头部-->
      <div class="nav">
        <van-nav-bar
          left-text="返回首页(47s)"
          left-arrow
          @click-left="onClickLeft"
        />
    </div>
    <!--内容-->
    <div class="content">
      <!--任务结束-->
      <div style="margin: 0 auto; width: 21%;">
        <div class="endTask clearfix">
          <img src="../assets/img/over.png" alt="" class="fl">
          <p class="fl">任务结束</p>
        </div>
      </div>
      <!--出车用时-->
      <div class="carTimeMileage">
        <div class="carTime">
          <div>
            <span>26</span>分
            <span>45</span>秒
          </div>
          <div class="carTimeCar">
            出车用时
          </div>
        </div>
        <div class="carMileage">
          <div>
            <span>2432</span>m
          </div>
          <div class="carMileageCar">
            出车里程
          </div>
        </div>
      </div>
      <!--出车明细-->
      <div class="carDetailed">
        <p>出车明细</p>
        <div>
          <div>
            <div>
              出发时间：
              <span>2019-4-12 17:01:25</span>
            </div>
            <div>
              到达时间：
              <span>2019-4-12 17:01:25</span>
            </div>
          </div>
          <div>
            <div>
              返程时间：
              <span>2019-4-12 17:01:25</span>
            </div>
            <div>
              结束时间：
              <span>2019-4-12 17:01:25</span>
            </div>
          </div>
          <div>
            <div>
              前往距离：
              <span>26m</span>
            </div>
            <div style="text-align: left;">
              返程距离：
              <span>26m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'endTask',
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/mainPage'})
    }
  }
}
</script>

<style scoped lang="less">
  .clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow:hidden;
  }
  .wrap {
    background: #F8F8F8;
    width: 100vw;
    height: 100vh;
  }
  .content {
    margin-top: 21px;
    .endTask {
      text-align: center;
      margin:  auto;
      p {
        height: 131px;
        line-height:131px;
        font-size:30px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(120,120,120,1);
        margin-left: 15px;
      }
    }
    .carTimeMileage {
      width: 72.18%;
      background: #FFFFFF;
      border-radius:16px;
      margin: 0 auto;
      padding: 51px 256px 51px 260px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      div div {
        font-size:24px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(74,74,74,1);
        span {
          font-size:50px;
          font-family:DINOT;
          font-weight:bold;
          color:rgba(74,74,74,1);
        }
      }
    }
    .carTimeCar {
      font-size:20px !important;
      font-family:PingFang SC;
      font-weight:500 !important;
      font-weight:500;
      color:rgba(154,154,154,1) !important;
      text-align: center !important;
    }
    .carMileageCar {
      font-size:20px !important;
      font-family:PingFang SC;
      font-weight:500 !important;
      font-weight:500;
      color:rgba(154,154,154,1) !important;
      text-align: center !important;
    }
    .carDetailed {
      width: 72.18%;
      background: #FFFFFF;
      border-radius: 16px;
      margin: 0 auto;
      margin-top: 20px;
      padding: 39px 71px 59px 49px;
      box-sizing: border-box;
      &>p {
        font-size:30px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(154,154,154,1);
      }
      &>div {
        margin-top: 30px;
        div {
          display: flex;
          justify-content: space-between;
          div {
            font-size:26px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(74,74,74,1);
            span {
              font-size:26px;
              font-family:DINOT;
              font-weight:500;
              color:rgba(74,74,74,1);
            }
          }
        }
      }
    }
  }
</style>
