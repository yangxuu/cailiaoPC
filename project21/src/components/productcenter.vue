<template>
  <div>
    <router-view></router-view>
    <div class="banner-box"></div>
    <div class="safe auto bread">
      当前位置：
      <span class="web" @click="blank">中国材料网&gt;</span>
      <router-link to="/" class="infoName">{{shop.enterprise_name}}&gt;</router-link>
      <span>产品中心</span>
    </div>
    <div class="safe auto">
      <div class="pro-container">
        <!-- 普通分类 -->
        <div class="left0" v-show="!state.status">
          <div class="icon-head">
            <p>产品分类</p>
            <p>Product classification</p>
          </div>
          <ul class="list0">
            <li
              v-for="(x,index) in shop.cate0"
              :key="index"
              @click="style0(index,x.cate_three_id)"
              :class="flag==index?'click':'default'"
            >
              <a :class="flag==index?'white':'default'">{{x.category_str}}</a>
            </li>
          </ul>
        </div>
        <!-- 带有橱窗 -->
        <div class="left" v-show="state.status">
          <div class="icon-head">产品分类</div>
          <div class="list">
            <!-- 新分类样式 -->
            <div class="list-all" :class="listhidden?'click':'default'" @click="tab">
              <span class="for-signal" ref="signal">-</span>
              <span style="margin-left:5px;">全部产品</span>
            </div>
            <div class="firstcate" v-show="listhidden">
              <div class="kinds-li-1" v-for="(x,item) in shop.cate" :key="item">
                <!-- 一级分类 -->
                <li @click="style(item,x.id)" :class="flag==item?'click':'default'">
                  <span class="for-signal" :class="flag==item?'yes':'no'">+</span>
                  <span style="margin-left:5px;">{{x.name}}</span>
                </li>
                <!-- 二级分类 -->
                <div class="kinds-li-detail" v-show="flag==item">
                  <div
                    @click="second(index,xitem.id)"
                    v-for="(xitem,index) in cate.cate"
                    :key="index+'a'"
                  >
                    <router-link
                      :class="flag1==index?'click':'default'"
                      :to="{path:'/newcate',query:{new_cate_id:xitem.id}}"
                    >{{xitem.name}}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      // 控制橱窗
      state: {
        status: ""
      },
      // 右侧商品
      info: {
        list: [],
        pageInfo: {
          page: 1
        }
      },
      order: [],
      tflag1: "", //时间升降序
      flag: -5, //点击一级分类字体变蓝
      flag1: -5, //点击二级分类字体变蓝
      order_by: "asc",
      shop: {}, //一级分类
      cate: [], //二级分类
      listhidden: true, //控制分类显示隐藏
      id: "" //当前二级目录id
    };
  },
  created() {
    let _this = this;
    localStorage.removeItem("new_cate_flag0")
    localStorage.removeItem("new_cate_flag")
    localStorage.removeItem("cate_flag")
    // 判断state
    _this.api(
      "shop/get_cate_status",
      {
        user_id: window._global.user_id
      },
      res => {
        Vue.set(this.state, "status", res.data.status);
      }
    );
    // 初始化商品
    _this.api(
      "shop_item/lists",
      {
        user_id: window._global.user_id,
        pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
      },
      res => {
        _this.render(res.data);
      }
    );
    // 一级类目parent_id:0
    _this.api(
      "shop/catemgr",
      { user_id: window._global.user_id, parent_id: 0 },
      res => {
        Vue.set(this.shop, "cate", res.data.cate);
      }
    );
    // 普通分类
    _this.api("shop/cate", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "cate0", res.data.cate);
    });
    // 公司信息
    _this.api("shop/info", { user_id: window._global.user_id }, res => {
      Vue.set(this.shop, "enterprise_name", res.data.shop.enterprise_name);
    });
  },
  methods: {
    // 普通分类
    style0(index, id) {
      let _this = this;
      _this.flag = index;
      _this.$router.push({
        path: "/cate",
        query: { cate_id: id }
      });
    },
    // 橱窗分类
    style(index, id) {
      let _this = this;
      _this.flag = index;
      // 二级类目parent_id:当前id
      _this.api(
        "shop/catemgr",
        {
          user_id: window._global.user_id,
          parent_id: id
        },
        res => {
          Vue.set(this.cate, "cate", res.data.cate);
        }
      );
    },
    // 点击二级分类
    second(index, id) {
      let _this = this;
      _this.flag1 = index;
      _this.api(
        "shop/item_list",
        {
          user_id: window._global.user_id,
          cate_id: id,
          pageParams: { page: _this.info.pageInfo.page, perPage: 12 }
        },
        resp => {
          _this.render(resp.data);
        }
      );
    },
    // 点击全部产品
    tab() {
      this.listhidden = !this.listhidden;
      if (this.listhidden) {
        this.$refs.signal.innerHTML = "-";
      } else {
        this.$refs.signal.innerHTML = "+";
      }
    },
    // 翻页
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      if (!this.state.status) {
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
      } else {
        _this.api(
          "shop/item_list",
          {
            user_id: window._global.user_id,
            cate_id: _this.$route.query.new_cate_id,
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
      }
    },
    // 时间排序
    order_set(event, flag, e) {
      let _this = this;
      if (!_this.state.status) {
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
      } else {
        if (event == "update_time") {
          if (this.tflag1) {
            Vue.set(this, "order", event);
            Vue.set(this, "order_by", "asc");
            _this.api(
              "shop/item_list",
              {
                user_id: window._global.user_id,
                cate_id: _this.$route.query.new_cate_id,
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
              "shop/item_list",
              {
                user_id: window._global.user_id,
                cate_id: _this.$route.query.new_cate_id,
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
              "shop/item_list",
              {
                user_id: window._global.user_id,
                cate_id: _this.$route.query.new_cate_id,
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
              "shop/item_list",
              {
                user_id: window._global.user_id,
                cate_id: _this.$route.query.new_cate_id,
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
      }
    },
    // 点击中国材料网
    blank() {
      window.location.href = "http://www.cailiao.com";
    },
    // 图片移动效果
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/new-ban2.jpg);
}
.pro-container {
  width: 100%;
  margin-top: 21px;
  overflow: hidden;
}
.pro-container .left {
  width: 211px;
  float: left;
}
/* 橱窗 */
.left .icon-head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 88px;
  font-size: 14px;
  color: white;
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/qx-fenlei.png);
  background-repeat: no-repeat;
  background-position: 30% 50%;
  background-size: 15px 15px;
  background-color: #1071bd;
}
.left .list {
  width: 100%;
  font-size: 12px;
  color: #403c39;
  background: #fff;
  padding: 9px 13px 25px;
  border: 1px solid #e5e5e5;
}
.for-signal {
  display: inline-block;
  width: 11px;
  height: 11px;
  text-align: center;
  line-height: 8px;
  border: 1px solid #e5e5e5;
  border-radius: 1px;
}
.list-all {
  width: 185px;
  padding: 10px 12px;
  cursor: pointer;
  border: 1px solid #e5e5e5;
}

.firstcate li {
  width: 100%;
  font-size: 12x;
  color: rgba(0, 0, 0, 1);
  padding: 5px 12px;
  margin: 8px 0;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  list-style: none;
}
.firstcate li span:hover,
.kinds-li-detail div a:hover {
  color: #1071bd;
}
.left .list .click {
  color: #1071bd;
}
.kinds-li-detail a {
  display: block;
  padding: 7px 25px;
  font-size: 12px;
  color: #403c39;
  cursor: pointer;
}
.yes {
  border: 1px solid #d9d8d8;
  border-radius: 1px;
  background: #e4e2e2;
}
.no {
  border: 1px solid #e5e5e5;
  border-radius: 1px;
  background: #fff;
}
/* 分类 */
.pro-container .left0 {
  width: 211px;
  float: left;
  background: #f2f2f2;
}
.left0 .icon-head {
  width: 100%;
  height: 69px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: url(http://files.cailiao.com/vue/cailiao/pc_6/images/icon-head.png)
    no-repeat;
}
.left0 .list0 {
  width: 95%;
  background: #f2f2f2;
  margin-top: -15px;
  border-left: 1px solid #cecece;
  border-right: 1px solid #cecece;
}
.left0 .list0 li {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  height: 37px;
  line-height: 37px;
  cursor: pointer;
  border-bottom: 1px solid #d9d9d9;
}
.left0 .list0 a {
  display: block;
  color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
}
.left0 .list0 li a:hover {
  background: #3a63ac;
  color: #ffffff;
}
.left0 .list0 .click {
  background: #3a63ac;
  color: #ffffff;
}
.left0 .list0 li .white {
  color: #ffffff;
}
/* 右边 */
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
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/btn1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.btn11 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/btn11.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bread-nav .btn22 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/btn22.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.btn2 {
  background-image: url(http://files.cailiao.com/vue/cailiao/pc_12/images/btn2.png);
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
