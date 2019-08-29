<template>
  <div>
    <div class="view"  :height="bannerheight+'px'">
      <el-carousel
        v-if="obj.ad_list.length==0?true:false"
        :interval="5000"
        :height="bannerheight+'px'"
        arrow="always"
        id="self"
      >
        <el-carousel-item :height="bannerheight+'px'">
          <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_ban1.png" alt />
        </el-carousel-item>
        <el-carousel-item :height="bannerheight+'px'">
          <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_ban2.jpg" alt />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        v-if="obj.ad_list.length==0?false:true"
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
    <div class="floor">
      <p class="row1">
        <span class="name-l">{{obj.shop.enterprise_name}}</span>
        <span class="name-r">-热销产品</span>
      </p>
    </div>
    <div class="empty"></div>
    <div class="products">
      <div class="container">
        <a
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          class="item"
          v-for="(item,index) in hot.item_list"
          :key="index"
        >
          <div class="imgbox">
            <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt />
            <img
              src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_16.png"
              class="r-icon"
              alt
            />
          </div>
          <div class="title">
            <div class="title-l">{{item.name}}</div>
            <div class="title-r">
              <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_14.png" alt />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="floor1">
      <div class="safe auto">
        <div class="pof">
          <span class="floor1-row1">走近{{obj.shop.enterprise_name}}</span>
          <span class="floor1-row2">因了解而信赖</span>
        </div>
      </div>
    </div>
    <div class="shopinfo">
      <div class="safe auto pos-re">
        <div class="imgbox">
          <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx.jpg" alt />
        </div>
        <div class="infobox">
          <div class="name">{{obj.shop.enterprise_name}}</div>
          <div class="content">{{obj.shop.content}}</div>
          <router-link class="detail" to="/introduce">【详情】</router-link>
        </div>
        <div class="server">企业服务理念</div>
        <div class="bg-img"></div>
      </div>
    </div>
    <div class="floor">
      <p class="row1">
        <span class="name-l">{{obj.shop.enterprise_name}}</span>
        <span class="name-r">-店铺推荐</span>
      </p>
    </div>
    <div class="bg-light">
      <div class="safe auto re-products">
        <a :href="'http://www.cailiao.com/supply/'+addp.id+'.html'" class="re-left">
          <div class="imgbox">
            <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="addp.src" alt />
          </div>
          <div class="title">{{addp.name}}</div>
          <a :href="'http://www.cailiao.com/supply/'+addp.id+'.html'" class="ask">立即询价</a>
        </a>

        <div class="re-right">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="box"
            v-for="(item,index) in info.re_list"
            :key="index"
          >
            <div class="imgbox">
              <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt />
            </div>
            <div class="desc">
              <div class="title">{{item.name}}</div>
              <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="ask-s">立即询价</a>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="floor3">
      <img src="http://files.cailiao.com/vue/cailiao/pc_12/images/yx_13.png" alt />
    </div>
    <div class="addpart safe auto">
      <div class="add-l">
        <div class="add-l-top">
          <div class="title">{{obj.shop.enterprise_name}}</div>
          <div class="mark">
            <img
              class="ico-1"
              src="http://files.cailiao.com/vue/cailiao/pc_12/images/icon-1.png"
              alt
            />
            <span class="vip">材料网超级会员</span>
            <img
              class="ico-2"
              src="http://files.cailiao.com/vue/cailiao/pc_12/images/icon-2.png"
              alt
            />
            <span class="gover">企业认证</span>
          </div>
          <div class="obj m-t-20">
            <span class="key">公司法人：</span>
            <span class="value">{{obj.shop.legal_person}}</span>
          </div>
          <div class="obj">
            <span class="key">联系卖家：</span>
            <span class="value">{{obj.shop.link_manage}}</span>
          </div>
          <div class="obj">
            <span class="key">手机：</span>
            <span class="value">{{obj.shop.mobile}}</span>
          </div>
          <div class="obj">
            <span class="key">企业地址：</span>
            <span class="value">{{obj.shop.address}}</span>
          </div>
          <div class="obj">
            <span class="key">经营模式：</span>
            <span class="value">{{obj.shop.enterprise_type}}</span>
          </div>
          <div class="obj">
            <span class="key">主营产品：</span>
            <span class="value">{{obj.shop.product}}</span>
          </div>
        </div>
        <div class="add-l-down">
          <div class="head">产品分类</div>
          <ul class="list">
            <li v-for="(x,index) in list.cate" :key="index">
              <router-link
                :to="{path:'/productcenter',query:{cate_id:x.cate_three_id}}"
              >{{x.category_str}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="add-r">
        <div class="add-r-row1">
          <div class="head">联系我们</div>
          <div class="row1-content">
            <div class="object">
              <span class="key">联系人：</span>
              <span class="value">{{obj.shop.link_manage}}</span>
            </div>
            <div class="object">
              <span class="key">电话：</span>
              <span class="value">{{obj.shop.phone}}</span>
            </div>
            <div class="object">
              <span class="key">手机：</span>
              <span class="value">{{obj.shop.mobile}}</span>
            </div>
            <div class="object">
              <span class="key">传真：</span>
              <span class="value">{{obj.shop.facsimile}}</span>
            </div>
            <div class="object">
              <span class="key">地址：</span>
              <span class="value">{{obj.shop.address}}</span>
            </div>
            <div class="object">
              <span class="key">邮编：</span>
              <span class="value">{{obj.shop.zip_code}}</span>
            </div>
            <router-link class="more" to="/contact">更多>></router-link>
          </div>
        </div>
        <!-- 店铺推荐 -->
        <div class="add-r-row2">
          <div class="head">
            <span>店铺推荐</span>
            <router-link class="more" to="/productcenter">更多>></router-link>
          </div>
        </div>
        <div class="itembox">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="add-item"
            v-for="(item,index) in info.re_list"
            :key="index"
          >
            <div class="imgbox">
              <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt />
            </div>
            <div class="add-des">
              <div class="price">￥{{item.price_description}}</div>
              <div class="title">{{item.name}}</div>
            </div>
          </a>
        </div>

        <!-- 新品推荐 -->
        <div class="add-r-row2 m-t-30">
          <div class="head">
            <span>新品推荐</span>
            <router-link class="more" to="/productcenter">更多>></router-link>
          </div>
        </div>
        <div class="itembox">
          <a
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            class="add-item"
            v-for="(item,index) in arr.list"
            :key="index"
          >
            <div class="imgbox">
              <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt />
            </div>
            <div class="add-des">
              <div class="price">￥{{item.price_description}}</div>
              <div class="title">{{item.name}}</div>
            </div>
          </a>
        </div>
        <!--公司介绍  -->
        <div class="add-r-row2 m-t-30">
          <div class="head">公司介绍</div>
        </div>
        <div class="intro-con">
          {{obj.shop.content}}
          <router-link to="introduce" class="intromore">更多>></router-link>
        </div>
      </div>
    </div>

    <totop />
  </div>
</template>

<script>
import totop from "./common/totop";
import Vue from "vue";
export default {
  components: { totop },
  data() {
    return {
      // 轮播高度
      bannerheight: "",
      // 推荐
      info: {
        re_list: [],
        re_page: {}
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
      // 分类
      list: {},
      ne_page: "",
      x: 0,
      addp: {
        src: "",
        id: "",
        name: ""
      }
    };
  },
  created() {
    let _this = this;
    // 热卖商品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 4 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
    // 推荐
    _this.api(
      "index/re_list",
      { user_id: window._global.user_id, page: 1, perPage: 9 },
      res => {
        _this.render(res.data);
        Vue.set(this.addp, "src", res.data.re_list[6].image);
        Vue.set(this.addp, "name", res.data.re_list[6].name);
        Vue.set(this.addp, "id", res.data.re_list[6].id);
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
      }
    );
    // 分类
    _this.api("shop/cate", { user_id: window._global.user_id }, res => {
      Vue.set(this.list, "cate", res.data.cate);
    });
    // 最新 order:'update_time'
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        order: "update_time",
        page: 1,
        perPage: 6
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
    },
    moveimg(e) {
      e.target.style.marginLeft = "10px";
      e.target.style.transition = "all 0.3s";
    },
    outimg(e) {
      e.target.style.marginLeft = "0";
      e.target.style.transition = "all 0.3s";
    },

    // 推荐只有十个
    next() {
      console.log("ok");
      let _this = this;
      _this.info.re_page.page++;
      console.log(_this.info.re_page.page);
      _this.ne_page = _this.info.re_page.page;
      var page = Math.floor(_this.info.re_page.total / 6);
      if (_this.ne_page > page) {
        _this.ne_page = 1;
      }
      _this.api(
        "index/re_list",
        {
          user_id: window._global.user_id,
          order: "update_time",
          page: _this.ne_page,
          perPage: 6
        },
        res => {
          _this.render(res.data);
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
    }
  }
};
</script>

<style scoped>
.el-carousel__item a:hover {
  opacity: 1;
}
.el-carousel__item img {
  width: 100%;
  height: inherit;
  min-height: 312px;
  min-width: 1200px;
}
.view {
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
.floor {
  width: 100%;
  height: 185px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/yx_3.png);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
.floor .row1 {
  margin-top: 65px;
  width: 100%;
  text-align: center;
}
.row1 .name-l {
  color: #3b3b3b;
  font-size: 32px;
  font-weight: bold;
}
.row1 .name-r {
  color: #b81919;
  font-size: 32px;
  font-weight: bold;
}
.floor .row2 {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  color: #2a2a2a;
  font-size: 16px;
}
.empty {
  width: 100%;
  height: 4px;
  background: #f3f3f3;
}
.products {
  width: 100%;
  height: 400px;
  background: #fff;
  padding: 38px 0;
  overflow: hidden;
}
.container {
  width: 1200px;
  margin: 0 auto;
  height: 325px;
}
.products .item {
  margin: 0 12px;
  float: left;
  display: block;
  padding: 6px 6px 0 6px;
  width: 275px;
  height: 320px;
  font-size: 14px;
  color: #fff;
  background: #1d52af;
}
.products .item:hover {
  opacity: 1;
}
.item .imgbox {
  width: 100%;
  height: 273px;
  position: relative;
  background: #fff;
  overflow: hidden;
}
.imgbox .r-icon {
  position: absolute;
  width: 71px;
  height: 55px;
  right: 0;
  top: 0;
}
.imgbox img {
  width: 100%;
  height: 100%;
}
.item .title {
  height: 40px;
  line-height: 40px;
  width: 100%;
  overflow: hidden;
}
.title .title-l {
  float: left;
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title .title-r {
  float: right;
  width: 27px;
  height: 27px;
}
.title-r img {
  width: 100%;
  height: 100%;
}
.floor1 {
  width: 100%;
  height: 185px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/yx_6.png);
  background-position: 55% 50%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.floor1 .safe {
  height: 185px;
  position: relative;
}
.floor1 .pof {
  position: absolute;
  left: 550px;
  top: 90px;
}
.floor1-row1 {
  color: #212121;
  font-size: 34px;
}
.floor1-row2 {
  color: #212121;
  font-size: 16px;
}
.shopinfo {
  width: 100%;
  background: #f3f3f3;
}
.pos-re {
  position: relative;
  height: 730px;
}
.pos-re .imgbox {
  width: 523px;
  height: 323px;
  position: absolute;
  left: 0;
  top: -120px;
  z-index: 99999;
  overflow: hidden;
}
.infobox {
  width: 816px;
  height: 274px;
  margin-left: 290px;
  background: #b81919;
  color: #ffffff;
  font-size: 14px;
  overflow: hidden;
}
.infobox .name {
  margin-left: 290px;
  margin-top: 50px;
  font-size: 18px;
}
.infobox .content {
  width: 450px;
  height: 120px;
  overflow: hidden;
  margin-left: 290px;
  margin-top: 20px;
  opacity: 0.8;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.infobox .detail {
  color: #ffffff;
  opacity: 0.8;
  margin-left: 753px;
}
.pos-re .server {
  color: #fff;
  font-size: 18px;
  width: 175px;
  height: 60px;
  line-height: 60px;
  background: #b81919;
  text-align: center;
  margin-top: 20px;
}
.pos-re .bg-img {
  width: 1080px;
  height: 266px;
  margin: 55px auto 80px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/yx_5.png);
  background-size: 100% 100%;
  background-position: center;
}
.bg-light {
  width: 100%;
  height: 600px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/yx_7.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.re-products {
  width: 1200px;
  height: 440px;
  margin: 110px auto 0;
  overflow: hidden;
}
.re-products .re-left {
  float: left;
  display: block;
  width: 290px;
  height: 430px;
  margin-top: 8px;
  background: #fff;
}
.re-left:hover {
  opacity: 1;
}
.re-left .imgbox {
  width: 100%;
  height: 280px;
  padding: 35px;
  overflow: hidden;
}
.re-left .title {
  font-size: 14px;
  color: #2a2a2a;
  width: 250px;
  height: 35px;
  margin: 30px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.re-left .ask {
  display: block;
  width: 150px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  background: #b81919;
}
.re-products .re-right {
  float: right;
  width: 908px;
}
.re-right .box {
  float: left;
  margin: 8px 6px;
  display: block;
  width: 290px;
  height: 210px;
  background: #fff;
  overflow: hidden;
  padding: 50px 0 50px 12px;
}
.re-right .box:hover {
  opacity: 1;
}
.box .imgbox {
  float: left;
  width: 132px;
  height: 110px;
  overflow: hidden;
}
.box .desc {
  float: left;
  height: 110px;
  margin-left: 22px;
}
.desc .title {
  width: 103px;
  height: 37px;
  overflow: hidden;
  font-size: 14px;
  color: #2a2a2a;
  font-weight: bold;
}
.desc .ask-s {
  display: block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  margin-top: 45px;
  background: #b81919;
}
/* floor3 */
.floor3 {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}
.floor3 img {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -960px;
  margin-top: -200px;
  width: 1920px;
  height: 400px;
}
.addpart {
  overflow: hidden;
  margin-top: 68px;
}
.add-l {
  float: left;
  width: 250px;
}
.add-l-top {
  width: 250px;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/yx_15.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  border: 1px solid #dcdcdc;
}
.add-l-top .title {
  color: #141414;
  font-size: 16px;
  margin: 34px 15px 10px;
}
.add-l-top .mark {
  margin: 0 15px;
}
.mark .vip {
  font-size: 14px;
  color: #f56110;
}
.mark .gover {
  font-size: 14px;
  color: #656565;
}
.mark .ico-1 {
  width: 20px;
  height: 21px;
}
.mark .ico-2 {
  width: 20px;
  height: 23px;
}
.m-t-20 {
  margin-top: 120px;
}
.obj {
  margin: 10px 15px;
  font-size: 14px;
  color: #656565;
}
.m-t-20 {
  margin-top: 20px;
}
.obj .key {
  font-weight: bold;
}
.add-l-down {
  margin-top: 20px;
  width: 250px;
}
.add-l-down .head {
  width: 250px;
  background: #3473c5;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.list {
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.list li {
  width: 227px;
  height: 35px;
  margin: 0 auto;
  line-height: 35px;
  text-align: center;
  color: #656565;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px dashed #dcdcdc;
}
.add-r {
  float: left;
  width: 875px;
  margin-left: 12px;
}

.add-r-row1 .head {
  width: 875px;
  height: 35px;
  line-height: 35px;
  background: #3473c5;
  font-size: 16px;
  color: #fff;
  padding-left: 20px;
}
.row1-content {
  width: 875px;
  height: 240px;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  padding-left: 20px;
  overflow: hidden;
}
.row1-content .object {
  font-size: 16px;
  color: #656565;
  margin: 10px 0;
}
.row1-content .more {
  display: block;
  width: 100%;
  padding-right: 33px;
  text-align: right;
  font-size: 14px;
  color: #656565;
}
.add-r-row2 .head {
  width: 875px;
  height: 35px;
  line-height: 35px;
  background: #3473c5;
  font-size: 16px;
  color: #fff;
  padding-left: 20px;
}
.add-r-row2 .head .more {
  font-size: 14px;
  color: #fff;
  margin-left: 704px;
}
.itembox {
  width: 875px;
  padding: 12px 0;
  overflow: hidden;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.add-item {
  float: left;
  width: 247px;
  background: #fff;
  margin: 12px 22px;
}
.add-item:hover {
  opacity: 1;
}
.add-item .imgbox {
  width: 247px;
  height: 254px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
}
.add-item .add-des {
  width: 247px;
  height: 77px;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.add-des .price {
  font-size: 14px;
  color: #ed612b;
  padding: 5px 8px 10px;
}
.add-des .title {
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #656565;
  padding: 0 8px;
}
.m-t-30 {
  margin-top: 30px;
}
.intro-con {
  width: 875px;
  padding: 20px 40px 70px;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.intromore {
  display: block;
  width: 100%;
  text-align: right;
  color: #656565;
  font-size: 16px;
}
</style>
