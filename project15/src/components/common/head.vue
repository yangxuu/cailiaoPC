<template>
  <div>
    <div class="head">
      <div class="bg-l"></div>
      <div class="bg-r"></div>
      <div class="clearfix header">
        <!-- 左 -->
        <div class="left">
          <div class="logo">
            <img :src="info.shop.logo" alt>
          </div>
          <div class="shopname">
            <div class="name">{{info.shop.enterprise_name}}</div>
            <div class="phone">telephone：{{info.shop.phone}}</div>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <div class="auto bar">
              <router-link to="/">
                <span class="spot"></span>首页
              </router-link>
              <router-link to="/productcenter">
                <span class="spot"></span>产品中心
              </router-link>
              <router-link to="/news">
                <span class="spot"></span>新闻资讯
              </router-link>
              <router-link to="/introduce">
                <span class="spot"></span>公司介绍
              </router-link>
              <router-link to="/contact">
                <span class="spot"></span>联系我们
              </router-link>
          </div>
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
.head {
  width: 100%;
  height: 70px;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.bg-l{
  width: 45%;
  height: 70px;
  float: left;
}
.bg-r{
  width: 55%;
  height: 70px;
  float: left;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header{
  width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
}
.left {
  width: 50%;
  overflow: hidden;
  float: left;
}
.logo {
  width: 66px;
  height: 54px;
  margin-top: 8px;
  float: left;
}
.logo img {
  width: 100%;
  height: 100%;
}
.shopname {
  float: left;
  margin-left: 15px;
  margin-top: 13px;
}
.name {
  font-size: 16px;
  color: #d77c3b;
  font-family: STSongti-SC-Black;
  font-weight: 900;
}
.phone {
  font-size: 12px;
  font-family: Arial-Black;
  font-weight: 900;
  color: #f2ac7a;
  margin-top: 5px;
}
.right {
  width: 50%;
  float: left;
}
.bar {
  overflow: hidden;
}
.bar a {
  font-size: 14px;
  color: #fff;
  float: left;
  display: block;
  width: 100px;
  height: 70px;
  line-height: 70px;
}
.spot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
  margin-right: 5px;
}
.bar a:hover {
  color: #000;
}
.bar a:hover .spot {
  background: #000;
}
.bar .router-link-exact-active {
  color: #000;
}
.bar .router-link-exact-active .spot{
  background: #000;
}
</style>

