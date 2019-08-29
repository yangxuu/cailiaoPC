<template>
  <div>
    <div class="head1">
      <div class="safe auto">
        <div class="welcome">欢迎来到商铺！</div>
        <div class="tele">{{info.shop.mobile}}</div>
      </div>
    </div>
    <div class="head2">
      <div class="safe auto head2-flex">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt="">
          <span class="shopname">{{info.shop.enterprise_name}}</span>
        </div>
        <div class="right">
          <div class="bar">
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
.head1 {
  height: 37px;
  background: #cc0d36;
  overflow: hidden;
  color: #fff;
  letter-spacing: 1px;
  font-size: 16px;
}
.welcome {
  float: left;
  width: 124px;
  height: 37px;
  font-size: 16px;
  font-family: STSongti-SC-Bold;
  font-weight: bold;
  line-height: 37px;
}
.tele {
  float: right;
  width: 200px;
  height: 37px;
  line-height: 37px;
  font-size: 20px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  letter-spacing: 1px;
  padding-left: 35px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-1.png);
  background-repeat: no-repeat;
  background-position: 4% 50%;
  background-size: 20px 18px;
}
.head2 {
  width: 100%;
  height: 65px;
  background: #1b1b1b;
}
.head2-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.left .logo{
  width: 77px;
  height: 55px;
}
.left .shopname{
  font-size:18px;
  font-family:STSongti-SC-Black;
  font-weight:900;
  margin-left: 14px;
}
.bar {
  overflow: hidden;
}
.bar a {
  font-size: 14px;
  color: #949494;
  float: left;
  display: block;
  width: 100px;
  height: 70px;
  padding-left: 15px;
  line-height: 70px;
}
.bar a:hover {
  opacity: 1;
  color: #fff;
}
.bar .router-link-exact-active {
  color: #fff;
}
</style>

