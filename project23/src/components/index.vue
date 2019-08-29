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
    <!-- 热卖中心 -->
    <div class="hotfloor safe auto">
      <div class="hotrow1">热卖中心</div>
      <div class="hotrow2"></div>
      <div class="hotrow3">HOT SELLING CENTER</div>
    </div>
    <div class="hotgoods safe auto">
      <button class="left" @click="prev"></button>
      <div class="container clearfix">
        <div class="contentbox" ref="margin">
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
      <button class="right" @click="next"></button>
    </div>
    <!-- 广告轮播 -->
    <div class="adver-banner">
      <div class="adver-ban safe auto">
        <div class="adverrow1">专业的服务、诚信的口碑、强大的技术</div>
        <div class="adverrow2">支持能力在业界建立了良好的信誉</div>
        <div class="adverrow3">电话：{{obj.shop.mobile}}</div>
      </div>
    </div>
    <!-- 最新产品 -->
    <div class="hotfloor safe auto">
      <div class="hotrow1">最新产品</div>
      <div class="hotrow2"></div>
      <div class="hotrow3">NEWEST PORDUCTS</div>
    </div>
    <div class="newgoods-box safe auto">
      <a
        class="newgoods"
        v-for="(item,index) in info.list"
        :key="index"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
      >
        <img :src="item.image" alt />
        <div class="para">
          <div class="title">{{item.name}}</div>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="ask">立即询价</a>
        </div>
      </a>
    </div>
    <!-- 关于我们 -->
    <div class="hotfloor safe auto">
      <div class="hotrow1">关于我们</div>
      <div class="hotrow2"></div>
      <div class="hotrow3">ABOUT US</div>
    </div>
    <div class="about safe auto">
      <div class="content">{{obj.shop.content}}</div>
    </div>
    <!-- 掌柜推荐 -->
    <div class="hotfloor safe auto">
      <div class="hotrow1">掌柜推荐</div>
      <div class="hotrow2"></div>
      <div class="hotrow3">RECOMMEND</div>
    </div>
    <div class="bossreco safe auto clearfix">
      <div class="boss-item" v-for="(item,index) in re.re_list" :key="index">
        <a class="img" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
          <img :src="item.image" alt />
        </a>
        <div class="title">{{item.name}}</div>
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
      timer: ""
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
      { user_id: window._global.user_id, page: 1, perpage: 12 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
        Vue.set(this.hot, "total", res.data.total);
      }
    );
  },
  methods: {
    next() {
      this.left += 242;
      if (this.left > 2000) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.left -= 242;
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
/* 楼层 */
.hotfloor {
  margin-top: 57px;
  margin-bottom: 31px;
}
.hotrow1 {
  text-align: center;
  color: #222222;
  font-size: 22px;
  font-weight: 600;
}
.hotrow2 {
  margin: 6px auto 4px;
  width: 110px;
  height: 2px;
  background: #ffbb00;
}
.hotrow3 {
  text-align: center;
  font-size: 14px;
  color: #222222;
}
/* 热卖中心 */
.hotgoods {
  height: 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.hotgoods .left {
  width: 37px;
  height: 37px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #efb100;
  background-image: url(../assets/images/yx1.png);
  background-repeat: no-repeat;
  background-position: 44% 50%;
  background-size: 15px 26px;
}
.hotgoods .container {
  width: 1126px;
  overflow: hidden;
}
.container .contentbox {
  width: 2904px;
  height: 144px;
  transition: all 0.3s linear;
  overflow: hidden;
}
.hotgoods .right {
  width: 37px;
  height: 37px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #efb100;
  background-image: url(../assets/images/yx2.png);
  background-repeat: no-repeat;
  background-position: 60% 50%;
  background-size: 15px 26px;
}
.hot-item {
  display: block;
  width: 222px;
  height: 144px;
  position: relative;
  float: left;
  margin: 0 10px;
  opacity: 1;
  border: 2px solid rgba(255, 191, 7, 1);
}
.hot-item img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.hot-item .title {
  width: 218px;
  height: 29px;
  line-height: 29px;
  font-size: 14px;
  color: #ffc31f;
  position: absolute;
  left: 0;
  opacity: 0;
  top: 120px;
  padding: 0 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.2s linear;
  background-color: rgba(49, 49, 49, 0.8);
  background-image: url(../assets/images/yx6.png);
  background-repeat: no-repeat;
  background-size: 20px 14px;
  background-position: 15% 50%;
}
/* 广告轮播 */
.adver-banner {
  margin-top: 60px;
  height: 260px;
  background-color: rgba(25, 25, 25, 0.4);
  background-image: url(../assets/images/bg.png);
  background-position: center;
  background-size: 100% 100%;
}
.adver-ban {
  overflow: hidden;
}
.adverrow1 {
  text-align: center;
  font-size: 30px;
  color: #ffbb00;
  margin-top: 58px;
}
.adverrow2 {
  text-align: center;
  font-size: 25px;
  color: #ffbb00;
  margin-top: 13px;
}
.adverrow3 {
  width: 245px;
  height: 41px;
  line-height: 41px;
  background: #fff;
  border-radius: 21px;
  padding-left: 60px;
  font-size: 18px;
  color: #56c7ba;
  margin: 28px auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-image: url(../assets/images/yx3.png);
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: 12% 50%;
}
/* 最新产品 */
.newgoods-box {
  margin-top: -15px;
  overflow: hidden;
}
.newgoods {
  display: block;
  width: 255px;
  border: 4px solid #ffbf07;
  float: left;
  margin: 0 22.5px;
  opacity: 1;
  position: relative;
  overflow: hidden;
}
.newgoods:nth-child(1) {
  height: 260px;
}
.newgoods:nth-child(3) {
  height: 260px;
}
.newgoods:nth-child(2) {
  height: 295px;
}
.newgoods:nth-child(4) {
  height: 295px;
}
.newgoods:nth-child(5) {
  height: 295px;
}
.newgoods:nth-child(7) {
  height: 295px;
}
.newgoods:nth-child(6) {
  height: 260px;
  margin-top: 35px;
}
.newgoods:nth-child(8) {
  height: 260px;
  margin-top: 35px;
}
.newgoods img {
  width: 100%;
  height: 100%;
}
.para {
  position: absolute;
  width: 248px;
  height: 62px;
  background: rgba(70, 70, 70, 0.9);
  border-radius: 7px;
  border: 1px solid rgba(242, 242, 242, 1);
  left: 0;
  bottom: -24px;
  transition: all 0.3s ease-in;
}
.para .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #e8e8e8;
  padding: 6px 15px 5px;
  border-bottom: 1px dashed #b4b4b4;
}
.para .ask {
  display: block;
  width: 100%;
  padding-left: 91px;
  font-size: 14px;
  color: #ffc31f;
  margin-top: 6px;
  background-image: url(../assets/images/yx4.png);
  background-repeat: no-repeat;
  background-size: 18px 17px;
  background-position: 65% 50%;
}
/* 关于我们 */
.about {
  height: 377px;
  overflow: hidden;
  position: relative;
  background-image: url(../assets/images/yx5.png);
  background-size: 100% 100%;
}
.about .content {
  width: 552px;
  height: 279px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(84, 84, 84, 1);
  position: absolute;
  left: 59px;
  top: 50px;
  overflow: hidden;
  line-height: 200%;
}
/* 掌柜推荐 */
.bossreco {
  margin-top: -10px;
  overflow: hidden;
}
.boss-item {
  width: 262px;
  float: left;
  margin: 10px 19px;
}
.boss-item .img {
  display: block;
  width: 262px;
  height: 262px;
  overflow: hidden;
  opacity: 1;
    border: 1px solid rgba(216, 217, 215, 1);
}
.boss-item:hover img{
  transform: scale(1.2);
}
.img img {
  width: 100%;
  height: 100%;
  transition: all .2s ease-in;
}
.boss-item .title {
  background: #fff;
  color: #edae00;
  font-size: 14px;
  width: 262px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  padding: 0 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid #d8d9d7;
}
/* hover */
.hot-item:hover .title {
  opacity: 1;
  top: 63px;
}
.newgoods:hover .para {
  bottom: 0;
}
</style>


