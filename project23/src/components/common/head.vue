<template>
  <div>
    <div class="headbox">
      <div class="head safe auto">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt />
          <div class="shopname">{{info.shop.enterprise_name}}</div>
        </div>
        <div class="right">
          <router-link to="/">
            <span class="padding">首页</span>
          </router-link>
          <router-link to="/productcenter">
            <span class="padding">产品中心</span>
          </router-link>
          <router-link to="/news">
            <span class="padding">新闻资讯</span>
          </router-link>
          <router-link to="/introduce">
            <span class="padding">公司介绍</span>
          </router-link>
          <router-link to="/contact">
            <span class="padding">联系我们</span>
          </router-link>
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
.headbox {
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.head {
  height: 80px;
  overflow: hidden;
}
.left {
  float: left;
  overflow: hidden;
}
.logo {
  float: left;
  display: block;
  width: 65px;
  height: 57px;
  border: 1px solid #979797;
  margin-top: 12px;
}
.shopname {
  float: left;
  color: #ffbb00;
  font-size: 24px;
  margin-left: 18px;
  margin-top: 20px;
}
.right {
  float: right;
  overflow: hidden;
}
.right a {
  font-size: 16px;
  color: #fff;
  float: left;
  display: block;
  width: 73px;
  height: 80px;
  margin: 0 25px;
  overflow: hidden;
}
.right a .padding {
  display: block;
  width: 73px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 25px;
}
.right a:hover {
  opacity: 1;
}
.right a:hover .padding{
   background: #ffbb00;
    color: #222222;
}
.router-link-exact-active .padding{
    background: #ffbb00;
     color: #222222;
}
</style>

