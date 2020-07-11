<template>
  <div class="container">
    <div class="address">
      <span class="l">收货地址：</span>
      <div class="m">
        <img src="/static/img/location.png" alt="" />
        <span>点击选择</span>
      </div>
      <div class="r">
        <img src="/static/img/right.png" alt="" />
      </div>
    </div>
    <div class="name">
      <span>联系人：</span>
      <input
        placeholder="请填写收货人的姓名"
        placeholder-style="font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);"
        auto-focus
      />
    </div>
    <div class="sex">
      <div class="l"></div>
      <div class="m">
        <img src="/static/img/selection2.png" alt="" />
        <span>先生</span>
      </div>
      <div class="r">
        <img src="/static/img/selection1.png" alt="" />
        <span>女士</span>
      </div>
    </div>
    <div class="phone">
      <span>手机号：</span>
      <input
        placeholder="请填写收货人手机号码"
        placeholder-style="font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);"
        auto-focus
      />
    </div>

    <div class="house-num">
      <span>门牌号：</span>
      <input
        placeholder="【详细地址，例1层101室】"
        placeholder-style="font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);"
        auto-focus
      />
    </div>
    <div class="submit">
      <span>保存地址</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .name {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    padding-right: 30rpx;
    height: 88rpx;
    border-bottom: 2rpx solid $spLine-color;
    span {
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      width: 160rpx;
    }
    input {
      flex: 1;
    }
  }
  .sex {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    padding-right: 30rpx;
    height: 88rpx;
    border-bottom: 2rpx solid $spLine-color;
    .l {
      width: 160rpx;
    }
    .m {
      display: flex;
      align-items: center;
      img {
        width: 30rpx;
        height: 30rpx;
      }
      span {
        font-size: 28rpx;
        color: $textBlack-color;
        margin-left: 20rpx;
      }
    }
    .r {
      display: flex;
      margin-left: 60rpx;
      align-items: center;
      img {
        width: 30rpx;
        height: 30rpx;
      }
      span {
        font-size: 28rpx;
        color: $textBlack-color;
        margin-left: 20rpx;
      }
    }
  }
  .phone {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    padding-right: 30rpx;
    height: 88rpx;
    border-bottom: 2rpx solid $spLine-color;
    span {
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      width: 160rpx;
    }
    input {
      flex: 1;
    }
  }
  .address {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    padding-right: 30rpx;
    height: 88rpx;
    border-bottom: 2rpx solid $spLine-color;
    .l {
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      width: 160rpx;
    }
    .m {
      display: flex;
      align-items: center;
      flex: 1;
      img {
        width: 30rpx;
        height: 30rpx;
      }
      span {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-left: 10rpx;
      }
    }
    .r {
      img {
        width: 30rpx;
        height: 30rpx;
      }
    }
  }
  .house-num {
    display: flex;
    align-items: center;
    margin-left: 30rpx;
    padding-right: 30rpx;
    height: 88rpx;
    border-bottom: 2rpx solid $spLine-color;
    span {
      font-size: 28rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      width: 160rpx;
    }
    input {
      flex: 1;
    }
  }
  .submit {
    margin: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76rpx;
    background-color: rgba(255, 188, 2, 1);
    border-radius: 8rpx;
    span {
      font-size: 28rpx;
      color: $textBlack-color;
    }
  }
}
</style>
