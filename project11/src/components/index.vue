<template>
  <div>
    <div class="banner-box">
      <el-carousel
        v-show="obj.ad_list.length==0?true:false"
        :interval="5000"
        height="500px"
        arrow="always"
         id="self"
      >
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_11/images/banner11.png" alt="">
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
    <div class="safe auto">
      <div class="next">
        <button class="block" @click="prev">&lt;</button>
        <button class="block m-l-20" @click="next">&gt;</button>
      </div>
      <div class="products clear m-t-20">
        <div class="container clearfix">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="box"
            v-for="(item,index) in arr.list"
            :key="index"
          >
            <div class="img-box">
              <img :src="item.image" alt>
            </div>
            <p class="title">{{item.name}}</p>
          </a>
        </div>
      </div>
      <!-- 企业介绍-->
      <div class="bar1 auto m-t-80"></div>
      <div class="info auto m-t-80">
        <div class="img-box"></div>
        <div class="infos">
          <h3 class="title">{{obj.shop.enterprise_name}}</h3>
          <div class="master m-t-20">
            <div class="mas-left">
              <p>
                <span class="number">1</span>
                <span class="content">
                  <span class="black">联系人：</span>
                  {{obj.shop.link_manage}}
                </span>
              </p>
              <p>
                <span class="number">2</span>
                <span class="content">
                  <span class="black">联系电话：</span>
                  {{obj.shop.mobile}}
                </span>
              </p>
              <p>
                <span class="number">3</span>
                <span class="content">
                  <span class="black">经营模式：</span>
                  {{obj.shop.enterprise_type}}
                </span>
              </p>
              <p>
                <span class="number">4</span>
                <span class="content">
                  <span class="black">经营地址：</span>
                  {{obj.shop.address}}
                </span>
              </p>
            </div>
            <div class="mas-right">
              <div class="para">
                <p>详细信息：</p>
                <p class="intro" v-html="obj.shop.content"></p>
              </div>
              <p class="more">
                <router-link id="link" to="/introduce">查看更多</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 热销产品 -->
      <div class="bar2 auto m-t-80"></div>
    </div>
    <div class="hot">
      <div class="safe auto clear">
        <a
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          class="hot-pro"
          v-for="(item,index) in hot.item_list"
          :key="index"
        >
          <div class="img-box">
            <img :src="item.image" alt>
          </div>
          <p class="title auto">{{item.name}}</p>
        </a>
      </div>
    </div>
    <!-- 掌柜推荐 -->
    <div class="safe auto">
      <div class="bar3 auto m-t-80"></div>
      <div class="show-img clearfix">
        <a
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          class="re-box"
          v-for="(item,index) in info.re_list"
          :key="index"
        >
          <div class="img-box">
            <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt>
          </div>
          <div class="title-box">
            <div class="price">￥{{item.price_description}}</div>
            <div class="title">{{item.name}}</div>
          </div>
        </a>
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
      { user_id: window._global.user_id, page: 1, perpage: 12 },
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
       moveimg(e) {
      e.target.style.marginLeft = "10px";
      e.target.style.transition = "all 0.3s";
    },
    outimg(e) {
      e.target.style.marginLeft = "0";
      e.target.style.transition = "all 0.3s";
    }
  }
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 500px;
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

.el-carousel__item a:hover {
  opacity: 1;
}

.next {
  padding: 30px;
  text-align: right;
}
.next .block {
  display: inline-block;
  width: 45px;
  height: 45px;
  background: #c1c1c1;
  color: #ffffff;
  text-align: center;
  line-height: 45px;
  font-size: 40px;
  cursor: pointer;
  outline: none;
}
/* 下一页 */
.products {
  width: 1200px;
  height: 320px;
  overflow: hidden;
}
.container {
  overflow: hidden;
}
.box {
  display: block;
  width: 260px;
  float: left;
  margin: 2px 20px;
  box-shadow: 0 0 2px #000;
}
.box .img-box {
  width: 260px;
  height: 260px;
  padding: 10px;
  overflow: hidden;
}
.box:hover{
  opacity: 1;
}
.box:hover img{
    transform:scale(1.2) translate(0,15px);

}
.img-box img {
  width: 100%;
  height: 100%;
  transition:all 0.5s ease-in;

}
.box .title {
  width: 100%;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #ffffff;
  background: #000;
}
.bar1 {
  width: 319px;
  height: 51px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/bar1.png) no-repeat;
}
.info {
  width: 1200px;
  height: 365px;
  padding: 20px;
  border: 1px solid #bfbfbf;
  overflow: hidden;
  position: relative;
}
.info .img-box {
  width: 35%;
  height: 324px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_11/images/test.png);
  background-repeat: no-repeat;
  background-position: center;
  float: left;
}
.info .infos {
  width: 60%;
  float: right;
  margin-left: 50px;
}
.infos .title {
  font-size: 20px;
}
.master {
  overflow: hidden;
}
.mas-left {
  width: 50%;
  float: left;
}
.mas-right {
  width: 45%;
  height: 189px;
  margin-left: 10px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
.mas-left p {
  width: 100%;
  padding: 10px 0;
  color: #000000;
  font-size: 14px;
}
.mas-left .number {
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #848484;
  color: #4a4a4a;
  text-align: center;
  line-height: 26px;
}
.mas-left .content {
  color: #515151;
}
.mas-left .black {
  color: #000;
  font-weight: bolder;
  font-size: 14px;
}
.mas-right .para {
  color: #515151;
  font-size: 14px;
  overflow: hidden;
}
.para .intro {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-indent: 2em;
  line-height: 150%;
  letter-spacing: 2px;
}
.more {
  width: 100%;
  font-size: 14px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  text-align: right;
}
.more #link {
  color: #ffffff;
  display: inline-block;
  width: 86px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #515151;
  margin-right: 27px;
  cursor: pointer;
}
.bar2 {
  width: 319px;
  height: 57px;
  margin-bottom: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/bar3.png) no-repeat;
}
.hot {
  width: 100%;
  overflow: hidden;
}
.hot-pro {
  display: block;
  width: 260px;
  padding-bottom: 5px;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  margin: 25px 20px;
  position: relative;
  box-shadow: 0 0 8px rgb(196, 195, 195);
}
.hot-pro .img-box {
  width: 100%;
  height: 186px;
  padding: 10px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
  transition:all 0.5s ease-in;
}
.hot-pro .title {
  transform: translate(0,160px);
  transition: all .5s ease-in;
  padding: 10px;
  width: 254px;
  background: #313131;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot-pro:hover{
  opacity: 1;
}
.hot-pro:hover .title{
     background-color: rgba(0,0,0,.75);
   transform:translate(0,0);
}
.hot-pro:hover img{
    transform:scale(1.1) translate(0,10px);
}

.bar3 {
  width: 319px;
  height: 51px;
  margin-bottom: 80px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_11/images/bar2.png) no-repeat;
}
.show-img {
  overflow: hidden;
}
.show-img .re-box {
  display: block;
  float: left;
  width: 298px;
  margin: 35px 51px;
  border: 1px solid #454545;
}
.re-box:hover{
  opacity: 1;
}
.re-box .img-box {
  width: 100%;
  height: 268px;
  padding: 10px;
}
.re-box .img-box img {
  width: 100%;
  height: 100%;
}
.re-box .title-box {
  background: #f6f6f6;
  border-top: 1px solid #454545;
  padding: 6px;
  overflow: hidden;
}
.title-box .price {
  width: 70px;
  color: #454545;
  font-size: 16px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-box .title {
  width: 205px;
  color: #454545;
  float: left;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.totop {
  width: 42px;
  position: fixed;
  right: 50px;
  bottom: 35px;
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_11/images/t-1.png);
}
.up .t-1 {
  width: 41px;
  height: 41px;
  padding: 0 5px;
  background-color:#29baf2;
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_11/images/t-2.png);
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
