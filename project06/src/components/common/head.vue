<template>
  <div>
    <ul class="head safe auto clear">
      <li class="left clear">
        <span class="img-box"><img :src="info.shop.logo" alt=""></span>
        <span class="name">{{info.shop.enterprise_name}}</span>
      </li>
      <li class="right">
        <router-link to="/">首页</router-link>
        <router-link to="/productcenter">产品中心</router-link>
        <!-- <router-link to="/news">新闻资讯</router-link> -->
        <router-link to="/introduce">公司介绍</router-link>
        <router-link to="/contact">联系我们</router-link>
        <span class="phone">
          <p class="tel">
            <span class="img"></span> 咨询热线：
          </p>
          <p class="number">{{info.shop.mobile}}</p>
        </span>
      </li>
    </ul>
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
  height: 108px;
  line-height: 108px;
  overflow: hidden;
}
.head .left {
  width: 390px;
  height: 108px;
  float: left;
  overflow: hidden;
}
.left span {
  display: block;
  float: left;
}
.left .img-box {
  width: 70px;
  height: 58px;
  vertical-align: middle;
}
.img-box img{
  width: 100%;
  height: 100%;
}
.left .name {
  float: left;
  width: 315px;
  height: 108px;
  margin-left: 5px;
  font-size: 18px;
  color: #f2461e;
}
.head .right {
  /* width: 810px; */
  height: 108px;
  line-height: 68px;
  font-size: 14px;
  float: right;
  padding: 20px 0;
  overflow: hidden;
}
.right a {
  display: block;
  float: left;
  text-align: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  margin-left: 30px;
}
.right a:hover {
  color: #f2461e;
  border-bottom: 2px solid #f2461e;
}
.right .router-link-exact-active {
  color: #f2461e;
  border-bottom: 2px solid #f2461e;
}
.right .phone {
  display: block;
  float: right;
  width: 200px;
  height: 68px;
  line-height: 68px;
  margin-left: 60px;
}
.phone p {
  width: 150px;
  height: 30px;
  text-align: left;
  line-height: 30px;
  margin-left: 20px;
}
.phone .number {
  font-size: 20px;
  color: #f2461e;
}
.phone .tel {
  font-size: 14px;
  color: #424242;
}
.phone .img {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/tele.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>


