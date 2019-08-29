<template>
  <div>
    <!-- <div class="bar">

    </div>-->
    <div class="head-box">
      <div class="bg1">
        <div class="safe auto top">
          <div class="left">
            <span class="logo">
              <img :src="info.shop.logo" alt>
            </span>
            <span class="shop-name">{{info.shop.enterprise_name}}</span>
            <span class="tele">联系热线：{{info.shop.mobile}}</span>
          </div>
          <div class="right">
            <span class="num1"></span>
            <span class="num2"></span>
            <span class="num3"></span>
          </div>
        </div>
      </div>
      <div class="bg2">
        <div class="navbar safe auto">
          <router-link to="/">网站首页</router-link>
          <router-link to="/productcenter">产品中心</router-link>
          <!-- <router-link to="/news">新闻资讯</router-link> -->
          <router-link to="/introduce">公司介绍</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
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
/* .bar{
  width: 100%;
  height: 60px;
  background-color: #F3F3F3;
} */
.left .logo {
  display: inline-block;
  width: 70px;
  height: 58px;
  overflow: hidden;
  vertical-align: middle;
}
.logo img {
  width: 100%;
  height: 100%;
}
.head-box {
  width: 100%;
  height: 190px;
}
.bg1 {
  width: 100%;
  height: 150px;
  background-color: #664e34;
}
.top {
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop-name {
  font-size: 22px;
  color: #fff;
  margin-left: 10px;
}
.tele {
  margin-left: 40px;
  display: inline-block;
  color: #693a05;
  font-weight: bolder;
  font-size: 16px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 250px;
  border-radius: 8px;
  background: #b99265;
}
.num1,
.num2,
.num3 {
  display: inline-block;
  width: 90px;
  height: 80px;
  border-radius: 10px;
  margin-left: 20px;
  background-repeat: no-repeat;
  background-position: center;
}
.num1 {
  background-image: url(../../assets/images/head1.png);
}
.num2 {
  background-image: url(../../assets/images/head2.png);
}
.num3 {
  background-image: url(../../assets/images/head3.png);
}
.bg2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #4a4337;
}
.navbar {
  overflow: hidden;
}
.navbar a {
  display: block;
  width: 80px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  float: left;
  margin-left: 35px;
}
.navbar a:hover {
  background: #fff;
  color: #eaa032;
  opacity: 1;
}
.navbar .router-link-exact-active {
  background: #fff;
  color: #eaa032;
}
</style>

