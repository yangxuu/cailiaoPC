<template>
  <div>
    <div class="banner">
      <el-carousel
        v-if="obj.ad_list.length==0?true:false"
        :interval="5000"
        height="500px"
        arrow="always"
        id="self"
      >
        <el-carousel-item v-for="(x,index) in 1" :key="index"></el-carousel-item>
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
    <div class="part">
      <div class="safe auto f-1">
        <span class="blok"></span>
        <span class="after">我们的优势</span>
      </div>
    </div>
    <div class="safe auto our">
      <div class="our-1"></div>
      <div class="our-2"></div>
      <div class="our-3"></div>
      <div class="our-4"></div>
    </div>
    <div class="part">
      <div class="safe auto f-1">
        <span class="blok"></span>
        <span class="after">热卖产品</span>
        <p class="de">全新商品火热售卖中，速速抢购</p>
      </div>
    </div>
    <div class="safe auto boss-pro">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        class="box"
        v-for="(item,index) in hot.item_list"
        :key="index"
      >
        <div class="img">
          <img :src="item.image" alt>
        </div>
        <div class="down">
          <div class="col"></div>
          <div class="price">￥{{item.price_description}}</div>
          <div class="title">{{item.name}}</div>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="b-link">立即询价</a>
        </div>
      </a>
    </div>
    <!-- <router-link class="b-link" :to="{path:'/detail',query:{id:item.id}}">立即询价</router-link> -->
    <div class="change safe auto">
      <span class="ico"></span>
      <span class="update" @click="update">换一换</span>
    </div>
    <div class="safe auto comp">
      <div class="f-1">
        <span class="blok"></span>
        <span class="after">店铺简介</span>
      </div>
      <div class="intro">
        <div class="left" v-html="obj.shop.content"></div>
        <router-link to="/introduce" class="in-more">查看更多&gt;</router-link>
        <div class="right">
          <p>联系人：{{obj.shop.link_manage}}</p>
          <p>联系电话：{{obj.shop.mobile}}</p>
          <p>公司地址：{{obj.shop.address}}</p>
          <p>公司名称：{{obj.shop. enterprise_name}}</p>
          <p>企业性质：{{obj.shop.enterprise_type}}</p>
          <p>主营产品：{{obj.shop.product}}</p>
        </div>
      </div>
    </div>
    <div class="part">
      <div class="safe auto f-1">
        <span class="blok"></span>
        <span class="after">供应产品</span>
        <p class="de">优质质量，优质服务，值得信赖</p>
      </div>
    </div>
    <div class="select safe auto">
      <div class="left" @click="prev"></div>
      <div class="right" @click="next"></div>
      <div class="pros">
        <div class="container">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="box1"
            v-for="(item,index) in arr.list"
            :key="index"
          >
            <div class="img">
              <img :src="item.image" alt>
            </div>
            <p class="price">￥{{item.price_description}}</p>
            <p class="title">{{item.name}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="safe auto">
      <div class="f-line"></div>
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
        re_list: [],
        re_page: { page: 1 }
      },
      // 店铺
      obj: {
        item_list: [],
        shop: {},
        ad_list: {}
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      // 供应 最新
      arr: {
        list: [],
        pageInfo: {}
      },
      ne_page: "",
      ne_page1: "",
       flag: true,
      flag1: false,
      flag2: false
    };
  },
  created() {
    let _this = this;
    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 9 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 推荐产品
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 4 },
      res => {
        _this.render(res.data);
      }
    );
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "item_list", res.data.item_list);
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
    // 供应 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 4
      },
      res => {
        Vue.set(this.arr, "list", res.data.list);
        Vue.set(this.arr, "pageInfo", res.data.pageInfo);
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
    next() {
      let _this = this;
      _this.arr.pageInfo.page++;
      _this.ne_page1 = _this.arr.pageInfo.page;
      var page = Math.floor(_this.arr.pageInfo.total / 4);
      if (_this.ne_page1 > page) {
        _this.ne_page1 = 1;
      }
      _this.api(
        "shop_item/lists",
        { user_id: window._global.user_id, page: this.ne_page1, perPage: 4 },
        res => {
          Vue.set(this.arr, "list", res.data.list);
          Vue.set(this.arr, "pageInfo", res.data.pageInfo);
        }
      );
    },
    prev() {
      let _this = this;
      _this.ne_page1--;
      if (_this.ne_page1 <= 0) {
        _this.ne_page1 = Math.floor(_this.arr.pageInfo.total / 4);
      }
      _this.api(
        "shop_item/lists",
        { user_id: window._global.user_id, page: _this.ne_page1, perPage: 4 },
        res => {
          Vue.set(this.arr, "list", res.data.list);
          Vue.set(this.arr, "pageInfo", res.data.pageInfo);
        }
      );
    },
    // 热卖 换一换
    update() {
      let _this = this;
      var new_page = this.hot.page + 1;
      _this.api(
        "index/update_list",
        { user_id: window._global.user_id, page: new_page, perpage: 9 },
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
#self .el-carousel__item:nth-child(2n) {
  background-image: url(../assets/images/banner1.png);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#self .el-carousel__item:nth-child(2n + 1) {
  background-image: url(../assets/images/banner1.png);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.el-carousel__item a:hover {
  opacity: 1;
}
.banner {
  width: 100%;
  height: 500px;
  background: #dedede;
  overflow: hidden;
}
.ban-box{
  display: block;
  width: 100%;
  height: 500px;
}
.ban-box img{
  width: 100%;
  height: 100%;
}
.f-1 {
  margin: 90px auto 60px;
  text-align: center;
}
.f-1 .blok {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(../assets/images/p2-f.png);
  background-size: 100% 100%;
  background-position: center;
}
.f-1 .after {
  display: inline-block;
  color: #000;
  font-size: 30px;
  margin-left: 15px;
}
.f-1 .de {
  color: #7f7f7f;
  font-size: 18px;
  margin-top: 5px;
}
.our {
  overflow: hidden;
}
.our div {
  width: 195px;
  height: 224px;
  float: left;
  margin: 0 52.5px;
}
.our .our-1 {
  background-image: url(../assets/images/p2-h2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.our .our-2 {
  background-image: url(../assets/images/p2-h3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.our .our-3 {
  background-image: url(../assets/images/p2-h4.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.our .our-4 {
  background-image: url(../assets/images/p2-h1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.boss-pro {
  overflow: hidden;
  margin-top: -45px;
}
.boss-pro .box {
  display: block;
  width: 345px;
  float: left;
  margin: 45px 27.5px;
}
.boss-pro>a:hover{
  opacity: 1;
}
.box .img {
  width: 345px;
  height: 345px;
  padding: 20px;
  border: 1px solid #1f63b6;
  background: #fff;
}
.box .img :hover{
  opacity: 0.8;
}
.img img {
  width: 100%;
}
.box .price {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #0b2441;
  color: #fff;
  font-size: 16px;
}
.box .title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #0b2441;
  color: #fff;
  font-size: 16px;
  padding: 0 50px 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.change {
  height: 50px;
  line-height: 50px;
  text-align: right;
  margin-top: 30px;
}
.change .ico {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  background-image: url(../assets/images/p2-up.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.change .update {
  display: inline-block;
  width: 50px;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.box .down {
  position: relative;
  width: 100%;
}
.down .col {
  width: 16px;
  height: 3px;
  background: #e8b94e;
  position: absolute;
  left: 20px;
  top: 28px;
}
.down .b-link {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 35px;
  height: 85px;
  background: #5187c5;
  color: #fff;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  box-shadow: -2px 2px 3px #333;
  transition: all 0.5s;
}
.b-link:hover {
  opacity: 1;
  transform: translateY(-25px);
}
.comp {
  margin-top: 90px;
  height: 418px;
  background-image: url(../assets/images/p2-bg.png);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.comp .f-1 {
  margin: 20px auto 45px;
}
.comp .after {
  font-size: 30px;
  color: #fff;
}
.intro {
  width: 843px;
  height: 190px;
  margin: 0 auto;
  position: relative;
}
.intro .left {
  width: 410px;
  height: 180px;
  font-size: 16px;
  line-height: 150%;
  text-indent: 2em;
  letter-spacing: 1px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
.intro .in-more{
  color: #fff;
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  bottom: -50px;
  left: 405px;
  font-size: 16px;
}
.intro .right {
  position: absolute;
  left: 600px;
  top: 0;
  width: 400px;
  height: 100%;
  color: #fff;
  letter-spacing: 1px;
  font-size: 16px;
}
.intro .right p {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 下一页 */
.pros {
  width: 1080px;
  height: 287px;
  position: absolute;
  left: 60px;
  top: 0;
  overflow: hidden;
}
.container {
  height: 287px;
  overflow: hidden;
}
.container >a:hover{
  opacity: 1;
  box-shadow: 0 0 6px #333;
}
.box1 {
  display: block;
  width: 230px;
  float: left;
  margin: 10px 20px;
  background: #164275;
}
.box1 .img {
  width: 230px;
  height: 220px;
  padding: 10px;
  overflow: hidden;
}
.img img {
  width: 100%;
}
.box1 .price {
  width: 100%;
  font-size: 16px;
  color: #fff;
  padding: 5px 0;
  text-align: center;
}
.box1 .title {
  width: 100%;
  padding: 0 10px 5px;
  font-size: 14px;
  color: #fff;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select {
  position: relative;
  height: 300px;
}
.select .left {
  position: absolute;
  left: 0;
  background-image: url(../assets/images/p2-l.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.select .right {
  position: absolute;
  right: 0;
  background-image: url(../assets/images/p2-r.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.select .left,
.select .right {
  width: 24px;
  height: 39px;
  cursor: pointer;
  top: 100px;
}
.f-line {
  width: 415px;
  margin: 30px auto 100px;
  height: 1px;
  background: #164275;
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


