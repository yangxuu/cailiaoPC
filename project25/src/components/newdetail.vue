<template>
  <div>
    <div class="safe auto box clearfix">
      <div class="left">
        <div class="news-head">{{info.post_title}}</div>
        <div class="col2">
          <span>时间：</span>
          <span>{{info.create_time}}</span>
          <span class="m-l-20">来源：</span>
          <span>中国材料网</span>
        </div>
        <div class="col3" v-html="info.post_content"></div>
      </div>
      <div class="right">
        <div class="r-head">热点资讯</div>
        <ul class="list">
          <li v-for="(item,index) in hot.title" :key="index">
            <router-link
              class="li"
              :to="{path:'/newdetail',query:{id:item.id}}"
              :class="flag==index?'click':'default'"
            >
             <!-- :class="flag==index?'clicknumber':'default'" -->
              <span class="number" :class="sstt[index]">{{index+1}}</span>
              <span class="des" :class="ddtt[index]">{{item.post_title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      info: {},
      hot: [],
    //   flag: -5,
      sstt:["sst1","sst2","sst3"],
      ddtt:["ddt1","ddt2","ddt3"],
    };
  },
  created() {
    let _this = this;
    _this.api(
      "news/detail",
      { user_id: window._global.user_id, news_id: _this.$route.query.id },
      res => {
        _this.render(res.data);
      }
    );
    _this.api("news/popular_news", { user_id: window._global.user_id }, res => {
      Vue.set(this.hot, "title", res.data);
    });
  },
  mounted:{

  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route(to, from) {
      let _this = this;
      _this.api(
        "news/detail",
        {
          user_id: window._global.user_id,
          news_id: _this.$route.query.id
        },
        resp => {
          _this.render(resp.data);
        }
      );
    }
  },
  methods: {
    // style(index) {
    //   this.flag = index;
    // }
  }
};
</script>
<style scoped>
.left {
  width: 943px;
  float: left;
  padding: 30px 50px 60px;
}
.news-head {
  width: 100%;
  text-align: center;
  color: #000000;
  font-size: 26px;
}
.right {
  width: 245px;
  float: right;
  padding: 30px 10px 10px;
}
.r-head {
  padding: 0 0 7px 11px;
  font-size: 16px;
  color: #000000;
  border-bottom: 1px solid #d7d7d7;
}
.m-l-20 {
  margin-left: 20px;
}
.col2 {
  font-size: 14px;
  color: #878787;
  margin-top: 20px;
}
.col3 {
  color: #4a4a4a;
  font-size: 16px;
  margin-top: 27px;
}
.col3 >>> img {
  display: block;
  width: 680px;
  margin: 20px auto;
}
.list .li {
  display: block;
  width: 200px;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000000;
  font-size: 12px;
}
.list .click {
  color: #48c2fb;
}
.clicknumber {
  background: #48c2fb;
}

.li .sst1{
  background: #48c2fb;
}
.li .sst2{
  background: #48c2fb;
}
.li .sst3{
  background: #48c2fb;
}

.li .ddt1{
   color: #48c2fb;
}
.li .ddt2{
   color: #48c2fb;
}
.li .ddt3{
   color: #48c2fb;
}
.list .li:hover {
  color: #48c2fb;
}
.list .li:hover .number {
  background: #48c2fb;
}
.number {
  display: inline-block;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 15px;
  border-radius: 3px;
  background: #bababa;
  color: #fff;
}
</style>

