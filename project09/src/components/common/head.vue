<template>
  <div>
    <div class="head-box">
      <div class="bg1">
        <div class="head safe auto">
          <div class="logo">
            <img :src="info.shop.logo" alt>
          </div>
          <div class="h-l">
            <p class="shop-name">{{info.shop.enterprise_name}}</p>
            <p class="flag">
              <span class="flag-l">
                <img src="http://files.cailiao.com/vue/cailiao/pc_9/images/icon-1.png" alt>
                <span class="vip">{{info.shop.grade_name}}</span>
              </span>
              <span class="flag-r">
                <img src="http://files.cailiao.com/vue/cailiao/pc_9/images/icon-2.png" alt>
                <span class="comp">企业认证</span>
              </span>
            </p>
          </div>
          <div class="h-m">
            <span class="m-l-25">
              <img class="size-img" src="http://files.cailiao.com/vue/cailiao/pc_9/images/2.png" alt>
              <span class="size-s">诚信商家</span>
            </span>
            <span class="m-l-25">
              <img class="size-img" src="http://files.cailiao.com/vue/cailiao/pc_9/images/2.png" alt>
              <span class="size-s">优越品质</span>
            </span>
            <span class="m-l-25">
              <img class="size-img" src="http://files.cailiao.com/vue/cailiao/pc_9/images/2.png" alt>
              <span class="size-s">完美售后</span>
            </span>
          </div>
          <div class="h-r">
            <img src="http://files.cailiao.com/vue/cailiao/pc_9/images/8.png" alt>
            电话咨询：{{info.shop.mobile}}
          </div>
        </div>
      </div>
      <div class="bg2">
        <div class="navbar safe auto">
          <router-link to="/">网站首页</router-link>
          <router-link to="/productcenter">产品信息</router-link>
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
      // console.log(res.data)
    });
  }
};
</script>
<style scoped>
.head-box {
  width: 100%;
  height: 190px;
}
.bg1 {
  width: 100%;
  height: 150px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_9/images/1.png);
  background-size: 100% 100%;
}
.logo {
  width: 70px;
  height: 58px;
  position: relative;
  left: 40px;
}
.h-l {
  position: relative;
  left: -25px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.head {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop-name {
  font-size: 25px;
  color: #fff;
}
.flag {
  width: 220px;
  height: 24px;
  line-height: 24px;
  margin-top: 10px;
  border-radius: 12px;
  background: #fff;
}
.flag .flag-l{
  margin-left: 18px;
}
.flag .flag-r{
  margin-left: 30px;
}
.vip {
  font-size: 12px;
  color: #f52110;
}
.comp {
  font-size: 12px;
  color: #393939;
}
.size-s {
  display: inline-block;
  width: 33px;
  color: #505050;
  font-size: 16px;
}
.size-img {
  position: relative;
  top: -25px;
}
.m-l-25 {
  margin-left: 25px;
}
.h-r {
  width: 250px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #fff;
  border-radius: 15px;
}
.bg2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #eaa032;
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

