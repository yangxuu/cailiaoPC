<template>
  <div>
    <div class="headbox">
      <div class="head safe auto">
        <div class="left">
          <img class="logo" :src="info.shop.logo" alt />
          <div class="shopname">{{info.shop.enterprise_name}}</div>
        </div>
        <div class="right">
          <div class="right-row">
            <div class="row-key">联系电话</div>
            <div class="row-val">{{info.shop.mobile}}</div>
          </div>
          <div class="right-rowbar">
            <router-link to="/">首页</router-link>
            <router-link to="/productcenter">产品中心</router-link>
            <router-link to="/news">新闻资讯</router-link>
            <router-link to="/introduce">公司介绍</router-link>
            <router-link to="/contact" class="border-none">联系我们</router-link>
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
.headbox {
  height: 93px;
  background: #f2f6fd;
  overflow: hidden;
}
.head {
  height: 93px;
  overflow: hidden;
}
.left {
  float: left;
  overflow: hidden;
}
.logo {
  float: left;
  display: block;
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  margin-top: 15px;
  border-radius: 50%;
}
.shopname {
  float: left;
  color: #494949;
  font-size: 25px;
  margin-left: 18px;
  margin-top: 20px;
}
.right {
  float: right;
  overflow: hidden;
}
.right-row {
  margin-top: 18px;
  padding-right: 35px;
}
.row-key {
  text-align: right;
  font-size: 12px;
  color: #737373;
}
.row-val {
  text-align: right;
  font-size: 18px;
  color: #494949;
  font-weight: bold;
}
.right-rowbar {
  overflow: hidden;
  margin-top: 6px;
}
.right-rowbar a {
  font-size: 14px;
  color: #737373;
  float: left;
  display: block;
  width: 126px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  overflow: hidden;
  border-right: 1px solid #979797;
}
.right-rowbar .border-none{
  border-right: none;
}
.right-rowbar a:hover {
  opacity: 1;
  color: #08448d;
}
.right-rowbar .router-link-exact-active {
  color: #08448d;
}
</style>

