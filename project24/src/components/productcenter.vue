<template>
  <div>
    <div class="banner-box"></div>
    <div class="safe auto bread">
      当前位置：
      <span class="web" @click="blank">中国材料网&gt;</span>
      <router-link to="/" class="infoName">{{shop.enterprise_name}}&gt;</router-link>
      <span>产品中心</span>
    </div>
    <div class="safe auto">
      <div class="pro-container">
        <div class="left">
          <div class="icon-head">
            <p>产品分类</p>
            <p>Product classification</p>
          </div>
          <ul class="list">
            <li
              v-for="(x,index) in shop.cate"
              :key="index"
              @click="style(index)"
              :class="flag==index?'click':'default'"
            >
              <span :class="flag==index?'white':'default'">{{x.category_str}}</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="bread-nav">
            <span>排序：</span>
            <span class="orderTime">
              <span>时间</span>
              <button
                class="btn2 btn"
                :class="tflag1==true?'btn22':'default'"
                @click="order_set('update_time',tflag1)"
              ></button>
              <button
                class="btn1 btn"
                :class="tflag1==true?'default':'btn11'"
                @click="order_set('update_time',tflag1)"
              ></button>
            </span>
          </div>
          <div class="products">
            <div v-for="(item,index) in info.list" :key="index">
              <a :href="'http://www.cailiao.com/supply/'+item.id+'.html'">
                <span class="img-box">
                  <img
                    :src="item.image"
                    @mouseover="moveimg($event)"
                    @mouseout="outimg($event)"
                    alt
                  />
                </span>
                <p class="price">￥{{item.price_description}}</p>
                <p class="name">{{item.name}}</p>
              </a>
            </div>
          </div>
          <div class="bottom">
            <div class="auto box">
              <span class="line"></span> 已经到底啦
              <span class="line"></span>
            </div>
          </div>

          <div>
            <div class="block w1200">
              <div class="margin">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="info.pageInfo.page"
                  :total="info.pageInfo.total"
                  :page-size="12"
                  small
                  background
                  layout="prev, pager, next, jumper"
                  prev-text="上一页"
                  next-text="下一页"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      info: {
        list: [],
        pageInfo: {
          page: 1
        }
      },
      order: [],
      pflag1: "",
      tflag1: "",
      flag: -5,
      order_by: "asc",
      shop: {}
    };
  },
  created() {
    let _this = this;
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        cate_id: _this.$route.query.cate_id,
        pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
      },
      function(res) {
        _this.render(res.data);
      }
    );

    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "enterprise_name", res.data.shop.enterprise_name);
    });

    _this.api("shop/cate", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "cate", res.data.cate);
    });
  },

  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      console.log(from,to);
      //做一些路由变化的响应
      let _this = this;
      _this.info.pageInfo.page = 1;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.$route.query.cate_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
        },
        resp => {
          _this.render(resp.data);
        }
      );
      //重新获取数据
    }
  },
  methods: {
    style(index) {
      this.flag = index;
      let _this = this;
      _this.info.pageInfo.page = 1;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.shop.cate[index].cate_three_id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
        },
        function(res) {
          _this.render(res.data);
        }
      );
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.api(
        "shop_item/lists",
        {
          user_id: window._global.user_id,
          cate_id: _this.$route.query.cate_id,
          pageParams: {
            page: val,
            perPage: 12,
            order: _this.order,
            order_by: _this.order_by
          }
        },
        res => {
          _this.render(res.data);
        }
      );
    },
    order_set(event, flag, e) {
      let _this = this;
      if (event == "update_time") {
        if (this.tflag1) {
          Vue.set(this, "order", event);
          Vue.set(this, "order_by", "asc");
          _this.api(
            "shop_item/lists",
            {
              user_id: window._global.user_id,
              cate_id: _this.$route.query.cate_id,
              pageParams: {
                page: _this.info.pageInfo.page,
                perPage: 12,
                order: _this.order,
                order_by: _this.order_by
              }
            },
            res => {
              _this.render(res.data);
              this.tflag1 = !flag;
            }
          );
        } else {
          this.tflag1 = !flag;
          Vue.set(this, "order", event);
          Vue.set(this, "order_by", "desc");
          _this.api(
            "shop_item/lists",
            {
              user_id: window._global.user_id,
              cate_id: _this.$route.query.cate_id,
              pageParams: {
                page: _this.info.pageInfo.page,
                perPage: 12,
                order: _this.order,
                order_by: _this.order_by
              }
            },
            res => {
              _this.render(res.data);
              this.tflag1 = !flag;
            }
          );
        }
      } else if (event == "price") {
        if (this.pflag1) {
          Vue.set(this, "order", event);
          Vue.set(this, "order_by", "asc");
          _this.api(
            "shop_item/lists",
            {
              user_id: window._global.user_id,
              cate_id: _this.$route.query.cate_id,
              pageParams: {
                page: _this.info.pageInfo.page,
                perPage: 12,
                order: _this.order,
                order_by: _this.order_by
              }
            },
            res => {
              _this.render(res.data);
              this.pflag1 = !flag;
            }
          );
        } else {
          this.pflag1 = !flag;
          Vue.set(this, "order", event);
          Vue.set(this, "order_by", "desc");
          _this.api(
            "shop_item/lists",
            {
              user_id: window._global.user_id,
              cate_id: _this.$route.query.cate_id,
              pageParams: {
                page: _this.info.pageInfo.page,
                perPage: 12,
                order: _this.order,
                order_by: _this.order_by
              }
            },
            res => {
              _this.render(res.data);
              this.pflag1 = !flag;
            }
          );
        }
      }
    },
    blank() {
      window.location.href = "http://www.cailiao.com";
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
.bread {
  font-size: 14px;
  color: #767676;
  margin-top: 20px;
}
.bread a {
  font-size: 14px;
  color: #767676;
}
.bread .el-breadcrumb {
  display: inline-block;
}
.banner-box {
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/new-ban2.jpg);
}
.pro-container {
  width: 100%;
  margin-top: 21px;
  overflow: hidden;
}
.pro-container .left {
  width: 211px;
  /* background: #f2f2f2; */
  float: left;
}
.left .icon-head {
  width: 100%;
  height: 69px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: url(http://files.cailiao.com/vue/cailiao/pc_18/images/icon-head.png)
    no-repeat;
}
.left .list {
  width: 95%;
  background: #f2f2f2;
  margin-top: -15px;
  border-left: 1px solid #cecece;
  border-right: 1px solid #cecece;
}
.left .list li {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  height: 37px;
  line-height: 37px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
}
.left .list span {
  display: block;
  width: 100%;
  height: 100%;
}
.left .list li span:hover {
  background: #3a63ac;
  color: #ffffff;
}
.left .list .click {
  background: #3a63ac;
  color: #ffffff;
}
.left .list li .white {
  color: #ffffff;
}
.pro-container .right {
  width: 980px;
  float: right;
}
.right .bread-nav {
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
  background: #f2f2f2;
}
.right .products {
  width: 100%;
  overflow: hidden;
}
.right .products a {
  display: block;
  width: 230px;
  padding-bottom: 10px;
  float: left;
  margin: 30px 0 30px 10px;
  border: 1px solid #c5c6c6;
}
.right .products a:hover {
  opacity: 1;
}
.right .products a .img-box {
  display: block;
  width: 100%;
  height: 242px;
  overflow: hidden;
  border-bottom: 1px solid #c5c6c6;
}
.right .products a .price {
  font-size: 14px;
  color: #bf0909;
}
.right .products a .name {
  height: 38px;
  font-size: 14px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.right .products a .img-box img {
  width: 100%;
  height: auto;
  display: block;
}
.right .products a p {
  width: 100%;
  padding: 0 10px;
}
.bottom {
  width: 980px;
  font-size: 14px;
  color: rgba(161, 161, 161, 1);
  margin: 50px 0;
}
.bottom .line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
.bottom .box {
  width: 500px;
}
.margin {
  position: relative;
  left: 35%;
  margin: 30px 0;
}
.orderPrice {
  margin-left: 40px;
}
.btn {
  margin-left: 10px;
  vertical-align: middle;
  width: 17px;
  height: 17px;
  cursor: pointer;
  outline: 0;
  border-radius: 5px;
}
.btn1 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/btn1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.btn11 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/btn11.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bread-nav .btn22 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/btn22.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.btn2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_18/images/btn2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.orderTime {
  font-size: 12px;
  margin-left: 100px;
}
.web:hover,
.infoName:hover {
  color: #2e8ac7;
  cursor: pointer;
  font-weight: bolder;
}
.el-breadcrumb {
  margin-top: 20px;
}
</style>
