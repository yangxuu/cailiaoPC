<template>
  <div>
    <div class="banner" :height="bannerheight+'px'">
      <el-carousel
        v-show="obj.ad_list.length==0?true:false"
        :interval="5000"
        :height="bannerheight+'px'"
        arrow="always"
        id="self"
      >
        <el-carousel-item :height="bannerheight+'px'" class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_17/images/ba1.png" alt />
        </el-carousel-item>
        <el-carousel-item :height="bannerheight+'px'" class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_17/images/ba5.png" alt />
        </el-carousel-item>
        <el-carousel-item :height="bannerheight+'px'" class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_17/images/ba1.jpg" alt />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        v-show="obj.ad_list.length==0?false:true"
        :interval="5000"
        :height="bannerheight+'px'"
        arrow="always"
      >
        <el-carousel-item :height="bannerheight+'px'" v-for="(item,key) in obj.ad_list" :key="key">
          <a class="ban-box" :height="bannerheight+'px'" :href="item.url" rel="external nofollow">
            <img :src="item.image" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 新闻资讯 -->
    <div class="floor1"></div>
    <div class="newsbox safe auto clearfix">
      <div class="news clearfix" v-for="(item,index) in news.list.list" :key="index">
        <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="img">
          <img :src="item.thumbnail" alt />
        </router-link>
        <div class="news-bottom">
          <p class="news-title">
            <span class="name">{{item.post_title}}</span>
            <span class="date">{{item.create_time}}</span>
          </p>
          <p class="news-abstract">{{item.post_excerpt}}</p>
          <div class="line"></div>
          <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="news-more">more></router-link>
        </div>
      </div>
    </div>
    <!-- 最新产品 -->
    <div class="floor2"></div>
    <div class="safe auto newest">
      <a
        class="newest-goods"
        v-for="(item,index) in info.list"
        :key="index"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
      >
        <div class="imgbox">
          <img :src="item.image" alt />
        </div>
        <div class="n-down">
          <p class="n-price">￥{{item.price_description}}</p>
          <p class="n-title">{{item.name}}</p>
        </div>
      </a>
    </div>
    <!-- 关于我们· -->
    <div class="floor3"></div>
    <div class="about safe auto">
      <div class="left">
        <p class="left-shopname">
          <span class="shopname">{{obj.shop.enterprise_name}}</span>
          <img
            class="m-l-20"
            src="http://files.cailiao.com/vue/cailiao/pc_17/images/icon-1.png"
            alt
          />
          <span class="vip">{{obj.shop.grade_name}}</span>
          <img
            class="m-l-10"
            src="http://files.cailiao.com/vue/cailiao/pc_17/images/icon-2.png"
            alt
          />
          <span class="comp">企业认证</span>
        </p>
        <p class="content">{{obj.shop.content}}</p>
        <router-link class="about-more" to="/introduce">查看更多</router-link>
      </div>
      <div class="right"></div>
    </div>
    <!-- 老板推荐 -->
    <div class="floor4"></div>
    <div class="safe auto newest">
      <a
        class="newest-goods"
        v-for="(item,index) in re.re_list"
        :key="index"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
      >
        <div class="imgbox">
          <img :src="item.image" alt />
        </div>
        <div class="n-down">
          <p class="n-price">￥{{item.price_description}}</p>
          <p class="n-title">{{item.name}}</p>
        </div>
      </a>
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
      // 轮播高度
      bannerheight: "",
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
      // 新闻
      news: {
        list: {}
      },
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
        perPage: 8
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
    // 新闻
    _this.api(
      "news/index",
      { user_id: window._global.user_id, limit: 3 },
      res => {
        Vue.set(this.news, "list", res);
      }
    );
  },
  mounted() {
    this.setSize();
    window.addEventListener(
      "resize",
      () => {
        this.setSize();
      },
      false
    );
  },
  methods: {
    setSize: function() {
      this.bannerheight = document.body.clientWidth / 3.84;
    }
  }
};
</script>
<style scoped>
.banner {
  width: 100%;
  overflow: hidden;
}
.ban-box {
  display: block;
  width: 100%;
}
.ban-box img {
  width: 100%;
  height: inherit;
  min-height: 312px;
  min-width: 1200px;
}
.el-carousel__item a:hover {
  opacity: 1;
}
/* 新闻资讯 */
.news {
  float: left;
  width: 350px;
  overflow: hidden;
  margin: 0 25px;
  transition: all 0.2s ease-in;
}
.news .img {
  display: block;
  width: 350px;
  height: 175px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.news-title {
  overflow: hidden;
  padding: 7px;
}
.news-title .name {
  display: block;
  width: 210px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.news-title .date {
  display: block;
  width: 62px;
  height: 20px;
  line-height: 20px;
  color: #848484;
  font-size: 12px;
  float: right;
}
.news-abstract {
  width: 340px;
  height: 60px;
  line-height: 150%;
  letter-spacing: 1px;
  margin: 0 auto;
  overflow: hidden;
  font-size: 14px;
  color: #848484;
}
.news-bottom .line {
  width: 329px;
  height: 1px;
  background: #e1e1e1;
  margin: 8px auto;
}
.news-more {
  display: block;
  width: 75px;
  height: 27px;
  text-align: center;
  line-height: 25px;
  color: #848484;
  font-size: 14px;
  border: 1px solid #d4d4d4;
  margin: 20px 0 0 265px;
}
/* 各个楼层 */
.floor1 {
  width: 100%;
  height: 72px;
  margin: 50px 0 38px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-3.png);
  background-size: 144px 63px;
  background-repeat: no-repeat;
  background-position: center;
}
.floor2 {
  width: 100%;
  height: 72px;
  margin: 50px 0 38px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-4.png);
  background-size: 163px 49px;
  background-repeat: no-repeat;
  background-position: center;
}
.floor3 {
  width: 100%;
  height: 72px;
  margin: 50px 0 38px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-5.png);
  background-size: 154px 48px;
  background-repeat: no-repeat;
  background-position: center;
}
.floor4 {
  width: 100%;
  height: 72px;
  margin: 50px 0 38px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-6.png);
  background-size: 163px 49px;
  background-repeat: no-repeat;
  background-position: center;
}
/* 最新产品 老板推荐 */
.newest {
  overflow: hidden;
  margin-top: -15px;
}
.newest-goods {
  display: block;
  width: 260px;
  float: left;
  background: #f1f1f1;
  border: 1px solid #dadada;
  margin: 15px 20px;
  overflow: hidden;
}
.newest-goods .imgbox {
  width: 252px;
  height: 242px;
  margin: 3px auto;
  overflow: hidden;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.newest-goods .n-down {
  height: 72px;
  padding: 0 8px 7px;
  font-size: 14px;
}
.n-down .n-price {
  color: #c10c0c;
  margin-top: 5px;
}
.n-down .n-title {
  height: 40px;
  overflow: hidden;
  color: #707070;
  letter-spacing: 1px;
  line-height: 150%;
}
/* 关于我们 */
.about {
  height: 330px;
  padding: 30px 38px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-7.png);
  background-size: 100% 100%;
}
.about .left {
  width: 618px;
  height: 271px;
  padding: 24px 43px 40px;
  background: #fff;
  float: left;
}
.left-shopname {
  text-align: center;
}
.left-shopname .shopname {
  color: #1b5fba;
  font-size: 18px;
}
.left-shopname .vip {
  color: #f56110;
  font-size: 12px;
}
.left-shopname .comp {
  color: #000000;
  font-size: 12px;
}
.left .content {
  width: 531px;
  height: 160px;
  margin: 20px auto 0;
  color: #000000;
  font-size: 12px;
  overflow: hidden;
  font-size: 14px;
  color: #707070;
}
.about-more {
  display: block;
  width: 81px;
  height: 27px;
  background-color: #76a5e5;
  text-align: right;
  line-height: 27px;
  padding-right: 5px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-8.png);
  background-repeat: no-repeat;
  background-position: 6% 50%;
  background-size: 13px 11px;
  font-size: 14px;
  color: #fff;
  margin-left: 450px;
}
.about .right {
  float: right;
  width: 482px;
  height: 281px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_17/images/yx-9.jpg);
  background-size: 100% 100%;
}
/* hover */
.newest-goods,
.img,
.news-more,
.about-more {
  opacity: 1;
}
.news:hover {
  transform: translate(5px, -5px);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
}
.news-more:hover {
  background: #76a5e5;
  color: #ffffff;
}
.about-more:hover {
  background-color: #3773c5;
}
.imgbox img:hover {
  transform: scale(1.3);
}
</style>


