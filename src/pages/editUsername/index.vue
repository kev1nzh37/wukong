<template>
  <div class="container">
    <div class="cell-box">
      <div class="cell">
        <div class="title">
          用户名
        </div>
        <div class="content">
          <span class="value">
            <input type="text" v-model="username" style="text-align: right;">
          </span>
        </div>
      </div>
    </div>
    <span class="tips">限制4-16个字符，一个汉字2字符</span>
    <div class="submit">
      确定
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "陈呆呆",
    };
  },
  computed: {},
  methods: {
    goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
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
</style>
