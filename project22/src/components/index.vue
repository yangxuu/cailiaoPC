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
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba2.jpg" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba1.jpg" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba3.jpg" alt />
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
    <!-- 最新产品 -->
    <div class="new-goods safe auto">
      <button class="new-left" @click="prev"></button>
      <div class="newestbox">
        <div class="new-goods-box" ref="margin">
          <a
            class="block"
            v-for="(item,index) in info.list"
            :key="index"
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          >
            <div class="img">
              <img :src="item.image" alt />
            </div>
            <div class="para">
              <div class="title">{{item.name}}</div>
              <div class="bg-star">
                <img src="../assets/images/yx5.png" alt="">
                <img src="../assets/images/yx5.png" alt="">
                <img src="../assets/images/yx5.png" alt="">
                <img src="../assets/images/yx5.png" alt="">
                <img src="../assets/images/yx5.png" alt="">
              </div>
              <div class="ask">立即询价</div>
            </div>
          </a>
        </div>
      </div>
      <button class="new-right" @click="next"></button>
    </div>
    <!-- 新闻中心 -->
    <div class="safe auto news-floor">
      <div class="news-cn">新闻中心</div>
      <div class="news-eng">
        <div class="row1">NEWS</div>
        <div class="row2"></div>
      </div>
    </div>
    <div class="more safe auto">
      <router-link class="news-more" to="/news">查看更多》</router-link>
    </div>
    <div class="news-content safe auto">
      <div class="news-c-left">
        <router-link
          class="item-news"
          v-for="(item,index) in news.list.list"
          :key="index"
          :to="{path:'/newdetail',query:{id:item.id}}"
        >
          <div class="date">
            <div class="day">{{item.create_time.split('.')[2]}}</div>
            <div class="month">{{item.create_time.split('.')[0]}}/{{item.create_time.split('.')[1]}}</div>
          </div>
          <div class="des">{{item.post_title}}</div>
        </router-link>
      </div>
      <div class="news-c-right">
        <div class="item-news-r" v-for="(item,index) in news.list.list" :key="index">
          <router-link class="img" :to="{path:'/newdetail',query:{id:item.id}}">
            <img :src="item.thumbnail" alt />
          </router-link>
          <div class="title">{{item.post_title}}</div>
          <div class="skan">
            <div class="eyes">{{item.post_hits}}</div>
            <router-link class="more" :to="{path:'/newdetail',query:{id:item.id}}">READ</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 老板推荐 -->
    <div class="boss-reco safe auto">
      <div class="boss-reco-cn">老板推荐</div>
      <div class="boss-reco-eng"></div>
    </div>
    <div class="boss safe auto">
      <div class="boss-item" v-for="(item,index) in re.re_list" :key="index">
        <a class="imgbox" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
          <img :src="item.image" alt />
        </a>
        <div class="boss-title">
          ￥{{item.price_description}}&#x3000;
          {{item.name}}
        </div>
        <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="boss-ask">立即询价</a>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about safe auto clearfix">
      <div class="about-col1">
        <img class="logo" :src="obj.shop.logo" alt />
        <div class="shopname">{{obj.shop.enterprise_name}}</div>
        <div class="flag">
          <img src="../assets/images/icon-1.png" alt />
          <span class="vip">{{obj.shop.grade_name}}</span>
          <img style="margin-left:10px" src="../assets/images/icon-2.png" alt />
          <span class="comp">企业认证</span>
        </div>
        <div class="info">
          <div class="row1">
            <span class="key">联系人：</span>
            <span class="val">{{obj.shop.link_manage}}</span>
          </div>
          <div class="row1">
            <span class="key">电话：</span>
            <span class="val">{{obj.shop.phone}}</span>
          </div>
          <div class="row1">
            <span class="key">手机：</span>
            <span class="val">{{obj.shop.mobile}}</span>
          </div>
          <div class="row1">
            <span class="key">QQ：</span>
            <span class="val">{{obj.shop.qq}}</span>
          </div>
          <div class="row1">
            <span class="key">邮箱：</span>
            <span class="val">{{obj.shop.user_email}}</span>
          </div>
          <div class="row1">
            <span class="key">地址：</span>
            <span class="val">{{obj.shop.address}}</span>
          </div>
        </div>
      </div>
      <div class="about-col2"></div>
      <div class="about-col3">
        <div class="info-content">{{obj.shop.content}}</div>
        <div class="info-more">
          <router-link class="link-info" to="introduce">更多》</router-link>
        </div>
      </div>
      <img class="about-col4" src="../assets/images/yx1.png" alt="">
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
      reg: "",
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
        page: "",
        total: ""
      },
      // 新闻
      news: {
        list: {}
      },
      ne_page: 1,
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
      { user_id: window._global.user_id, page: 1, perpage: 4 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
        Vue.set(this.hot, "total", res.data.total);
      }
    );
    // 新闻
    _this.api(
      "news/index",
      { user_id: window._global.user_id, limit: 5 },
      res => {
        Vue.set(this.news, "list", res);
      }
    );
  },
  methods: {
    update() {
      let _this = this;
      _this.ne_page++;
      if (_this.ne_page > Math.ceil(_this.hot.total / 4)) {
        _this.ne_page = 1;
      }
      _this.api(
        "index/update_list",
        { user_id: window._global.user_id, page: _this.ne_page, perpage: 4 },
        res => {
          Vue.set(this.hot, "item_list", res.data.item_list);
          Vue.set(this.hot, "page", res.data.page);
        }
      );
    },
    next() {
      this.flag1 = false;
      this.left += 1094;
      if (this.left > 3000) {
        this.left = 2188;
        this.flag2 = true;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.flag2 = false;
      this.left -= 1094;
      if (this.left < 0) {
        this.left = 0;
        this.flag1 = true;
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
/* 最新产品 */
.new-goods {
  height: 286px;
  margin-top: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.new-left {
  border: none;
  outline: none;
  background-color: #f1f1f1;
  width: 30px;
  height: 60px;
  background-image:url(../assets/images/yx13.png);
  background-size: 22px 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.new-right {
  border: none;
  outline: none;
  background-color: #f1f1f1;
  width: 30px;
  height: 60px;
  background-image: url(../assets/images/yx16.png);
  background-size: 22px 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.newestbox {
  width: 1094px;
  height: 286px;
  overflow: hidden;
}
.new-goods-box {
  width: 3282px;
  height: 286px;
  overflow: hidden;
  transition: all 0.3s ease-in;
}
.new-goods-box .block {
  width: 254px;
  height: 286px;
  float: left;
  margin: 0 9.75px;
  position: relative;
  overflow: hidden;
}
.block .img {
  width: 254px;
  height: 286px;
  overflow: hidden;
  border: 1px solid #979797;
  position: absolute;
  left: 0;
  top: 0;
}
.imgbox img,
.img img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.block .para {
  width: 254px;
  height: 103px;
  position: absolute;
  z-index: 9;
  background: rgba(80, 80, 80, 0.73);
  left: 50%;
  top: 50%;
  color: #fff;
  font-size: 14px;
  transform: translate(120px, -300px);
  transition: all 0.3s ease-in;
}
.para .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  padding: 10px 6px 8px;
}
.para .bg-star {
  height: 15px;
  width: 130px;
  margin: 0 auto 15px;
}
.bg-star img{
  width: 15px;
  height: 15px;
  margin-left: 6px;
}
.para .ask {
  width: 84px;
  height: 29px;
  background: rgba(18, 18, 18, 1);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 29px;
  margin: 10px auto 0;
}
/* 新闻中心 */
.news-floor {
  height: 60px;
  margin-top: 80px;
  display: flex;
  align-items: center;
   background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 497px 50px;
  background-image: url(../assets/images/yx6.png);
}
.news-cn {
  color: #d12a2a;
  font-size: 24px;
  font-weight: bold;
}
.news-eng {
  color: #818181;
  font: 18px bold;
  margin-left: 10px;
   font-family:STSongti-SC-Bold;
}
.news-eng .row1{
  color: #5B5B5B;
  font: 24px bold;
}
.news-eng .row2{
  width: 464px;
  height: 18px;
 background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  background-image: url(../assets/images/yx12.png);
}
.more {
  height: 20px;
  position: relative;
}
.news-more {
  display: block;
  height: 20px;
  font-size: 14px;
  color: #2d2d2d;
  position: absolute;
  top: 0;
  right: 0;
}
.news-more:hover {
  opacity: 1;
  font-size: 16px;
}
.news-content {
  height: 330px;
  margin-top: 32px;
}
.news-c-left {
  float: left;
  width: 260px;
}
.item-news {
  display: block;
  width: 260px;
  height: 55px;
  overflow: hidden;
  margin-top: 12px;
  border: 1px solid #c4c4c4;
}
.news-c-left .item-news:nth-child(1) {
  margin-top: 0;
}
.item-news .date {
  width: 55px;
  height: 55px;
  background: #5d5d5d;
  font-size: 16px;
  color: #fff;
  float: left;
  text-align: center;
  overflow: hidden;
}
.date .day {
  margin-top: 7px;
  font-size: 16px;
}
.date .month {
  font-size: 12px;
  margin-top: 4px;
}
.item-news .des {
  width: 203px;
  height: 55px;
  background: #f0f0f0;
  font-size: 12px;
  color: #5b5b5b;
  line-height: 55px;
  overflow: hidden;
  padding: 0 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.news-c-right {
  width: 939px;
  height: 329px;
  float: left;
  overflow: hidden;
}
.item-news-r {
  width: 257px;
  background: #eeeeee;
  height: 329px;
  float: left;
  margin-left: 56px;
  transition: all 0.2s ease-in;
}
.item-news-r .img {
  display: block;
  width: 257px;
  height: 257px;
  border: 1px solid #979797;
}
.item-news-r .title {
  height: 41px;
  padding: 6px 10px;
  color: #000;
  font-size: 12px;
  overflow: hidden;
}
.item-news-r .skan {
  position: relative;
  height: 25px;
}
.skan .eyes {
  width: 35px;
  height: 23px;
  line-height: 23px;
  position: absolute;
  left: 6px;
  top: 0;
  font-size: 12px;
  color: #5b5b5b;
  text-align: right;
  background-image: url(../assets/images/yx7.png);
  background-size: 17px 11px;
  background-repeat: no-repeat;
  background-position: 0 40%;
}
.skan .more {
  display: block;
  position: absolute;
  top: 0;
  right: 6px;
  width: 69px;
  height: 23px;
  border: 1px solid #d12a2a;
  font-size: 12px;
  color: #5b5b5b;
  text-align: center;
  line-height: 23px;
}
/* 老板推荐 */
.boss-reco {
  margin-top: 75px;
  background-image: url(../assets/images/yx8.png);
  background-size: 512px 63px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.boss-reco-cn {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
.boss-reco-eng {
  width: 624px;
  height: 18px;
  margin:0 auto;
  background-image: url(../assets/images/yx11.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.boss {
  overflow: hidden;
  margin-top: 47px;
}
.boss-item {
  width: 246px;
  float: left;
  margin: 13px 27px;
}
.boss-item .imgbox {
  display: block;
  overflow: hidden;
  border: 1px solid #979797;
  width: 246px;
  height: 234px;
}
.boss-title {
  height: 36px;
  line-height: 36px;
  background: #4a4a4a;
  border: 1px solid #979797;
  font-size: 14px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.boss-ask {
  padding-left: 102px;
  display: block;
  color: #2d2d2d;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  border: 1px dashed #979797;
  transition: all 0.2s;
  background-image: url(../assets/images/yx9.png);
  background-repeat: no-repeat;
  background-position: 35% 50%;
  background-size: 19px 14px;
}
/* 关于我们 */
.about {
  margin-top: 68px;
  height: 373px;
  background: linear-gradient(
    90deg,
    rgba(248, 248, 248, 1) 0%,
    rgba(211, 211, 211, 1) 100%
  );
}
.about-col1 {
  padding-top: 15px;
  width: 307px;
  height: 373px;
  float: left;
}
.logo {
  width: 100px;
  height: 100px;
  margin-left: 103.5px;
  border-radius: 50%;
  border: 1px solid #979797;
}
.shopname {
  margin-top: 6px;
  font: 18px bold;
  color: #000000;
  text-align: center;
}
.flag {
  font-size: 12px;
  text-align: center;
  margin-top: 3px;
}
.flag .vip {
  color: #f56110;
}
.flag .comp {
  color: #000000;
}
.info {
  width: 190px;
  margin: 27px auto 0;
  overflow: hidden;
}
.info .row1 {
  margin-top: 3px;
}
.row1 .key {
  color: #727272;
  font-size: 14px;
}
.row1 .val {
  color: #000000;
  font-size: 14px;
}
.about-col2 {
  width: 1px;
  height: 313px;
  border-left: 1px dashed #cbcbcb;
  float: left;
  margin-top: 30px;
}
.about-col3{
  width: 534px;
  height: 373px;
  float: left;
}
.info-content{
  width: 462px;
  height: 218px;
  font-size:14px;
  color: #545454;
  margin: 81px auto 0;
  overflow: hidden;
  line-height: 200%;
  text-indent: 2em;
}
.info-more{
  height: 20px;
  padding-right: 30px;
  text-align: right;
  margin-top: 10px;
}
.link-info{
  color: #545454;
  font-size: 14px;
}
.about-col4{
  display: block;
  width: 356px;
  height: 373px;
  float: left;
}
/* hover */
.block,
.imgbox,
.img {
  opacity: 1;
  overflow: hidden;
}
.block:hover .para {
  transform: translate(-50%, -50%);
}
.new-left:hover {
  background-color: #9a9a9a;
  background-image: url(../assets/images/yx15.png);
  background-size: 22px 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.new-right:hover {
  background-color: #9a9a9a;
    background-image: url(../assets/images/yx14.png);
  background-size: 22px 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.item-news-r:hover {
  transform: translate(-5px, 0);
  box-shadow: 0 0 5px 5px #dedede;
}
.skan .more:hover {
  background: #f17777;
  color: #fff;
}
.boss-ask:hover {
  background-color: #f17777;
  color: #fff;
    background-image: url(../assets/images/yx10.png);
}
.imgbox img:hover {
  transform: scale(1.3);
}
/* .about-more:hover,
.visit:hover,
.title-link-right:hover {
  opacity: 1;
  font-size: 18px;
}
.boss-goods:hover {
  background-clip: border-box;
}
.boss-goods:hover img {
  opacity: 0.3;
}
.boss-goods:hover .boss-price {
  display: block;
  background: rgba(201, 14, 54, 1);
}
.imgbox,
.boss-goods,
.visit {
  opacity: 1;
}
*/
/* 
.news:hover {
  transform: translate(5px, -5px);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
}
.news-more:hover {
  background: #76a5e5;
  color: #ffffff;
} */
</style>


