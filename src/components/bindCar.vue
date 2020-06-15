<template>
<div class="wrap">
    <!-- 头部 -->
    <div class="nav">
        <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
    <!-- 内容 -->
    <div class="content">
        <!-- 标题 -->
        <div class="header">
            <p>绑定车辆</p>
            <p>请选择您的车牌和输入行驶证号码</p>
        </div>
        <!-- 选择车辆 -->
        <div class="choise">
           <div><input type="text" value="请选择车辆" class="choiseOne"></div>
           <div><input type="text" value="渝" class="choiseTwo"></div>
        </div>
        <!-- 提交绑定 -->
        <div class="buttons">
            <button class="buttonsLeft">取消</button>
            <button class="buttonsRight">提交绑定</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    //   点击返回登录页面
    onClickLeft () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style lang='less' scoped>
  html {
    font-size: 16px;
  }
  @media only screen and (min-width:799px) and (max-width:800px){
    .content{
      width: 72.5%;
    }
  }
  @media only screen and (min-width:1279px) and (max-width:1280px){
    .content{
      width: 45.31%;
    }
  }
.wrap {
    background:rgba(255,255,255,1);
    width: 100vw;
    height: 100vh;
    position: relative;
        // 内容
        .content {
        margin: 0 auto;
        text-align: center;
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        // 标题
        .header p:nth-child(1) {
          font-size: 2.5rem;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(52,52,52,1);
           }
        .header p:nth-child(2) {
            margin-top: 1.5rem;
            font-size: 2.125rem;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(154,154,154,1);
          }
        //   选择车辆
        .choise {
            margin-top: 3.375rem;
            input {
                width: 100%;
                background:rgba(255,255,255,1);
                border:1px solid rgba(206,206,206,1);
                border-radius:0.5rem;
            }
            .choiseOne {
                padding: 1.875rem 2.125rem 1.875rem 1.875rem;
                box-sizing: border-box;
                font-size: 1.75rem;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(198,202,203,1);
            }
            .choiseTwo {
                margin-top: 2.25rem;
                padding: 1.875rem;
                box-sizing: border-box;
                font-size: 1.75rem;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(52,52,52,1);
            }
          }
        }
        // 提交绑定
        .buttons {
            margin-top: 3.75rem;
            display: flex;
            justify-content: space-between;
            .buttonsLeft {
                width: 46%;
                border:1px solid rgba(255,100,100,1);
                border-radius: 0.5rem;
                border: none;
                font-size:2rem;
                color:rgba(228,52,52,1);
              padding: 1.75rem 0;
            }
            .buttonsRight {
                width: 46%;
                background:linear-gradient(0deg,rgba(255,137,137,1),rgba(255,120,121,1),rgba(255,87,87,1));
                box-shadow:3px 3px 6px 0px rgba(253, 42, 42, 0.35);
                border-radius: 0.5rem;
                border: none;
                font-size: 2rem;
                font-family:PingFang SC;
                color:rgba(255,255,255,1);
              padding: 1.75rem 0;
            }
        }
    }
</style>
