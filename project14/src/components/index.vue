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
          <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/banner1.png" alt>
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/banner2.png" alt>
        </el-carousel-item>
        <el-carousel-item class="ban-box">
          <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/banner3.png" alt>
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
    <!-- 楼层1 -->
    <div class="floor1">
      <div class="safe auto floor">
        <div class="border"></div>
        <p class="row1">
          <span class="ch">最新产品</span>
          <span class="eng">New products</span>
        </p>
        <p class="row2">诚信商家，好质量，看得见</p>
      </div>
    </div>
    <div class="safe auto fenlei">
      <ul class="newest auto">
        <button
          v-for="(x,index) in shop.cate"
          :key="index"
          class="li"
          @click="style(index,x.cate_three_id)"
          :class="flag==index?'bd':'default'"
        >
          <span class="link">{{x.category_str}}</span>
        </button>
      </ul>
    </div>

    <div class="pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in info.list"
        :key="index"
        class="block"
      >
        <div class="imgbox">
          <img :src="item.image" alt>
        </div>
        <div class="down">
          <div class="des">{{item.name}}</div>
          <div class="pri">￥{{item.price_description}}</div>
        </div>
      </a>
    </div>
    <!-- 楼层2 -->
    <div class="floor2">
      <div class="safe auto floor">
        <div class="border"></div>
        <p class="row1">
          <span class="ch">热卖产品</span>
          <span class="eng">Hot selling</span>
        </p>
        <p class="row2">精选新品上架，火速抢购</p>
      </div>
    </div>

    <div class="pro safe auto clearfix">
      <a
        :href="'http://www.cailiao.com/supply/'+item.id+'.html'"
        v-for="(item,index) in hot.item_list"
        :key="index"
        class="block hot"
      >
        <div class="imgbox">
          <img :src="item.image" alt>
        </div>
        <div class="down">
          <div class="des">{{item.name}}</div>
          <div class="hot-pri">
            <div class="hot-l">￥{{item.price_description}}</div>
            <div class="hot-r">
              立即询价
              <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/yx1.png" alt>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="bg-f7">
      <!-- 楼层3 -->
      <div class="floor1">
        <div class="safe auto floor">
          <div class="border"></div>
          <p class="row1">
            <span class="ch">我们的优势</span>
            <span class="eng">Our advantages</span>
          </p>
          <p class="row2">选择我们，值得信赖</p>
        </div>
      </div>
      <div class="safe auto our clearfix">
        <div class="squire">
          <div class="img1">
            <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/yx6.png" alt>
          </div>
          <div class="title">质量保证</div>
          <div class="para m-t-10">精心打磨细节提高</div>
          <div class="para">产品质量为您带来更好</div>
          <div class="para">的体验。</div>
        </div>
        <div class="squire">
          <div class="img2">
            <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/yx5.png" alt>
          </div>
          <div class="title">诚信经营</div>
          <div class="para m-t-10">我们始终本着诚信第</div>
          <div class="para">一的原则来经营产品做值</div>
          <div class="para">得信赖的商家。</div>
        </div>
        <div class="squire">
          <div class="img3">
            <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/yx2.png" alt>
          </div>
          <div class="title">价格实惠</div>
          <div class="para m-t-10">物美价廉，物有所值，绝</div>
          <div class="para">不售卖残次品，不虚抬价格</div>
          <div class="para">给您最实在的体验。</div>
        </div>
        <div class="squire">
          <div class="img4">
            <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/yx3.png" alt>
          </div>
          <div class="title">优秀商家</div>
          <div class="para m-t-10">卖家中的精英，一向以优质的</div>
          <div class="para">产品和服务来对待客户，好评如</div>
          <div class="para">潮商品质量有保障！</div>
        </div>
      </div>
    </div>
    <!-- 楼层4 -->
    <div class="floor2">
      <div class="safe auto floor">
        <div class="border border4"></div>
        <p class="row1">
          <span class="ch">企业介绍</span>
          <span class="eng">Enterprise introduction</span>
        </p>
        <p class="row2 row4">一流品牌，一流服务</p>
      </div>
    </div>
    <div class="safe auto intro clearfix">
      <div class="intro-l">
        <p class="us1">联系</p>
        <p class="us2">我们</p>
        <p class="us-eng">contact us</p>
      </div>
      <div class="intro-m clearfix">
        <div class="m-l">
          <div class="r1">
            <span class="key">联系人：</span>
            <span class="val">{{obj.shop.link_manage}}</span>
          </div>
          <div class="r1">
            <span class="key">联系电话：</span>
            <span class="val">{{obj.shop.mobile}}</span>
          </div>
          <div class="r1">
            <span class="key">地址：</span>
            <span class="val">{{obj.shop.business_address}}</span>
          </div>
          <div class="r1">
            <span class="key">传真：</span>
            <span class="val">{{obj.shop.facsimile}}</span>
          </div>
          <div class="r1">
            <span class="key">QQ：</span>
            <span class="val">{{obj.shop.qq}}</span>
          </div>
        </div>
        <div class="m-r">
          <div class="r1">
            <span class="key">注册资本：</span>
            <span class="val">{{obj.shop.register_capital}}</span>
          </div>
          <div class="r1">
            <span class="key">经营模式：</span>
            <span class="val">{{obj.shop.enterprise_type}}</span>
          </div>
          <div class="r1">
            <span class="key">公司规模：</span>
            <span class="val">{{obj.shop.staff_num}}</span>
          </div>
             <div class="r1">
            <span class="key">成立时间：</span>
            <span class="val">{{obj.shop.time}}</span>
          </div>
          <div class="r1">
            <span class="key">邮箱地址：</span>
            <span class="val">{{obj.shop.user_email}}</span>
          </div>
        </div>
      </div>
      <div class="intro-r">
        <div class="content" v-html="obj.shop.content"></div>
        <router-link class="more" to="/introduce">更多》</router-link>
      </div>
    </div>

    <totop/>
  </div>
</template>
<script>
import Vue from "vue";
import totop from "@/components/common/totop";
export default {
  components: { totop },
  data() {
    return {
      // 供应 最新
      info: {
        list: [],
        pageInfo: {}
      },
      // 店铺
      obj: {
        shop: {},
        ad_list: {}
      },
      // 热卖
      hot: {
        item_list: [],
        page: 1
      },
      // 分类
      shop: {},
      flag: 0,
      cateid: "",
      firstid: { id: "" }
    };
  },
  created() {
    let _this = this;
    // 分类
    _this.api(
      "shop/cate",
      { user_id: window._global.user_id, limit: 3 },
      res => {
        Vue.set(this.shop, "cate", res.data.cate);
        Vue.set(this.firstid, "id", res.data.cate[0].cate_three_id);
        // console.log(this.firstid.id);
        // 供应 最新 order:'update_time'
        _this.api(
          "shop_item/lists",
          {
            user_id: window._global.user_id,
            cate_id: this.firstid.id,
            order: "update_time",
            page: 1,
            perPage: 8
          },
          res => {
            _this.render(res.data);
          }
        );
      }
    );
    //店铺信息
    _this.api("index/index", { user_id: window._global.user_id }, res => {
      Vue.set(this.obj, "shop", res.data.shop);
      Vue.set(this.obj, "ad_list", res.data.ad_list);
      console.log(res);
    });

    // 热卖产品
    _this.api(
      "index/update_list",
      { user_id: window._global.user_id, page: 1, perpage: 12 },
      res => {
        Vue.set(this.hot, "item_list", res.data.item_list);
        Vue.set(this.hot, "page", res.data.page);
      }
    );
  },
  methods: {
    style(index, id) {
      this.flag = index;
      this.cateid = id;
      let _this = this;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: this.cateid,
          order: "update_time",
          page: 1,
          perPage: 8
        },
        res => {
          _this.render(res.data);
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
/* 楼层1 */
.floor {
  position: relative;
  padding: 50px 0 30px;
}
.border {
  width: 17px;
  height: 17px;
  position: absolute;
  left: -3px;
  top: 46px;
  border-top: 2px solid #b61e1e;
  border-left: 2px solid #b61e1e;
}
.row1 {
  margin-left: 5px;
}
.ch {
  color: #b61e1e;
  font-size: 30px;
}
.eng {
  color: #656565;
  font-size: 16px;
}
.row2 {
  color: #bebebe;
  font-size: 14px;
  margin-left: 5px;
}
/* 楼层2 */
.floor2 .row1 {
  text-align: center;
  margin-left: 0;
}
.floor2 .row2 {
  width: 205px;
  margin: 0 auto;
  text-align: left;
}
.floor2 .row4 {
  width: 300px;
}
.floor2 .border {
  left: 488px;
  top: 47px;
}
.floor2 .border4 {
  left: 440px;
  top: 47px;
}
.newest {
  width: 738px;
  height: 30px;
  text-align: center;
  border-bottom: 2px solid #b61e1e;
}
.newest .li {
  outline: none;
  background: none;
  display: inline-block;
  padding: 3px;
  margin: 0 50px;
}
.newest .bd {
  border-bottom: 3px solid #1d1d1d;
}
.link {
  color: #000;
  font-size: 16px;
  cursor: pointer;
}
.pro {
  margin-top: 40px;
}
.block {
  float: left;
  display: block;
  margin: 5px 20px;
  width: 260px;
  background: rgba(249, 249, 249, 1);
  box-shadow: 1px 2px 4px 0px rgba(93, 93, 93, 0.5);
}
.block .imgbox {
  width: 100%;
  height: 273px;
  padding: 5px;
  overflow: hidden;
}
.imgbox img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.down {
  width: 100%;
  color: #000000;
  font-size: 14px;
}
.des {
  width: 100%;
  height: 40px;
  overflow: hidden;
  padding: 0 20px;
}
.pri {
  color: #b61e1e;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  padding: 7px 20px;
}
.hot-pri {
  width: 100%;
  height: 34px;
  line-height: 34px;
  background: #eaeaea;
  overflow: hidden;
}
.hot-pri .hot-l {
  width: 50%;
  float: left;
  text-align: right;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 600;
  color: #c14e4e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px dotted #979797;
}
.hot-pri .hot-r {
  width: 50%;
  float: left;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
  text-align: left;
  padding: 0 15px;
}
.hot-r img {
  width: 18px;
  height: 12px;
  position: relative;
  left: 7px;
  top: -1px;
}
.hot {
  border: 1px solid #dedede;
  box-shadow: none;
}
/* 我们的优势 */
.bg-f7 {
  background: #f7f7f7;
  margin-top: 40px;
}
.squire {
  width: 233px;
  height: 242px;
  padding: 0 10px;
  float: left;
  margin: 0 33.5px 20px;
  background-clip: content-box;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_14/images/yx7.png);
  background-size: 100% 100%;
}
.squire .img1 {
  width: 43px;
  height: 60px;
  margin: 30px auto 13px;
}
.squire .img2 {
  width: 67px;
  height: 38px;
  margin: 52px auto 13px;
}
.squire .img3 {
  width: 60px;
  height: 60px;
  margin: 27px auto 15px;
}
.squire .img4 {
  width: 61px;
  height: 51px;
  margin: 30px auto 22px;
}
.img1 img,
.img2 img,
.img3 img,
.img4 img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 25px;
  color: #fff;
  text-align: center;
}
.squire .m-t-10 {
  margin-top: 10px;
}
.para {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 12xp;
  color: #ffd4aa;
}
/* 企业介绍 */
.intro {
  height: 215px;
  border: 2px solid #b04848;
}
.intro-l {
  float: left;
  width: 182px;
  height: 215px;
  background: #b04848;
  color: #fff;
  overflow: hidden;
}
.intro .us1 {
  width: 90px;
  font-size: 30px;
  margin: 40px auto 0;
  text-align: left;
}
.intro .us2 {
  width: 90px;
  font-size: 30px;
  margin: 0 auto;
  text-align: right;
}
.us-eng {
  font-size: 24px;
  text-align: center;
  margin-top: 14px;
}
.intro-m {
  float: left;
  width: 417px;
  height: 200px;
  margin: 6px 0;
  padding: 25px 0 0 20px;
  overflow: hidden;
  border-right: 2px solid #bebebe;
}
.intro-m .r1 {
  margin-top: 6px;
}
.r1 .key {
  color: #656565;
  font-size: 14px;
}
.r1 .val {
  color: #000000;
  font-size: 14px;
}
.intro-m .m-l {
  width: 46%;
  padding-right: 15px;
  float: left;
}
.intro-m .m-r {
  width: 54%;
  float: left;
}
.intro-r {
  width: 597px;
  height: 210px;
  font-size: 16px;
  color: #000;
  letter-spacing: 1px;
  padding: 20px 40px;
  float: left;
  overflow: hidden;
}
.content {
  height: 158px;
  overflow: hidden;
}
.more {
  display: block;
  width: 100%;
  color: #b61e1e;
  font-size: 16px;
  text-align: right;
}
/* hover */
.block:hover {
  opacity: 1;
}
.block img:hover {
  transform: scale(1.2);
}
</style>


