<template>
<div class="wrap">
  <!--头部-->
  <div class="nav">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div class="search">
    <input type="text" placeholder="请输入车牌号">
  </div>
  <!--列表-->
  <div class="list">
    <!--列表头部-->
    <div class="listHead">
      <ul>
        <li>车牌号</li>
        <li>管理员</li>
        <li>选择</li>
      </ul>
    </div>
    <!--头部列表-->
    <div class="listContent" style="margin-top: 2.56rem">
      <ul>
        <li style="margin-bottom: 4.25rem">
          <ul>
            <li>渝A6687367</li>
            <li>老司机</li>
            <li><a href="">点击选择</a></li>
          </ul>
        </li>
        <li style="margin-bottom: 4.25rem">
          <ul>
            <li>渝A6687367</li>
            <li>老司机</li>
            <li><a href="">点击选择</a></li>
          </ul>
        </li>
        <li style="margin-bottom: 4.25rem">
          <ul>
            <li>渝A6687367</li>
            <li>老司机</li>
            <li><a href="">点击选择</a></li>
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
    onClickLeft () {
      this.$router.push({path: '/bindCar'})
    }
  }
}
</script>
<style lang='less' scoped>
  html {
    font-size: 16px;
  }
  .wrap {
    background:rgba(255,255,255,1);
    width: 100vw;
    height: 100vh;
    position: relative;
    .search {
      position: absolute;
      top: 1.9rem;
      left: 4.125rem;
      z-index: 1;
      input {
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 2.31rem;
        border: none;
        font-size: 2rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(191,191,191,1);
      }
    }
    .list {
      padding: 3.31rem 8.875rem 0 6.875rem;
      .listHead ul{
        display: flex;
        justify-content: space-between;
        padding: 0 2.5rem 0 3.19rem;
        li {
          font-size: 1.875rem;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(154,154,154,1);
        }
      }
      .listHead ul li:nth-child(2) {
        margin-left: 1rem;
      }
      .listContent ul li ul{
        display: flex;
        justify-content: space-between;
        font-size: 2.125rem;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(52,52,52,1);
        a {
          color: #343434 !important;
        }
      }
    }
  }
</style>
