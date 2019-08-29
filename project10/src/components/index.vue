<template>
  <div>
    <div class="banner-box">
      <el-carousel
        v-if="obj.ad_list.length==0?true:false"
        arrow="always"
        height="500px"
        id="self"
        :interval="5000"
      >
        <el-carousel-item v-for="(item,index) in 2" :key="index" height="500px"></el-carousel-item>
      </el-carousel>

      <el-carousel
        v-if="obj.ad_list.length==0?false:true"
        :interval="5000"
        height="500px"
        arrow="always"
      >
        <el-carousel-item v-for="(item,key) in obj.ad_list" :key="key">
          <a class="ban-box" :href="item.url" rel="external nofollow">
            <img :src="item.image" alt>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="bg">
      <div class="safe auto">
        <div class="head auto m-t-60">老板推荐&#x3000;Boss recommended</div>
        <div class="container">
          <div
            v-for="(item,index) in info.re_list"
            :key="index"
            class="div"
          >
            <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img-box">
              <img :src="item.image" alt>
            </a>
            <p class="price">￥{{item.price_description}}</p>
            <p class="name">{{item.name}}</p>
            <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="link">商品详情</a>
          </div>
        </div>
        <div class="box">
          <router-link class="more" to="/productcenter">查看更多》</router-link>
        </div>
      </div>
    </div>
    <div class="banner-box1">
      <div class="head auto">公司介绍&#x3000;Company introduction</div>

      <div class="safe company">
        <div class="imgs">
          <div class="img-box">
            <!-- <img src="../assets/images/test01.png" alt> -->
          </div>
        </div>
        <div class="introduce">
          <p>公司介绍</p>
          <p class="para m-t-30" v-html="obj.shop.content"></p>
          <div class="skan">
            <span class="bg">
              <router-link to="/introduce" style="color:white">查看更多》</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="safe auto hot-head">
      <div class="head auto">热卖产品&#x3000;Hot Products</div>
    </div>
    <div class="hot-pro">
      <div class="safe auto pro-show">
        <div
          v-for="(item,index) in hot.item_list"
          :key="index"
          class="pro"
        >
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img">
            <img :src="item.image" alt>
          </a>
          <div class="title">{{item.name}}</div>
          <div class="bd-bm"></div>
          <div class="price">
            <div class="p-left">￥{{item.price_description}}</div>
            <a  :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="p-right">
              <span class="p-des">立即询价</span>
            </a>
          </div>
        </div>
        <!-- <div class="cover"></div> -->
      </div>
    </div>
    <div class="safe auto m-t-60">
      <div class="head auto">产品优势&#x3000;Product superiority</div>
    </div>
    <div class="m-t-30 pro-super">
      <div class="safe auto super-box">
        <div class="box-item">
          <div class="top top1">
            <!-- <img src="../assets/images/test.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">1</span>
            </h1>
            <p class="b-des">质量保证</p>
            <p class="b-more">精心打磨产品细节，优化产品质</p>
            <p class="b-more">量，让售卖的每一份产品都得到您的信赖。</p>
            <p class="b-num">NO.one</p>
          </div>
        </div>
        <div class="box-item">
          <div class="top top2">
            <!-- <img src="../assets/images/test02.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">2</span>
            </h1>
            <p class="b-des">制作精巧</p>
            <p class="b-more">经过数十道的加工程序以及员工</p>
            <p class="b-more">的精心制作，完成了一件件的好物。</p>
            <p class="b-num">NO.two</p>
          </div>
        </div>
        <div class="box-item">
          <div class="top top3">
            <!-- <img src="../assets/images/test03.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">3</span>
            </h1>
            <p class="b-des">优良卓越</p>
            <p class="b-more">我们只打造在各个方面都能达成</p>
            <p class="b-more">用户需求，并让客服满意的优秀货源。</p>
            <p class="b-num">NO.three</p>
          </div>
        </div>
        <div class="box-item">
          <div class="top top4">
            <!-- <img src="../assets/images/test04.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">4</span>
            </h1>
            <p class="b-des">诚信经营</p>
            <p class="b-more">诚信至上，以人为本，经营必须从</p>
            <p class="b-more">用户的角度出发，不让任何一个用户失望。</p>
            <p class="b-num">NO.four</p>
          </div>
        </div>
        <div class="box-item">
          <div class="top top5">
            <!-- <img src="../assets/images/test05.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">5</span>
            </h1>
            <p class="b-des">物美价廉</p>
            <p class="b-more">我们保证所售卖的产品价格都会在</p>
            <p class="b-more">产品本身体现相应的价值，做到物有所值。</p>
            <p class="b-num">NO.five</p>
          </div>
        </div>
        <div class="box-item">
          <div class="top top6">
            <!-- <img src="../assets/images/test06.png" alt> -->
          </div>
          <div class="botm">
            <h1 class="b-title">
              <span class="b-line">6</span>
            </h1>
            <p class="b-des">品质售后</p>
            <p class="b-more">随时待命的客服人员会努力解决您</p>
            <p class="b-more">的一切困扰，并为您提供专业的解决方案。</p>
            <p class="b-num">NO.six</p>
          </div>
        </div>
      </div>
    </div>
    <!-- toTop -->
    <div class="totop">
      <div class="down" @mouseover="move" @mouseout="leave">
        <div class="t-0"></div>
        <div class="t-1" v-show="flag1">手机号码：{{obj.shop.mobile}}</div>
      </div>
      <div class="up" v-show="flag2" @click="totop" @mouseover="over" @mouseout="out">
        <div class="t-0" v-show="flag"></div>
        <div class="t-1" v-show="!flag">返回顶部</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      // 推荐
      info: {
        re_list: {},
        re_page: { page: 1 }
      },
      // 店铺
      obj: {
        shop: {},
        ad_list: {},
        item_list: []
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      flag: true,
      flag1: false,
      flag2: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      this.flag2 = st > 400;
    });
  },
  created() {
    let _this = this;
    // 热卖商品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 12 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 8 },
      res => {
        _this.render(res.data);
      }
    );
    // 店铺信息
    _this.api(
      "index/index",
      { user_id: window._global.user_id, perpage: 8 },
      res => {
        Vue.set(this.obj, "shop", res.data.shop);
        Vue.set(this.obj, "item_list", res.data.item_list);
        Vue.set(this.obj, "ad_list", res.data.ad_list);
        // console.log(res.data)
      }
    );
  },
  methods: {
    totop() {
      window.scrollTo(0, 0);
    },
    over() {
      this.flag = !this.flag;
    },
    out() {
      this.flag = !this.flag;
    },
    move() {
      this.flag1 = true;
    },
    leave() {
      this.flag1 = false;
    }
  }
};
</script>

<style scoped>
#self .el-carousel__item:nth-child(2n) {
  background-image: url(../assets/images/ban1.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#self .el-carousel__item:nth-child(2n + 1) {
  background-image: url(../assets/images/ban2.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.banner-box {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.ban-box {
  display: block;
  width: 100%;
  height: 500px;
}
.ban-box img {
  width: 100%;
  height: 100%;
}
.head {
  width: 270px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  background: url(../assets/images/icon-head1.png) no-repeat;
}
.container {
  overflow: hidden;
  width: 1200px;
}
#bg {
  width: 100%;
  background: #f8f7f7;
}
#bg .safe {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  width: 100%;
  overflow: hidden;
}
.container .div {
  width: 265px;
  height: 350px;
  float: left;
  margin: 40px 16.5px;
  background: #ffffff;
}
.container .div p {
  width: 100%;
  font-size: 14px;
  margin-top: 12px;
}
.container .div .price {
  padding-left: 15px;
  font-size: 18px;
  color: #e00a23;
}
.container .div .name {
  padding-left: 15px;
  color: #484848;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container .div .link {
  display: block;
  width: 255px;
  margin: 12px auto 0;
  text-align: center;
  color: #2a5d86;
  border: 1px solid #2a5d86;
}
.container .div .link:hover {
  background: #2a5d86;
  color: #ffffff;
}
.container .div .img-box {
  display: block;
  width: 265px;
  height: 230px;
  padding: 10px;
}
.container .div .img-box:hover{
  opacity: 0.8;
}
.container .div .img-box img {
  width: 100%;
  height: 100%;
}
.safe .box {
  width: 100%;
  height: 30px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 20px;
}
.more {
  width: 115px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  background: url(../assets/images/icon-more.png) no-repeat;
}
.banner-box1 {
  width: 100%;
  overflow: hidden;
  margin-top: 60px;
}
.banner-box1 .safe {
  margin: 65px auto;
  box-shadow: 0 0 2px #999;
}
.company {
  overflow: hidden;
  height: 388px;
  background-color: #f0f0f0;
  background-image: url(../assets/images/banner6.png);
  background-position: 470px 208px;
  padding: 15px;
  background-repeat: no-repeat;
}
.company .introduce {
  float: right;
  width: 590px;
  color: #000000;
  font-size: 14px;
  font-weight: bolder;
  letter-spacing: 1px;
}
.introduce .para {
  width: 100%;
  height: 263px;
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #000;
}
.imgs {
  width: 495px;
  float: left;
}
.imgs .img-box{
width: 495px;
height: 358px;
background-image: url(../assets/images/test01.png);
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
}
.img-box {
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: auto;
}
.skan {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  text-align: right;
}
.skan .bg {
  display: inline-block;
  width: 115px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 20px;
  background: url(../assets/images/icon-more.png) no-repeat;
}
.pro-super {
  width: 100%;
}
.super-box {
  overflow: hidden;
  margin-bottom: 100px;
}
.super-box .box-item {
  width: 360px;
  margin: 30px 20px;
  float: left;
}
.box-item .top {
  width: 360px;
  height: 235px;
  overflow: hidden;
}
.box-item .top1{
background-image: url(../assets/images/test.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .top2{
background-image: url(../assets/images/test02.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .top3{
background-image: url(../assets/images/test03.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .top4{
background-image: url(../assets/images/test04.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .top5{
background-image: url(../assets/images/test05.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .top6{
background-image: url(../assets/images/test06.png);
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
}
.box-item .botm {
  width: 310px;
  height: 185px;
  position: relative;
  z-index: 999;
  margin: -50px auto 0;
  background-color: #ffffff;
  overflow: hidden;
}
.b-title {
  text-align: center;
  margin-top: 8px;
}
.b-line {
  font-size: 26px;
  color: #1168af;
  border-bottom: 1px solid #1168af;
}
.b-des {
  font-size: 20px;
  color: #1168af;
  text-align: center;
  margin-top: 8px;
}
.b-more {
  text-indent: 2em;
  font-size: 14px;
  color: #8c8d8d;
  text-align: center;
  margin-top: 8px;
}
.b-num {
  font-size: 14px;
  color: #ffffff;
  width: 100%;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: #8babda;
  margin-top: 12px;
}
/* 热卖 */
.hot-head {
  margin-top: 30px;
  margin-bottom: 60px;
}
.hot-pro {
  width: 100%;
  overflow: hidden;
}
.pro-show {
  overflow: hidden;
  position: relative;
}
.pro {
  width: 276px;
  float: left;
  border: 1px solid #bfbfbf;
  margin: 15px 12px;
}
.pro .img {
  display: block;
  width: 100%;
  height: 250px;
  background: #fff;
  padding: 10px;
  overflow: hidden;
}
.pro .img img {
  width: 100%;
  height: 100%;
}
.pro .title {
  width: 100%;
  color: #000;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.pro .price {
  overflow: hidden;
  padding: 10px;
}
.price .p-left {
  float: left;
  width: 50%;
  color: #000;
  font-size: 16px;
  font-weight: bolder;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price .p-right {
  display: block;
  float: right;
  width: 88px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #2553a4;
  color: #2553a4;
  font-size: 11px;
  text-align: right;
  background-image: url(../assets/images/ask1.png);
  background-repeat: no-repeat;
  background-position: 8px 3px;
  padding-right: 8px;
}
.price .p-right:hover {
  color: #fff;
  background-color: #2553a4;
  background-image: url(../assets/images/ask2.png);
  background-repeat: no-repeat;
  background-position: 8px 3px;
}
.pro .bd-bm {
  width: 262px;
  height: 1px;
  margin: 20px auto 0;
  background: #bfbfbf;
}
/* .pro-show .cover {
  width: 577px;
  height: 337px;
  position: absolute;
  top: 375px;
  left: 312px;
  z-index: 99999;
  background-image: url(../assets/images/cover.png);
  background-position: center;
  background-repeat: no-repeat;
} */
.totop {
  width: 42px;
  position: fixed;
  right: 50px;
  bottom: 35px;
  cursor: pointer;
  z-index: 999;
}
.totop .up {
  width: 41px;
  height: 41px;
}
.up .t-0 {
  width: 41px;
  height: 41px;
  background-image: url(../assets/images/t-1.png);
}
.up .t-1 {
  width: 41px;
  height: 41px;
  padding: 0 5px;
  background-color: #29baf2;
  color: #fff;
}
.totop .down {
  width: 41px;
  height: 41px;
  margin-top: 5px;
  position: relative;
}
.down .t-0 {
  width: 41px;
  height: 41px;
  background-image: url(../assets/images/t-2.png);
}
.down .t-1 {
  width: 100px;
  height: 41px;
  color: #fff;
  background: #29baf2;
  position: absolute;
  top: 0;
  left: -100px;
  transition: all 0.5s;
  border-radius: 5px;
  padding: 0 5px;
}
</style>
