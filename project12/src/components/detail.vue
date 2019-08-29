<template>
  <div>
    <div class="container">
      <div class="safe auto">
        <div class="navbar">
          <span>当前位置：</span>
          <a href="http://www.cailiao.com">中国材料网></a>
        </div>
        <div class="pro">
          <div class="left" id="big">
            <div id="box">
              <img
                v-for="(item,index) in info.shop_item_img_list"
                v-show="index==num"
                :key="index"
                :src="item.file"
                @mousemove="move"
                @mouseout="out"
                alt
              >
            </div>
            <div id="view" v-show="flag1">
              <img
                v-show="index==num"
                v-for="(item,index) in info.shop_item_img_list"
                :style="{left:l+'px',top:t+'px'}"
                :src="item.file"
                :key="index+'1'"
                alt
              >
            </div>

            <div id="img-box">
              <button id="left" @click="prev"></button>
              <ul id="ul">
                <li
                  v-for="(item,index) in info.shop_item_img_list"
                  :class="{spot:index==num}"
                  @click="num=index"
                  :key="index+'1'"
                >
                  <img :src="item.file" alt>
                </li>
              </ul>
              <button id="right" @click="next"></button>
            </div>
          </div>

          <div class="right">
            <h3 id="title">{{info.shop_item_info.title}}</h3>
            <div class="des">{{info.shop_item_info.title}}，欢迎选购！</div>
            <div class="r-t">
              <div class="over">
                <p class="p">
                  <span class="name">价格</span>
                  <span class="signal same">￥</span>
                  <span class="price">{{info.shop_item_info.price}}</span>
                </p>
                <p class="p">
                  <span class="name">产品数量</span>
                  <span class="same">{{info.shop_item_info.amount}}个</span>
                </p>
                <p class="p">
                  <span class="name">企业</span>
                  <span class="same">{{info.shop.name}}</span>
                </p>
                <p class="p">
                  <span class="name">地址</span>
                  <span class="same">{{info.shop.address}}</span>
                </p>
              </div>

              <div class="contact">
                <div class="icon-box"></div>
                <div class="link-man">
                  <p class="person">
                    {{info.shop.link_man}}&#x3000;
                  </p>
                  <p class="call">
                    <span class="mobile">{{info.shop.tele}}</span>
                    <span class="phone">{{info.shop.phone}}</span>
                  </p>
                </div>
              </div>
              <div class="line"></div>
              <div class="btn clearfix">
                <div class="ask box" @click="showAlert(1)">
                  <span class="ico"></span>
                  <span class="m-l-5">立即询价</span>
                </div>
                <router-link to="/" class="link box">进入商铺</router-link>
                <div class="look box">
                  <span>手机查看</span>
                  <span class="img-boxs">
                  </span>
                </div>
              </div>
              <a :href="info.shop.homepage" class="spe">
                <span class="ico1"></span> 企业官网
              </a>
            </div>
          </div>
        </div>
        <div class="recom">
          <span class="ico2"></span> 推荐商品
        </div>
        <div class="products" :style="{height:info.shop_reitem.length>=5?'260px':'default'}">
          <router-link
            :to="{path:'/detail',query:{id:item.id}}"
            class="pro"
            v-for="(item,index) in info.shop_reitem"
            :key="index"
          >
            <div class="img">
              <img :src="item.img" alt>
            </div>
            <p class="title">{{item.title}}</p>
            <p class="price">￥{{item.price}}</p>
          </router-link>
        </div>
        <div class="view-b">
          <div class="left">
            <div class="info">
              <div class="head"></div>
              <p class="name">{{info.shop.name}}</p>
              <p class="row1 row">
                <span>企业服务：</span>
                <span class="icon-2"></span>
              </p>
              <p class="row2 row">
                联系姓名：
                <span class="color">{{info.shop.link_man}}</span>
              </p>
              <p class="row3 row">
                手机号码：
                <span class="color">{{info.shop.tele}}</span>
              </p>
              <p class="row4 row">
                电话号码：
                <span class="color">{{info.shop.phone}}</span>
              </p>
              <p class="row5 row">
                传真：
                <span class="color">{{info.shop.tax}}</span>
              </p>
              <p class="row6 row">
                所在地区：
                <span class="color">{{info.shop.address}}</span>
              </p>
              <p class="row7 row">
                主营产品：
                <span class="color">{{info.shop.business_scope}}</span>
              </p>
              <div class="line"></div>
              <router-link to="/" class="shop">
                <span class="ico3"></span>进入店铺
              </router-link>
            </div>
            <div class="hot">
              <div class="head">热销产品</div>
              <router-link
                :to="{path:'/detail',query:{id:item.id}}"
                class="hot-pro"
                v-for="(item,index) in info.shop_reitem"
                :key="index"
              >
                <div class="img">
                  <img :src="item.img" alt>
                </div>
                <p class="title">{{item.title}}</p>
                <p class="price">￥{{item.price}}</p>
              </router-link>
              <div class="line"></div>
            </div>
          </div>
          <div class="right">
            <div class="head-box">
              <div class="head">产品详情</div>
            </div>
            <div class="ta-head">商品参数</div>
            <div class="table">
              <div class="row" v-for="(item,index) in info.shop_item_attr_list" :key="index">
                <div class="t-l">{{item.name}}</div>
                <div class="t-r">{{item.val}}</div>
              </div>
            </div>
            <div class="pic">商品图片</div>
            <div class="img-box" v-for="(item,index) in info.shop_item_img_list" :key="index">
              <img :src="item.file" alt>
            </div>
            <div class="bottom">
              <span class="line"></span>
              <span class="all">已经到底了</span>
              <span class="line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 询价遮罩层 -->
    <div class="mark" :style="flag==1?'':'display:none'">
      <div class="content">
        <div class="title">发送询价单</div>
        <div class="line"></div>
        <form method="post" action>
          <div class="f-row">
            <span class="forward">您的姓名：</span>
            <span class="input">
              <input v-model="uname" :placeholder="uname_placeholder" type="text">
            </span>
          </div>
          <div class="f-row">
            <span class="forward">联系电话：</span>
            <span class="input">
              <input v-model="title" :placeholder="title_placeholder" type="text">
            </span>
          </div>
          <div class="f-row">
            <span class="forward">采购留言：</span>
            <span class="input">
              <textarea v-model="infoo" :placeholder="info_placeholder" cols="20" rows="5"></textarea>
            </span>
          </div>
          <div class="submit" @click="submit">立即询价</div>
          <div class="shut" @click="shut">x</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "underscore";
export default {
  data() {
    return {
      num: 0, //轮播
      l: 0,
      t: 0,
      type: 0, //参数切换
      flag: 0, //遮罩层
      flag1: false, //鼠标移入移出
      uname: "",
      uname_placeholder: "请输入您的姓名",
      title: "",
      title_placeholder: "请输入留言主题",
      infoo: "",
      info_placeholder: "请输入留言内容",
      info: {
        shop_item_img_list: [],
        shop_item_info: {},
        shop: {},
        shop_item_attr_list: {},
        shop_reitem: []
      },
      list: [] //商品推荐
    };
  },
  created() {
    let _this = this;
    _this.api(
      "shop_item/info",
      { shop_item_id: _this.$route.query.id },
      resp => {
        _this.render(resp.data);
      }
    );
    _this.$store.commit("loading_show");
    _this.api("index/index", { shop_id: window._global.shop_id }, res => {
      this.list = res.data;
      _this.$store.commit("loading_hide");
    });
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      let _this = this;
      _this.$store.commit("loading_show");
      _this.api(
        "shop_item/info",
        { shop_item_id: _this.$route.query.id },
        resp => {
          _this.render(resp.data);
          _this.$store.commit("loading_hide");
        }
      );
    }
  },

  methods: {
    // 参数切换
    showType: function(type) {
      this.type = type;
    },
    // 显示遮罩层
    showAlert(flag) {
      this.flag = flag;
    },
    // 关闭遮罩层
    shut() {
      this.flag = 0;
    },
    // 遮罩层内提交
    submit() {
      var _this = this;
      let data = {
        uname: _this.uname,
        title: _this.title,
        infoo: _this.info0
      };
      if (_.empty(_this.uname)) {
        return alert(_this.uname_placeholder);
      }
      if (_.empty(_this.title)) {
        return alert(_this.title_placeholder);
      }
      if (_.empty(_this.infoo)) {
        return alert(_this.infoo_placeholder);
      }
      _this.$store.commit("loading_show");
      _this.api("feedback/add", data, function(resp) {
        alert("添加成功");
        _this.$store.commit("loading_hide");
      });
      // 提交后清空input
      this.uname = "";
      this.title = "";
      this.infoo = "";
    },
    // 轮播下一张
    next() {
      this.num++;
      if (this.num == this.info.shop_item_img_list.length) {
        this.num = 0;
      }
    },
    prev() {
      if (this.num <= 0) {
        this.num = this.info.shop_item_img_list.length;
      }
      this.num--;
    },
    // 放大镜
    move(e) {
      this.flag1 = true;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      var big = document.getElementById("big");
      var box = document.getElementById("box");
      var left = e.clientX - big.offsetLeft + scrollLeft;
      var top = e.clientY - big.offsetTop + scrollTop;
      if (left < 50) {
        left = 50;
      }
      if (left > 390) {
        left = 390;
      }
      if (top < 50) {
        top = 50;
      }
      if (top > 350) {
        top = 350;
      }
      this.l = -left * 2 + 100;
      this.t = -top * 2 + 100;
    },
    out() {
      this.flag1 = false;
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
}

.safe {
  width: 1200px;
}

.auto {
  margin: 0 auto;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.navbar {
  color: #1b1b1b;
  font-size: 12px;
  padding: 12px 0;
}

.navbar a {
  color: #1b1b1b;
  font-size: 12px;
}

.pro {
  width: 100%;
  overflow: hidden;
  margin-top: 5px;
}

.pro .left {
  width: 440px;
  height: 540px;
  float: left;
  position: relative;
}

#box {
  width: 440px;
  height: 438px;
  overflow: hidden;
  border: 1px solid #dedede;
}

#box img {
  width: 100%;
  height: 438px;
  position: absolute;
  top: 0;
  left: 0;
}

#img-box {
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#ul {
  overflow: hidden;
}

#ul li {
  width: 65px;
  height: 60px;
  float: left;
  margin: 0 5px;
}

#img-box li img {
  width: 100%;
  height: 100%;
}

#left,
#right {
  width: 18px;
  height: 60px;
  border: none;
  cursor: pointer;
}
#left {
  background-image: url(../assets/images/arrow1.png);
  background-repeat: no-repeat;
  background-position: center;
}

#right {
  background-image: url(../assets/images/arrow2.png);
  background-repeat: no-repeat;
  background-position: center;
}
#view {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  left: 480px;
  top: 2px;
  z-index: 999;
}

#view img {
  width: 880px;
  height: 876px;
  position: absolute;
  top: 0;
  left: 0;
}

.pro .right {
  float: right;
  width: 720px;
}

.right #title {
  font-size: 20px;
  color: #000;
}

.right .des {
  font-size: 12px;
  color: #053fae;
  margin-top: 10px;
}

.right .r-t {
  width: 100%;
  height: 380px;
  margin-top: 5px;
  position: relative;
  background: #fffded;
  border-bottom: 1px solid #666;
}

.over {
  overflow: hidden;
}

.r-t .name {
  font-size: 14px;
  color: #000;
  font-weight: bolder;
}

.r-t .same {
  color: #181818;
  font-size: 16px;
  margin-left: 50px;
}

.r-t .p {
  margin-top: 25px;
  padding-left: 15px;
}

.r-t .over .p .price {
  color: #d7272d;
  font-size: 24px;
  font-weight: bolder;
}
.r-t .over .p .signal {
  color: #d7272d;
  font-size: 14px;
  font-weight: bolder;
}
.contact {
  width: 100%;
  overflow: hidden;
  margin-top: 40px;
  padding-left: 15px;
}
.contact .call {
  font-size: 26px;
}
.contact div {
  float: left;
}

.contact .icon-box {
  width: 42px;
  height: 43px;
  background-image: url(../assets/images/icon-5.png);
}

.call .phone {
  margin-left: 10px;
}

.contact .link-man .person {
  font-size: 16px;
  font-family: "宋体";
}
.contact .link-man {
  margin-left: 35px;
}
.r-t .line {
  width: 100%;
  height: 1px;
  margin-top: 25px;
  border: 0.5px dashed #c4c4c4;
}

.r-t .btn {
  width: 100%;
}

.btn .box {
  width: 112px;
  height: 40px;
  border-radius: 4px;
  float: left;
  margin-left: 65px;
  margin-top: 8px;
  cursor: pointer;
  font-weight: bolder;
  font-family: "宋体";
}

.btn .ask {
  color: #030303;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  background-color: #ec965e;
}
.ask .m-l-5 {
  margin-left: -5px;
}
.btn .ask .ico {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-image: url(../assets/images/icon-01.png);
  position: relative;
  top: -2px;
}

.btn .link {
  width: 112px;
  height: 40px;
  border-radius: 4px;
  display: block;
  color: #030303;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
  border: 2px solid #fc924c;
}

.btn .look {
  color: #030303;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  background-color: #fcaf7d;
  transition: all 0.3s;
}

.look:hover {
  height: 140px;
}

.look .img-boxs {
  display: block;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  background: red;
  overflow: hidden;
}

.img-boxs img {
  width: 100%;
  height: auto;
}

.r-t .spe {
  display: block;
  width: 100px;
  height: 38px;
  background: #4d4d4d;
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 38px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.spe .ico1 {
  display: inline-block;
  width: 17px;
  height: 18px;
  vertical-align: middle;
  background-image: url(../assets/images/icon-02.png);
  position: relative;
  top: -2px;
}

/* 遮罩层 */
.mark {
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  color: #151515;
}

.mark > .content {
  width: 460px;
  height: 400px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 50px;
  border-radius: 10px;
}

.mark > .content > .title {
  font-weight: bolder;
  margin: 0 auto;
  font-size: 18px;
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}

.mark > .content > .line {
  font-weight: bolder;
  margin: 10px auto;
  width: 70px;
  height: 1px;
  border: 1px solid #232323;
}

.forward {
  font-size: 16px;
  font-weight: bolder;
  display: inline-block;
  width: 80px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
}

.f-row {
  margin-top: 30px;
}

.input input {
  width: 200px;
  height: 30px;
  margin-left: 5px;
  border: none;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}

.input textarea {
  width: 200px;
  height: 50px;
  margin-left: 5px;
  border: none;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}

.submit {
  width: 102px;
  margin: 45px auto 0;
  height: 27px;
  color: #ffffff;
  background: #181818;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.spot {
  border: 1px solid black;
}

.shut {
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: #999999;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.shut:hover {
  color: red;
}

/* 推荐商品 */
.recom {
  width: 180px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #3d6bc6;
  color: #fff;
  border-radius: 12px;
  margin: 48px auto 26px;
}

.recom .ico2 {
  display: inline-block;
  width: 17px;
  height: 20px;
  vertical-align: middle;
  background-image: url(../assets/images/icon-3.png);
  position: relative;
  top: -4px;
}

.products {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px dotted #cecece;
}

.products .pro {
  display: block;
  width: 210px;
  float: left;
  margin: 0 15px 10px;
}

.products .pro .img {
  width: 210px;
  height: 210px;
  background: #999;
  overflow: hidden;
  border: 1px solid #cecece;
}

.pro .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
  color: #5f5f5f;
  text-align: center;
  margin-top: 5px;
}

.pro .price {
  font-size: 14px;
  color: #d7272d;
  text-align: center;
  font-weight: bolder;
}

.view-b {
  margin-top: 60px;
  overflow: hidden;
}

.view-b .left {
  width: 250px;
  float: left;
  margin-bottom: 50px;
}
.view-b .left .info .row1 .icon-2 {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-image: url(../assets/images/icon-2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 4px;
  left: 20px;
}
.left .info {
  width: 100%;
  font-size: 14px;
  color: #5f5f5f;
  border: 1px solid #cecece;
}

.info .head {
  width: 100%;
  height: 70px;
  color: #fff;
  font-size: 34px;
  padding: 0 14px;
  text-align: center;
  line-height: 70px;
  background-image: url(../assets/images/icon-6.png);
  background-repeat: no-repeat;
}

.info .name {
  color: #0644ce;
  font-size: 14px;
  padding: 0 14px;
  text-align: center;
}

.info .row {
  margin-top: 15px;
  padding: 0 14px;
}

.info .color {
  color: #000;
}

.info .line {
  margin-top: 10px;
  width: 100%;
  height: 1px;
  border: 0.5px dotted #cecece;
}

.info .shop {
  display: block;
  width: 100%;
  height: 57px;
  font-size: 14px;
  color: #fff;
  margin-top: 12px;
  background: #3d6bc6;
  line-height: 57px;
  text-align: center;
  font-weight: bolder;
}

.shop .ico3 {
  display: inline-block;
  width: 23px;
  height: 18px;
  vertical-align: middle;
  background-image: url(../assets/images/icon-4.png);
  position: relative;
  top: -2px;
  left: -5px;
}

.hot {
  width: 100%;
  margin-top: 40px;
  border: 1px solid #cecece;
  background: #f7f7f7;
}

.hot .head {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-weight: bolder;
  background: #3d6bc6;
}

.hot-pro {
  display: block;
  width: 234px;
  margin: 30px 8px;
}

.hot-pro .img {
  width: 234px;
  height: 234px;
  overflow: hidden;
  border: 1px solid #cecece;
}

.hot-pro .title {
  color: #000;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bolder;
}

.hot-pro .price {
  color: #d7272d;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  font-weight: bolder;
}

.hot .line {
  width: 100%;
  height: 1px;
  margin: 20px 0;
  border: 0.5px dotted #cecece;
}

.view-b .right {
  float: right;
  width: 928px;
  border: 1px solid #cecece;
}

.right .head-box {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #cecece;
}

.head-box .head {
  width: 140px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: #3d6bc6;
  color: #fff;
  font-size: 14px;
}

.right .ta-head {
  width: 100%;
  font-size: 14px;
  color: #5f5f5f;
  text-align: center;
  padding: 15px 0;
}

.table {
  font-size: 14px;
  width: 770px;
  margin: 0 auto;
  overflow: hidden;
  border-right: 1px solid #cecece;
  border-top: 1px solid #cecece;
}

.table .row {
  float: left;
  overflow: hidden;
}

.row .t-l {
  width: 130px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #cecece;
  border-right: 1px solid #cecece;
  border-left: 1px solid #cecece;
  background: #f5f5f5;
  float: left;
}

.row .t-r {
  width: 254px;
  height: 40px;
  float: left;
  line-height: 40px;
  padding-left: 10px;
  background: #fff;
  border-bottom: 1px solid #cecece;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.right .pic {
  width: 100%;
  font-size: 14px;
  color: #5f5f5f;
  text-align: center;
  padding: 15px 0;
  margin: 20px 0;
}

.right .img-box {
  width: 884px;
  margin: 10px auto;
  overflow: hidden;
}

.img-box img,
.img img {
  width: 100%;
  height: auto;
}
.bottom {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.bottom .all {
  display: inline-block;
  width: 100px;
  color: #b3b3b3;
  text-align: center;
}
.bottom .line {
  display: inline-block;
  width: 300px;
  height: 1px;
  background: #b3b3b3;
}
</style>


