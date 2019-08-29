<template>
  <div>
    <div class="head-box">
      <div class="bg1">
        <div class="head safe auto">
          <div class="h-l">
            <div class="logo">
              <img :src="info.shop.logo" alt>
            </div>
            <div class="shopname">
              <p class="shop-name">{{info.shop.enterprise_name}}</p>
              <p class="flag">
                <span class="flag-l">
                  <img src="http://files.cailiao.com/vue/cailiao/pc_13/images/icon-1.png" alt>
                  <span class="vip">超级会员</span>
                </span>
                <span class="flag-r">
                  <img src="http://files.cailiao.com/vue/cailiao/pc_13/images/icon-2.png" alt>
                  <span class="comp">企业认证</span>
                </span>
              </p>
            </div>
          </div>
          <div class="h-m">
            <span class="m-l-25">
              <img
                class="size-img"
                src="http://files.cailiao.com/vue/cailiao/pc_13/images/2.png"
                alt
              >
              <span class="size-s">诚信商家</span>
            </span>
            <span class="m-l-25">
              <img
                class="size-img"
                src="http://files.cailiao.com/vue/cailiao/pc_13/images/2.png"
                alt
              >
              <span class="size-s">优越品质</span>
            </span>
            <span class="m-l-25">
              <img
                class="size-img"
                src="http://files.cailiao.com/vue/cailiao/pc_13/images/2.png"
                alt
              >
              <span class="size-s">完美售后</span>
            </span>
          </div>
          <div class="h-r">
            <img class="tel" src="http://files.cailiao.com/vue/cailiao/pc_13/images/8.png" alt>
            电话咨询：{{info.shop.mobile}}
          </div>
        </div>
      </div>
      <div class="bg2">
        <div class="navbar safe auto">
          <router-link to="/">网站首页</router-link>
          <router-link to="/productcenter">产品信息</router-link>
          <router-link to="/news">新闻资讯</router-link>
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
  background: #3e3e3e;
}
.head {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 70px;
  height: 58px;
  margin-right: 30px;
}
.h-l {
  display: flex;
}

.logo img {
  width: 100%;
  height: 100%;
}
.shopname{
  position: relative;
  top: -7px;
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
.flag .flag-l {
  margin-left: 18px;
}
.flag .flag-r {
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
  color: #fff;
  font-size: 16px;
}
.size-img {
  position: relative;
  top: -25px;
}
.m-l-25 {
  margin-left: 25px;
}
.m-l-25 img {
  width: 16px;
  height: 16px;
}
.h-r {
  /* width: 250px;
  height: 35px;
  line-height: 35px;
  text-align: center; */
  padding: 6px 10px;
  background: #fff;
  border-radius: 15px;
  color: #df9f12;
  font-size: 17px;
}
.h-r .tel {
  width: 11px;
  height: 21px;
  position: relative;
  top: -1px;
}
.bg2 {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #000;
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
  color: #000;
  opacity: 1;
}
.navbar .router-link-exact-active {
  background: #fff;
  color: #000;
}
</style>

