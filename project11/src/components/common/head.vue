<template>
  <div>
    <div class="head-box">
      <div class="safe auto">
        <ul class="clearfix">
          <li class="left">
            <span class="logo-box"><img :src="info.shop.logo" alt=""></span>
            <span class="name">{{info.shop.enterprise_name}}</span>
            <span class="icon-1"></span>
            <span class="ico1-name">材料网超级会员</span>
            <span class="icon-2"></span>
            <span class="ico2-name">企业认证</span>
          </li>
          <li class="right">联系热线：{{info.shop.mobile}}</li>
        </ul>
      </div>
    </div>

    <div class="safe auto navbar">
      <ul class="clear">
        <li>
          <router-link to="/">网站首页</router-link>
        </li>
        <li>
          <router-link to="/productcenter">产品中心</router-link>
        </li>
        <!-- <li>
          <router-link to="/news">新闻资讯</router-link>
        </li>-->
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
.head-box {
  width: 100%;
  height: 80px;
}
.head-box .safe ul {
  width: 1200px;
  height: 80px;
  overflow: hidden;
}
.left {
  float: left;
  width: 950px;
  height: 80px;
  line-height: 80px;
}
.left .logo-box {
  display: inline-block;
  width: 70px;
  height: 58px;
  vertical-align: middle;
  position: relative;
  top: -6px;
}
.logo-box img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.left .name {
  display: inline-block;
  height: 80px;
  font-size: 26px;
  color: #000000;
  letter-spacing: 2px;
  margin-left: 20px;
}
.left .icon-1{
  display: inline-block;
  width: 17px;
  height: 15px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_11/images/icon-1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 20px;
  position: relative;
  top: -2px;
}
.left .icon-2{
  display: inline-block;
  width: 13px;
  height: 16px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_11/images/icon-2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 15px;
  position: relative;
  top: -2px;
}
.left .ico1-name {
  display: inline-block;
  font-size: 12px;
  color: #f56110;
  position: relative;
  top: -5px;
}
.left .ico2-name {
  display: inline-block;
  font-size: 12px;
  color: #393939;
  position: relative;
  top: -5px;
}

.right {
  float: right;
  font-size: 16px;
  color: #000001;
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #313131;
  border-radius: 8px;
  margin-top: 25px;
}
.navbar {
  position: relative;
}
.navbar ul {
  width: 1200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  font-size: 12px;
  z-index: 800;
}
.navbar ul li {
  width: 115px;
  height: 40px;
  float: left;
  text-align: center;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/navbar.png) no-repeat;
}
.navbar li a {
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
  transition: all 0.5s;
  -webkit-transition: all 0.5s; /* Safari */
}
.navbar li a:hover {
  opacity: 1;
  height: 60px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/navbar2.png) no-repeat;
}
.navbar li .router-link-exact-active {
  color: #f6ac22;
  height: 60px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/navbar2.png) no-repeat;
}
</style>
