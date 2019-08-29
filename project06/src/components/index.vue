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
          <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/banner1.jpg" alt>
        </el-carousel-item>
        <el-carousel-item>
          <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/banner3.jpg" alt>
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
    <div class="safe auto floor">
      <p class="title">
        <span>品牌优势</span>
        <span class="icon"></span>
      </p>
      <p class="content">
        <span class="left">做诚信商家，得用户信任</span>
        <router-link to="/introduce">MORE&gt;</router-link>
      </p>
    </div>
    <div class="safe auto show">
      <div class="part1">
        <div class="number">01</div>
        <div class="p">
          <p>优化产品质量，</p>
          <p>精心打磨产品细节，</p>
          <p>让售卖的每一份产品都得到您的信赖。</p>
        </div>
        <div class="m-t-100 link">
          <router-link to="/introduce">MORE&gt;</router-link>
        </div>
      </div>
      <div class="part2">
        <div class="number">02</div>
        <div class="p">
          <p>诚信第一，以人为本，</p>
          <p>经营必须从用户的角度出发，</p>
          <p>不让任何一个用户失望。</p>
          <p>质量的商品，贴心的服务</p>
        </div>
        <div class="m-t-100 link">
          <router-link to="/introduce">MORE&gt;</router-link>
        </div>
      </div>
      <div class="part3">
        <div class="number">03</div>
        <div class="p">
          <p>每一道生产的工序</p>
          <p>都极为精密，做出好产品</p>
          <p>做出好质量，建立好口碑，让</p>
          <p>用户们都能达到自己的期望</p>
        </div>
        <div class="m-t-100 link">
          <router-link to="/introduce">MORE&gt;</router-link>
        </div>
      </div>
    </div>
    <div class="safe auto floor">
      <p class="title">
        <span>热卖产品</span>
        <span class="icon"></span>
      </p>
      <p class="content">
        <span class="left">本店的精选热卖商品，火速抢购中</span>
        <router-link to="/productcenter">MORE&gt;</router-link>
      </p>
    </div>
    <div class="safe auto products">
      <a
        class="box"
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in hot.item_list"
        :key="index"
      >
        <div class="img-box">
          <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt>
        </div>
        <div class="down">
          <p class="price">￥{{item.price_description}}</p>
          <p class="name">{{item.name}}</p>
        </div>
      </a>
    </div>
    <div class="change safe auto">
      <div @click="update">换一换</div>
    </div>
    <div class="safe auto floor">
      <p class="title">
        <span>企业背景</span>
        <span class="icon"></span>
      </p>
      <p class="content">
        <span class="left">全面了解公司的信息，熟知市场行情</span>
        <router-link to="/introduce">MORE&gt;</router-link>
      </p>
    </div>
    <div class="bg safe auto m-t-30">
      <div class="left img-box"></div>
      <div class="right">
        <div class="icon">
          <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/icon-6.png" alt>
        </div>
        <div class="des" v-html="obj.shop.content"></div>
        <router-link to="/introduce" class="more">查看更多&gt;</router-link>
        <ul class="list">
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/icons-1.png" alt>
            </span>
            <span>联系人：</span>
            <span>{{obj.shop.link_manage}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/icons-2.png" alt>
            </span>
            <span>联系电话：</span>
            <span>{{obj.shop.mobile}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/icon-3.png" alt>
            </span>
            <span>企业类型：</span>
            <span>{{obj.shop.enterprise_type}}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="http://files.cailiao.com/vue/cailiao/pc_6/images/icon-4.png" alt>
            </span>
            <span>经营地址：</span>
            <span>{{obj.shop.address}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="safe auto floor">
      <p class="title">
        <span>老板推荐</span>
        <span class="icon"></span>
      </p>
      <p class="content">
        <span class="left">为广大用户提供高质量的产品和服务</span>
        <router-link to="/productcenter">MORE&gt;</router-link>
      </p>
    </div>
    <div class="safe auto">
      <ul class="tab auto">
        <li>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="info.re_page.page"
            :total="info.re_page.total"
            :page-size="8"
            small
            background
            layout="pager"
          ></el-pagination>
        </li>
      </ul>
      <div class="container">
        <a
          :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
          class="item"
          v-for="(item,index) in info.re_list"
          :key="index"
        >
          <div class="img-box">
            <img @mouseover="moveimg($event)" @mouseout="outimg($event)" :src="item.image" alt>
          </div>
          <p class="title">{{item.name}}</p>
          <p class="price">
            <a
              :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
            >￥{{item.price_description}}&#x3000;立即询价</a>
          </p>
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
      type: 1,
      // 推荐
      info: {
        list: [],
        pageInfo: {},
        re_list: [],
        re_page: {
          page: 1
        }
      },
      // 店铺
      obj: {
        item_list: [],
        shop: {},
        ad_list: {},
        page: 1
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      order: [],
      order_by: "asc",
      flag: true,
      flag1: false,
      flag2: false
    };
  },
  created() {
    let _this = this;
    // 老板推荐
    _this.api(
      "index/re_list",
      {
        user_id: window._global.user_id,
        page: 1,
        perPage: 8
      },
      function(res) {
        _this.render(res.data);
      }
    );
    // 店铺
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "item_list", res.data.item_list);
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
    });
    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 6 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    )
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
    showType(type, item) {
      this.type = type;
    },
    update() {
      let _this = this;
      var new_page = this.hot.page + 1;
      _this.api(
        "index/update_list",
        { user_id: window._global.user_id, page: new_page, perpage: 6 },
        res => {
          Vue.set(this.hot, "item_list", res.data.item_list);
          Vue.set(this.hot, "page", res.data.page);
        }
      );
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.api(
        "index/re_list",
        {
          user_id: window._global.user_id,
          page: val,
          perPage: 8
        },
        function(res) {
          _this.render(res.data);
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
.floor {
  height: 150px;
  padding: 20px 0;
  line-height: 110px;
  border-bottom: 1px solid #8e8e8e;
}
.floor .title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #f2461e;
  margin-top: 10px;
  font-size: 30px;
}
.title span {
  display: inline-block;
}
.title .icon {
  width: 36px;
  height: 19px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_6/images/icon-5.png);
}
.floor .content {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #6c6c6c;
  font-size: 16px;
  margin-top: 10px;
  overflow: hidden;
}
.content a {
  display: block;
  width: 60px;
  height: 30px;
  float: right;
  color: #424242;
}
.show {
  margin-top: 45px;
  overflow: hidden;
}
.show div {
  width: 400px;
  height: 470px;
  float: left;
}
.show .part1 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/img_1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.show .part2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/img_2.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.show .part3 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/img_3.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.show .number {
  width: 100%;
  height: 163px;
  line-height: 163px;
  text-align: center;
  font-size: 40px;
  color: #d35c41;
}
.show .p {
  width: 100%;
  height: 120px;
}
.show .p p {
  width: 100%;
  height: 25px;
  text-align: center;
  line-height: 25px;
  color: #ffffff;
  font-size: 14px;
  margin-top: 5px;
}
.show .link {
  width: 100%;
  height: 200px;
  text-align: center;
}
.link a {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 100px;
  color: #ffffff;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.products {
  margin-top: 45px;
  overflow: hidden;
}
.products .box {
  display: block;
  width: 380px;
  height: 340px;
  margin: 20px 7.5px;
  float: left;
  box-shadow: 0 0 5px #cacaca;
}
.products .box:hover {
  opacity: 1;
}
.products .down {
  height: 60px;
  background: #f2f2f2;
}
.box .img-box {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: url(http://files.cailiao.com/vue/cailiao/pc_6/images/loading.gif) no-repeat center center;
}
.box .img-box img {
  width: 100%;
  height: 100%;
}
.box p {
  width: 100%;
  color: #424242;
  font-size: 16px;
  padding: 0 20px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box .price {
  color: #f2461e;
  /* margin-top: 10px; */
}
.change {
  overflow: hidden;
  height: 30px;
}
.change div {
  width: 50px;
  margin-right: 20px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  color: #424242;
  float: right;
  cursor: pointer;
  border-bottom: 1px solid #424242;
}
.bg {
  height: 484px;
  overflow: hidden;
}
.bg .left {
  width: 642px;
  height: 484px;
  float: left;
  overflow: hidden;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/left.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bg .left img {
  width: 100%;
  height: auto;
}
.bg .right {
  width: 558px;
  height: 484px;
  float: right;
  background: #414141;
}
.right .icon {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  z-index: 800;
  position: relative;
}
.right .des {
  width: 100%;
  height: 184px;
  padding: 0 56px;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 2px;
  line-height: 150%;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
.right .more {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-right: 56px;
  text-align: right;
  color: #fff;
  font-size: 14px;
}
.right .list {
  width: 100%;
  padding: 0 56px;
  font-size: 14px;
  color: #f8b551;
}
.list li {
  height: 30px;
  margin-top: 10px;
}
.list .icon-box {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 32px;
  overflow: hidden;
}
.list .icon-box img {
  width: 100%;
}
.tab li {
  text-align: center;
  margin: 30px 15px 15px;
  font-size: 14px;
  color: #0d0d0d;
}
.container {
  width: 100%;
  overflow: hidden;
}
.container .item {
  display: block;
  width: 274px;
  height: 370px;
  margin: 30px 13px;
  float: left;
  background: #faf8f8;
  box-shadow: 0 0 5px #cacaca;
  position: relative;
}
.container .item:hover {
  opacity: 1;
}
.item .img-box {
  width: 274px;
  height: 280px;
  background: url(http://files.cailiao.com/vue/cailiao/pc_6/images/loading.gif) no-repeat center center;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.item .title {
  color: #0d0d0d;
  font-size: 14px;
  width: 100%;
  margin: 10px 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item .price {
  color: #f2461e;
  font-size: 14px;
  width: 60%;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 15px;
  margin-left: -30%;
}
.item .price a {
  display: block;
  border: 1px solid #f2461e;
  width: 100%;
  height: 100%;
  color: #f2461e;
  border-radius: 5px;
}
.item .price a:hover {
  color: #ffffff;
  background: #f2461e;
  border: 1px solid #f2461e;
}
</style>
<style>
.tab .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #f2461e;
  color: #fff;
  border: none;
}
.tab .el-pagination.is-background .el-pager li {
  margin: 0 5px;
  color: #0d0d0d;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #626262;
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/t-1.png);
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_6/images/t-2.png);
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

