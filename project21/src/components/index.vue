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
          <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/ba2.png" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/ba1.jpg" alt />
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/ba3.png" alt />
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
    <div class="floor safe auto m-t-50 clearfix">
      <div class="floor-left">
        <div class="shortline"></div>
        <div class="newtitle">最新产品</div>
        <div class="star"></div>
        <div class="good"></div>
      </div>
      <router-link to="/productcenter" class="floor-right">查看更多</router-link>
    </div>
    <div class="new-goods safe auto">
      <button class="newleft" @click="prev"></button>
      <div class="container">
        <div class="goodsbox clearfix" ref="margin">
          <a
            v-for="(item,index) in info.list"
            :key="index"
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="new-item"
          >
            <div class="boxF">
              <div class="boxS">
                <div class="boxT" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
              </div>
            </div>
            <div class="newblock">
              <div class="title">{{item.name}}</div>
              <div class="line1"></div>
              <div class="price">
                <span style="font-size:14px">￥</span>
                {{item.price_description}}
              </div>
            </div>
          </a>
        </div>
      </div>
      <button class="newright" @click="next"></button>
    </div>
    <!-- 热卖中心 -->
    <div class="line safe auto m-t-60"></div>
    <div class="hotcenter safe auto m-t-50">
      <div class="floor1 safe auto clearfix">
        <div class="floor-left">
          <div class="shortline"></div>
          <div class="newtitle">热卖中心</div>
          <div class="star"></div>
          <div class="good"></div>
        </div>
        <router-link to="/productcenter" class="floor-right">查看更多</router-link>
      </div>
      <div class="hotsale safe auto">
        <div class="hot-item" v-for="(item,index) in hot.item_list" :key="index">
          <a class="imgbox" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
            <img :src="item.image" alt />
          </a>
          <div class="title">{{item.name}}</div>
          <div class="fivestar">
            <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png" alt />
            <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png" alt />
            <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png" alt />
            <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png" alt />
            <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png" alt />
          </div>
          <div class="pricebox">
            <div class="lines"></div>
            <div class="price">
              <span style="font-size:14px">￥</span>
              {{item.price_description}}
            </div>
            <div class="lines"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="aboutbox">
      <div class="about safe auto">
        <div class="floor-left1">
          <div class="shortline"></div>
          <div class="newtitle">关于我们</div>
          <div class="star"></div>
          <div class="good"></div>
        </div>
        <div class="content">
          <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx6.png" alt />
          <div class="contentdetail">
            <div class="about-detail">{{obj.shop.content}}</div>
            <router-link class="about-more" to="/introduce">更多>></router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 掌柜推荐 -->
    <div class="line safe auto m-t-60"></div>
    <div class="hotcenter safe auto m-t-50">
      <div class="floor1 safe auto clearfix">
        <div class="floor-left">
          <div class="shortline"></div>
          <div class="newtitle">掌柜推荐</div>
          <div class="star"></div>
          <div class="good"></div>
        </div>
        <router-link to="/productcenter" class="floor-right">查看更多</router-link>
      </div>
      <div class="hotsale safe auto clearfix">
        <div class="boss-item" v-for="(item,index) in re.re_list" :key="index">
          <a class="imgbox" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
            <img :src="item.image" alt />
          </a>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="para">
            <div class="title">{{item.name}}</div>
            <div class="fivestar">
              <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx5.png" alt />
              <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx5.png" alt />
              <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx5.png" alt />
              <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx5.png" alt />
              <img src="http://files.cailiao.com/vue/cailiao/pc_21/images/yx5.png" alt />
            </div>
            <div class="price">
              <span style="font-size:14px">￥</span>
              {{item.price_description}}
            </div>
          </a>
        </div>
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
      // timer: ""
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
      { user_id: window._global.user_id, page: 1, perpage: 8 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
        Vue.set(this.hot, "total", res.data.total);
      }
    );
  },
  // mounted() {
  //   this.timer = setInterval(
  //     function() {
  //       this.next();
  //     }.bind(this),
  //     1000
  //   );
  // },
  methods: {
    // add() {
    //   this.timer = setInterval(
    //     function() {
    //       this.next();
    //     }.bind(this),
    //     1000
    //   );
    // },
    // clear() {
    //   clearInterval(this.timer);
    // },
    next() {
      this.left += 220;
      if (this.left > 2000) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.left -= 220;
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
.floor-left {
  float: left;
  width: 344px;
  height: 50px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(126, 126, 126, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
.shortline {
  margin-left: 5px;
  width: 17px;
  height: 2px;
  background: #fbb00a;
}
.newtitle {
  margin-left: 5px;
  color: #fbb00a;
  font-size: 22px;
}
.star {
  margin-left: 8px;
  width: 20px;
  height: 20px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx4.png);
  background-size: 100% 100%;
}
.good {
  margin-left: 8px;
  width: 113px;
  height: 26px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx3.png);
  background-size: 100% 100%;
}
.floor-right {
  float: right;
  display: block;
  width: 83px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
  color: #fbb00a;
  background: linear-gradient(
    180deg,
    rgba(164, 164, 164, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  );
}
/* 最新产品 */
.new-goods {
  margin-top: 38px;
  height: 245px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newleft,
.newright {
  border: none;
  outline: none;
  width: 30px;
  height: 71px;
  background-color: #fbb00a;
  background-repeat: no-repeat;
  background-size: 19px 34px;
  background-position: center;
  cursor: pointer;
}
.newleft {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx8.png);
}
.newright {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx9.png);
}
.container {
  width: 1132px;
  overflow: hidden;
}
.goodsbox {
  width: 2640px;
  overflow: hidden;
  transition: all .5s linear;
}
.new-item {
  float: left;
  display: block;
  width: 220px;
  height: 245px;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/yx7.png);
  background-repeat: no-repeat;
  background-size: 204px 234px;
  background-position: 8px 8px;
  position: relative;
}
/* 六边形 */
.boxF,
.boxS,
.boxT,
.overlay {
  width: 200px;
  height: 250px;
  overflow: hidden;
}
.boxF,
.boxS {
  visibility: hidden;
}
.boxF {
  transform: rotate(120deg);
  float: left;
  margin-left: 10px;
  -ms-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -webkit-transform: rotate(120deg);
}
.boxS {
  transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
.boxT {
  transform: rotate(-60deg);
  background: no-repeat 50% center;
  background-size: 125% auto;
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
  visibility: visible;
}
.newblock {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 245px;
  opacity: 0;
  transition: all 0.2s ease-in;
}
.newblock .title {
  width: 190px;
  margin: 100px auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #fbb00a;
}
.newblock .line1 {
  margin: 10px auto 0;
  width: 174px;
  height: 2px;
  background: #fff;
}
.newblock .price {
  text-align: center;
  font-size: 18px;
  color: #fbb00a;
  margin-top: 8px;
}
/* 热卖中心 */
.floor1 {
  border-bottom: 1px dashed #bababa;
}
.line {
  border-top: 1px dashed #ababab;
}
.hotcenter {
  overflow: hidden;
  border: 1px dashed #979797;
}
.hotsale {
  overflow: hidden;
  margin: 25px auto 10px;
}
.hot-item {
  float: left;
  width: 259px;
  padding: 5px;
  margin: 10px 20.5px;
  border: 1px solid #bababa;
}
.hot-item .imgbox {
  display: block;
  width: 100%;
  height: 260px;
  overflow: hidden;
}
.hot-item .title {
  font-size: 14px;
  color: #606060;
  margin-top: 6px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fivestar {
  width: 82px;
  margin: 6px auto;
}
.fivestar img {
  width: 13px;
  height: 13px;
}
.pricebox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lines {
  width: 20px;
  height: 2px;
  background: #979797;
}
.price {
  color: #fbb00a;
  font-size: 18px;
  margin: 0 5px 0;
}
/* 关于我们 */
.aboutbox {
  height: 400px;
  margin-top: 50px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_21/images/bg.jpg);
  background-size: 100% 100%;
}
.about .content {
  height: 321px;
  width: 1083px;
  background: #fff;
  margin: 8px auto 0;
  border-radius: 14px;
}
.floor-left1 {
  width: 344px;
  height: 50px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(126, 126, 126, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
.content {
  overflow: hidden;
}
.content img {
  width: 369px;
  height: 281px;
  float: left;
  margin-left: 74px;
  margin-top: 21px;
}
.contentdetail {
  width: 553px;
  float: left;
  margin-left: 38px;
  margin-top: 49px;
}
.about-detail {
  width: 553px;
  height: 165px;
  overflow: hidden;
  font-size: 18px;
  color: #000;
  line-height: 150%;
}
.about-more {
  display: block;
  font-size: 18px;
  color: #fbb00a;
  width: 553px;
  text-align: right;
}
/* 掌柜推荐 */
.boss-item {
  width: 259px;
  height: 261px;
  float: left;
  margin: 10px 20.5px;
  position: relative;
}
.boss-item .imgbox {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  padding: 6px;
  width: 259px;
  height: 261px;
  overflow: hidden;
  border: 1px solid #bababa;
}
.para {
  display: block;
  transition: all 0.2s ease-in;
  position: absolute;
  left: 0;
  top: 0;
  width: 259px;
  height: 261px;
  padding: 6px;
  background-clip: content-box;
  background-color: rgba(36, 36, 36, 0.4);
  opacity: 0;
}
.para .title {
  width: 126px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  margin: 60px auto 0;
}
.para .price {
  width: 100px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
  text-align: center;
  background: rgba(48, 48, 48, 1);
  border-radius: 4px;
  border: 1px solid rgba(19, 19, 19, 1);
  font-size: 18px;
  color: #fff;
}
/* hover */
.boss-item:hover .para {
  opacity: 1;
}
.imgbox img:hover {
  transform: translateX(-10px);
}
.new-item:hover .newblock {
  opacity: 1;
}
.new-item:hover .boxF {
  opacity: 0.1;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.new-item,
.imgbox,
.img {
  opacity: 1;
}
</style>


