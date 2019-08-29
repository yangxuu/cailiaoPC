<template>
  <div>
    <div class="banner">
      <el-carousel
        v-show="obj.ad_list.length==0?true:false"
        :interval="5000"
        :height="bannerheight+'px'"
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
        :height="bannerheight+'px'"
        arrow="always"
      >
        <el-carousel-item v-for="(item,key) in obj.ad_list" :key="key">
          <a class="ban-box" :href="item.url" rel="external nofollow">
            <img :src="item.image" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 楼层 -->
    <div class="floor safe auto">
      <div class="floor_row1">
        <span>主营产品</span>
      </div>
      <div class="floor_row2">MAIN PRODUCTS</div>
      <div class="floor_line"></div>
      <div class="floor_row3">精选产品，不容错过</div>
    </div>
    <!-- 最新/热卖 -->
    <div class="navbarbox safe auto">
      <button :class="flag==0?'status':'default'" class="new_btn" @click="requestNew(0)">最新商品</button>
      <button :class="flag==1?'status':'default'" class="hot_btn" @click="requestHot(1)">热卖商品</button>
    </div>
    <!-- 最新/热卖 商品 -->
    <div class="mix_goods safe auto">
      <div class="clearfix" v-show="flag==0">
        <div class="new_goods" v-for="(item,index) in info.list" :key="index">
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img_box">
            <img :src="item.image" alt />
          </a>
          <div class="goods_des">{{item.name}}</div>
        </div>
      </div>
      <div class="clearfix" v-show="flag==1">
        <div class="hot_goods" v-for="(item,index) in hot.item_list" :key="index">
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="img_box">
            <img :src="item.image" alt />
          </a>
          <div class="goods_des">{{item.name}}</div>
        </div>
      </div>
      <div class="morebox safe auto">
        <router-link class="moregoods" to="/productcenter">更多商品 ></router-link>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="companybox">
      <div class="company clearfix safe">
        <div class="company_left">
          <div class="left_content" v-html="obj.shop.content"></div>
        </div>
        <div class="company_right">
          <div class="logo_info">
            <img :src="obj.shop.logo" alt />
            <span>{{obj.shop.enterprise_name}}</span>
          </div>
          <div class="other_info">
            <div>联系人：{{obj.shop.link_manage}}</div>
            <div>电话：{{obj.shop.phone}}</div>
            <div>手机：{{obj.shop.mobile}}</div>
            <div>邮箱：{{obj.shop.user_email}}</div>
            <div>地址：{{obj.shop.address}}</div>
          </div>
          <div class="right_title">
            <div class="m-l-30">关于我们</div>
            <div class="m-t-10">About Us</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 楼层 -->
    <div class="floor safe auto">
      <div class="floor_row1">
        <span>老板推荐</span>
      </div>
      <div class="floor_row2">Boss Recommendation</div>
      <div class="floor_line"></div>
      <div class="floor_row3">老板力荐，必属精品</div>
    </div>
    <!-- 推荐商品 -->
    <div class="hot_box safe auto">
      <div class="hot_item" v-for="(item,index) in re.re_list" :key="index">
        <a class="img" :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
          <img :src="item.image" alt />
          <div class="model">
            <div class="price">￥{{item.price_description}}</div>
          </div>
        </a>
        <div class="hot_des">{{item.name}}</div>
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
      // 热卖
      hot: {
        item_list: [],
        page: "",
        total: ""
      },
      flag: 0
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
      { user_id: window._global.user_id, page: 1, perPage: 6 },
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
    setSize() {
      this.bannerheight = document.body.clientWidth / 3.84;
    },
    requestNew(flag) {
      this.flag = flag;
    },
    requestHot(flag) {
      this.flag = flag;
    }
  }
};
</script>
<style scoped>
.banner {
  width: 100%;
  overflow: hidden;
}
.el-carousel--horizontal {
  overflow-y: hidden;
}
.ban-box {
  display: block;
  width: 100%;
  overflow: hidden;
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
/* 楼层 */
.floor {
  margin: 45px auto 35px;
}
.floor_row1 {
  width: 140px;
  height: 20px;
  margin: 0 auto;
  border: 1px solid #70a0dd;
}
.floor_row1 span {
  display: block;
  width: 80px;
  height: 25px;
  text-align: center;
  font-size: 18px;
  color: #306cb6;
  background: #fff;
  margin: 0 auto;
}
.floor_row2 {
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  color: #306cb6;
}
.floor_line {
  width: 111px;
  height: 1px;
  margin: 0 auto;
  background: #c8c8c8;
}
.floor_row3 {
  text-align: center;
  font-size: 14px;
  color: #c8c8c8;
}
/* 最新/热卖 */
.navbarbox {
  display: flex;
  justify-content: center;
}
.new_btn,
.hot_btn {
  width: 85px;
  height: 15px;
  cursor: pointer;
  text-align: center;
  line-height: 15px;
  background: #fff;
  font-size: 16px;
  color: #95b6de;
  outline: 0;
  border-left: 2px solid #a1bbdb;
  border-right: 2px solid #a1bbdb;
}
.hot_btn {
  border-left: none;
}
.status {
  color: #4a6eae;
}
/* 最新/热卖商品 */
.new_goods,
.hot_goods {
  width: 278px;
  margin: 15px 11px;
  float: left;
}
.new_goods:hover,
.hot_goods:hover {
  box-shadow: 0 0 5px 5px #dedede;
}
.img_box {
  display: block;
  width: 100%;
  height: 245px;
  padding: 5px;
  opacity: 1;
}
.img_box img {
  width: 100%;
  height: 100%;
}
.goods_des {
  padding: 10px 15px;
  color: #272727;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.morebox {
  height: 33px;
  margin-top: 45px;
  overflow: hidden;
}
.moregoods {
  display: block;
  width: 145px;
  height: 33px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 33px;
  background: #184089;
  border-radius: 5px;
  margin: 0 auto;
  font-weight: bold;
}
/* 公司介绍 */
.companybox {
  margin-top: 55px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #dedede;
  /* background-image: url(); */
  background-size: 100% 100%;
}
.company {
  margin: 75px auto;
  height: 350px;
}
.company_left {
  width: 725px;
  height: 350px;
  float: left;
  background-color: rgba(255, 255, 255, 0.9);
}
.left_content {
  width: 553px;
  height: 225px;
  margin: 60px auto;
  overflow: hidden;
  color: #000;
  font-size: 18px;
}
.company_right {
  width: 475px;
  height: 350px;
  float: left;
  padding: 35px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  background-color: #4d6da6;
  position: relative;
}
.logo_info {
  display: flex;
  align-items: center;
}
.logo_info img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.logo_info span {
  display: block;
  width: 210px;
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
}
.other_info {
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
  margin-left: 75px;
  line-height: 180%;
}
.right_title {
  position: absolute;
  right: -15px;
  top: -15px;
  width: 145px;
  height: 95px;
  font-size: 22px;
  color: #fff;
  padding: 10px;
  background-color: #184089;
}
/* 老板推荐 */
.hot_box {
  overflow: hidden;
}
.hot_item {
  width: 360px;
  float: left;
  margin: 20px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}
.hot_item .img {
  display: block;
  width: 360px;
  height: 330px;
  padding: 10px;
  opacity: 1;
  position: relative;
  overflow: hidden;
}
.img img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.hot_des {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px 60px;
  color: #70a0dd;
  font-size: 14px;
}
.model {
  position: absolute;
  left: 0;
  bottom: -173px;
  width: 362px;
  height: 173px;
  background-color: rgba(89, 89, 89, 0.7);
  /* background-image: url(); */
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.3s ease-in;
  overflow: hidden;
}
.model .price {
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 100px;
}
.hot_item :hover .model{
  bottom: 0;
}
</style>


