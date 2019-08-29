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
            <div class="phone">{{info.shop.phone}}</div>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <div class="auto bar">
            <router-link to="/">首页</router-link>
            <router-link to="/productcenter">产品中心</router-link>
            <router-link to="/news">新闻资讯</router-link>
            <router-link to="/introduce">公司介绍</router-link>
            <router-link to="/contact">联系我们</router-link>
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
.bg-l {
  width: 45%;
  height: 70px;
  float: left;
}
.bg-r {
  width: 55%;
  height: 70px;
  float: left;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header {
  width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  margin-left: 7px;
  margin-top: 9px;
}
.name {
  font-size: 16px;
  color: #1b5fba;
  font-weight: 400;
}
.phone {
  width: 178px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  color: #fff;
  border-radius: 10px;
  background-color: #1b5fba;
  margin-top: 5px;
  padding-left: 45px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-1.png);
  background-repeat: no-repeat;
  background-size: 18px 15px;
  background-position: 10% 50%;
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
  padding-left: 15px;
  line-height: 70px;
}
.bar a:hover {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-2.png);
  background-repeat: no-repeat;
  background-size: 8px 8px;
  background-position: 0 50%;
}
.bar .router-link-exact-active {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-2.png);
  background-repeat: no-repeat;
  background-size: 8px 8px;
  background-position: 0 50%;
}
</style>

