<template>
  <div class="container">
    <div class="cell-box">
      <div
        class="cell"
        v-for="(item, index) in list"
        :key="index"
        @click="go(item.url)"
      >
        <div class="title">
          {{ item.title }}
        </div>
        <div class="content">
          <img
            src="/static/user/avatar.png"
            alt=""
            class="avatar"
            v-if="item.title == '头像'"
          />
          <span v-if="item.title != '头像'" class="value">{{
            item.value
          }}</span>
          <van-icon
            name="arrow"
            color="rgba(216, 216, 216)"
            style="margin-left: 12rpx;"
          />
        </div>
      </div>
    </div>
    <div class="logout" @click="logoutCancel(true)">
      退出当前账号
    </div>
    <van-action-sheet
      :show="sexShow"
      :actions="sexActions"
      @select="onSelect"
      @cancel="sexClose"
      :cancel-text="'取消'"
      :round="false"
    />
    <van-dialog
      
      message="\n\n是否退出登录\n\n\n"
      :show="logShow"
      show-cancel-button
      show-confirm-button
      @confirm="logoutConfirm"
      @cancel="logoutCancel(false)"
    >
      
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logShow: false,
      sexShow: false,
      sexActions: [{ name: "保密" }, { name: "男" }, { name: "女" }],
      list: [
        {
          title: "头像",
          url: "",
        },
        {
          title: "用户名",
          url: "/pages/editUsername/main",
          value: "陈呆呆",
        },
        {
          title: "账号密码",
          url: "/pages/editPassword/main",
          value: "修改",
        },
        {
          title: "性别",
          url: "sexShow",
          value: "未选择",
        },
        {
          title: "手机号",
          url: "/pages/editPhone/main",
          value: "+66 185****5420",
        },
        {
          title: "微信",
          url: "",
          value: "解绑",
        },
        {
          title: "Apple ID",
          url: "",
          value: "绑定",
        },
        {
          title: "Facebook",
          url: "",
          value: "绑定",
        },
        {
          title: "Google",
          url: "",
          value: "绑定",
        },
      ],
    };
  },
  computed: {},
  methods: {
    go(url) {
      if (url == "sexShow") {
        this.sexShow = true;
      } else {
        wx.navigateTo({ url });
      }
    },
    logoutConfirm() {
      console.log('确认退出')
    },
    logoutCancel(value) {
      this.logShow = value
    },
    logout() {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    sexClose() {
      this.sexShow = false;
      console.log(1);
    },
    onSelect(event) {
      console.log(event);
      this.sexShow = false;
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
</style>
