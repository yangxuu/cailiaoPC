<template>
  <div>
    <div class="banner">
      <!-- 默认轮播 -->
      <el-carousel
        v-show="obj.ad_list.length==0?true:false"
        :interval="5000"
        height="500px"
        arrow="always"
        id="self"
      >
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_9/images/banner1.png" alt="">
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_9/images/new-ban3.jpg" alt="">
        </el-carousel-item>
      </el-carousel>

      <!-- 用户上传的轮播 -->
      <el-carousel
        v-show="obj.ad_list.length==0?false:true"
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
    <div class="floor1">
      <div class="safe auto">
        <p class="f-des">最新产品</p>
        <p class="f-eng">New products</p>
        <p class="f-img"></p>
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </div>
    <div class="new-products">
      <div class="safe auto">
        <div
          class="pro-box"
          v-for="(item,index) in arr.list"
          :key="index"
        >
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img-box">
            <img :src="item.image" alt>
          </a>
          <div class="title">{{item.name}}</div>
          <div class="link">
            <span class="price">￥{{item.price_description}}</span>
            <span class="line"></span>
            <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="ask">立即询价</a>
          </div>
        </div>
      </div>
    </div>
    <div class="floor1">
      <div class="safe auto">
        <p class="f-des">企业信息</p>
        <p class="f-eng">Enterprise information</p>
        <p class="f-img"></p>
      </div>
    </div>
    <div class="company">
      <div class="safe auto">
        <div class="tbox">
          <div class="left">
            <div class="icon-box1"></div>
            <div class="word-box">
              <p class="title">
                联系方式
                <span class="grey">（Contact information）</span>
              </p>
              <p class="m-t-30">
                <span class="black">联系人：</span>
                {{obj.shop.link_manage}}
              </p>
              <p class="m-t-10">
                <span class="black">手机：</span>
                {{obj.shop.mobile}}
              </p>
              <p class="m-t-10">
                <span class="black">电话：</span>
                {{obj.shop.phone}}
              </p>
              <p class="m-t-10">
                <span class="black">邮箱：</span>
                {{obj.shop.user_email}}
              </p>
            </div>
          </div>
          <div class="right">
            <div class="icon-box2"></div>
            <div class="word-box">
              <p class="title">
                公司简介
                <span class="grey">（Company profile）</span>
              </p>
              <p v-html="obj.shop.content" class="m-t-30 content"></p>
            </div>
          </div>
        </div>
        <div class="bbox">
          <div class="left">
            <div class="icon-box3"></div>
            <div class="word-box m-l-100">
              <p class="title">
                主营产品：
                <span class="grey">（Main products）</span>
              </p>
              <p class="m-t-30 main">{{obj.shop.product}}</p>
            </div>
          </div>
          <div class="right">
            <div class="icon-box4"></div>
            <div class="word-box">
              <p class="title">
                营业执照：
                <span class="grey">（Business license）</span>
              </p>
              <div class="m-t-30">
                <p class="m-t-5 list">
                  <span class="black">法人代表：</span>
                  {{obj.shop.legal_person}}
                </p>
                <p class="m-t-5 list">
                  <span class="black">公司类型：</span>
                  {{obj.shop.enterprise_type}}
                </p>
                <p class="m-t-5 list">
                  <span class="black">注册资本：</span>
                  {{obj.shop.register_capital}}
                </p>
                <p class="m-t-5 list">
                  <span class="black">成立时间：</span>
                  {{obj.shop.time}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="floor1">
      <div class="safe auto">
        <p class="f-des">掌柜推荐</p>
        <p class="f-eng">The boss recommended</p>
        <p class="f-img"></p>
      </div>
    </div>
    <div class="m-t-30">
      <div class="safe auto boss">
        <div
          class="boss-box"
          v-for="(item,index) in info.re_list"
          :key="index"
        >
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img-box">
            <img :src="item.image" alt>
          </a>
          <div class="price">￥{{item.price_description}}</div>
          <div class="title">{{item.name}}</div>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="ask">立即询价</a>
        </div>
      </div>
    </div>
    <div class="floor1">
      <div class="safe auto">
        <p class="f-des">热卖产品</p>
        <p class="f-eng">Hot selling products</p>
        <p class="f-img"></p>
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </div>
    <div>
      <div class="safe auto hot">
        <div
          class="hot-box"
          v-for="(item,index) in hot.item_list"
          :key="index"
        >
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img-box">
            <img :src="item.image" alt>
          </a>
          <div class="h-bd">
            <div class="price">￥{{item.price_description}}</div>
            <div class="title">{{item.name}}</div>
          </div>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="ask">立即询价</a>
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
      // 供应 最新
      arr: {
        list: [],
        pageInfo: {}
      },
      // 店铺
      obj: {
        item_list: [],
        shop: {},
        ad_list: {}
      },
      // 推荐
      info: {
        re_list: [],
        re_page: { page: 1 }
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
  created() {
    let _this = this;
    // 供应 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 8
      },
      res => {
        Vue.set(this.arr, "list", res.data.list);
        Vue.set(this.arr, "pageInfo", res.data.pageInfo);
      }
    );
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "item_list", res.data.item_list);
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
    // 推荐产品
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 6 },
      res => {
        _this.render(res.data);
      }
    );
    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 8 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      this.flag2 = st > 400;
    });
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
    },
  }
};
</script>
<style scoped>
.banner {
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
  width: 1920px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-carousel__item a:hover {
  opacity: 1;
}

.f-des {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  color: #181818;
}
.floor1 {
  margin-top: 110px;
}
.f-eng {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  color: #666;
  font-size: 20px;
}
.f-img {
  width: 81px;
  height: 24px;
  margin: 0 auto;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_9/images/3.png);
}
.line1 {
  width: 100%;
  height: 3px;
  margin-top: 10px;
  background-color: #fa9704;
}
.line2 {
  width: 100%;
  height: 6px;
  margin-top: 5px;
  background-color: #fa9704;
}
.new-products .safe {
  overflow: hidden;
}
.new-products .safe > a:hover {
  opacity: 1;
}
.pro-box > a:hover {
  opacity: 1;
}
.pro-box {
  width: 250px;
  float: left;
  margin: 85px 25px 0;
  position: relative;
  box-shadow: 0 0 2px #666;
}

.pro-box .img-box {
  display: block;
  width: 250px;
  padding: 10px;
  height: 250px;
  overflow: hidden;
}
.pro-box .img-box:hover{
  opacity: 0.8;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.pro-box .title {
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  color: #666;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fbedd8;
}
.pro-box .link {
  display: block;
  width: 100%;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 30px;
  background: #e89839;
  color: #fff;
}
.link .price {
  display: inline-block;
  width: 50%;
  height: 100%;
}
.link .line {
  display: inline-block;
  width: 1px;
  height: 20px;
  vertical-align: middle;
  background: #fff;
}
.link .ask {
  display: inline-block;
  text-align: right;
  width: 45%;
  height: 100%;
  color: #fff;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_9/images/ask2.png);
  background-repeat: no-repeat;
  background-position: 23px 8px;
}
.company {
  margin-top: 110px;
  color: #666;
  font-size: 16px;
  padding: 50px 0;
  background: #eeeeee;
}
.tbox,
.bbox {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.tbox {
  border-bottom: 1px dashed #979797;
}
.tbox .left,
.tbox .right,
.bbox .right,
.bbox .left {
  width: 50%;
  height: 300px;
  float: left;
  padding-left: 50px;
  overflow: hidden;
}
.company .title {
  color: #000;
  font-size: 20px;
  margin-top: 60px;
  /* font-weight: bolder; */
}
.company .left {
  border-right: 1px dashed #979797;
}
.icon-box1 {
  width: 100px;
  height: 90px;
  margin-top: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_9/images/4.png) no-repeat;
}
.icon-box2 {
  width: 100px;
  height: 100px;
  margin-top: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_9/images/5.png) no-repeat;
}
.icon-box3 {
  width: 51px;
  height: 97px;
  margin-top: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_9/images/6.png) no-repeat;
}
.icon-box4 {
  width: 107px;
  height: 70px;
  margin-top: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_9/images/7.png) no-repeat;
}
.company .left div {
  float: left;
}
.company .right {
  overflow: hidden;
}
.company .right div {
  float: left;
}
.word-box {
  width: 347px;
  margin-left: 60px;
  overflow: hidden;
}
.m-l-100 {
  margin-left: 100px;
}
.tbox .content,
.bbox .main {
  width: 100%;
  color: #000;
  font-size: 16px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-height: 150%;
  -webkit-box-orient: vertical;
}
.company .grey {
  color: #727272;
}
.company .black {
  color: #000;
}
.bbox .list {
  width: 350px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-t-110 {
  margin-top: 110px;
}
.boss {
  overflow: hidden;
}
.boss .boss-box {
  width: 350px;
  float: left;
  margin: 80px 25px 0;
}
.boss-box .img-box {
  display: block;
  width: 350px;
  height: 350px;
  overflow: hidden;
  padding: 10px;
  border: 1px solid #d7d7d7;
}
.boss-box .img-box:hover{
  opacity: 0.8;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.boss-box .price {
  color: #fa9704;
  font-size: 14px;
  padding-left: 5px;
  margin-top: 10px;
}
.boss-box .title {
  color: #181818;
  font-size: 14px;
  padding-left: 5px;
  line-height: 180%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
.boss-box .ask {
  display: block;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px dashed #fa9704;
  color: #fa9704;
  font-size: 14px;
}
.boss-box .ask:hover {
  color: #fff;
  background: #fa9704;
}
.hot {
  overflow: hidden;
}
.hot .hot-box {
  width: 280px;
  float: left;
  margin: 85px 10px 0;
}

.hot-box .h-bd {
  border-left: 1px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;
}
.hot-box .img-box {
  display: block;
  padding: 10px;
  border: 1px solid #d6d6d6;
  width: 280px;
  height: 280px;
  overflow: hidden;
}
.hot-box .img-box:hover{
  opacity: 0.8;
}
.hot-box .price {
  color: #181818;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
}
.hot-box .title {
  color: #666;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
  padding-bottom: 10px;
}
.hot-box .ask {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #d6d6d6;
  color: #fa9704;
  font-size: 14px;
}
.hot-box .ask:hover {
  color: #fff;
  background: #fa9704;
}
.m-t-100 {
  margin-bottom: 100px;
}
.totop {
  width: 42px;
  position: fixed;
  right: 10px;
  bottom: 100px;
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_9/images/t-1.png);
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_9/images/t-2.png);
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


