<template>
  <div>
    <div class="head safe auto">
      <div class="head-left imgbox">
        <img :src="info.shop.logo" alt>
        <div class="shopname">{{info.shop.enterprise_name}}</div>
      </div>
      <div class="head-medium">
        <router-link to="/" class="li">
          首页
          <div class="spot"></div>
        </router-link>

        <router-link to="/productcenter" class="li">
          产品中心
          <div class="spot"></div>
        </router-link>

        <router-link to="/news" class="li">
          新闻资讯
          <div class="spot"></div>
        </router-link>

        <router-link to="/introduce" class="li">
          公司介绍
          <div class="spot"></div>
        </router-link>

        <router-link to="/contact" class="li">
          联系我们
          <div class="spot"></div>
        </router-link>

      </div>
      <div class="head-right">
        <img src="http://files.cailiao.com/vue/cailiao/pc_16/images/yx1.png" alt>
        <span class="mobile">{{info.shop.mobile}}</span>
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
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  display: flex;
  align-items: center;
}
.shopname {
  margin-left: 20px;
  font-size: 25px;
  font-family: RS_CuHei;
  color: #000;
}
.imgbox img {
  width: 81px;
  height: 60px;
}
.head-medium {
  overflow: hidden;
}
.head-medium .li {
  display: block;
  float: left;
  width: 90px;
  height: 50px;
  text-align: center;
  line-height: 40px;
  list-style: none;
  color: #000000;
  font-size: 14px;
}
.li .spot {
  width: 46px;
  height: 3px;
  margin: 5px auto 0;
  background: #0064c1;
  border-radius: 2px;
  display: none;
}

.head-right img {
  width: 33px;
  height: 33px;
  position: relative;
  top: -3px;
}
.mobile {
  margin-left: 10px;
  font-size: 20px;
  color: #0064c1;
}


/* hover */
.li:hover {
  color: #0064c1;
  font-size: 16px;
}
.li:hover .spot {
  display: block;
}
.head-medium .router-link-exact-active {
  color: #0064c1;
  font-size: 16px;
}
.router-link-exact-active .spot {
  display: block;
}
</style>

