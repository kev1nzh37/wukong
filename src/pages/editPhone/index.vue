<template>
  <div class="container">
    <div class="cell-box">
      <div class="cell">
        <div class="title">
          <div class="title-select">
            <span>+66</span>
            <img src="/static/user/phone.png" alt="" />
          </div>
          <input
            type="text"
            v-model="username"
            placeholder="请输入当前手机号"
            style="margin-left: 16rpx;"
          />
        </div>
      </div>
    </div>

    <div class="cell-box" style="margin-top: 24rpx;">
      <div class="cell">
        <div class="title">
          <input type="text" v-model="code" placeholder="请输入验证码" />
        </div>
        <div class="content">
          <div class="send" @click="send">
            {{ sendValue }}
          </div>
        </div>
      </div>
    </div>

    <div class="submit">
      确定
    </div>
    <span class="tips" style="color: rgba(255, 111, 99, 1)">请输入正确的验证码</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      code: "",
      sendValue: "获取验证码",
      sendNumber: 60,
    };
  },
  computed: {},
  methods: {
    goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
    },
    send() {
      var timer = setInterval(() => {
        this.sendNumber = this.sendNumber - 1;
        this.sendValue = `再次获取${this.sendNumber}s`;
        if (this.sendNumber === 0) {
          clearInterval(timer);
          this.sendNumber = 60;
          this.sendValue = "获取验证码";
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24rpx;
}
.cell-box {
  background: white;
  .cell {
    height: 120rpx;
    background: rgba(255, 255, 255, 1);
    border-bottom: 2rpx solid rgba(241, 242, 243, 1);
    margin: 0 24rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      .avatar {
        width: 80rpx;
        height: 80rpx;
      }
      .value {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
.logout {
  height: 100rpx;
  background: rgba(255, 255, 255, 1);
  border-top: 4rpx solid rgba(241, 242, 243, 1);
  line-height: 100rpx;
  text-align: center;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 111, 99, 1);
}
.tips {
  font-size: 24rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(16, 16, 16, 1);
  margin-top: 24rpx;
  margin-left: 24rpx;
}
.submit {
  height: 88rpx;
  background: rgba(255, 188, 2, 1);
  border-radius: 5px;
  text-align: center;
  line-height: 88rpx;
  margin: 0 24rpx;
  margin-top: 48rpx;
}

.title-select {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 20rpx;
    height: 20rpx;

    margin-left: 4rpx;
  }
  span {
    font-size: 24rpx;
  }
}
.send {
  height: 60rpx;
  background: rgba(216, 216, 216, 1);
  border-radius: 5px;
  text-align: center;
  line-height: 60rpx;
  font-size: 28rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(16, 16, 16, 1);
  padding: 0 20rpx;
}
</style>
