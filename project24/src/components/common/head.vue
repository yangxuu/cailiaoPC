<template>
  <div>
    <div class="headbox">
      <div class="head safe auto">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt />
          <div class="shopname">
            <div class="row1">{{info.shop.enterprise_name}}</div>
            <div class="flag">
              <img class="img1" src="../../assets/images/icon-1.png" alt="">
              <span class="vip">材料网超级会员</span>
              <img class="img1" src="../../assets/images/icon-2.png" alt="">
              <span class="comp">企业认证</span>
            </div>
            </div>
        </div>
        <div class="right">
          <router-link to="/">首页</router-link>
          <router-link to="/productcenter">产品中心</router-link>
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
    });
  }
};
</script>
<style scoped>
.headbox {
  height: 100px;
  overflow: hidden;
}
.head {
  height: 100px;
  overflow: hidden;
}
.left {
  float: left;
  overflow: hidden;
}
.logo {
  float: left;
  display: block;
  width: 80px;
  height: 74px;
  border: 1px solid #979797;
  margin-top: 12px;
}
.shopname {
  float: left;
  color: #000000;
  font-size: 24px;
  margin-left: 18px;
  margin-top: 20px;
}
.vip{
  font-size: 13px;
  color: #F56110;
}
.img1{
  position: relative;
  top: 2px;
}
.comp{
  font-size: 13px;
  color: #393939;
}
.right {
  float: right;
  overflow: hidden;
}
.right a {
  font-size: 16px;
  color: #000;
  float: left;
  display: block;
  width: 125px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  overflow: hidden;
}
.right a:hover {
  opacity: 1;
}
.right a:hover{
  background: #0071DB;
  color: #fff;
}
.right .router-link-exact-active{
  background: #0071DB;
  color: #fff;
}
</style>

