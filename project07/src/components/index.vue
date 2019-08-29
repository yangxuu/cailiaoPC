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
        <el-carousel-item></el-carousel-item>
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
    <div class="floor1">
      <div class="safe auto m-t-50 m-b-50">
        <div class="ico1">
          <span class="ico-img1"></span>
        </div>
        <div class="head">
          <span class="line1"></span>
          <span class="dot1"></span>
          <span class="des">热卖产品</span>
          <span class="dot2"></span>
          <span class="line2"></span>
        </div>
        <div class="deta">/质量保证，放心购买/好品质，看得见/</div>
      </div>
      <div class="hot-pro">
        <div class="safe auto pro-show">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            v-for="(item,index) in hot.item_list"
            :key="index"
            class="pro"
          >
            <div class="img">
              <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt>
            </div>
            <div class="title">{{item.name}}</div>
            <div class="price">￥{{item.price_description}}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-50">
      <div class="ico1">
        <span class="ico-img2"></span>
      </div>
      <div class="head">
        <span class="line1"></span>
        <span class="dot1"></span>
        <span class="des">老板推荐</span>
        <span class="dot2"></span>
        <span class="line2"></span>
      </div>
      <div class="deta">/价格实惠/经久耐用/老板力荐/</div>
    </div>
    <div class="safe auto boss-pro">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        class="box"
        v-for="(item,index) in info.re_list"
        :key="index"
      >
        <div class="img">
          <img :src="item.image" alt>
        </div>
        <div class="title">{{item.name}}</div>
        <div class="price">
          <span class="money m-l-50">￥{{item.price_description}}</span>
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="link m-l-90">
            <span class="icon"></span> 立即询价
          </a>
        </div>
      </a>
    </div>
    <div class="intro">
      <div class="safe auto comp">
        <div class="c-head">简介</div>
        <div class="para" v-html="obj.shop.content"></div>
        <div class="about">关于我们</div>
        <div class="register">
          <p>
            <span>联系人：</span>
            <span>{{obj.shop.link_manage}}</span>
          </p>
          <p>
            <span>联系电话：</span>
            <span>{{obj.shop.mobile}}</span>
          </p>
          <p>
            <span>公司地址：</span>
            <span>{{obj.shop.address}}</span>
          </p>
          <p>
            <span>公司名称：</span>
            <span>{{obj.shop.enterprise_name}}</span>
          </p>
          <p>
            <span>经营模式：</span>
            <span>{{obj.shop.enterprise_type}}</span>
          </p>
          <p>
            <span>主营产品：</span>
            <span>{{obj.shop.product}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-50 m-b-50">
      <div class="ico1">
        <span class="ico-img3"></span>
      </div>
      <div class="head">
        <span class="line1"></span>
        <span class="dot1"></span>
        <span class="des">最新产品</span>
        <span class="dot2"></span>
        <span class="line2"></span>
      </div>
      <div class="deta">/诚信合作/双赢共享/共创佳绩/</div>
    </div>
    <div class="select safe auto">
      <div class="left" @click="prev">&lt;</div>
      <div class="right" @click="next">&gt;</div>
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
            <p class="title">{{item.name}}</p>
          </a>
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
      // 推荐
      info: {
        re_list: {},
        re_page: { page: 1 }
      },
      // 店铺
      obj: {
        shop: {},
        ad_list: {},
        item_list: []
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      // 最新
      arr: {
        list: [],
        pageInfo: {}
      },
      ne_page: "",
      flag: true,
      flag1: false,
      flag2: false
    };
  },
  created() {
    let _this = this;
    // 热卖商品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 8 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 6 },
      res => {
        _this.render(res.data);
      }
    );
    // 店铺信息
    _this.api(
      "index/index",
      { user_id: window._global.user_id, perpage: 8 },
      res => {
        Vue.set(this.obj, "shop", res.data.shop);
        Vue.set(this.obj, "item_list", res.data.item_list);
        Vue.set(this.obj, "ad_list", res.data.ad_list);
        // console.log(res.data)
      }
    );
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
      _this.ne_page = _this.arr.pageInfo.page;
      var page = Math.floor(_this.arr.pageInfo.total / 4);
      if (_this.ne_page > page) {
        _this.ne_page = 1;
      }
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          order: "update_time",
          page: _this.ne_page,
          perPage: 4
        },
        res => {
          Vue.set(this.arr, "list", res.data.list);
          Vue.set(this.arr, "pageInfo", res.data.pageInfo);
        }
      );
    },
    prev() {
      let _this = this;
      _this.ne_page--;
      if (_this.ne_page <= 0) {
        _this.ne_page = Math.floor(_this.arr.pageInfo.total / 4);
      }
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          order: "update_time",
          page: _this.ne_page,
          perPage: 4
        },
        res => {
          Vue.set(this.arr, "list", res.data.list);
          Vue.set(this.arr, "pageInfo", res.data.pageInfo);
        }
      );
    },
    moveimg(e) {
      e.target.style.marginLeft = "5px";
      e.target.style.transition = "all 0.5s";
    },
    outimg(e) {
      e.target.style.marginLeft = "0";
      e.target.style.transition = "all 0.5s";
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
#self .el-carousel__item:nth-child(2n) {
  background-image: url(../assets/images/banner1.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#self .el-carousel__item:nth-child(2n + 1) {
  background-image: url(../assets/images/banner1.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.el-carousel__item a:hover {
  opacity: 1;
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
.ico1 {
  width: 100%;
  text-align: center;
}
.ico1 .ico-img1,
.ico1 .ico-img2,
.ico1 .ico-img3 {
  display: inline-block;
  width: 40px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
}
.ico-img1 {
  background-image: url(../assets/images/floor1.png);
}
.ico-img2 {
  background-image: url(../assets/images/floor2.png);
}
.ico-img3 {
  background-image: url(../assets/images/floor3.png);
}
.head {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.head .line1,
.head .line2 {
  display: inline-block;
  width: 495px;
  height: 2px;
  background: #664e34;
  vertical-align: middle;
}
.head .dot1,
.head .dot2 {
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #664e34;
}
.head .des {
  display: inline-block;
  vertical-align: middle;
  font-size: 30px;
  color: #664e34;
  letter-spacing: 2px;
}
.deta {
  text-align: center;
  color: #8f857a;
  font-size: 20px;
  letter-spacing: 1px;
}
.hot-pro {
  width: 100%;
  background-color: #664e34;
  overflow: hidden;
}
.pro-show {
  overflow: hidden;
}
.pro {
  display: block;
  width: 265px;
  float: left;
  margin: 30px 17.5px;
  border: 4px solid #a27545;
}
.pro-show>a:hover{
  opacity: 1;
}
.pro .img {
  width: 100%;
  height: 250px;
  background: #fff;
  overflow: hidden;
}
.pro .img img {
  width: 100%;
  height: 100%;
}
.pro .title {
  width: 100%;
  height: 40px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  border-top: 4px solid #a27545;
  border-bottom: 4px solid #a27545;
  background: #816445;
}
.pro .price {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background: #3a3937;
}
.boss-pro {
  overflow: hidden;
}
.boss-pro>a:hover{
  opacity: 1;
}

.boss-pro .box {
  display: block;
  width: 360px;
  float: left;
  border: 1px solid #664e34;
  margin: 45px 20px;
}
.box .img {
  width: 360px;
  height: 360px;
  padding: 10px;
  display: block;
  overflow: hidden;
}
.box .img:hover{
  opacity: 0.8;
}
.box .img img {
  width: 100%;
  height: 100%;
}
.box .title {
  height: 52px;
  padding: 5px 15px;
  color: #664e34;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box .price {
  width: 359px;
  height: 40px;
  line-height: 40px;
  color: #edc89f;
  font-size: 16px;
  background: #664e34;
}
.price a {
  color: #edc89f;
  font-size: 16px;
}
.price .icon {
  display: inline-block;
  width: 24px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/images/message.png);
  vertical-align: middle;
}
.intro {
  width: 100%;
  height: 450px;
  margin-top: 45px;
  overflow: hidden;
  background-image: url(../assets/images/comp2.png);
  background-size: 100% 100%;
}
.intro .comp {
  height: 350px;
  margin-top: 50px;
  background-image: url(../assets/images/comp1.png);
  background-size: 100% 100%;
  position: relative;
}
.comp .c-head {
  font-size: 16px;
  color: #543936;
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 35px;
  line-height: 35px;
  padding-right: 30px;
  text-align: right;
}
.comp .para {
  width: 510px;
  height: 208px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  line-height: 150%;
  font-size: 14px;
  color: #fff;
  letter-spacing: 1px;
  position: absolute;
  top: 70px;
  left: 100px;
}
.comp .about {
  position: absolute;
  right: 60px;
  top: 0;
  width: 300px;
  height: 45px;
  line-height: 45px;
  color: #543936;
  font-size: 16px;
}
.comp .register {
  width: 315px;
  height: 300px;
  position: absolute;
  right: 80px;
  top: 45px;
  padding: 10px;
  overflow: hidden;
  font-size: 14px;
  color: #543936;
}
.register p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 15px;
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
.box1 {
  display: block;
  width: 230px;
  float: left;
  margin: 0 20px;
  border: 1px solid #664e34;
}
.container>a:hover{
  opacity: 1;
  box-shadow: 0 0 3px #333;
}
.box1 .img {
  width: 230px;
  height: 220px;
  padding: 10px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
}
.box1 .title {
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #664e34;
  border-top: 1px solid #664e34;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select {
  position: relative;
  height: 300px;
  margin-bottom: 100px;
}
.select .left {
  position: absolute;
  left: 0;
}
.select .right {
  position: absolute;
  right: 0;
}
.select .left,
.select .right {
  width: 60px;
  text-align: center;
  color: #979797;
  font-size: 40px;
  cursor: pointer;
  top: 100px;
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


