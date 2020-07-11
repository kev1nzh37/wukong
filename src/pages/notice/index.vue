<template>
  <div class="container">
    <div class="notice">
      <div class="left">
        <img src="/static/notice/pic2.png" alt="" />
        <div class="notice-text">
          <span class="main">系统通知</span>
          <span class="other">暂无新消息</span>
        </div>
      </div>
      <!-- <div class="right">
        <span>91</span>
      </div> -->
    </div>
    <div class="notice">
      <div class="left">
        <img src="/static/notice/pic1.png" alt="" />
        <div class="notice-text">
          <span class="main">
            <div class="main-left">营销活动</div>
            <div class="main-right">2020/06/05</div>
          </span>
          <span class="other"
            >“汉堡王（杭州滨江龙湖天街24486)”送您大萨达撒多撒大所大所</span
          >
        </div>
      </div>
      <!-- <div class="right">
        <span>91</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  height: 100vh;
  background: #fff;
}
.notice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 24rpx;
  .left {
    height: 136rpx;
    border-bottom: 2rpx solid rgba(241, 242, 243, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    img {
      width: 96rpx;
      height: 96rpx;
    }
    .notice-text {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: 20rpx;
      width: calc(100% - 116rpx);
      .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .main-left {
          font-size: 32rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .main-right {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
      .other {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        overflow: hidden; /*超出部分隐藏*/
        white-space: nowrap; /*不换行*/
        text-overflow: ellipsis; /*超出部分文字以...显示*/
        width: 100%;
      }
    }
  }
  .right {
    width: 36rpx;
    height: 36rpx;
    border-radius: 50%;
    background: red;
    text-align: center;
    line-height: 36rpx;
    color: white;
  }
}
</style>
