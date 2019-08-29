<template>
  <div>
    <div class="head-box">
      <div class="safe auto head">
        <!-- 左 -->
        <div class="left">
          <div class="logo">
            <img :src="info.shop.logo" alt>
          </div>
          <div class="shopinfo">
            <div class="shopname">{{info.shop.enterprise_name}}</div>
            <div class="flag">
              <span class="flag-l">
                <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/icon-1.png" alt>
                <span class="vip">超级会员</span>
              </span>
              <span class="flag-r">
                <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/icon-2.png" alt>
                <span class="comp">企业认证</span>
              </span>
            </div>
          </div>
        </div>
        <!-- 右-->
        <div class="right">
          <div class="box3">
            <div class="row row1">
              <div class="r1">品质</div>
              <div class="r2">保证</div>
            </div>
            <div class="row row2">
              <div class="r1">实惠</div>
              <div class="r2">商品</div>
            </div>
            <div class="row row3">
              <div class="r1">优秀</div>
              <div class="r2">商家</div>
            </div>
          </div>
          <div class="tel">
            <p class="phone">咨询电话</p>
            <p class="phone-s">{{info.shop.phone}}</p>
            <p class="hour">24小时服务</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bar">
      <div class="safe auto">
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
.head-box {
  width: 100%;
  height: 105px;
  background: #fff;
}
.head {
  height: 105px;
  overflow: hidden;
}
.head .left {
  float: left;
  overflow: hidden;
}
.logo {
  width: 70px;
  height: 70px;
  overflow: hidden;
  float: left;
  margin-top: 17.5px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.shopinfo {
  float: left;
  margin-left: 15px;
  margin-top: 28.5px;
}
.shopname {
  font-size: 22px;
  color: #b61e1e;
}
.flag {
  width: 220px;
  height: 24px;
}
.flag .flag-r {
  margin-left: 18px;
}
.vip {
  font-size: 12px;
  color: #f56110;
}
.comp {
  font-size: 12px;
  color: #393939;
}
.head .right {
  float: right;
  overflow: hidden;
  margin-top: 17.5px;
}
.right .box3 {
  float: left;
  overflow: hidden;
}
.box3 .row {
  float: left;
  display: block;
  width: 60px;
  height: 65px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_14/images/yx.png);
  background-size: 100% 100%;
  color: #fff;
  font-size: 14px;
}
.row .r1 {
  width: 100%;
  text-align: center;
  margin-top: 11.5px;
}
.row .r2 {
  width: 100%;
  text-align: center;
}
.box3 .row2 {
  margin-left: 25px;
}
.box3 .row3 {
  margin-left: 25px;
}
.right .tel {
  float: left;
  width: 200px;
}
.tel .phone {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #656565;
}
.tel .phone-s {
  width: 100%;
  text-align: center;
  color: #b61e1e;
  font-size: 20px;
}
.tel .hour {
  width: 100%;
  text-align: center;
  color: #bebebe;
  font-family: STXingkaiSC-Bold;
  font-weight: bold;
  font-size: 12px;
  font-style: italic;
}
/* 导航 */
.bar {
  width: 100%;
  height: 45px;
  background: #c0423c;
  overflow: hidden;
}
.bar a {
  width: 75px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  display: block;
  color: #fff;
  font-size: 16px;
  float: left;
  margin: 0 45px;
}
.bar a:hover {
  background: #aa2828;
  border-radius: 8px;
}
.bar .router-link-exact-active {
  background: #aa2828;
  border-radius: 8px;
}
</style>

