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
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba1.jpg" alt>
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba2.jpg" alt>
        </el-carousel-item>
          <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_18/images/ba3.jpg" alt>
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
    <!-- 我们的优势 -->
    <div class="floor">
      <div class="row-cn">OUR ADVANTAGES</div>
      <div class="row-eng">我们的优势</div>
    </div>
    <div class="advantage safe auto">
      <div class="item">
        <div class="item-l1"></div>
        <div class="item-r">
          <p class="item-title">诚信经营</p>
          <p class="item-des">诚信第一，以人为本，经营者应该从用户的角度出发，不让每一个用户失望。</p>
        </div>
      </div>
      <div class="item">
        <div class="item-l2"></div>
        <div class="item-r">
          <p class="item-title">质量保证</p>
          <p class="item-des">精心打磨产品细节，优化产品质量，让售卖的每一份产品都得到您的信赖。</p>
        </div>
      </div>
      <div class="item">
        <div class="item-l3"></div>
        <div class="item-r">
          <p class="item-title">物美价廉</p>
          <p class="item-des">我们保证所售卖的产品价格都会在产品本身体现相应的价值做到物有所值。</p>
        </div>
      </div>
    </div>
    <!-- 热卖中心 -->
    <div class="hotsale">
      <div class="floor" style="margin-top:25px">
        <div class="row-cn" style="color:#fff">HOT SELLING CENTER</div>
        <div class="row-eng" style="color:#fff">热卖中心</div>
      </div>
      <div class="safe auto hot-goods">
        <div v-for="(item,index) in hot.item_list" :key="index" class="hot">
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="imgbox">
            <img :src="item.image" alt>
          </a>
          <div class="hot-down">
            <div class="price">￥{{item.price_description}}</div>
            <div class="title-link">
              <div class="title-link-left">{{item.name}}</div>
              <a
                :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
                class="title-link-right"
              >立即询价</a>
            </div>
          </div>
        </div>
      </div>
      <div class="click auto">
        <button @click="update" class="change">换一换</button>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="floor">
      <div class="row-cn">ABOUT US</div>
      <div class="row-eng">关于我们</div>
    </div>
    <div class="about safe auto clearfix">
      <div class="about-pic">
        <div class="about-left"></div>
      </div>
      <div class="about-right">
        <div class="about-shopname">{{obj.shop.enterprise_name}}</div>
        <div class="about-content">{{obj.shop.content}}</div>
        <div class="about-box">
          <router-link class="about-more" to="/introduce">查看更多></router-link>
        </div>
      </div>
    </div>
    <!-- 老板推荐 -->
    <div class="floor">
      <div class="row-cn">BOSS RECOMEENDATION</div>
      <div class="row-eng">老板推荐</div>
    </div>
    <div class="boss-rec safe auto">
      <a
        v-for="(item,index) in re.re_list"
        :key="index"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        class="boss-goods"
      >
        <img :src="item.image" alt>
        <div class="boss-title">{{item.name}}</div>
        <div class="boss-price">￥{{item.price_description}}</div>
      </a>
    </div>
    <!-- 新闻资讯 -->
    <div class="news-box">
      <div class="safe auto news">
        <div class="floor" style="margin-top:25px">
          <div class="row-cn" style="color:#fff">NEWS</div>
          <div class="row-eng" style="color:#fff">资讯</div>
        </div>
        <div class="news-container">
          <div class="news-item" v-for="(item,index) in news.list.list" :key="index">
            <router-link class="imgbox" :to="{path:'/newdetail',query:{id:item.id}}">
              <img :src="item.thumbnail" alt>
            </router-link>
            <div class="news-item-down">
              <div class="news-time">{{item.create_time}}</div>
              <div class="news-title">{{item.post_title}}</div>
              <div class="news-des">{{item.post_excerpt}}</div>
              <div class="visit-box">
                <router-link class="visit" :to="{path:'/newdetail',query:{id:item.id}}">立即查看</router-link>
              </div>
            </div>
          </div>
        </div>
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
      ne_page: 1
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
      { user_id: window._global.user_id, limit: 3 },
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
/* 各个楼层 */
.floor {
  margin-top: 55px;
  margin-bottom: 27px;
}
.row-cn {
  text-align: center;
  color: #000;
  font-size: 24px;
  font-family: Helvetica-Bold;
  font-weight: bold;
  letter-spacing: 1px;
}
.row-eng {
  margin-top: 2px;
  text-align: center;
  color: #000;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
}
/* 我们的优势 */
.advantage {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.advantage .item {
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-l1 {
  width: 65px;
  height: 60px;
  background-color: #F5F5F5;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-3.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 31px 40px;
  margin-top: -70px;
}
.item-l2 {
  width: 65px;
  height: 60px;
  background-color: #F5F5F5;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 31px 40px;
  margin-top: -70px;
}
.item-l3 {
  width: 65px;
  height: 60px;
  background-color: #F5F5F5;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-4.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px 38px;
  margin-top: -70px;
}
.item-r {
  width: 236px;
  height: 165px;
  background: #f5f5f5;
  padding: 10px 18px 0 25px;
}
.item-title {
  color: #000;
  font-size: 24px;
  font-family: STSongti-SC-Regular;
  font-weight: 400;
}
.item-des {
  margin-top: 17px;
  color: #5a5a5a;
  font-size: 14px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
  letter-spacing: 1px;
}
/* 热卖中心 */
.hotsale {
  height: 534px;
  margin-top: 60px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-6.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.hot-goods {
  overflow: hidden;
}
.hot {
  float: left;
  width: 268px;
  margin: 0 16px;
}
.hot .imgbox {
  display: block;
  width: 268px;
  height: 257px;
  overflow: hidden;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
}
.hot-down {
  background: #fff;
}
.hot-down .price {
  color: #ca0b34;
  padding: 6px 10px;
}
.title-link {
  overflow: hidden;
  padding: 0 13px 13px;
}
.title-link-left {
  float: left;
  width: 143px;
  height: 40px;
  overflow: hidden;
  font-size: 14px;
  color: #000;
}
.title-link-right {
  display: block;
  float: left;
  width: 83px;
  height: 40px;
  background: rgba(202, 11, 52, 1);
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  transition: all 0.2s ease-in;
  margin-left: 16px;
}
.click {
  width: 1200px;
  margin-top: 25px;
  position: relative;
}
.change {
  border: none;
  outline: none;
  width: 98px;
  height: 33px;
  background: #fff;
  border-radius: 16px;
  color: #000;
  font-size: 16px;
  padding-left: 20px;
  cursor: pointer;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-5.png);
  background-repeat: no-repeat;
  background-size: 18px 15px;
  background-position: 10% 50%;
  position: absolute;
  right: 60px;
  top: 0;
}
/* 关于我们 */
.about-left {
  width: 517px;
  height: 353px;
  border: 5px solid #ca0b34;
  position: absolute;
  left: -17px;
  top: 17px;
  z-index: -1;
}
.about-pic {
  float: left;
  position: relative;
  width: 534px;
  height: 354px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-10.png);
  background-size: 100% 100%;
}
.about-right {
  width: 629px;
  height: 363px;
  background: #f5f5f5;
  float: right;
  padding: 58px 85px 22px 52px;
}
.about-shopname {
  color: #000;
  font-size: 18px;
  font-family: STSongti-SC-Black;
  font-weight: 900;
}
.about-content {
  width: 492px;
  height: 180px;
  font-size: 16px;
  font-weight: 400;
  color: #5a5a5a;
  overflow: hidden;
  margin-top: 14px;
  letter-spacing: 1px;
}
.about-box {
  width: 492px;
  height: 68px;
  position: relative;
}
.about-more {
  position: absolute;
  top: 37px;
  right: 0;
  display: block;
  width: 90px;
  height: 31px;
  background: #ca0b34;
  text-align: center;
  line-height: 31px;
  color: #fff;
  font-size: 16px;
  transition: all 0.2s ease-in;
}
/* 老板推荐 */
.boss-rec {
  overflow: hidden;
}
.boss-goods {
  display: block;
  width: 268px;
  height: 275px;
  border: 1px solid #ca0b34;
  background: #171717;
  background-clip: content-box;
  overflow: hidden;
  position: relative;
  padding: 7px;
  float: left;
  margin: 10px 16px;
}
.boss-goods img {
  width: 268px;
  height: 275px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease-in;
}
.boss-title {
  width: 196px;
  height: 65px;
  margin: 107px auto 13px;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
}
.boss-price {
  position: relative;
  z-index: 9999;
  display: none;
  width: 253px;
  height: 30px;
  padding-left: 100px;
  line-height: 30px;
  font-size: 16px;
  background: rgba(201,14,54,0);
  color: #fff;
  margin: 0 auto;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-7.png);
  background-size: 22px 15px;
  background-repeat: no-repeat;
  background-position: 30% 50%;
    transition: all 0.2s ease-in;
}
/* 资讯 */
.news-box {
  margin-top: 50px;
  height: 550px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-8.png);
  background-size: 100% 100%;
}
.news {
  height: 550px;
  overflow: hidden;
}
.news-container {
  overflow: hidden;
}
.news-item {
  float: left;
  width: 288px;
  margin: 0 56px;
}
.news-item .imgbox {
  display: block;
  width: 288px;
  height: 179px;
  overflow: hidden;
}
.news-item-down {
  background: #fff;
  padding: 10px 12px;
}
.news-time {
  color: #9e9e9e;
  font-size: 12px;
  padding-left: 20px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/yx-9.png);
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 0 50%;
}
.news-title {
  height: 44px;
  overflow: hidden;
  margin-top: 7px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
.news-des {
  height: 100px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #696969;
  line-height: 190%;
  letter-spacing: 1px;
}
.visit-box {
  position: relative;
  height: 40px;
}
.visit {
  position: absolute;
  top: 10px;
  right: 0;
  display: block;
  width: 72px;
  height: 29px;
  background: #ca0b34;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 29px;
  transition: all 0.2s ease-in-out;
}
/* hover */
.about-more:hover,
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
  background: rgba(201,14,54,1);
}
.imgbox,
.boss-goods,
.visit {
  opacity: 1;
}
.imgbox img:hover {
  transform: scale(1.3);
}
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


