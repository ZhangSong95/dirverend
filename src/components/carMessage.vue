<template>
<div class="wrap">
    <!-- 头部 -->
    <div class="nav">
        <van-nav-bar
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
    <!-- 车辆信息列表 -->
    <div class="list">
        <div>
            <div class="listHead">
                <ul>
                    <li>车牌号</li>
                    <li>管理员</li>
                    <li>选择</li>
                </ul>
            </div>
            <ul class="lists">
                <li>
                    <ul>
                        <li>渝A6687367</li>
                        <li>老司机</li>
                        <li><a href="" style="color: #333">点击选择</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>渝A6687367</li>
                        <li>老司机</li>
                        <li><a href="" style="color: #333">点击选择</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>渝A6687367</li>
                        <li>老司机</li>
                        <li><a href="" style="color: #333">点击选择</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

export default {
  data () {
    // 这里存放数据
    return {
    }
  },
  methods: {
    //   点击返回选择车辆页面
    onClickLeft () {
      this.$router.push({path: '/bindCar'})
    }
  }
}
</script>
<style lang='less' scoped>
.list {
    margin: 53px 140px 0 110px;
    .listHead{
        margin-bottom: 41px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                text-align: center;
                height: 29px;
                line-height: 29px;
                font-size: 30px;
                font-weight:500;
                color:rgba(153,153,153,1);
            }
        }
    }
    .lists>li{
        margin-bottom: 68px;
        ul {
        display: flex;
        justify-content: space-between;
        li {
            text-align: center;
            height:31px;
            line-height: 31px;
            font-size:34px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
        }
    }
    }
}
</style>
