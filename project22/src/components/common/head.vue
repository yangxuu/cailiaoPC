<template>
  <div>
    <div class="headbox">
      <div class="head safe auto">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt />
          <span class="shopname">{{info.shop.enterprise_name}}</span>
        </div>
        <div class="right">
          <div class="right-cn">
            <div>联系热线</div>
            <div>SERVISES</div>
          </div>
          <div class="right-mobile">{{info.shop.mobile}}</div>
        </div>
      </div>
    </div>
    <div class="head2box">
      <div class="safe auto head2">
        <router-link to="/">首页</router-link>
        <router-link to="/productcenter">产品中心</router-link>
        <router-link to="/news">新闻资讯</router-link>
        <router-link to="/introduce">公司介绍</router-link>
        <router-link to="/contact">联系我们</router-link>
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
  height: 105px;
  background: #fff;
  overflow: hidden;
}
.head {
  height: 105px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 94% 92%;
  background-size: 286px 84px;
  background-image: url(../../assets/images/yx3.png);
}
.left {
  float: left;
  height: 105px;
  line-height: 105px;
  background-image: url(../../assets/images/yx2.png);
  background-repeat: no-repeat;
  background-position: 100% 70%;
  background-size: 272px 99px;
}
.logo {
  width: 94px;
  height: 75px;
  border: 1px solid #979797;
}
.shopname {
  margin-left: 10px;
  color: #000000;
  font-size: 32px;
}
.right {
  float: right;
  height: 45px;
  padding-left: 56px;
  overflow: hidden;
  margin-top: 32.5px;
  background-image: url(../../assets/images/yx4.png);
  background-repeat: no-repeat;
  background-size: 46px 46px;
  background-position: 0 0;
}
.right-cn {
  float: left;
  color: #818181;
  font-size: 16px;
  letter-spacing: 1px;
  padding-right: 3px;
  border-right: 1px solid #979797;
}
.right-mobile {
  float: left;
  color: #d12a2a;
  font-size: 30px;
  letter-spacing: 1px;
  padding-left: 9px;
}
.head2box {
  background: #5d5d5d;
  height: 40px;
}
.head2 {
  overflow: hidden;
}
.head2 a {
  font-size: 16px;
  color: #fff;
  float: left;
  display: block;
  width: 79px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 15px;
}
.head2 a:hover {
  opacity: 1;
  color: #141414;
  background: #e4e4e4;
}
.head2 .router-link-exact-active {
  color: #141414;
  background: #e4e4e4;
}
</style>

