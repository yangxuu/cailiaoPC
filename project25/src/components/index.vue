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
    <!-- 描述 -->
    <div class="description safe auto">
      <div class="des-col">
        <div class="h1">诚信经营</div>
        <div class="p">以用户为首，博得信任</div>
      </div>
      <div class="des-col">
        <div class="h1">质量保证</div>
        <div class="p">我们只生产有保障的产品</div>
      </div>
      <div class="des-col">
        <div class="h1">物美价廉</div>
        <div class="p">生产实惠的价格以及实用的商品</div>
      </div>
    </div>
    <!-- 最新商品 -->
    <div class="newgoods-box">
      <div class="floor safe auto">
        <div class="newfloor">
          <div class="line"></div>
          <div class="floor-content">最新商品</div>
          <div class="line"></div>
        </div>
        <div class="floor-eng">New products</div>
      </div>
      <div class="newgoods-items safe auto">
        <button class="btn-style" @click="prev">&lt;</button>
        <div class="newcontent-box">
          <div class="margin-box" ref="margin">
            <a
              v-for="(item,index) in info.list"
              :key="index"
              :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
              class="new-items"
            >
              <img :src="item.image" alt />
              <div class="para">{{item.name}}</div>
            </a>
          </div>
        </div>
        <button class="btn-style" @click="next">&gt;</button>
      </div>
    </div>

    <!-- 热卖中心 -->
    <div class="floor safe auto">
      <div class="newfloor">
        <div class="line"></div>
        <div class="floor-content">热卖中心</div>
        <div class="line"></div>
      </div>
      <div class="floor-eng">Hot Selling</div>
    </div>
    <div class="hotgoods-box">
      <div class="hotgoods safe auto">
        <div class="hot-items" v-for="(item,index) in hot.item_list" :key="index">
          <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="hot-imgbox">
            <img :src="item.image" alt />
          </a>
          <div class="para">
            <div class="title">{{item.name}}</div>
            <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'" class="more">查看更多</a>
          </div>
        </div>
      </div>
      <div class="change safe auto">
        <button class="change-btn" @click="change">换一换</button>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="floor safe auto">
      <div class="newfloor">
        <div class="line"></div>
        <div class="floor-content">公司介绍</div>
        <div class="line"></div>
      </div>
      <div class="floor-eng">Introduction</div>
    </div>
    <div class="company safe auto">
      <div class="company-name">{{obj.shop.enterprise_name}}</div>
      <div class="company-content">{{obj.shop.content}}</div>
    </div>
    <!-- 老板推荐 -->
    <div class="floor safe auto">
      <div class="newfloor">
        <div class="line"></div>
        <div class="floor-content">老板推荐</div>
        <div class="line"></div>
      </div>
      <div class="floor-eng">Recommend</div>
    </div>
    <div class="recoment">
      <a
        v-for="(item,index) in re.re_list"
        :key="index"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        class="re-items"
      >
        <img :src="item.image" alt />
      </a>
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
      left: 0
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
      { user_id: window._global.user_id, page: 1, perPage: 5 },
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
  },
  methods: {
    next() {
      this.left += 279;
      if (this.left > 1500) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    prev() {
      this.left -= 279;
      if (this.left < 0) {
        this.left = 0;
      }
      this.$refs.margin.style.marginLeft = "-" + this.left + "px";
    },
    change() {
      let _this = this;
      var new_page = _this.hot.page + 1;
      _this.api(
        "index/update_list",
        { user_id: window._global.user_id, page: new_page, perpage: 4 },
        res => {
          Vue.set(this.hot, "item_list", res.data.item_list);
          Vue.set(this.hot, "page", res.data.page);
          Vue.set(this.hot, "total", res.data.total);
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
/* 描述 */
.description {
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.des-col {
  padding-left: 55px;
  border: 1px solid #000;
}
.des-col .h1 {
  font-size: 24px;
  color: #131313;
}
.des-col .p {
  font-size: 18px;
  color: #878787;
}
/* 楼层 */
.floor {
  /* border: 1px solid #000; */
  padding-bottom: 26px;
  padding-top: 50px;
}
.newfloor {
  display: flex;
  justify-content: center;
  align-items: center;
}
.newfloor .line {
  width: 13px;
  height: 3px;
  background: #0b448f;
}
.floor-content {
  font-size: 30px;
  color: #0b448f;
}
.floor-eng {
  margin-top: 16px;
  font-size: 14px;
  color: #336cb7;
  text-align: center;
}
/* 最新商品 */
.newgoods-box {
  height: 480px;
  background: #f2f6fd;
}
.newgoods-items {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.newcontent-box {
  width: 1116px;
  height: 242px;
  overflow: hidden;
}
.margin-box {
  width: 2232px;
  height: 242px;
  overflow: hidden;
  transition: all 0.3s;
}
.btn-style {
  width: 42px;
  height: 42px;
  background: #dddddd;
  border-radius: 50%;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.new-items {
  display: block;
  width: 242px;
  height: 242px;
  float: left;
  margin: 0 18.5px;
  opacity: 1;
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 50%;
}
.new-items img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
}
.new-items .para {
  width: 252px;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 28px;
  line-height: 35px;
  color: #000000;
  font-size: 14px;
  background: rgba(241, 241, 241, 0.8);
  position: absolute;
  transition: all 0.3s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.new-items:hover .para {
  opacity: 1;
}
/* 热卖中心 */
.hotgoods-box {
  height: 580px;
  overflow: hidden;
  border: 1px solid #404040;
  background-color: #404040;
  /* background-image: url() */
}
.hotgoods {
  overflow: hidden;
  margin-top: 90px;
}
.hot-items {
  width: 253px;
  float: left;
  margin: 0 23.5px;
}
.hot-items:hover img {
  transform: translateX(10px);
}
.hot-imgbox {
  display: block;
  width: 100%;
  height: 293px;
  opacity: 1;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #c6c6c6;
}
.hot-imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.para {
  height: 60px;
  padding: 7px 15px;
  background: #fff;
}
.para .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #636363;
}
.para .more {
  display: block;
  width: 76px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: #636363;
  text-align: center;
  line-height: 24px;
  margin: 3px auto 0;
  border-radius: 8px;
  border: 1px solid rgba(110, 110, 110, 1);
}
.change {
  position: relative;
  height: 35px;
  margin-top: 30px;
}
.change-btn {
  border: none;
  background-color: #fff;
  width: 90px;
  height: 34px;
  line-height: 34px;
  border-radius: 16px;
  padding-left: 33px;
  font-size: 16px;
  color: #636363;
  position: absolute;
  right: 50px;
  cursor: pointer;
  outline: none;
  /* background-image: url() */
}
/* 公司介绍 */
.company {
  overflow: hidden;
}
.company-name {
  font-size: 18px;
  font-weight: bold;
  color: #2e2e2e;
  text-align: center;
}
.company-content {
  width: 830px;
  height: 99px;
  overflow: hidden;
  margin: 13px auto 0;
  font-size: 14px;
  color: #282828;
  text-align: center;
}
/* 老板推荐 */
.recoment {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
}
.re-items {
  display: block;
  width: 19.5%;
  height: 266px;
  opacity: 1;
  overflow: hidden;
  border: 1px solid rgba(198, 198, 198, 1);
}
.re-items img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}
/* hover */
.para .more:hover {
  color: #ffffff;
  background: #0b448f;
}
.re-items:hover img {
  transform: scale(1.2);
}
</style>


