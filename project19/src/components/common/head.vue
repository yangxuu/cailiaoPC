<template>
  <div>
      <div class="head safe auto">
        <div class="left">
          <div class="logobox">
            <img :src="info.shop.logo" alt="">
          </div>
          <div class="shopinfo">
            <div class="shopname">{{info.shop.enterprise_name}}</div>
            <div class="eng">HIGH QUALITY GOODS AND SERVICE</div>
          </div>
          <div class="line"></div>
          <img class="img" src="http://files.cailiao.com/vue/cailiao/pc_19/images/yx2.png" alt="">
        </div>
        <div class="right">
          <img src="http://files.cailiao.com/vue/cailiao/pc_19/images/yx3.png" alt="">
          <div class="tele">
            <div class="cn">咨询热线：</div>
            <div class="number">{{info.shop.mobile}}</div>
          </div>
        </div>
      </div>
      <div class="head2box">
        <div class="head2 auto">
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
  height: 107px;
  overflow: hidden;
}
.left{
  height: 107px;
  float: left;
  overflow: hidden;
}
.logobox{
  float: left;
  width: 91px;
  height: 91px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx1.png);
  background-size: 91px 82px;
  background-repeat: no-repeat;
  background-position: 0 8px;
   position: relative;
   margin-top: 8px;
}
.logobox img{
  border: 1px solid #108633;
  width: 64px;
  height: 61px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.shopinfo{
  float: left;
  margin-left: 15px;
  margin-top: 23px;
}
.shopname{
  color: #3A3A3A;
  font-size: 26px;
}
.eng{
  color: #747474;
  font-size: 16px;
  letter-spacing: 1px;
}
.line{
  float: left;
  width: 2px;
  height: 39px;
  background: #E1E1E1;
  margin-left: 20px;
  margin-top: 35px;
}
.img{
  float: left;
  width: 191px;
  height: 38px;
  margin-left: 15px;
  margin-top: 34.5px;
}
.right{
  height: 107px;
  float:right;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx4.png);
  background-size: 194px 49px;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}
.right img{
  width: 51px;
  height: 51px;
  float: left;
  margin-top: 30px;
}
.right .tele{
  float: left;
  margin-left: 10px;
    margin-top: 25px;
}
.cn{
  font-size: 16px;
  color: #44AF28;
}
.number{
  font-size: 24px;
  color: #44AF28;
  letter-spacing: 1px;
}
.head2box{
  height: 45px;
  background: #44AF28;
}
.head2{
  width: 720px;
  overflow: hidden;
}
.head2 a{
  display: block;
  float: left;
  color: #fff;
  font-size: 16px;
  width: 144px;
  height: 45px;
  opacity: 1; 
}
.padding{
  display: block;
  width: 144px;
  height: 25px;
  text-align: center;
  margin-top: 10px;
  border-right: 2px solid #82C529;
}
.head2 a:hover{
    background:rgba(255,255,255,0.16);
}
.head2 .router-link-exact-active{
  background:rgba(255,255,255,0.16);
} 

</style>

