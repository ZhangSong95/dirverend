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
import { Base64 } from 'js-base64'
import JSEncrypt from 'jsencrypt'
import md5 from 'js-md5'
import axios from 'axios'
var public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEiO4J7T2bs+wZtU9pKUU7qXE4' +
  'oUPgy8Fo80yF/h6v9pA049draRDic0UrsZ/rH51vjmGrFqH/qlVwiFqM7FKska+H' +
  'pZcltiHJT8JrCO1Hgp00jbfeCBgHosPjEjgsDGHMY74yLe70eGelEouqwOZoVwe0' +
  'ff2rHYbOJe9sz6hw0QIDAQAB'

var private_key = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAMw171hTC609b3I6' +
  'A9Aw7Q/YqzWHDEn3olgX7VFZdjVUWhV5Eo+3jRKVEFox3pgOmtthfAtRae/2dYWg' +
  'uzp19QUNO+F3pWlwsmBmHT8G2v3PzjBND7de2oa1ASmohUIS81jheB5S0xJpwUhy' +
  'YFInLe6YdbOvfzaKm+aREH4JN+WtAgMBAAECgYBUhgZ5MnZk0EbuqqClbXrR0kab' +
  'Mzic7QifGdg6kaLh0/YtaR2LqteTV2ubSYTuvyzNnP3w2VPV5Ncj5jFYszYkkYxp' +
  'TKJ5JhjGlkgetw4AKPwNbrgSATsfDF9dwyl+IZExnan5i22M2UiDrJLQbLW0TpO/' +
  'hOBsgPMiuQJiWy8RKQJBAPI51mmXUKAQlcHoPrHLLCTfEPMKp/Q8BvsEJmTFd1Dm' +
  'drpe3DuuXYCiglHbZUHgIHCDXyHvQMfIxBS69VGJvycCQQDX0rJtbpZdg8r9da0V' +
  'PTOeeYJX1cDAqLn6qyuFEDSnq2vWPhcssCup240r1u1kFdTpHJJEl7RdkH2X5l3z' +
  'ezkLAkEA4XBJCP9Gj6K/7re7WfgRPsPJX5okVOBlUsw6+4D5GndUOwK8kGMpLOaS' +
  'yaKa7COvrWfna4rkTMyjCfQzC89a8wJBAJrUpPys4WKlMfMzgMBD78w5D7FDv8x3' +
  'PzT9p3MGdT/0UqCYWrfMiwaIY3aX8iZjIyM5RBXBX7vf9LoMokoSlJECQQDj10b0' +
  'QsMXkvketVtwNv4yoN94lOWIa/xy5oGK4UMxs/iImCxK9W3eD2FVtlIVqwHMH8q6' +
  'DIgfGFubwidGxqE7'
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
      // console.log('submit', values)
      let encryptStr = new JSEncrypt()
      encryptStr.setPublicKey(public_key)

      // axios({
      //   method: 'post',
      //   url: 'https://g.i.jshi9.com/v1.0.2/auth/ambulance/login',
      //   data: 'mob=' + this.username + '&password=' + Base64.encode(encryptStr.encrypt(md5(this.password).toUpperCase())),
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      //   },
      //   timeout: 10000
      // })

      this.$axios('v1.0.5/auth/ambulance/login', {
        mob: this.username,
        password: Base64.encode(encryptStr.encrypt(md5(this.password).toUpperCase()))
      })
        .then(res => {
          if (res.data.code === 1) {
            window.localStorage.setItem('token', res.data.token)
            setTimeout(() => {
              this.$router.push({path: ''})
            }, 500)
            console.log('1111111')
            // console.log(res.msg)
          }
        })
    }
  }
}
</script>

<style scoped lang="less">
  html {
    font-size: 16px;
  };
  @media only screen and (min-width:799px) and (max-width:800px){
    .content{
      width: 72.25%;
    }
  }
  @media only screen and (min-width:1279px) and (max-width:1280px){
    .content{
      width: 44.53%;
    }
  }
  .wrap {
    background:rgba(249,244,244,1);
    width: 100vw;
    height: 100vh;
    position:relative;
    .content {
      /*width: 44.53%;*/
      /*800屏幕的宽度*/
      /*width: 72.25%;*/
      margin: 0 auto;
      text-align: center;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      img {
        width: 51.57%;
        margin-bottom: 1.68rem;
      }
      p {
        /*width: 84.21%;*/
        font-size:2.5rem;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(77,77,77,1);
        margin-bottom: 3.6rem;
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
    padding: 1.43rem 0 1.43rem 1.81rem !important;
    overflow: hidden;
    color: #323233;
    font-size: 2rem;
    background-color: #fff;
    border:1px solid rgba(255,99,99,1);
    box-shadow:2px 10px 14px 0px rgba(255,203,203,0.29);
    border-radius: 0.5rem;
    margin-bottom: 2.25rem;
  }
  .van-button--info {
    color: #fff;
    border: none;
    margin-top: 0.625rem;
    font-size: 2rem;
  }
  .van-button::before {
    background: none;
  }
  .check{
    width: 22.28%;
    float: right;
    border: 0;
    background-color:#f9f4f4;
    box-shadow: 0px 0px 0px 0px rgba(255, 203, 203, 0.29);
    padding: 0px !important;
    font-size: 1.5rem;
  }
</style>
