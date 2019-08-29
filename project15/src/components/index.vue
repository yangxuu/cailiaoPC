<template>
  <div>
    <div class="banner">
      <el-carousel
        v-show="obj.ad_list.length==0?true:false"
        :interval="5000"
        height="500px"
        arrow="always"
        id="self"
      >
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/banner5.jpg" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/ba7.png" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/ba6.png" alt />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        v-show="obj.ad_list.length==0?false:true"
        :interval="5000"
        height="500px"
        arrow="always"
      >
        <el-carousel-item v-for="(item,key) in obj.ad_list" :key="key">
          <a class="ban-box" :href="item.url" rel="external nofollow">
            <img :src="item.image" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--最新产品 -->
    <div class="safe newest clearfix">
      <button class="new-l" @click="prev">
        <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/yx8.png" alt />
      </button>
      <div class="new-m clearfix">
        <div class="new-m-box" ref="margin">
          <a
            class="block"
            v-for="(item,index) in info.list"
            :key="index"
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          >
            <div class="imgbox">
              <img :src="item.image" alt />
            </div>
            <div class="title">{{item.name}}</div>
          </a>
        </div>
      </div>
      <button class="new-l new-r" @click="next">
        <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/yx11.png" alt />
      </button>
    </div>
    <!-- 关于我们 -->
    <div class="bg">
      <div class="about clearfix">
        <div class="ab-l">
          <div class="ab-l-t">关于我们</div>
          <div class="ab-l-d">about us</div>
        </div>
        <div class="left">
          <div class="img">
            <img :src="obj.shop.logo" alt />
          </div>
          <div class="shopname">{{obj.shop.enterprise_name}}</div>
          <div class="flag">
            <span class="flag-l">
              <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/icon-1.png" alt />
              <span class="vip">材料网超级会员</span>
            </span>
            <span class="flag-r">
              <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/icon-2.png" alt />
              <span class="comp">企业认证</span>
            </span>
          </div>
          <div class="row m-t-13">
            <span class="key">联系人：</span>
            <span class="val">{{obj.shop.link_manage}}</span>
          </div>
          <div class="row">
            <span class="key">手机：</span>
            <span class="val">{{obj.shop.mobile}}</span>
          </div>
          <div class="row">
            <span class="key">电话：</span>
            <span class="val">{{obj.shop.phone}}</span>
          </div>
          <div class="row">
            <span class="key">邮箱：</span>
            <span class="val">{{obj.shop.user_email}}</span>
          </div>
          <div class="row">
            <span class="key">地址：</span>
            <span class="val">{{obj.shop.business_address}}</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="right" v-html="obj.shop.content"></div>
      </div>
    </div>
    <!-- /* 推荐 */ -->
    <div class="floor1">
      <div class="reco">
        <span class="re-line1"></span>
        <span class="word">店铺推荐</span>
        <span class="re-line2"></span>
      </div>
      <div class="angle"></div>
      <div class="eng">The quality reputation consistent from beginning to end</div>
    </div>
    <div class="re-pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in re.re_list"
        :key="index"
        class="rec"
      >
        <div class="imgbox">
          <img :src="item.image" alt />
        </div>
        <div class="r-down">
          <div class="pri">￥{{item.price_description}}</div>
          <div class="title">{{item.name}}</div>
        </div>
      </a>
    </div>
    <!-- /* 热销 */ -->
    <div class="floor2">
      <div class="hot-f">热销商品</div>
      <div class="eng">Good products can bring value to enterprises</div>
    </div>
    <div class="hot-pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in hot.item_list"
        :key="index"
        class="hot"
      >
        <div class="imgbox">
          <img :src="item.image" alt />
        </div>
        <div class="h-down">
          <div class="title">{{item.name}}</div>
          <div class="price">
            <span class="pri">￥{{item.price_description}}</span>
            <span class="link">立即询价</span>
          </div>
        </div>
      </a>
    </div>
    <!-- 最新新闻 -->
    <div class="floor3 safe auto clearfix">
      <div class="f3-left">
        <div class="f3-p1">
          <span class="f3-p1-s1">最新资讯</span>
          <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/yx9.png" alt />
        </div>
        <div class="f3-p2">
          <span class="f3-p2-N">N</span>
          <span class="f3-p2-ews">ews</span>
          <span class="day">{{day}}</span>
          <span class="year">{{month+1}}/{{year}}</span>
        </div>
        <div class="f3-p3"></div>
      </div>
      <router-link to="/news" class="f3-right">
        查看更多
        <span class="more">+</span>
      </router-link>
    </div>
    <!-- 新闻 -->
    <div class="newsbox safe auto clearfix">
      <div class="news clearfix" v-for="(item,index) in news.list.list" :key="index">
        <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="img">
          <img :src="item.thumbnail" alt />
        </router-link>
        <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="abs">
          <div class="n-title">{{item.post_title}}</div>
          <div class="n-des">{{item.post_excerpt}}</div>
          <div class="n-time">
            <img src="http://files.cailiao.com/vue/cailiao/pc_15/images/yx10.png" alt />
            <span class="date">发布日期</span>
            <span class="date date1">{{item.create_time}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <totop />
  </div>
</template>
<script>
import Vue from "vue";
import totop from "@/components/common/totop";
export default {
  components: { totop },
  data() {
    return {
      // 最新
      info: {
        list: [],
        pageInfo: {}
      },
      // 店铺
      obj: {
        shop: {},
        ad_list: {}
      },
      // 推荐
      re: {
        re_list: {},
        re_page: { page: 1 }
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      // 新闻
      news: {
        list: {}
      },
      ne_page: "",
      year: "",
      month: "",
      day: "",
      left: 0
    };
  },
  created() {
    let _this = this;
    // 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 12
      },
      res => {
        _this.render(res.data);
      }
    );
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 8 },
      res => {
        Vue.set(this.re, "re_list", res.data.re_list);
        Vue.set(this.re, "re_page", res.data.re_page);
      }
    );
    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 12 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 新闻
    _this.api(
      "news/index",
      { user_id: window._global.user_id, limit: 6 },
      res => {
        Vue.set(this.news, "list", res);
      }
    );
    _this.getTime();
  },
  methods: {
    getTime() {
      var date = new Date();
      var year = date.getFullYear(); //获取年
      var month = date.getMonth(); //获取月
      var day = date.getDate(); //获取当日
      this.year = year;
      this.month = month;
      this.day = day;
   
    },
    next() {
      this.left += 1145;
      if (this.left > 3000) {
        this.left = 2290;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.left -= 1145;
      if (this.left < 0) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    }
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
  width: 100%;
  height: 100%;
}
.el-carousel__item a:hover {
  opacity: 1;
}
/*最新 */
.newest {
  margin: 50px auto;
  overflow: hidden;
}
.new-l {
  outline: none;
  float: left;
  width: 28px;
  height: 230px;
  line-height: 230px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #cf651a;
  cursor: pointer;
}
.new-l img,
.new-rr img {
  width: 22px;
  height: 19px;
}
.new-r {
  float: right;
}
.new-m {
  float: left;
  width: 1144px;
  height: 230px;
  overflow: hidden;
}
.new-m-box {
  width: 3500px;
  transition: all 0.3s;
}
.block {
  float: left;
  display: block;
  width: 230px;
  margin: 0 28px;
  height: 230px;
  overflow: hidden;
  position: relative;
}
.block .imgbox {
  width: 230px;
  height: 230px;
  overflow: hidden;
  border: 1px solid #979797;
}
.imgbox img {
  width: 100%;
  height: 100%;
}
.block .title {
  position: absolute;
  left: 0;
  top: -100px;
  width: 230px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  color: #ffa86b;
  padding: 0 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(56, 56, 56, 0.3);
  transition: all 0.2s ease-in;
}
/* 关于我们 */
.bg {
  width: 100%;
  height: 450px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx12.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.about {
  width: 1134px;
  height: 337px;
  background: #f8e9d6;
  margin: 57px auto;
  position: relative;
}
.ab-l {
  width: 186px;
  height: 117px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx7.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: -9px;
  top: -11px;
}
.ab-l-t {
  padding-left: 26px;
  padding-top: 18px;
  font-size: 20px;
  font-family: STSongti-SC-Regular;
  color: #fff;
}
.ab-l-d {
  padding-left: 18px;
  padding-top: 3px;
  font-size: 14px;
  font-family: STSongti-SC-Regular;
  color: #fff;
}
.about .left {
  float: left;
  width: 457px;
  height: 100%;
  overflow: hidden;
  padding-top: 17px;
  padding-right: 7px;
  padding-left: 170px;
}
.about .img {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  overflow: hidden;
}
.about .img img {
  width: 100%;
  height: 100%;
}
.flag {
  margin-top: 3px;
}
.flag .flag-r {
  margin-left: 18px;
}
.vip {
  font-size: 12px;
  color: #f56110;
}
.comp {
  font-size: 12px;
  color: #000;
}
.left .m-t-13 {
  margin-top: 13px;
}
.row {
  margin-top: 5px;
}
.row .key {
  font-size: 14px;
  color: #727272;
}
.row .val {
  font-size: 14px;
  color: #000;
}
.shopname {
  color: #000;
  margin-top: 18px;
  font-size: 14px;
}
.about .line {
  float: left;
  width: 2px;
  height: 265px;
  margin-top: 36px;
  background: #979797;
}
.about .right {
  float: left;
  width: 549px;
  height: 193px;
  line-height: 200%;
  font-size: 14px;
  color: #545454;
  text-indent: 2em;
  margin: 54px 86px 97px 40px;
  overflow: hidden;
}
/* 推荐楼层 */
.floor1 {
  width: 100%;
  height: 66px;
  margin-top: 50px;
}
.reco {
  width: 100%;
  text-align: center;
  color: #cf651a;
  font-size: 22px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  letter-spacing: 1px;
}
.reco span {
  display: inline-block;
}
.re-line1 {
  width: 245px;
  height: 10px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.re-line2 {
  width: 245px;
  height: 10px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx4.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.angle {
  width: 100%;
  height: 14px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx9.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 22px 14px;
}
.floor1 .eng {
  text-align: center;
  font-size: 16px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  color: #e7a16f;
}
/* 推荐商品 */
.re-pro {
  margin-top: 50px;
}
.rec {
  display: block;
  margin: 10px 30px;
  width: 240px;
  float: left;
}
.rec .imgbox {
  width: 240px;
  height: 240px;
  border: 1px solid #b8b8b8;
  overflow: hidden;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.rec .r-down {
  width: 240px;
  height: 53px;
  background: #f2f2f2;
}
.r-down .pri {
  font-size: 16px;
  color: #cf651a;
  font-weight: 600;
  margin-top: 3px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.r-down .title {
  font-size: 14px;
  margin-top: 3px;
  padding-left: 14px;
  padding-right: 14px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  color: #626262;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 热销楼层 */
.floor2 {
  width: 100%;
  height: 80px;
  margin-top: 40px;
}
.hot-f {
  width: 100%;
  height: 50px;
  line-height: 66px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  letter-spacing: 1px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx3.png);
  background-size: 1062px 50px;
  background-position: center;
  background-repeat: no-repeat;
}
.floor2 .eng {
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  color: #e7a16f;
}
/* 热销商品 */
.hot-pro {
  margin-top: 40px;
}
.hot {
  display: block;
  width: 240px;
  float: left;
  margin: 10px 30px;
}
.hot .imgbox {
  width: 240px;
  height: 240px;
  border: 1px solid #979797;
  overflow: hidden;
}
.h-down {
  width: 240px;
  border: 1px solid #979797;
}
.h-down .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 9px 0 7px;
  margin: 0 10px;
  color: #626262;
  font-size: 14px;
  border-bottom: 1px dotted #c2c2c2;
}
.h-down .price {
  height: 36px;
}
.price .pri {
  display: inline-block;
  width: 50%;
  height: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #cf651a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin-top: 10px;
  border-right: 1px solid #c2c2c2;
}
.price .link {
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: #626262;
  width: 48%;
  height: 16px;
  margin-top: 10px;
  text-align: center;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx6.png);
  background-position: 6px 2px;
  background-repeat: no-repeat;
  background-size: 20px 15px;
}
/* 新闻楼层 */
.floor3 {
  height: 100px;
  margin-top: 58px;
}
.f3-left {
  width: 257px;
  height: 100px;
  float: left;
  position: relative;
  margin-left: 30px;
}
.f3-left .f3-p1 {
  width: 272px;
  height: 35px;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 3px solid #000;
  border-right: 3px solid #000;
}
.f3-p1 .f3-p1-s1 {
  display: inline-block;
  font-size: 24px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  color: #cf651a;
  margin-left: 110px;
  margin-top: -5px;
}
.f3-p1 img {
  width: 22px;
  height: 14px;
  position: relative;
  left: 20px;
  top: -3px;
  transform: rotate(-90deg);
}
.f3-left .f3-p2 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 95px;
  height: 100px;
  border-left: 3px solid #000;
  border-bottom: 3px solid #000;
}
.f3-p2 .day {
  position: absolute;
  left: 13px;
  top: 44px;
  font-size: 22px;
  color: #cf651a;
  font-family: Arial-Black;
  font-weight: 900;
}
.f3-p2 .year {
  position: absolute;
  left: 13px;
  top: 75px;
  font-size: 16px;
  color: #999999;
  font-family: Arial-Black;
}
.f3-p2-N {
  position: absolute;
  left: 0;
  top: -22px;
  font-size: 40px;
  font-family: DiwanThuluth;
  color: #000;
}
.f3-p2-ews {
  position: absolute;
  top: 0;
  left: 31px;
  font-size: 26px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  color: #000;
}
.f3-left .f3-p3 {
  position: absolute;
  left: 94px;
  top: 32px;
  width: 177px;
  height: 35px;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
}
.f3-right {
  float: right;
  margin-right: 30px;
  margin-top: 35px;
  display: block;
  width: 81px;
  height: 30px;
  line-height: 23px;
  text-align: center;
  font-size: 12px;
  color: #7b7b7b;
  border: 2px solid #cf651a;
}
.f3-right .more {
  font-size: 18px;
}
/* 新闻 */
.newsbox {
  overflow: hidden;
  margin-top: 27.5px;
}
.news {
  width: 558px;
  height: 150px;
  float: left;
  margin: 12.5px 21px;
}
.news .img {
  float: left;
  display: block;
  width: 150px;
  height: 150px;
  padding: 5px;
  border-radius: 9px;
  border: 1px solid #979797;
}
.img img {
  width: 100%;
  height: 100%;
}
.news .abs {
  display: block;
  float: right;
  width: 398px;
  height: 150px;
  border: 1px solid #d6d6d6;
  background: #f1f1f1;
  border-radius: 8px;
}
.abs .n-title {
  padding: 8px 0 0 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  font-size: 16px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
}
.abs .n-des {
  padding-left: 10px;
  padding-right: 19px;
  height: 87px;
  line-height: 150%;
  overflow: hidden;
  text-indent: 2em;
  font-size: 12px;
  font-family: STSongti-SC-Regular;
  color: #000000;
}
.abs .n-time {
  text-align: right;
  padding-bottom: 5px;
  padding-right: 11px;
}
.n-time img {
  width: 16px;
  height: 16px;
}
.n-time .date {
  font-size: 12px;
  color: #9a9a9a;
  margin-left: 3px;
}
.n-time .date1 {
  margin-left: 5px;
}
/* hover */
.f3-right,
.news .img,
.news .abs,
.block:hover,
.hot:hover,
.rec:hover {
  opacity: 1;
}
.f3-right:hover {
  background: #cf651a;
  color: #fff;
}
.block:hover .title {
  top: 0;
  background: rgba(56, 56, 56, 0.8);
}
.imgbox img:hover {
  transform: scale(1.2);
}
.price .link:hover {
  color: #cf651a;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_15/images/yx5.png);
}
</style>


