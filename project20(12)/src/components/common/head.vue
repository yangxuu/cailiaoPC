<template>
  <div>
    <div class="head-1">
      <div class="safe auto clearfix">
        <div class="left">
          <div class="logo div">
            <img :src="info.shop.logo" alt>
          </div>
          <div class="shopname div">
            <div class="shopname-t">{{info.shop.enterprise_name}}</div>
            <div class="shopname-b">{{info.shop.user_url}}</div>
          </div>
        </div>
        <div class="right">
          <div class="tel div">
            <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_1.png" alt>
          </div>
          <div class="tel-number div">
            <div class="mobile">{{info.shop.phone}}</div>
            <div class="m-des">全国咨询热线</div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <ul class="safe auto ul">
        <li>
          <router-link to="/">网站首页</router-link>
        </li>
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
        <span class="line4"></span>
        <li>
          <router-link to="/productcenter">产品中心</router-link>
        </li>
          <li>
          <router-link to="/news">新闻资讯</router-link>
        </li>
        <li>
          <router-link to="/contact">联系我们</router-link>
        </li>
        <li>
          <router-link to="/introduce">公司介绍</router-link>
        </li>
      </ul>
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
.head-1 {
  width: 100%;
  height: 110px;
  background: #fff;
  overflow: hidden;
}
.head-1 .left {
  margin-top: 15px;
  float: left;
  overflow: hidden;
}
.left .logo {
  width: 85px;
  height: 85px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.qixunbox{
  margin-left:30px;
}
.shopname {
  margin-left: 36px;
}
.shopname-t {
  color: #000000;
  font-size: 38px;
  font-weight: bold;
  font-family:SimHei;
  letter-spacing:-2px;
  margin-top:-4px;
}
.shopname-b {
  color: #737373;
  font-size: 20px;
}
.left .div {
  float: left;
}
.right {
  margin-top: 20px;
  float: right;
  overflow: hidden;
}
.right .tel {
  width: 50px;
  height: 50px;
  position: relative;
  top: 8px;
}
.tel-number {
  margin-left: 20px;
}
.tel img {
  width: 100%;
  height: 100%;
}
.right .div {
  float: left;
}
.mobile {
  color: #b81919;
  font-size: 26px;
  font-weight: bold;
}
.m-des {
  color: #595959;
  font-size: 20px;
}
.navbar {
  width: 100%;
  height: 60px;
  background: #b81919;
}
.ul {
  height: 60px;
  overflow: hidden;
  position: relative;
}
.ul li {
  width: 160px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: left;
}
.ul .line1{
  position: absolute;
  left: 160px;
  top: 50%;
  margin-top: -8px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #E1DDDD;
}
.ul .line2{
  position: absolute;
  left: 320px;
  top: 50%;
  margin-top: -8px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #E1DDDD;
}
.ul .line3{
  position: absolute;
  left:480px;
  top: 50%;
  margin-top: -8px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #E1DDDD;
}
.ul .line4{
  position: absolute;
  left: 640px;
  top: 50%;
  margin-top: -8px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #E1DDDD;
}
.ul li a {
  display: block;
   width: 160px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: rgba(184, 25, 25,1);
  color: #fff;
  font-size: 16px;
}
.ul li a:hover{
  opacity: 1;
}
.ul li .router-link-exact-active {
  background: rgba(255, 255, 255, 0.23);
}
</style>
