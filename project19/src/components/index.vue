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
          <img src="http://files.cailiao.com/vue/cailiao/pc_19/images/ba2.jpg" alt />
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
    <!-- 掌柜推荐 -->
    <div class="floor">
      <div class="cn">掌柜推荐</div>
      <div class="eng">RECOMMEND</div>
    </div>
    <div class="boss-rec safe auto">
      <div class="boss-item" v-for="(item,index) in re.re_list" :key="index">
        <a class="boss-box" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
          <img :src="item.image" alt />
        </a>
        <div class="title">{{item.name}}</div>
        <a class="ask" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">立即询价>></a>
      </div>
    </div>
    <!-- 最新产品 -->
    <div class="newfloor m-t-10">
      <div class="new-cn">最新商品</div>
      <div class="new-eng">NEW PRODUCTS</div>
    </div>
    <div class="new-goods-box">
      <div class="new-goods">
        <a
          class="new-item"
          v-for="(item,index) in info.list"
          :key="index"
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        >
          <img :src="item.image" alt />
          <div class="title">{{item.name}}</div>
        </a>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about-box">
      <div class="about safe auto">
        <div class="title">
          <div class="col1">公司</div>
          <div class="col2">简介</div>
        </div>
        <div class="content">
          <img class="signal1" src="http://files.cailiao.com/vue/cailiao/pc_19/images/yx7.png" alt />
          <div class="content-des">
            <div class="name">{{obj.shop.enterprise_name}}</div>
            <div class="content-detail">{{obj.shop.content}}</div>
          </div>
          <img class="signal2" src="http://files.cailiao.com/vue/cailiao/pc_19/images/yx8.png" alt />
        </div>
      </div>
    </div>
    <!-- 热卖商品 -->
    <div class="newfloor m-t-40">
      <div class="new-cn">热卖商品</div>
      <div class="new-eng">HOT SELLING</div>
    </div>
    <div class="hot-box">
      <div class="hot-goods auto">
        <button class="left" :class="flag1==true?'click1':'default'" @click="prev"></button>
        <div class="hot-container">
          <div class="margin clearfix" ref="margin">
            <a
              v-for="(item,index) in hot.item_list"
              :key="index"
              :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
              class="hot-item"
            >
              <img :src="item.image" alt />
              <div class="title">{{item.name}}</div>
            </a>
          </div>
        </div>
        <button class="right" :class="flag2==true?'click2':'default'" @click="next"></button>
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
      left: 0,
      flag1: false,
      flag2: false
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
        perPage: 5
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
      { user_id: window._global.user_id, page: 1, perPage: 6 },
      res => {
        Vue.set(this.re, "re_list", res.data.re_list);
        Vue.set(this.re, "re_page", res.data.re_page);
      }
    );
    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 16 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
        Vue.set(this.hot, "total", res.data.total);
      }
    );
  },
  methods: {
    next() {
      this.flag1 = false;
      this.flag2 = true;
      this.left += 1272;
      if (this.left > 2000) {
        this.left = 1272;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.flag2 = false;
      this.flag1 = true;
      this.left -= 1272;
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

/* 楼层 */
.floor {
  height: 241px;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx5.png);
  background-size: 100% 100%;
  background-position: center;
}
.cn {
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 32px;
  letter-spacing: 2px;
}
.eng {
  font-size: 32px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
  margin-top: -8px;
}
/* 掌柜推荐 */
.boss-rec {
  overflow: hidden;
  margin-top: -30px;
}
.boss-item {
  width: 368px;
  margin: 25px 16px;
  float: left;
  overflow: hidden;
}
.boss-box {
  display: block;
  width: 368px;
  height: 273px;
  overflow: hidden;
  opacity: 1;
  border: 1px solid #bbbbbb;
}
.boss-box:hover img{
  transform: scale(1.2);
}
.boss-box img {
  width: 100%;
  height: 100%;
  transition: all .2s ease-in;
}
.boss-item .title {
  font-size: 16px;
  color: #696969;
  text-align: center;
  padding: 12px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.boss-item .ask {
  display: block;
  width: 336px;
  height: 38px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
  color: #44af28;
  border-radius: 26px;
  border: 1px solid rgba(118, 165, 53, 1);
}
/* 最新产品楼层 */
.newfloor {
  height: 90px;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx6.png);
  background-repeat: no-repeat;
  background-size: 236px 42px;
  background-position: 50% 100%;
}
.new-cn {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  color: #44af28;
  letter-spacing: 2px;
}
.new-eng {
  margin-top: -8px;
  font-size: 32px;
  color: #44af28;
  text-align: center;
  letter-spacing: 1px;
}
/* 最新产品 */
.new-goods-box {
  margin-top: 30px;
}
.new-goods {
  width: 100%;
  height: 318px;
  overflow: hidden;
}
.new-item {
  display: block;
  width: 20%;
  height: 318px;
  border: 1px solid #e3e2e2;
  float: left;
  overflow: hidden;
  position: relative;
  opacity: 1;
}
.new-item:hover img{
  transform: scale(1.2);
}
.new-item img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .2s ease-in;
}
.new-item .title {
  width:100%;
  height: 57px;
  background: rgba(118, 118, 118, 0.8);
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  line-height: 57px;
  padding: 0 15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 关于我们 */
.about-box {
  margin-top: 63px;
  height: 260px;
  background: #49803b;
}
.about {
  height: 260px;
  overflow: hidden;
}
.about .title {
  float: left;
  width: 151px;
  height: 260px;
  color: #98d34d;
  overflow: hidden;
  background: rgba(241, 255, 223, 1);
  border: 1px solid rgba(130, 159, 94, 1);
}
.title .col1 {
  text-align: center;
  margin-top: 80px;
  font-size: 35px;
}
.title .col2 {
  text-align: center;
  font-size: 35px;
}
.about .content {
  float: right;
  width: 938px;
  height: 260px;
  color: #fff;
  position: relative;
}
.signal1 {
  width: 42px;
  height: 41px;
  position: absolute;
  left: 0;
  top: 69px;
}
.content-des {
  width: 830px;
  height: 158px;
  overflow: hidden;
  position: absolute;
  left: 42px;
  top: 47px;
  padding: 0 15px;
}
.content-des .name {
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 500;
}
.content-detail {
  font-size: 14px;
  margin-top: 15px;
  height: 100px;
  color: #ffffff;
  overflow: hidden;
  line-height: 180%;
}
.signal2 {
  width: 42px;
  height: 41px;
  position: absolute;
  right: 0;
  bottom: 34px;
}
/* 热卖商品 */
.hot-box {
  margin-top: 43px;
  height: 672px;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx9.png);
  background-size: 100% 100%;
  background-position: center;
}
.hot-goods {
  width: 1336px;
  height: 672px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hot-goods .left {
  border: none;
  outline: none;
  cursor: pointer;
  width: 32px;
  height: 54px;
  background-color: transparent;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx10.png);
  background-repeat: no-repeat;
  background-size: 32px 54px;
  background-position: center;
}
.hot-goods .right {
  border: none;
  outline: none;
  cursor: pointer;
  width: 32px;
  height: 54px;
  background-color: transparent;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx11.png);
  background-repeat: no-repeat;
  background-size: 32px 54px;
  background-position: center;
}
.hot-goods .click1 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx12.png);
}
.hot-goods .click2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx13.png);
}
.hot-container {
  width: 1272px;
  height: 530px;
  overflow: hidden;
}
.margin {
  height: 530px;
  width: 2554px;
  transition: all 0.3s ease-in;
}
.hot-item {
  display: block;
  opacity: 1;
  width: 283px;
  float: left;
  overflow: hidden;
  margin: 0 17.5px;
}
.hot-item:hover img{
  transform: translate(8px,0);
}
.hot-item img {
  width: 283px;
  height: 222px;
  transition: all .2s ease-in;
}
.hot-item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 40px;
}
/* hover */
.hot-goods .left:hover {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx12.png);
}
.hot-goods .right:hover {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_19/images/yx13.png);
}
.boss-item .ask:hover {
  opacity: 1;
  color: #fff;
  background: rgba(68, 175, 40, 1);
}

</style>


