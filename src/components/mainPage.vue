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
            <li class="clearfix" @click="status = 0">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">首页</p>
            </li>
            <li class="clearfix">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">车辆信息</p>
            </li>
            <li class="clearfix" @click="status = 1">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">急诊出车记录</p>
            </li>
            <li class="clearfix" @click="status = 2">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">版本更新</p>
            </li>
            <li class="clearfix" @click="status = 3">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">意见反馈</p>
            </li>
            <li class="clearfix" @click="status = 4">
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">修改密码</p>
            </li>
            <li class="clearfix"  @click="singOut" >
              <img class="fl" src="../assets/img/house.png" alt="">
              <p class="fl">退出登录</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--首页-->
    <div class="wrapRight fl" v-show="status === 0">
      <div class="padd54">
        <!--头部-->
        <div class="wrapRightHead">
          <div class="clearfix">
            <p class="fl">任务中心</p>
            <p class="fr">刷新任务</p>
          </div>
        </div>
        <!--列表-->
        <div class="wrapRightList">
          <ul>
            <li>
              <div class="wrapRightListTop">
                <div style="margin-right: 1.05rem">
                  <img class="fl" src="../assets/img/drees.png" alt="" baialign="absmiddle">
                </div>
                <div class="clearfix">
                  <p>
                      重庆市渝北区两路口健康路58号重庆市渝北区两路口健康路58号
                  </p>
                  <div class="wrapRightListTopTime">
                    <div class="wrapRightListTopTimeLeft">
                      <div>
                        距离现场
                        <span>6.5</span>
                        km
                      </div>
                      <div>
                        ，预计时间
                        <span>36</span>
                        min
                      </div>
                    </div>
                    <div class="wrapRightListTopTimeRight">
                      03-10 13:54
                    </div>
                  </div>
                  <!--<div class="wrapRightListDistanceTimes">-->
                    <!--<div class="wrapRightLisDistance clearfix">-->
                      <!--<p class="fl">距离现场-->
                        <!--<span style="color: #E43434">6.5km</span>-->
                      <!--</p>-->
                      <!--<p class="fl">，预计时间-->
                        <!--<span style="color: #E43434">36min </span>-->
                      <!--</p>-->
                    <!--</div>-->
                    <!--<div class="wrapRightLisTimes">03-10 13:54</div>-->
                  <!--</div>-->
                </div>
              </div>
              <div class="wrapRightListButton">
                <input type="button" value="拒绝">
                <input type="button" value="接受">
              </div>
            </li>
            <li>
              <div class="wrapRightListTop">
                <div style="margin-right: 1.05rem">
                  <img class="fl" src="../assets/img/drees.png" alt="" baialign="absmiddle">
                </div>
                <div class="clearfix">
                  <p>
                      重庆市渝北区两路口健康路58号重庆市渝北区两路口健康路58号
                  </p>
                  <div class="wrapRightListTopTime">
                    <div class="wrapRightListTopTimeLeft">
                      <div>
                        距离现场
                        <span>6.5</span>
                        km
                      </div>
                      <div>
                        ，预计时间
                        <span>36</span>
                        min
                      </div>
                    </div>
                    <div class="wrapRightListTopTimeRight">
                      03-10 13:54
                    </div>
                  </div>
                  <!--<div class="wrapRightListDistanceTimes">-->
                    <!--<div class="wrapRightLisDistance clearfix">-->
                      <!--<p class="fl">距离现场-->
                        <!--<span style="color: #E43434">6.5km</span>-->
                      <!--</p>-->
                      <!--<p class="fl">，预计时间-->
                        <!--<span style="color: #E43434">36min </span>-->
                      <!--</p>-->
                    <!--</div>-->
                    <!--<div class="wrapRightLisTimes">03-10 13:54</div>-->
                  <!--</div>-->
                </div>
              </div>
              <div class="wrapRightListButton">
                <input type="button" value="拒绝">
                <input type="button" value="接受">
              </div>
            </li>
            <!--<li>-->
              <!--<div class="clearfix">-->
                <!--<img class="fl" src="../assets/img/drees.png" alt="" baialign="absmiddle">-->
                <!--<p class="fl">-->
                  <!--重庆市渝北区两路口健康路58号重庆市渝北区两路口健康路58号-->
                <!--</p>-->
              <!--</div>-->
              <!--<div class="wrapRightListDistanceTimes">-->
                <!--<div class="wrapRightLisDistance clearfix">-->
                  <!--<p class="fl">距离现场-->
                    <!--<span style="color: #E43434">6.5km</span>-->
                  <!--</p>-->
                  <!--<p class="fl">，预计时间-->
                    <!--<span style="color: #E43434">36min </span>-->
                  <!--</p>-->
                <!--</div>-->
                <!--<div class="wrapRightLisTimes">03-10 13:54</div>-->
              <!--</div>-->
              <!--<div class="wrapRightListButton">-->
                <!--<input type="button" value="拒绝">-->
                <!--<input type="button" value="接受">-->
              <!--</div>-->
            <!--</li>-->
          </ul>
        </div>
      </div>
    </div>
    <!--急诊出车记录-->
    <div class="wrapRight fl" v-show="status === 1">
      <div class="padd54">
        <!--头部-->
        <div class="wrapRightHead">
          <div class="clearfix">
            <p class="fl">急诊出车记录</p>
            <div class="fr clearfix">
              <img src="../assets/img/mark.png" alt="" class="fl">
              <p class="fr" @click="eject">说明</p>
            </div>
          </div>
        </div>
        <!--累计出车-->
        <div class="cumulativeCar">
          <div class="cumulativeCarLeft">
            <p>今年累计出车</p>
            <div>
              <span>168</span>次
            </div>
          </div>
          <div class="cumulativeCarRight">
            <p>基本数据</p>
            <ul>
              <li>
                <div>
                  <div><div><span>12</span>次</div><p>有效出车</p></div>
                </div>
              </li>
              <li>
                <div>
                  <div><div><span>13</span>次</div><p>无效出车</p></div>
                </div>
              </li>
              <li>
                <div>
                  <div><div><span>00:35:27</span></div><p>出车用时</p></div>
                </div>
              </li>
              <li>
                <div>
                  <div><div><span>135.5</span>km</div><p>出车里程</p></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--出车记录汇总-->
        <div>
          <!--出车记录次数-->
          <div></div>
          <!--出车记录列表-->
          <div></div>
        </div>
      </div>
    </div>
    <!--版本更新-->
    <div class="wrapRight fl" v-show="status === 2">2</div>
    <!--意见反馈-->
    <div class="wrapRight fl" v-show="status === 3">
      <div class="padd54">
        <!--头部-->
        <div class="wrapRightHead">
          <div class="clearfix">
            <p class="fl">意见反馈</p>
          </div>
        </div>
        <!--问题和意见-->
        <div class="questions">
          <p>问题和意见</p>
          <!--留言框-->
            <van-field
              rows="2"
              size="28px"
              height="174px"
              autosize
              type="textarea"
              maxlength="300"
              placeholder="请填写您的问题或意见，便于我们提供更高的服务。"
              show-word-limit
            />
        </div>
        <!--图片-->
        <div class="imgs">
          <div class="imgsTop">
            <p>图片（非必填，提供问题截图）</p>
            <div>0/4</div>
          </div>
          <div class="imgsbottm">
            <van-uploader v-model="fileList" multiple />
          </div>
        </div >
        <!--提交-->
        <input type="button" value="提交" style="width: 100%;" class="submit">
      </div>
    </div>
    <!--修改密码-->
    <div class="wrapRight fl" v-show="status === 4">
      <div class="padd54">
        <!--头部-->
        <div class="wrapRightHead">
          <div class="clearfix">
            <p class="fl">修改密码</p>
          </div>
        </div>
        <!--密码-->
        <div class="passwords">
          <el-form class=“user-account-key” ref="form" :model="form" :rules="rules">
            <div style="font-size:28px;color:rgba(153,153,153,1);height:27px;line-height:27px;margin-bottom:17px">旧密码</div>
            <el-form-item prop=“password”>
              <el-input type=“password” placeholder=若包含字母，请注意区分大小写 v-model="form.password" size='28px'></el-input>
            </el-form-item>
            <div style="font-size:28px;color:rgba(153,153,153,1);height:27px;line-height:27px;margin-bottom:17px">新密码</div>
            <el-form-item  prop=“newPassword”>
              <el-input type=“password” placeholder=请设置6-16位密码 v-model="form.newPassword"></el-input>
            </el-form-item>
            <!--<el-form-item label=“确认密码” prop=“newPassword2”>-->
              <!--<el-input type=“password” placeholder=“请确认新密码” v-model="form.newPassword2"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item>
              <el-button type=“primary” @click="onSubmit" class="submits">提交</el-button>
              <!--<el-button @click="$refs['form'].resetFields()">重置</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    // 此处即表单发送之前验证
    let validateNewPassword = (rule, value, callback) => {
      if (value === this.form.password) {
        callback(new Error('新密码不能与原密码相同!'))
      } else {
        callback()
      }
    }
    // let validateNewPassword2 = (rule, value, callback) => {
    //   if (value !== this.form.newPassword) {
    //     callback(new Error('与新密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      // 右侧栏
      status: 0,
      // 上传图片框架
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      // 修改密码
      form: {},
      rules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' }],
        newPassword: [
          { required: true, message: '请设置新密码', trigger: 'blur' },
          { validator: validateNewPassword, trigger: 'blur' }
        ],
        newPassword2: [
          { required: true, message: '请确认新密码', trigger: 'blur' }
          // { validator: validateNewPassword2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$dialog.alert({
        message: '密码已成功修改请重新登录',
        confirmButtonText: '重新登录'
      }).then(() => {
        this.$router.push({ path: '/login' })
      })
    },
    eject () {
      this.$dialog.alert({
        title: '记录说明'
      }
      )
    },
    singOut () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style  lang="less">

  @media screen and (max-width:800px){
    html {
        font-size: 12px !important;
        .wrapRight {
          height: 100vh;
        }
      }
  }
  @media only screen and (min-width:1279px) and (max-width:1280px) {
    html {
      font-size: 16px;
    }
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  /*.clearfix:after {*/
    /*content: ".";*/
    /*width: 0;*/
    /*height: 0;*/
    /*visibility: hidden;*/
    /*display: block;*/
    /*clear: both;*/
    /*overflow:hidden;*/
  /*}*/
  /*html,body{ width: 100%; height: 100%; overflow: scroll;}*/
  /*html::-webkit-scrollbar, body::-webkit-scrollbar{width:0px;height:0px;}*/
  /*body{margin:0;}*/
  .wrap {
    width: 100%;
    background: #f5f5f5;
    .wrapLeft {
      width: 29.53%;
      .padd40 {
        padding-left: 2.5rem;
        .wrapLeftHead {
          margin-top: 3.375rem;
        }
        .wrapLeftHead p:nth-child(1) {
            font-size:2.375rem;
            /*height: 38px;*/
            /*line-height: 38px;*/
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
        .wrapLeftHead p:nth-child(2) {
          margin-top: 1rem;
          font-size: 1.31rem;
          /*height: 21px;*/
          /*line-height: 21px;*/
          font-family:DINOT;
          font-weight:500;
          color:rgba(153,153,153,1);
          margin-bottom: 2.4375rem;
        }
        .wrapLeftList {
          ul li {
            padding: 2rem 0;
            box-sizing: border-box;
            vertical-align: middle;
            img {
              /*width:2rem;*/
              /*height:1.875rem;*/
              margin-right: 1.1875rem;
              margin-top: 0.25rem;
              vertical-align: middle;
            }
            p {
              /*height:5.75rem;*/
              /*line-height: 5.75rem;*/
              font-size:1.75rem;
              font-family:Microsoft YaHei;
              /*font-weight:bold;*/
              color:rgba(51,51,51,1);
              font-weight:400;
              vertical-align: middle;
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
      /*height: 100vh;*/
      .padd54 {
        padding: 3.375rem 2.5rem 0 2.5rem;
        .wrapRightHead {
          margin-bottom: 2.5rem;
        }
        .wrapRightHead p:nth-child(1) {
          font-size: 2.5rem;
          /*height: 39px;*/
          /*line-height: 39px;*/
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }
        .wrapRightHead div {
          height: 3.25rem;
          line-height: 3.25rem;
          /*height:27px;*/
          /*line-height: 39px;*/
          font-size: 1.625rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          img {
            margin-right: 0.625rem;margin-top: 0.81rem;
          }
        }
        /*首页*/
        .wrapRightList {
          width: 100%;
          /*height: 300px;*/
          ul li {
            background: white;
            padding: 2.5rem 1.375rem 1.562rem 1.75rem;
            /*margin-top: 1.5rem;*/
            .wrapRightListTop {
              display: flex;
              justify-content: flex-start;
              &>div p {
                font-size: 2rem;
              }
            }
            .wrapRightListTopTime {
              margin-top: 1rem;
              display: flex;
              justify-content: space-between;
              .wrapRightListTopTimeLeft {
                display: flex;
                justify-content: flex-start;
                div {
                  font-size: 1.5rem;
                  font-family:PingFang SC;
                  font-weight:500;
                  color:rgba(51,51,51,1);
                  span {
                    color: #E43434;
                  }
                }
              }
              .wrapRightListTopTimeRight {
                font-size: 1.625rem;
                font-family:DINOT;
                font-weight:500;
                color:rgba(153,153,153,1);
              }
            }
              .wrapRightListButton {
                margin-top: 2.375rem;
                display: flex;
                justify-content: space-between;
                input {
                  width: 48.22%;
                  padding: 1.5rem 0;
                  font-size: 1.75rem;
                  border-radius: 0.5rem;
                  border: none;
                }
                input:nth-child(2) {
                  background:linear-gradient(0deg,rgba(255,137,137,1),rgba(255,120,121,1),rgba(255,87,87,1));
                  box-shadow:3px 3px 6px 0px rgba(253, 42, 42, 0.35);
                  border: none;
                  color: white;
                }
          }
          /*ul li>div:nth-child(1) p {*/
            /*width: 94%;*/
            /*font-size: 2rem;*/
            /*height: 72px;*/
            /*font-family:Microsoft YaHei;*/
            /*font-weight:400;*/
            /*color:rgba(51,51,51,1);*/
            /*line-height:32px;*/
            /*!*margin-top: -5px;*!*/
            /*margin-left: 1.05rem;*/
          /*}*/
          /*.wrapRightListDistanceTimes {*/
            /*height:25px;*/
            /*line-height: 25px;*/
            /*font-size:24px;*/
            /*font-family:PingFang SC;*/
            /*font-weight:500;*/
            /*color:rgba(51,51,51,1);*/
            /*margin-left: 46px;*/
            /*margin-top: 1rem;*/
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*.wrapRightLisTimes {*/
              /*height:20px;*/
              /*font-size:26px;*/
              /*font-family:DINOT;*/
              /*font-weight:500;*/
              /*color:rgba(153,153,153,1);*/
            /*}*/
          /*}*/
          /*.wrapRightListButton {*/
            /*margin-top: 38px;*/
            /*display: flex;*/
            /*justify-content: space-between;*/
            /*input {*/
              /*width: 48.22%;*/
              /*height: 84px;*/
              /*font-size:32px;*/
              /*border-radius:8px;*/
            /*}*/
            /*input:nth-child(2) {*/
              /*background:linear-gradient(0deg,rgba(255,137,137,1),rgba(255,120,121,1),rgba(255,87,87,1));*/
              /*box-shadow:3px 3px 6px 0px rgba(253, 42, 42, 0.35);*/
              /*border: none;*/
              /*color: white;*/
            /*}*/
          }
        }
        /*急诊出车记录*/
        .cumulativeCar {
          height: 190px;
          display: flex;
          justify-content: space-between;
          .cumulativeCarLeft {
            width: 32.41%;
            background:rgba(255,255,255,1);
            border-radius: 1rem;
            padding: 2.395rem  4.125rem  2.94rem 1.875rem;
            box-sizing: border-box;
            &>p {
              font-size: 1.56rem;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(154,154,154,1);
            }
            &>div {
              font-size: 1.625rem;
              margin-top: 0.6rem;
              span {
                font-size: 3.625rem;
                font-family:DINOT;
                font-weight:500;
                color:rgba(52,52,52,1);
              }
            }
          }
          .cumulativeCarRight {
            margin-left: 20px;
            width: 63.5%;
            background:rgba(255,255,255,1);
            border-radius: .5rem;
            padding: 38px 41px 39px 36px;
            box-sizing: border-box;
            &>p {
              font-size:26px;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(153,153,153,1);
              margin-bottom: 16px;
            }
           ul {
              display: flex;
              justify-content: space-between;
              div {
                font-size: 20px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(52,52,52,1);
                span {
                  font-size: 30px;
                  font-family:DINOT;
                  font-weight:500;
                  color:rgba(52,52,52,1);
                }
              }
            }
          }
        }
        /*意见和反馈*/
        .questions {
          padding: 2.25rem 1.875rem 2.5rem 1.875rem;
          background:rgba(255,255,255,1);
          p {
            font-size: 1.625rem;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(153,153,153,1);
          }
          div {
            margin-top: 1.81rem;
            height: 260px;
            background:rgba(250,250,250,1);
            border:1px solid rgba(232,232,232,1);
            border-radius: .375rem;
          }
        }
        .imgs {
          margin-top: 1.25rem;
          padding: 2.31rem 1.875rem 2.94rem 1.875rem;
          background:rgba(255,255,255,1);
          .imgsTop {
            display: flex;
            justify-content: space-between;
            p {
              font-size: 1.625rem;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(153,153,153,1);
            }
            div {
              font-size: 1.625rem;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(199,199,199,1);
            }
          }
          .imgsbottm {
            margin-top: 1.875rem;
          }
        }
        .submit {
          height:88px;
          background:linear-gradient(-31deg,rgba(255,99,99,1),rgba(255,92,92,1));
          box-shadow:3px 3px 6px 0px rgba(253, 42, 42, 0.35);
          border-radius:8px;
          margin-top: 50px;
          border: none;
          font-size: 31px;
          color:rgba(255,255,255,1);
        }
        /*修改密码*/
        .passwords {
          margin-top: 50px;
        }
        .submits {
          width: 100%;
          height: 98px;
          line-height: 98px;
          padding: 0!important;
          font-size:32px;
          font-family:PingFang SC;
          color:rgba(255,255,255,1);
          background:linear-gradient(0deg,rgba(255,137,137,1),rgba(255,120,121,1),rgba(255,87,87,1));
          box-shadow:3px 3px 6px 0px rgba(253, 42, 42, 0.35);
          border-radius:8px;
          border: none;
        }
      }
    }
  }
</style>
