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
    <!-- 电话 -->
    <div class="safe auto tele-box">
      <div class="index-tele">电话咨询：18945678990</div>
    </div>
    <!-- 最新产品 -->
    <div class="newgoods-container">
      <div class="safe auto newgoods-box">
        <a
          class="newgoods"
          v-for="(item,index) in info.list"
          :key="index"
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        >
          <img :src="item.image" alt />
          <div class="para">
            <div class="title">{{item.name}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="container">
      <!-- 产品中心楼层 -->
      <div class="floor safe auto">
        <div class="floor-line"></div>
        <div class="floor-medium">
          <div class="cn">
            <span class="p-eng">P</span>产品中心
          </div>
          <div class="eng">Product Center</div>
        </div>
        <div class="floor-line"></div>
      </div>
      <!-- 产品中心 -->
      <div class="productcenter safe auto">
        <div class="pcenter-left">
          <li
            class="list-li"
            :class="flag==index?'click':'default'"
            v-for="(x,index) in shop.cate"
            :key="index"
            @click="style(index)"
          >
            <span>{{x.category_str}}</span>
            <span style="font-size:26px">></span>
          </li>
        </div>
        <div class="pcenter-right">
          <a
            class="kindsbox"
            v-for="(item,index) in arrlist.list.list"
            :key="index"
            :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          >
            <img :src="item.image" alt />
            <div class="hover-detail">
              <div class="squire">查看详情</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 关于我们楼层 -->
    <div class="floor safe auto">
      <div class="floor-line"></div>
      <div class="floor-medium">
        <div class="cn">
          <span class="p-eng">A</span>关于我们
        </div>
        <div class="eng">About Us</div>
      </div>
      <div class="floor-line"></div>
    </div>
    <!-- 关于我们 -->
    <div class="about safe auto">
      <div class="ab-part1">
        <div class="shopname">{{obj.shop.enterprise_name}}</div>
        <div class="bg-icon"></div>
      </div>
      <div class="ab-part2">
        <div class="text">{{obj.shop.content}}</div>
        <router-link to="/introduce" class="about-link">点击进入></router-link>
      </div>
      <div class="ab-part3"></div>
    </div>
    <div class="container">
      <!-- 热卖中心楼层 -->
      <div class="floor safe auto">
        <div class="floor-line"></div>
        <div class="floor-medium">
          <div class="cn">
            <span class="p-eng">H</span>热卖中心
          </div>
          <div class="eng">Hot Selling Center</div>
        </div>
        <div class="floor-line"></div>
      </div>
      <!-- 热卖中心 -->
      <div class="hot safe auto">
        <a
          v-for="(item,index) in hot.item_list"
          :key="index"
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          class="hot-goods"
        >
          <img :src="item.image" alt />
          <div class="title">{{item.name}}</div>
        </a>
      </div>
      <div class="safe auto">
        <router-link to="/productcenter" class="topro">查看更多...</router-link>
      </div>
    </div>

    <!-- 热卖中心 -->
    <!-- <div class="hotfloor safe auto">
      <div class="hotrow1">热卖中心</div>
      <div class="hotrow2"></div>
      <div class="hotrow3">HOT SELLING CENTER</div>
    </div>
    <div class="hotgoods safe auto">
      <button class="left" @click="prev">&lt;</button>
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
      <button class="right" @click="next">&gt;</button>
    </div>-->
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
      // 产品类目
      shop: {},
      // 分类产品
      arrlist: {
        list: [],
        pageInfo: {}
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
        perPage: 4
      },
      res => {
        _this.render(res.data);
      }
    );
    // 产品类目
    _this.api(
      "shop/cate",
      { user_id: window._global.user_id, limit: 7 },
      res => {
        Vue.set(this.shop, "cate", res.data.cate);
      }
    );
    // 产品分类
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        pageParams: { page: 1, perPage: 6 }
      },
      res => {
        Vue.set(this.arrlist, "list", res.data);
      }
    );
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
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
  methods: {
    style(index) {
      let _this = this;
      _this.flag = index;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.shop.cate[index].cate_three_id,
          pageParams: { page: _this.arrlist.list.pageInfo.page, perPage: 6 }
        },
        res => {
          Vue.set(this.arrlist, "list", res.data);
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
/* 电话 */
.index-tele {
  font-size: 35px;
  color: #ffffff;
  width: 600px;
  height: 94px;
  line-height: 94px;
  background-color: #0071db;
  position: absolute;
  top: -44px;
  left: 0;
  z-index: 9999;
  background-image: url(../assets/images/telephone.png);
  background-repeat: no-repeat;
  background-size:107px 94px;
  background-position: 0 50%;
  padding-left: 107px;
  text-align: center;
}
.tele-box {
  height: 94px;
  position: relative;
}
/* 最新产品 */
.newgoods-container {
  background: #0071db;
  height: 328px;
}
.newgoods-box {
  height: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.newgoods {
  display: block;
  width: 235px;
  height: 235px;
  opacity: 1;
  position: relative;
  border-radius: 50%;
}
.newgoods img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.para {
  width: 0;
  height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in;
}
.para .title {
  width: 131px;
  height: 47px;
  font-size: 18px;
  overflow: hidden;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container {
  background: #f1f1f1;
  padding-bottom: 80px;
}
/* 楼层 */
.floor {
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.floor-line {
  width: 447px;
  height: 2px;
  background: rgba(92, 92, 92, 1);
}
.floor-medium {
  width: 307px;
}
.floor-medium .cn {
  font-size: 50px;
  color: #212121;
  text-align: center;
}
.p-eng {
  font-size: 97px;
  color: #0071db;
}
.floor-medium .eng {
  margin-top: -20px;
  font-size: 26px;
  color: #5c5c5c;
  text-align: center;
}
/* 产品中心 */
.productcenter {
  height: 473px;
  overflow: hidden;
}
.pcenter-left {
  float: left;
  width: 287px;
  height: 470px;
  border: 1px solid rgba(47, 59, 75, 0.3);
  overflow: hidden;
}
.list-li {
  width: 287px;
  height: 61px;
  line-height: 61px;
  color: #fff;
  font-size: 16px;
  padding: 0 25px;
  margin-top: 2px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #2f3b4b;
  cursor: pointer;
}
.click {
  background: #0071db;
}
.pcenter-right {
  float: right;
  width: 897px;
  height: 470px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.kindsbox {
  width: 287px;
  height: 227px;
  overflow: hidden;
  padding: 20px;
  background: #fff;
  opacity: 1;
  position: relative;
}
.kindsbox img {
  width: 100%;
  height: 100%;
}
.hover-detail {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(0, 113, 219, 0.5);
  transition: all 0.2s ease-in;
  overflow: hidden;
}
.squire {
  width: 114px;
  height: 41px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 41px;
  border: 2px solid rgba(255, 255, 255, 1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* 关于我们 */
.about {
  height: 470px;
  position: relative;
}
.shopname {
  font-size: 26px;
  color: #0071db;
}
.bg-icon{
  width: 150px;
  height: 40px;
  background-image: url(../assets/images/decoration.png);
  background-position: 0 50%;
  background-size: 139px 17px;
  background-repeat: no-repeat;
}
.ab-part1 {
  position: absolute;
  left: 0;
  top: -58px;
  width: 348px;
  height: 350px;
  padding: 40px;
  background: rgba(241, 241, 241, 1);
}
.ab-part2 {
  position: absolute;
  left: 46px;
  top: 90px;
  width: 390px;
  height: 282px;
  z-index: 9999;
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  padding: 35px 40px 40px;
  background: rgba(0, 113, 219, 1);
}
.ab-part2 .text {
  width: 312px;
  height: 135px;
  overflow: hidden;
}
.ab-part2 .about-link {
  display: block;
  color: #024e96;
  font-size: 16px;
  width: 104px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  margin-top: 35px;
  background: rgba(255, 255, 255, 1);
}
.ab-part3 {
  position: absolute;
  right: 0;
  top: 0;
  width: 799px;
  height: 410px;
  background-image: url(../assets/images/company.png);
  background-size: 100% 100%;
}
/* 热卖中心 */
.hot {
  overflow: hidden;
}
.hot-goods {
  display: block;
  width: 287px;
  height: 228px;
  opacity: 1;
  float: left;
  margin: 10px 6.5px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(211, 209, 209, 1);
}
.hot-goods img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.hot-goods .title{
  position: absolute;
  left: 0;
  bottom: -54px;
  z-index: 999999;
  width: 100%;
  height: 54px;
  line-height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 18px;
  color: #fff;
  font-size: 14px;
  transition: all .3s;
  background:rgba(0, 0, 0, 0.5);
}
.topro {
  display: block;
  width: 160px;
  height: 51px;
  font-size: 20px;
  color: #a4a4a4;
  text-align: center;
  line-height: 51px;
  margin: 55px auto 0;
  background: #f1f1f1;
  border: 2px solid rgba(164, 164, 164, 1);
  border-radius: 6px;
}
/* hover */
.newgoods:hover .para {
  width: 184px;
  height: 184px;
}
.kindsbox:hover .hover-detail {
  width: 287px;
  height: 227px;
}
.list-li:hover {
  background: #0071db;
}
.hot-goods:hover .title{
  bottom: 0;
}
</style>


