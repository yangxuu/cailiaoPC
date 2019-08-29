<template>
  <div>
    <div class="head-box">
      <div class="safe">
        <ul>
          <li class="left">
            <div class="logo-box">
              <img :src="info.shop.logo" alt>
            </div>
            <div class="des-box">
              <p class="b name">{{info.shop.enterprise_name}}</p>
              <p class="s-ico">
                <span class="small yellow">
                  <img src="../../assets/images/icon-1.png" alt>超级会员
                </span>
                <span class="small">
                  <img src="../../assets/images/icon-2.png" alt>企业认证
                </span>
              </p>
            </div>
          </li>
          <li class="right">
            <div class="r-icons">
              <span class="icon-box">
                <img src="../../assets/images/icon-53.png" alt>
              </span>
              <span class="icon-box">
                <img src="../../assets/images/icon-54.png" alt>
              </span>
              <span class="icon-box">
                <img src="../../assets/images/icon-55.png" alt>
              </span>
            </div>
            <div class="tel-box">
              <span class="img-box">
                <img src="../../assets/images/icon-tel.png" alt>
              </span>
              <span class="tel">电话热线：{{info.shop.mobile}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-box">
      <div class="safe">
        <ul class="navbar">
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="/productcenter">产品中心</router-link>
          </li>
          <!-- <li>
            <router-link to="/news">新闻资讯</router-link>
          </li>
          <li>
            <router-link to="/example">合作案例</router-link>
          </li>-->
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li>
            <router-link to="/introduce">公司介绍</router-link>
          </li>
        </ul>
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
  height: 114px;
}
.safe {
  width: 1200px;
  margin: 0 auto;
}
.head-box .safe ul {
  width: 100%;
  overflow: hidden;
}
.left {
  float: left;
  margin-top: 30px;
  overflow: hidden;
}
.left .logo-box {
  width: 70px;
  height: 58px;
  position: relative;
  float: left;
}
.left .logo-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.left .des-box {
  float: left;
  margin-left: 30px;
}
.des-box .name {
  font-size: 26px;
}
.des-box .s-ico {
  margin-top: 5px;
}
.right {
  float: right;
  overflow: hidden;
  margin-top: 30px;
}
.right .r-icons{
  float: left;
}
.right .tel-box{
  float: left;
}
.right .tel-box {
  width: 240px;
  height: 38px;
  line-height: 38px;
  margin-top: 10px;
  margin-left: 35px;
  text-align: center;
  color: white;
  background-color: #4161c4;
  border-radius: 15px;
}
.right .icon-box {
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-left: 30px;
}
.right .icon-box img {
  width: 100%;
  display: block;
}
.tel-box .img-box {
  display: inline-block;
  width: 20px;
  height: 30px;
}
.small {
  font-size: 12px;
}
.yellow{
  color:#F56110;
}
.navbar-box {
  width: 100%;
  height: 49px;
  line-height: 49px;
  overflow: hidden;
  background: #295ead;
}
.navbar li {
  width: 100px;
  height: 49px;
  line-height: 49px;
  float: left;
}
.navbar li a {
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
}
.navbar li a:hover {
  color: orange !important;
  background: white !important;
  opacity: 1;
}
.navbar li .router-link-exact-active {
  color: orange;
  background: white;
}
</style>
