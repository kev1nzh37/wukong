<template>
  <div class="container">
    <div class="header-c">
      <div class="header-l">
        <img src="/static/img/location.png"  class="location" alt="">
        <span>{{cityData.result}}</span>
        <i class="icon mt-arrow-down-o" :style="{color: '#434343', 'font-size': 28 + 'rpx'}"></i>
      </div>
      <div class="header-r">
        <div class="search-bar">
          <img src="/static/img/search.png"  class="search-icon" alt="">
          <input placeholder="请输入收货地址" placeholder-style="margin-left:8rpx;font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);" @input="search"/>
          <div class="cancle" v-if="keyword" @click="cancle">
            <i class="icon qb-icon-cancle-o"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="location-c">
      <span class="c-l">上海市闵行区漕河泾开发区</span>
      <div class="c-r">
        <i class="icon mt-relocation-o"></i>
        <span>重新定位</span>
      </div>
    </div>
    <div class="my-address">
      <div class="header">
        <img src="/static/img/home.png"  class="home-icon" alt="">
        <span>我的收获地址</span>
      </div>
      <div class="list-c">
        <div class="item" v-for="(item, index) in myAddress" :key="index">
          <span class="i-t">{{item.address}}</span>
          <div class="i-b">
            <span class="b-l">{{item.name}}</span>
            <span class="b-m">{{item.gender}}</span>
            <span class="b-r">{{item.phone}}</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <span>展开全部4个地址</span>
        <i class="icon mt-arrow-down-o"></i>
      </div>
    </div>
    <div class="nearby-address">
      <div class="header">
        <img src="/static/img/location.png"  class="location" alt="">
        <span>附近地址</span>
      </div>
      <div class="list-c">
        <div class="item" v-for="(item, index) in nearbyAddress" :key="index">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="footer-c" @click="addAddress">
      <i class="icon mt-add-o"></i>
      <span>新增收货地址</span>
    </div>
  </div>
</template>

<script>
import {addressData} from './data'

export default {
  data() {
    return {
      cityData: {},
      myAddress: [],
      nearbyAddress: []
    }
  },
  methods: {
    addAddress() {
       wx.navigateTo({url: '/pages/addAddress/main'})
    }
  },
  mounted() {
    this.cityData = addressData.cityData.data
    this.myAddress = addressData.myAddress.data
    this.nearbyAddress = addressData.nearbyAddress.data.mapPoiVo
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .header-c {
    display: flex;
    align-items: center;
    height: 100rpx;
    background-color: white;
    padding: 0 30rpx;
    border-bottom: 2rpx solid rgb(241,242,243);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .header-l {
      display: flex;
      align-items: center;
      .location {
        width:30rpx;
        height: 30rpx;
      }
      span {
        font-size:28rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(34,34,34,1);
        margin: 0 10rpx;
      }
    }
    .header-r {
      display: flex;
      align-items: center;
      flex: 1;
      .search-bar {
        align-items: center;
        justify-content: center;
        display: flex;
        flex: 1;
        background-color: #f6f6f6;
        height: 70rpx;
        border-radius: 8rpx;
        padding-left: 20rpx;
        margin-left: 30rpx;
        .search-icon {
          width: 30rpx;
          height:30rpx;
        }
        input {
          display: flex;
          flex: 1;
          width: 100%;
          font-size: 28rpx;
          height: 32rpx;
          margin-top: 5rpx;
        }
        .cancle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50rpx;
          height: 60rpx;
          margin-left: 20rpx;
          i {
            color: #999999;
            font-size: 40rpx;
          }
        }
      }
    }
  }
  .location-c {
    display: flex;
    align-items: center;
    height: 88rpx;
    background-color: white;
    padding: 0 30rpx;
    border-bottom: 2rpx solid rgb(241,242,243);
    margin-top: 100rpx;
    .c-l {
      font-size:28rpx;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(34,34,34,1);
      flex: 1;
    }
    .c-r {
      display: flex;
      align-items: center;
      i {
        font-size: 36rpx;
        color: $theme-color;
      }
      span {
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,188,2,1);
        margin-left: 10rpx;
      }
    }
  }
  .my-address {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 2rpx solid $spLine-color;
    padding-top: 30rpx;
    .header {
      display: flex;
      align-items: center;
      padding: 10rpx 30rpx;
      background-color: white;
      .home-icon {
        width: 30rpx;
        height: 30rpx;
      }
      span {
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-left: 16rpx;
      }
    }
    .list-c {
      display: flex;
      flex-direction: column;
      margin-left: 70rpx;
      margin-right: 20rpx;
      .item {
        display: flex;
        flex-direction: column;
        height: 120rpx;
        background-color: white;
        justify-content: center;
        border-bottom: 2rpx solid $spLine-color;
        .i-t {
          font-size:28rpx;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(34,34,34,1);
        }
        .i-b {
          display: flex;
          align-items: center;
          margin-top: 10rpx;
          .b-l {
            font-size:24rpx;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(153,153,153,1);
          }
          .b-m {
                font-size:24rpx;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(153,153,153,1);
            margin-left: 40rpx;
          }
          .b-r {
                font-size:24rpx;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(153,153,153,1);
            margin-left: 40rpx;
          }
        }
      }
    }
    .footer {
      display: flex;
      align-items: center;
      height: 88rpx;
      margin-left: 70rpx;
      span {
        font-size: 24rpx;
        color: $textDarkGray-color;
      }
      i {
        font-size: 32rpx;
        color: $textDarkGray-color;
        margin-left: 10rpx;
      }
    }
  }
  .nearby-address {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 30rpx;
    margin-bottom: 88rpx;
    .header {
      display: flex;
      align-items: center;
      padding: 10rpx 30rpx;
      .location {
        width:30rpx;
        height: 30rpx;
      }
      span {
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-left: 16rpx;
      }
    }
    .list-c {
      display: flex;
      flex-direction: column;
      margin-left: 70rpx;
      margin-right: 20rpx;
      background-color: magenta;
      .item {
        display: flex;
        flex-direction: column;
        height: 88rpx;
        background-color: white;
        justify-content: center;
        border-bottom: 2rpx solid $spLine-color;
        span {
          font-size:28rpx;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(34,34,34,1);
        }
      }
      .item:last-child {
        border-bottom: 0rpx solid $spLine-color;
      }
    }
  }
  .footer-c {
    display: flex;
    align-items: center;
    height: 88rpx;
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: center;
    border-top: 2rpx solid $spLine-color;
    i {
      font-size: 36rpx;
      color: $theme-color;
    }
    span {
      font-size: 28rpx;
      color: $textBlack-color;
      margin-left: 10rpx;
    }
  }
}
</style>
