<template>
  <div>
    <div class="head-box">
      <div class="safe auto head">
        <div class="left">
          <div class="logo">
            <img :src="info.shop.logo" alt>
          </div>
          <div class="name">
            <p class="n-name">{{info.shop.enterprise_name}}</p>
            <p class="tele">
              <span class="te-ico"></span>
              <span>联系电话：{{info.shop.mobile}}</span>
            </p>
          </div>
        </div>
        <div class="right">
          <router-link to="/">首页</router-link>
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
.head-box {
  width: 100%;
  height: 85px;
  background-color: #0f2d4f;
  color: #fff;
  font-size: 16px;
}
.head {
  height: 85px;
  overflow: hidden;
}
.head .left,
.head .right {
  float: left;
  overflow: hidden;
  height: 85px;
}

.left .logo {
  width: 70px;
  height: 58px;
  float: left;
  line-height: 85px;
}
.left .logo img {
  width: 100%;
  height: 100%;
}
.left .name {
  float: left;
  font-size: 20px;
  color: #f1bf6c;
  margin-left: 20px;
  position: relative;
  top: 10px;
}
.name .n-name {
  height: 35px;
  line-height: 35px;
}
.name .tele {
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
}
.tele .te-ico {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(../../assets/images/p2-t.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  top: 4px;
}
.head .right {
  margin-left: 190px;
}
.right a {
  display: block;
  width: 150px;
  height: 85px;
  float: left;
  font-size: 16px;
  text-align: center;
  line-height: 85px;
  color: #fff;
}
.right .router-link-exact-active {
  color: #f1bf6c;
}
</style>

