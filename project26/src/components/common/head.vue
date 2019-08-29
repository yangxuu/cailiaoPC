<template>
  <div>
    <div class="headerbox">
      <div class="head safe auto">
        <div class="head_left">
          <img class="logo" :src="info.shop.logo" alt />
          <div class="shopname">{{info.shop.enterprise_name}}</div>
        </div>
        <div class="head_right">
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
.headerbox {
  width: 100%;
  height: 83px;
  background: rgba(6, 67, 180, 1);
}
.head {
  height: 83px;
  display: flex;
  justify-content: space-between;
}
.head_left {
  display: flex;
  align-items: center;
}
.logo {
  width: 70px;
  height: 60px;
}
.shopname {
  font-size: 20px;
  color: #fff;
  margin-left: 5px;
}
.head_right{
    display: flex;
}
.head_right a{
  display: block;
  width: 100px;
  height: 83px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 83px;
}
.head_right a:hover,.head_right .router-link-exact-active{
  background:#587CBE;
}

</style>

