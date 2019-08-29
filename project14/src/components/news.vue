<template>
  <div>
    <div class="banner-box">
      <img src="http://files.cailiao.com/vue/cailiao/pc_14/images/new-ban4.jpg" alt="">
    </div>

    <div class="box">
      <div class="safe auto com">新闻资讯</div>
      <div class="container safe auto clearfix">
        <!-- 左边 -->
        <div class="left">
          <div class="news-box clearfix">
            <div class="news" v-for="(item,index) in info.list" :key="index">
            <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="img-box">
              <img :src="item.thumbnail" alt="">
            </router-link>
            <p class="title">{{item.post_title}}</p>
            <p>
              <span class="date">{{item.create_time}}</span>
              <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="more">查看更多>></router-link>
            </p>
          </div>
          </div>
          <!-- 分页 -->
          <div class="bottom">
            <div class="auto box">
              <span class="line"></span> 已经到底啦
              <span class="line"></span>
            </div>
            <div class="m-t-40">
              <div>
            <div class="block w1200">
              <div class="margin">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="info.page"
                  :total="info.total"
                  :page-size="8"
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

        <!-- 右边 -->
        <div class="right m-t-20">
          <div class="top">
            <div class="icon-head">
              <p>热门新闻</p>
              <p>Popular news</p>
            </div>
            <ul class="list auto">
              <router-link :to="{path:'/newdetail',query:{id:item.id}}" class="li" v-for="(item,index) in hot.title" :key="index">
                <span class="number">{{index+1}}</span>
                <span class="des">{{item.post_title}}</span>
              </router-link>
            </ul>
          </div>
  
        </div>
      </div>
    </div>




    
  </div>
</template>

<script>
import Vue from "vue"
export default {
  data() {
    return {
      info:{},
      hot:[]
    };
  },
  created(){
    let _this=this;
    _this.api("news/index",{ user_id: window._global.user_id,limit:8},res=>{
        _this.render(res);
    });
    _this.api("news/popular_news",{ user_id: window._global.user_id},res=>{
      Vue.set(this.hot,"title",res.data);
    })
  },
  methods:{
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      let _this = this;
      _this.api(
        "news/index",
        {
          user_id: window._global.user_id,
          limit:8,
          pageParams: {
            page: val,
            perPage: 8,
          }
        },
        res => {
          _this.render(res);
        }
      );
    },
  }
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.banner-box img{
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  overflow: hidden;
  background: #f4f4f4;
}
.com {
  width: 1200px;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background: #3660ab;
}
.container .left {
  width: 920px;
  float: left;
}
.news-box .news {
  width: 210px;
  float: left;
  margin: 20px 10px;
  background: #ffffff;
  transition: all .5s ease-in;
  }
.news:hover{
transform: translate(0,-5px);
box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.4);
}
.news .img-box:hover{
  opacity: 1;
}
.news .img-box {
  display: block;
  width: 210px;
  height: 210px;
  overflow: hidden;
  padding: 5px;
}
.img-box img{
  width: 100%;
  height: 100%;
}
.news .title {
  height: 40px;
  overflow: hidden;
  color: #000000;
  font-size: 14px;
}
.news p {
  padding: 0 6px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.news p span {
  display: inline-block;
  width: 80px;
  height: 20px;
}
.news .date {
  color: #707070;
  font-size: 12px;
}
.news .more {
  color: #707070;
  font-size: 12px;
}
/* 右 */
.container .right {
  width: 260px;
  float: right;
}
.icon-head {
  width: 100%;
  height: 69px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: url(http://files.cailiao.com/vue/cailiao/pc_14/images/icon-head2.png) no-repeat;
}
.right .top .list {
  padding: 0 14px 14px;
  width: 100%;
  border: 1px solid #b9b9b9;
  border-top: none;
  margin-top: -20px;
}
.top .list .li:hover{
  opacity: 1;

}
.top .list .li:hover .des{
  color: #597ab6;
  font-weight: bold;
}
.top .list .li {
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
.top .list .li span {
  display: inline-block;
}
.top .list .li .number {
  width: 33px;
  height: 33px;
  line-height: 33px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  border-radius: 50%;
  background: #597ab6;
}
.top .list .li .des {
  width: 185px;
  height: 35px;
  margin-left: 5px;
  font-size: 14px;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
}
.bottom {
  width: 500px;
  margin: 100px auto 50px;
  text-align: center;
  font-size: 14px;
  color: rgba(161, 161, 161, 1);
}
.line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
</style>
