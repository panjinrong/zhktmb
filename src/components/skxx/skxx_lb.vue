<template>
	<div class="skxxlb" ref="listContent">
    <div>
  	  <div class="skxxlb_header" ref="top">
        <div class="skxxlb_header_kcmc">
          <h3>《计算机科学基础》</h3>
          <span>69人</span>
        </div> 
        <div class="skxxlb_header_bj">
          <div class="skxxlb_header_bj_img">
            <img src="../../assets/images/banji.png">
          </div>
          <div class="skxxlb_header_bj_xq">
            <!-- <transform> -->
            <span v-for="(bj,index) in 7" v-show="index<sum">信息管理{{index}}班、</span>
            <!-- </transform> -->
          </div>
          <span class="float" @click="updown()" v-if="sum == 5"><img src="../../assets/images/down.png"></span>
          <span class="float" @click="updown()" v-else><img src="../../assets/images/up.png"></span>
        </div>
        <div class="skxxlb_header_ks">
          <span>总课时：60</span>
          <span>已进行：18</span>
          <span @click.stop="linkWpjl()">未评学次数：7</span>
        </div>
      </div>
      <div class="skxxlb_kclb" >
       <ul>
         <li v-for="(list,index) in 10" @click.stop="linkKtxq()"> 
            <p>第一周 星期四 5~6节</p>
            <span class="float" style="margin-top: -.05rem;"><img src="../../assets/images/jinru.png"></span>
            <a>2017年10月3日</a>
         </li>
       </ul>
      </div>
    </div>
	</div>
</template>
 <script>
import BScroll from 'better-scroll';
 export default {
  name: 'skxxlb',
  data:function(){
    return {
       list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
       sum:5,
    }
  },
  mounted(){
    var _this=this
    _this.$nextTick(() => {
      _this._initScroll();    
    });
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.listContent, {
        click: true
      });
    },
    //跳转未评记录
    linkWpjl(){
      var _this=this;
      _this.$router.push({path:'/wpjl'})
    },
    // 跳转课堂详情
    linkKtxq(){
      var _this=this;
      _this.$router.push({path:'/ktxq'})
    },
    //top上的班级收起
    updown(){
      if(this.sum == 5){
        this.sum = 7
        var height=(7-5)/2*20
        this.$refs.top.style.height=134+height+'px'
        console.log((7-5)/2*20);
      }else{
        this.sum = 5
        this.$refs.top.style.height='134px'
      }
    }
  }
 
}
</script>
<style>
.float{
  float: right;
}
.skxxlb{
  height:100%;
  font-size: .16rem;
  /*overflow: hidden;*/
}
.skxxlb .skxxlb_header{
  height: 1.34rem;
  padding:.19rem .15rem .18rem;
  box-sizing: border-box;
  background: linear-gradient(to right, #55b5ff 0%,#63edff 100%);
}
.skxxlb_header_kcmc{
  margin-bottom: .12rem;
}
.skxxlb_header_kcmc h3{
  margin-left: -.1rem;
}
.skxxlb_header_kcmc h3,.skxxlb_header_bj>div{
  display: inline-block;
  color: white;
}
.skxxlb_header_kcmc span{
  display: inline-block;
  float: right;
  font-size: .14rem;
  color: white;
}
.skxxlb_header_bj_img{
  vertical-align: top;
}
.skxxlb_header_bj_img > img{
  width: .2rem;
  height: .15rem;
}
.skxxlb_header_bj_xq{
  font-size: .14rem;
  width: calc(100% - .68rem);
}
.skxxlb_header_bj > span{
  padding:0 .1rem;
}
.skxxlb_header_bj > span > img{
  width: .18rem;
  height: .1rem;
}
.skxxlb_header_ks{
  padding-left: .23rem;
}
.skxxlb_header_ks span{
  font-size: .12rem;
  color: white;
  margin-right:.14rem;
}
.skxxlb_kclb{
  height: calc(100% - 1.34rem);
  /*overflow: hidden;*/
}
.skxxlb_kclb ul li{
  list-style: none;
  height: .65rem;
  padding:.16rem .15rem .12rem;
  box-sizing: border-box;
  border-bottom: .01rem solid #ececec;
}
.skxxlb_kclb ul li p{
  font-family: "PingFang-SC-Medium";
  line-height: .15rem;
  font-weight: 600;
}
.skxxlb_kclb ul li span > img{
  height: .15rem;
  vertical-align: top;
}
.skxxlb_kclb ul li a{
  font-size: .13rem;
  color: #999999;
}
</style>
