<template>
  <div class="container">
    <div class="content">
      <div class="header-c">
        <div class="header-l" @click="addressClick">
          <i
            class="icon mt-location-o"
            :style="{ color: '#434343', 'font-size': 52 + 'rpx' }"
          ></i>
          <span>杭州</span>
        </div>
        <div class="header-r" @click="searchClick">
          <span>请输入收货地址</span>
          <i class="icon mt-search-o"></i>
        </div>
      </div>
      <div class="category-c">
        <div v-for="(item, index) in categoryArr" :key="index">
          <div class="grid-c">
            <div
              class="item"
              v-for="(itx, idx) in item.items"
              :key="idx"
              @click="categoryClick"
            >
              <img class="item-img" :src="itx.url" />
              <span class="item-title">{{ itx.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <swiper
        class="ad-c"
        indicator-dots="true"
        indicator-color="#999"
        indicator-active-color="#FFC24A"
        autoplay="true"
      >
        <block v-for="(item, index) in topBannerData" :key="index">
          <swiper-item>
            <img class="ad-img" :src="item.banner_pic_url" />
          </swiper-item>
        </block>
      </swiper>
      <div class="b-banner">
        <div class="title">
          <div class="title-box">限时特价</div>
        </div>
        <div class="img-box">
          <img src="/static/img/food.png" alt="" />
          <img src="/static/img/food.png" alt="" />
          <img src="/static/img/food.png" alt="" />
          <img src="/static/img/food.png" alt="" />
        </div>
      </div>
      <div class="section">
        <span class="m">附近商家</span>
      </div>
      <div class="category-list">
        <div class="filter-bar">
          <div class="filter-bar-item">
            <span>全部分类</span>
            <img src="/static/img/filter.png" alt="" />
          </div>
          <div class="filter-bar-item">
            <span style="color: #999999;">排序</span>
            <img src="/static/img/filter.png" alt="" />
          </div>
          <div class="filter-bar-item">
            <span style="color: #999999;">全部筛选</span>
            <img src="/static/img/filter.png" alt="" />
          </div>
        </div>
        <div class="item-list">
          <div
            class="item"
            v-for="(item, index) in shopsList"
            :key="index"
            @click="shoppingCartClick"
          >
            <div class="item-l">
              <img :src="item.pic_url" />
            </div>
            <div class="item-r">
              <div class="r-t">
                <span class="shop-name">{{ item.name }}</span>
                <div class="t-c">
                  <div class="c-l">
                    <div class="l-l">
                      <img src="/static/img/star.png" alt="" />
                    </div>
                    <span class="l-m">{{ item.wm_poi_score }}</span>
                    <span class="l-r">{{ item.month_sales_tip }}</span>
                  </div>
                  <div class="c-r">
                    <span class="r-l">{{ item.delivery_time_tip }}</span>
                    
                    <span class="r-r">{{ item.distance }}</span>
                  </div>
                </div>
              </div>
              <div class="r-m">
                <div>
                   <span class="m-l">{{ item.min_price_tip }}</span>
                
                <span class="m-r">{{ item.shipping_fee_tip }}</span>
                </div>
                <div class="m-d">
                  <span>悟空专送</span>
                </div>
               
  
              </div>
              <div class="r-b">
                <span class="b-l">支持自取</span>
                <span class="b-r">极速配送</span>
              </div>
              <div class="pay">
                <div class="pay-m">
                  <span>26减3</span>
                  <span>26减3</span>
                </div>
                <div class="pay-l">
                  <img src="/static/img/filter.png" alt="">
                </div>
              </div>
              <!-- <div class="activity-c">
                <div
                  class="ac-item"
                  v-for="(itm, idx) in item.discounts2"
                  :key="idx"
                >
                  <div class="ac">
                    <img class="ac-l" :src="itm.icon_url" />
                    <span class="ac-r">{{ itm.info }}</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/static/img/shopcart.png" class="shopcart" alt="">
  </div>
</template>

<script>
import { queryHomeHeadCategory } from "@/action/action";
import { homeData } from "./data";

export default {
  data() {
    return {
      categoryArr: [{ items: [] }, { items: [] }],
      topBannerData: [],
      bottomBanner: {},
      shopsList: [],
      filterList: [
        {
          title: "综合排序",
          icon: "mt-arrow-down-o",
        },
        {
          title: "销量最高",
        },
        {
          title: "速度最快",
        },
        {
          title: "筛选",
          icon: "mt-filter-o",
        },
      ],
      tags: ["满减优惠", "点评高分", "新商家", "美团专送"],
      stars: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    categoryClick() {
      wx.navigateTo({ url: "/pages/categoryList/main" });
    },
    addressClick() {
      wx.navigateTo({ url: "/pages/selectAddress/main" });
    },
    searchClick() {
      wx.navigateTo({ url: "/pages/searchList/main" });
    },
    shoppingCartClick() {
      wx.navigateTo({ url: "/pages/shoppingCart/main" });
    },
  },
  onShareAppMessage: function (res) {
    var that = this;
    const { content, shareImg } = this.activityInfo || {};
    return {
      title: "shareTest",
      imageUrl:
        "http://p1.meituan.net/aichequan/6dd136c9612331817f952475d749770b4238.png",
      path: "pages/citySearch/main",
      success: function (res) {
        that.util.wxapi.toast("分享成功");
        that.shareInfoAction({ res, id: that.parentId });
      },
    };
  },
  mounted() {
    var categoryData = homeData.headData.data.primary_filter;
    categoryData.map((item, index) => {
      if (index < 10) {
        this.categoryArr[0].items.push(item);
      } else {
        this.categoryArr[1].items.push(item);
      }
    });
    this.topBannerData = homeData.topBannerData.data.top_banner_list;
    this.bottomBanner =
      homeData.bannerData.data.rcmd_board_v9.mid_ad_banner.platinum_banner;
    this.shopsList = homeData.homeList.data.poilist;
  },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    .header-c {
      display: flex;
      align-items: center;
      height: 80rpx;
      position: fixed;
      width: auto;
      padding: 0 30rpx;
      width: 100%;
      box-sizing: border-box;
      background-color: #ffcf07;
      z-index: 999;
      .header-l {
        display: flex;
        align-items: center;
        span {
          font-size: 34rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
        }
      }
      .header-r {
        display: flex;
        align-items: center;
        flex: 1;
        background-color: white;
        height: 60rpx;
        border-radius: 30rpx;
        margin-left: 30rpx;
        align-items: center;
        justify-content: space-between;
        i {
          color: rgb(153, 153, 153);
          font-size: 30rpx;
          margin-right: 20rpx;
        }
        span {
          color: $textDarkGray-color;
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-left: 28rpx;
        }
      }
    }
    .category-c {
      height: 300rpx;
      background-color: white;
      padding-top: 100rpx;
      margin: 0 20rpx;
      .grid-c {
        height: 320rpx;
        flex-wrap: wrap;
        display: flex;
        .item {
          width: 20%;
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          img {
            width: 80rpx;
            height: 80rpx;
            border-radius: 40rpx;
          }
          span {
            font-size: 20rpx;
            color: $textBlack-color;
            margin-top: 10rpx;
          }
        }
      }
    }
    .ad-c {
      display: flex;
      height: 200rpx;
      background-color: white;
      margin: 0 20rpx 20rpx 20rpx;
      .ad-img {
        height: 200rpx;
        width: 100%;
        background-size: cover;
      }
    }
    .b-banner {
      display: flex;
      flex-direction: column;
      height: 350rpx;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      margin-top: 24rpx;
      margin-left: 20rpx;
      margin-right: 20rpx;
      .title {
        height: 60rpx;
        background: rgba(255, 178, 24, 0.15);
        border-radius: 5rpx;
        margin: 16rpx 20rpx;
        text-align: center;
        .title-box {
          height: 48rpx;
          background: rgba(255, 177, 18, 1);
          border-radius: 0px 28rpx 0px 28rpx;
          width: 180rpx;
          font-size: 32rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 48rpx;
          margin: 6rpx auto;
        }
      }
      .img-box {
        display: flex;
        margin: 0 20rpx;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        img {
          height: 224rpx;
          width: 23%;
          border-radius: 5px;
        }
      }
    }
    .section {
      display: flex;
      align-items: center;
      margin: 24rpx;
      justify-content: flex-start;
      box-sizing: border-box;
      .m {
        font-size: 36rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
      }
    }
    .category-list {
      display: flex;
      flex-direction: column;
      .filter-bar {
        display: flex;
        align-items: center;
        padding: 0 20rpx;
        justify-content: space-around;
        height: 70rpx;

        .filter-bar-item {
          span {
            font-size: 24rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(34, 34, 34, 1);
          }
          img {
            margin-left: 14rpx;
            width: 16rpx;
            height: 16rpx;
          }
        }
      }
      .item-list {
        display: flex;
        flex-direction: column;

        .item {
          display: flex;
          background-color: white;
          margin: 0 20rpx 20rpx 20rpx;
          padding: 16rpx 20rpx;
          border-radius: 10rpx;
          .item-l {
            display: flex;
            width: 160rpx;
            height: 120rpx;
            position: relative;
            img {
              width: 160rpx;
              height: 120rpx;
            }
            .tag {
              position: absolute;
              width: 100rpx;
              height: 60rpx;
            }
          }
          .item-r {
            margin-left: 20rpx;
            flex-direction: column;
            flex: 1;
            .r-t {
              display: flex;
              flex-direction: column;
              .shop-name {
                font-size: 32rpx;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(34, 34, 34, 1);
              }
              .t-c {
                display: flex;
                align-items: center;
                margin-top: 10rpx;
                .c-l {
                  display: flex;
                  flex: 1;
                  align-items: center;
                  .l-l {
                    display: flex;
                    img {
                      width: 28rpx;
                      height: 28rpx;
                    }
                  }
                  .l-m {
                    font-size: 24rpx;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(255, 148, 57, 1);
                    margin-left: 4rpx;
                  }
                  .l-r {
                    font-size: 24rpx;
                    font-family: PingFangSC-Regrgb(156, 109, 67);
                    font-weight: 400;
                    color: rgba(153, 153, 153, 1);
                    margin-left: 20rpx;
                  }
                }
                .c-r {
                  display: flex;
                  align-items: center;
                  font-size:24rpx;
                  font-family:PingFangSC-Regular,PingFang SC;
                  font-weight:400;
                  color:rgba(153,153,153,1);
                 
                  .r-r {
                    margin-left: 20rpx;
                  }
                }
              }
            }
            .r-m {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              justify-content: space-between;
              .m-l {
                 font-size:24rpx;
                  font-family:PingFangSC-Regular,PingFang SC;
                  font-weight:400;
                  color:rgba(153,153,153,1);
              }
             
              .m-r {
                 font-size:24rpx;
                  font-family:PingFangSC-Regular,PingFang SC;
                  font-weight:400;
                  color:rgba(153,153,153,1);
                  margin-left: 20rpx;
              }
              .m-d {
                span {
                  background:rgba(255,188,2,1);
                  border-radius:18rpx 0rpx 18rpx 0rpx;
                  font-size:24rpx;
                  font-family:PingFangSC-Regular,PingFang SC;
                  font-weight:400;
                  color:rgba(34,34,34,1);
                  padding: 4rpx 10rpx;
                }
              }
            }
            .r-b {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              .b-l {
                font-size:24rpx;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,149,58,1);
                border-radius:4px;
                text-align: center;
                padding: 4rpx 20rpx;
                background:rgba(252, 241, 226,1);
              }
              .b-r {
                @extend .b-l;
                margin-left: 10rpx;
              }
            }
            .pay {
              display: flex;
              align-items: center;
              margin-top: 10rpx;
              justify-content: space-between;
              .pay-m {
                span {
                  border-radius:8rpx;
                  border:2rpx solid rgba(255,111,99,1);
                  font-size:24rpx;
                  font-family:PingFangSC-Regular,PingFang SC;
                  font-weight:400;
                  color:rgba(255,111,99,1);
                  padding: 2rpx 20rpx;
                  margin-right: 10rpx;
                }
              }
              .pay-l {
                img {
                  width: 16rpx;
                  height: 16rpx;
                }
              }
              
            }
            .activity-c {
              display: flex;
              flex-direction: column;
              .ac-item {
                display: flex;
                align-items: center;
                margin-top: 20rpx;
                .ac {
                  display: flex;
                  align-items: center;
                  .ac-l {
                    width: 30rpx;
                    height: 30rpx;
                    background-size: cover;
                  }
                  .ac-r {
                    color: $textDarkGray-color;
                    font-size: 20rpx;
                    margin-left: 10rpx;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .shopcart {
    width: 100rpx;
    height: 100rpx;
    position: fixed;
    right: 10rpx;
    bottom: 190rpx;
  }
}
</style>
