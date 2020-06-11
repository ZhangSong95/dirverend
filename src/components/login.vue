<template>
    <div class="wrap">
      <div class="content ">
        <img src="../assets/img/evcall.png" alt="">
        <p>登录后可进行急诊任务操作</p>
        <div class="login">
          <van-form @submit="onSubmit">
            <van-field
              v-model="username"
              name="用户名"
              placeholder="请输入账号"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              placeholder="请输入密码"
            />
            <van-field name="checkbox" class="fr check" style="padding: 0">
              <template #input>
                <van-checkbox v-model="checkbox" shape="square" />记住密码
              </template>
            </van-field>
            <div class="submit">
              <van-button round block type="info" native-type="submit">
                登录
              </van-button>
            </div>
          </van-form>
        </div>
      </div>
    </div>
</template>

<script>
// import Button from 'vant/lib/button'
// import 'vant/lib/button/style'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      checkbox: false
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
  @media screen and (max-width:321px){
    .m-navlist{font-size:15px}
  }

  @media screen and (min-width:321px) and (max-width:400px){
    .m-navlist{font-size:16px}
  }

  @media screen and (min-width:400px){
    .m-navlist{font-size:18px}
  }
  html {
    font-size: 16px;
  };
  .wrap {
    background:rgba(249,244,244,1);
    width: 100vw;
    height: 100vh;
    position:relative;
    .content {
      width: 44.53%;
      margin: 0 auto;
      text-align: center;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      img {
        width: 51.57%;
        height: 2.815rem;
        margin-bottom: 1.68rem;
      }
      p {
        /*width: 84.21%;*/
        height:2.5rem;
        line-height: 2.5rem;
        font-size:2.5rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(77,77,77,1);
        margin-bottom: 58px;
      }
    }
  }
  .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 24px 0 24px 29px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    height: 80px;
    border:1px solid rgba(255,99,99,1);
    box-shadow:2px 10px 14px 0px rgba(255,203,203,0.29);
    border-radius:8px;
    margin-bottom: 36px;
  }
  .van-button--info {
    color: #fff;
    border: none;
  }
  .check{
    float: right;
    border: 0;
    background-color:#f9f4f4;
    box-shadow: 0px 0px 0px 0px rgba(255, 203, 203, 0.29);
  }
</style>
