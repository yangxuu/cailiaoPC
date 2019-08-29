<template>
  <div>
    <div class="headbox">
      <div class="head safe auto">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt />
          <div class="shop">
            <div class="shopname">{{info.shop.enterprise_name}}</div>
            <div class="eng">Get Trust with Honesty and Service</div>
          </div>
        </div>
        <div class="right">
          <div class="mobile">咨询热线：{{info.shop.mobile}}</div>
          <div class="hour">
            <div class="h-r1">24小时</div>
            <div class="h-r2">用心服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="head2box">
      <div class="auto head2">
        <router-link to="/">首页</router-link>
        <router-link to="/productcenter">产品中心</router-link>
        <router-link to="/news">新闻资讯</router-link>
        <router-link to="/introduce">公司介绍</router-link>
        <router-link to="/contact">联系我们</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        shop: {}
      }
    };
  },
  created() {
    let _this = this;
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      _this.render(res.data);
    });
  }
};
</script>
<style scoped>
.headbox {
  height: 105px;
  background: #fff;
  overflow: hidden;
}
.head {
  height: 105px;
  overflow: hidden;
}
.left {
  float: left;
  margin-top: 17.5px;
  overflow: hidden;
}
.logo {
  width: 68px;
  height: 67px;
  border: 1px solid #979797;
  float: left;
}
.shop {
  float: left;
  margin-left: 12px;
}
.shopname {
  color: #191919;
  font-size: 24px;
}
.eng {
  font-size: 24px;
  color: #757575;
}
.right {
  float: right;
  overflow: hidden;
  margin-top: 32.5px;
}
.mobile {
  float: left;
  width: 297px;
  height: 37px;
  font-size: 18px;
  color: #f9f9f9;
  line-height: 37px;
  text-align: center;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx1.png);
  background-size: 100% 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hour {
  width: 66px;
  text-align: center;
  margin-left: 15px;
  float: left;
  font-size: 16px;
  font-family: STXingkaiTC-Light;
  color: #9e9e9e;
}
.head2box {
  background: #1d1d1d;
  height: 50px;
}
.head2 {
  width: 680px;
  overflow: hidden;
}
.head2 a {
  font-size: 16px;
  color: #fff;
  float: left;
  display: block;
  width: 85px;
  height: 50px;
  padding-left: 18px;
  line-height: 50px;
  margin: 0 25px;
}
.head2 a:hover {
  opacity: 1;
  color: #fbb00a;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx2.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 13px 16px;
  background-position: 0 50%;
}
.head2 .router-link-exact-active {
  color: #fbb00a;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx2.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 13px 16px;
  background-position: 0 50%;
}
</style>

