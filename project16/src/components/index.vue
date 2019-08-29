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
          <img src="http://files.cailiao.com/vue/cailiao/pc_16/images/banner0.jpg" alt>
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_16/images/banner2.jpg" alt>
        </el-carousel-item>
              <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_16/images/banner3.jpg" alt>
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
            <img :src="item.image" alt>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 小导航 -->
    <div class="nav-small safe auto">
      <div class="nav-small-row1">WHAT WE DO</div>
      <div class="nav-small-row2"></div>
      <div class="nav-small-row3">
        <router-link class="nav-block" to="/introduce">
          <div class="imgbox-bg1"></div>
          <div class="title-cn">关于我们</div>
          <div class="title-eng">ABOUT US</div>
        </router-link>
        <router-link class="nav-block" to="/productcenter">
          <div class="imgbox-bg2"></div>
          <div class="title-cn">产品中心</div>
          <div class="title-eng">PRODUCT CENTER</div>
        </router-link>
        <div class="nav-block" @click="scroll">
          <div class="imgbox-bg3"></div>
          <div class="title-cn">店铺推荐</div>
          <div class="title-eng">SHOP RECOMMEND</div>
        </div>
        <router-link class="nav-block" to="/contact">
          <div class="imgbox-bg4"></div>
          <div class="title-cn">联系我们</div>
          <div class="title-eng">CONTACT US</div>
        </router-link>
      </div>
    </div>
    <!--热销产品 -->
    <div class="hot-floor m-t-70">
      <div class="title-bold">热销产品</div>
      <div class="nav-small-row2 m-t-16"></div>
    </div>
    <div class="hot-pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in hot.item_list"
        :key="index"
        class="hot"
      >
        <div class="imgbox">
          <img :src="item.image" alt>
        </div>
        <div class="title">{{item.name}}</div>
        <div class="price">
          <span class="pri">￥{{item.price_description}}</span>
          <span class="link">立即询价</span>
        </div>
      </a>
    </div>
    <router-link to="/productcenter" class="hot-more">READ MORE</router-link>
    <!-- 联系我们 -->
    <div class="contact-ban">
      <p class="cn">专注于产品质量、产品服务、产品价值</p>
      <p class="eng">Focus on product quality, product service, product value</p>
      <router-link class="linkman" to="/contact">联系我们</router-link>
    </div>
    <!--  店铺推荐  -->
    <div class="hot-floor m-t-42">
      <div class="title-bold">店铺推荐</div>
      <div class="nav-small-row2 m-t-16"></div>
    </div>
    <div class="re-pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in re.re_list"
        :key="index"
        class="rec"
      >
        <div class="imgbox">
          <img :src="item.image" alt>
          <div class="r-search">查看详情</div>
        </div>
        <div class="r-down">
          <div class="title">{{item.name}}</div>
          <div class="pri">￥{{item.price_description}}</div>
        </div>
      </a>
    </div>
    <router-link to="/productcenter" class="hot-more">READ MORE</router-link>
    <!--  新闻资讯  -->
    <div class="hot-floor m-t-60">
      <div class="title-bold">新闻资讯</div>
      <div class="nav-small-row2 m-t-16"></div>
    </div>
    <div class="newsbox safe auto">
      <div class="news-left">
        <div v-show="flag==index" class="news-part" v-for="(item,index) in news.list.list" :key="index">
          <img :src="item.thumbnail" alt>
          <div class="news-desc">
            <p class="news-desc-title">{{item.post_title}}</p>
            <p class="news-desc-abstract">{{item.post_excerpt}}</p>
            <router-link class="news-more" :to="{path:'/newdetail',query:{id:item.id}}">了解更多 >></router-link>
            <p style="text-align:center;"><span class="news-spot" @mouseenter="flag=index" :class="flag==index?'news-spot-on':''" v-for="(item,index) in news.list.list" :key="index"></span></p>
          </div>
          
        </div>
      </div>
      <div class="news-right">
        <router-link
          :to="{path:'/newdetail',query:{id:item.id}}"
          v-for="(item,index) in news.list.list"
          :key="index"
          class="news-row"
        >
          <div class="news-date">
            <div class="news-date-top">{{item.create_time.split(".")[2]}}</div>
            <div
              class="news-date-bottom"
            >{{item.create_time.split(".")[0]}}.{{item.create_time.split(".")[1]}}</div>
          </div>
          <div class="news-title">
            <p class="title">{{item.post_title}}</p>
            <p class="abstract">{{item.post_excerpt}}</p>
          </div>
        </router-link>
      </div>
    </div>

    <totop/>
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
      flag:0,
      ne_page: ""
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
        perPage: 4
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
      { user_id: window._global.user_id, page: 1, perPage: 4 },
      res => {
        Vue.set(this.re, "re_list", res.data.re_list);
        Vue.set(this.re, "re_page", res.data.re_page);
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
    scroll() {
      window.scrollTo(0, 2200);
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
/* 小导航 */
.nav-small {
  margin-top: 50px;
}
.nav-small-row1 {
  text-align: center;
  color: #383838;
  font-size: 30px;
  font-weight: bold;
}
.nav-small-row2 {
  width: 86px;
  height: 5px;
  background: #293c88;
  margin: 10px auto 0;
}
.nav-small-row3 {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.nav-block {
  width: 180px;
  height: 195px;
  display: block;
}
.imgbox-bg1 {
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 8px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx2.png);
}
.imgbox-bg2 {
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 8px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx3.png);
}
.imgbox-bg3 {
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 8px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx4.png);
}
.imgbox-bg4 {
  width: 104px;
  height: 104px;
  margin: 0 auto;
  border-radius: 8px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx5.png);
}
.title-cn {
  margin-top: 12px;
  color: #383838;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
.title-eng {
  color: #919dc1;
  font-size: 16px;
  text-align: center;
}
/* 热销产品 */
.title-bold {
  font-size: 30px;
  font-weight: bold;
  color: #383838;
  text-align: center;
}
.m-t-16 {
  margin-top: 16px;
}
.hot-pro {
  overflow: hidden;
  margin-top: 20px;
}
.hot {
  float: left;
  display: block;
  width: 280px;
  margin: 20px 10px;
  overflow: hidden;
}
.hot .imgbox {
  width: 280px;
  height: 243px;
  overflow: hidden;
  background-color: #000;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx9.png);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.hot .title {
  padding: 24px 25px;
  font-size: 16px;
  color: #383838;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot .price {
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  overflow: hidden;
}
.price .pri {
  display: block;
  width: 50%;
  float: left;
  text-align: center;
  font-size: 20px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(145, 157, 193, 1);
}
.price .link {
  display: block;
  width: 50%;
  font-size: 16px;
  color: #fff;
  float: left;
  text-align: center;
  background-color: rgba(145, 157, 193, 0.8);
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx7.png);
  background-repeat: no-repeat;
  background-position: 14% 50%;
}
.hot-more {
  display: block;
  width: 174px;
  height: 44px;
  border: 2px solid rgba(145, 157, 193, 1);
  border-radius: 22px;
  margin: 30px auto;
  font-size: 20px;
  color: #919dc1;
  text-align: center;
  line-height: 40px;
}
/* 联系我们 */
.contact-ban {
  height: 254px;
  margin-top: 55px;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/banner1.jpg);
  background-size: 100% 100%;
}
.contact-ban .cn {
  margin-top: 75px;
  font-size: 32px;
  text-align: center;
  color: #fff;
}
.contact-ban .eng {
  margin-top: 15px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: ArialMT;
}
.linkman {
  display: block;
  width: 152px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.88);
  border-radius: 2px;
  color: #fff;
  font-size: 18px;
  padding-left: 50px;
  line-height: 36px;
  margin: 26px auto 0;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx8.png);
  background-repeat: no-repeat;
  background-position: 18% 50%;
}
/* 店铺推荐 */
.re-pro {
  overflow: hidden;
}
.rec {
  display: block;
  width: 280px;
  float: left;
  margin: 40px 10px;
  background-color: #000;
}
.rec .imgbox {
  width: 280px;
  height: 243px;
  overflow: hidden;
  position: relative;
}
.r-search {
  position: absolute;
  left: -130px;
  top: 150px;
  width: 119px;
  height: 33px;
  border: 1px solid #fff;
  padding-left: 30px;
  line-height: 33px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx6.png);
  background-repeat: no-repeat;
  background-position: 10% 50%;
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease-in;
}
.rec .r-down {
  width: 280px;
  padding: 10px 15px;
  background: #919dc1;
}
.rec .title {
  color: #fff;
  font-size: 14px;
  height: 50px;
  overflow: hidden;
  line-height: 180%;
}
.rec .pri {
  font-size: 20px;
  color: #dd1717;
  text-align: right;
  margin-top: 5px;
}
/* 新闻资讯 */
.newsbox {
  margin-top: 40px;
  overflow: hidden;
}
.news-left {
  margin-top: 8px;
  width: 561px;
  height: 417px;
  float: left;
  overflow: hidden;
}
.news-part {
  width: 561px;
  height: 417px;
  overflow: hidden;
  position: relative;
}
.news-part img {
  width: 561px;
  height: 417px;
  position: absolute;
  left: 0;
  top: 0;
}
.news-desc {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index:999999;
  width: 562px;
  height: 127px;
  background: rgba(255, 255, 255, 0.8);
}
.news-desc-title{
  color: #231815;
  font-size: 16px;
  padding: 20px 20px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-desc-abstract{
  color: #555555;
  font-size: 12px;
  height: 34px;
  padding: 0 20px;
  overflow: hidden;
}
.news-more{
  display: block; 
  width: 100%;
  padding-right: 20px;
  text-align: right;
  font-size: 12px;
  color: #293C88;
  margin-top: 3px;
}
.news-spot{
  cursor: pointer;
  display: inline-block;
  width: 52px;
  height: 5px;
  background: #333;
  margin-left: 5px;
}
.news-spot-on{
  background: #293C88;
}
.news-right {
  width: 609px;
  float: right;
}
.news-row {
  display: block;
  width: 609px;
  overflow: hidden;
  margin-top: 8px;
}
.news-date {
  width: 87px;
  height: 77px;
  background: #e0e3ea;
  font-family: ArialMT;
  float: left;
  color: #9b9ea4;
  border-radius: 5px 0 0 5px;
}
.news-date-top {
  font-size: 34px;
  text-align: center;
}
.news-date-bottom {
  font-size: 16px;
  text-align: center;
}
.news-title {
  width: 522px;
  height: 77px;
  float: left;
  background: #e7e7e7;
  padding: 20px 30px;
}
.news-title .title {
  font-size: 16px;
  color: #231815;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-title .abstract {
  font-size: 12px;
  color: #878787;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* hover */
.m-t-70 {
  margin-top: 70px;
}
.m-t-60 {
  margin-top: 60px;
}
.m-t-42 {
  margin-top: 42px;
}
.hot,
.rec,
.hot-more,
.nav-block,
.news-row,
.news-more {
  opacity: 1;
}
.nav-block:hover .imgbox-bg1 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx22.png);
}
.nav-block:hover .imgbox-bg2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx33.png);
}
.nav-block:hover .imgbox-bg3 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx44.png);
}
.nav-block:hover .imgbox-bg4 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx55.png);
}
.imgbox:hover img {
  opacity: 0.4;
  transform: scale(1.5);
}
.imgbox:hover .r-search {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.hot-more:hover {
  color: #fff;
  background: #919dc1;
}
.linkman:hover {
  color: #293c88;
  background-color: #fff;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_16/images/yx11.png);
}
.news-row:hover .news-date {
  background: #293c88;
  color: #fff;
}
.news-row:hover .news-title {
  background: #231815;
}
.news-row:hover .title {
  color: #fffefe;
}
.news-row:hover .abstract {
  color: #bdbdbd;
}
</style>


