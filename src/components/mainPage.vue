<template>
  <div class="wrap clearfix">
    <div class="wrapLeft fl">
      <div class="padd40">
        <div class="wrapLeftHead">
          <p>老司机</p>
          <p>13036310095</p>
        </div>
        <div class="wrapLeftList">
          <ul>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">首页</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">急诊出车记录</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">版本更新</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">意见反馈</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">修改密码</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">退出登录</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrapRight fl">
      <div class="padd54">
        <div class="wrapRightHead">
          <div class="clearfix">
            <p class="fl">任务中心</p>
            <p class="fr">刷新任务</p>
          </div>
        </div>
        <div class="wrapRightList">
          <ul>
            <li>
              <div class="clearfix">
                <img class="fl" src="../assets/img/drees.png" alt="">
                <p class="fl">
                  重庆市渝北区两路口健康路58号重庆市渝北区两路
                  口健康路58号
                </p>
              </div>
            </li>
          </ul>
        </div>
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
    /*font-size: 16px;*/
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
    .wrapLeft {
      width: 29.53%;
      .padd40 {
        padding-left: 40px;
        .wrapLeftHead {
          margin-top: 3.375rem;
        }
        .wrapLeftHead p:nth-child(1) {
            font-size:38px;
            height: 38px;
            line-height: 38px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
        .wrapLeftHead p:nth-child(2) {
          margin-top: 1rem;
          font-size: 21px;
          height: 21px;
          line-height: 21px;
          font-family:DINOT;
          font-weight:500;
          color:rgba(153,153,153,1);
          margin-bottom: 2.4375rem;
        }
        .wrapLeftList {
          ul li {
            height: 5.75rem;
            line-height: 5.75rem;
            vertical-align: middle;
            img {
              width:2rem;
              height:1.875rem;
              margin-right: 1.1875rem;
              margin-top: 1.95rem;
            }
            p {
              height:5.75rem;
              line-height: 5.75rem;
              font-size:1.75rem;
              font-family:Microsoft YaHei;
              font-weight:bold;
              color:rgba(51,51,51,1);
            }
          }
        }
      }
    }
    .wrapRight{
      width: 70.46%
    }
    .wrapRight {
      background: #f5f5f5;
      height: 100vh;
      .padd54 {
        padding: 3.375rem 2.5rem 0 2.5rem;
        .wrapRightHead {
          margin-bottom: 40px;
        }
        .wrapRightHead p:nth-child(1) {
          font-size: 40px;
          height: 39px;
          line-height: 39px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }
        .wrapRightHead p:nth-child(2) {
          height:27px;
          line-height: 39px;
          font-size:26px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
        .wrapRightList {
          width: 100%;
          height: 300px;
          ul li {
            padding: 40px 22px 25px 28px;
          }
          ul li div:nth-child(1) p {
            font-size:32px;
          }
        }
      }
    }
  }
</style>
