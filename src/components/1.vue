<template>
  <div class="wrap clearfix">
    <div class="wrapLeft fl">
      <div class="wrapLeftHead">
        <p>老司机</p>
        <span>13036310095</span>
      </div>
      <div class="wrapLeftList">
        <ul>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">首页</p>
          </li>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">急诊出车记录</p>
          </li>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">版本更新</p>
          </li>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">意见反馈</p>
          </li>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">修改密码</p>
          </li>
          <li class="clearfix">
            <img  class="fl" src="../assets/img/house.png" alt="">
            <p class="fl">退出登录</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapRight fl clearfix" style="width: 51.9%">
      <div style="height: 39px">
        <p class="wrapRightHeadLeft fl">任务中心</p>
        <p class="wrapRightHeadRight fr">刷新业务</p>
      </div>
      <div class="wrapRightList">
        <ul>
          <li>
            <p>
              重庆市渝北区两路口健康路58号
            </p>
            <div class="clearfix">
              <div class="clearfix fl">
                <p class="fl">
                  距离现场 <span>6.5</span>千米，
                </p>
                <p class="fl">
                  预计时间 <span>36</span>min
                </p>
              </div>
              <div class="fr">03-10 13:54</div>
            </div>
            <div>
              <button>拒绝</button>
              <button style="background: red">接受</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage'
}
</script>

<style scoped lang="less">
  html {
    font-size: 16px;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
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
    width: 100%;
    margin-top: 3.375rem;
  }
  .wrapLeft {
    width: 29.53%;
    margin-left: 2.125rem;
    height:800px;
    background:rgba(255,255,255,1);
    .wrapLeftHead p {
      width:114px;
      height:38px;
      font-size:38px;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(51,51,51,1);
      line-height:70px;
      margin-bottom: 1rem;
    }
    .wrapLeftHead span {
      width:160px;
      height:21px;
      font-size:28px;
      font-family:DINOT;
      font-weight:500;
      color:rgba(153,153,153,1);
      line-height:70px;
    }
    .wrapLeftList {
      ul li {
        width:378px;
        height:92px;
        line-height: 92px;
        /*background:rgba(248,248,248,1);*/
        img {
          margin-right: 19px;
          width:32px;
          height:30px;
          margin-top: 32px;
        }
        p {
          height:28px;
          font-size:28px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(51,51,51,1);
        }
      }
    }
  }
  .wrapRight {
    /*width: 100%;*/
    margin: 0 40px;
    .wrapRightHeadLeft {
      width:160px;
      height:39px;
      font-size:2.5rem;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(51,51,51,1);
      /*line-height:70px;*/
    }
    .wrapRightHeadRight {
      width:104px;
      height:27px;
      font-size:26px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .wrapRightList {
      margin-top: 40px;
      padding: 40px 30px 25px 28px;
      ul li>p {
        font-size:32px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:40px;
        margin-bottom: 16px;
      }
      ul  li div>p {
        /*height:25px;*/
        /*font-size:24px;*/
        /*font-family:PingFang SC;*/
        /*font-weight:500;*/
        /*color:rgba(51,51,51,1);*/
      }
      ul li div {
        margin-top: 38px;
        button {
          width: 49%;
          height: 84px;
          background:rgba(255,255,255,1);
          border-radius:16px;
        }
      }
    }
  }
</style>
