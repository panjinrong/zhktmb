<template>
	<div class="kjzl">
    <div class="kjzl_lb">
      <ul>
        <li>
          <div class="kjzl_lb_xq">
            <div class="kjzl_lb_xq_select">
              <img src="../../assets/images/unselect.png">
              <img src="../../assets/images/select.png">
            </div>
            <div class="kjzl_lb_xq_img">
              <img src="../../assets/images/word.png">
              <img class="suss" src="../../assets/images/suss.png">
            </div>
            <div class="kjzl_lb_xq_nr">
              <h3>电路基本理论</h3>
              <p>上传时间：2017.09.26 10:30</p>
            </div>
          </div>
        </li>
        <li v-for="(list,index) in data">
          <div class="kjzl_lb_xq">
            <div class="kjzl_lb_xq_select" @click="selectEvent(index)">
              <img src="../../assets/images/unselect.png" v-show="!showList[index].show">
              <!-- <transition name="fade" > -->
                <img src="../../assets/images/select.png" v-show="showList[index].show">
              <!-- </transition> -->
            </div>
            <div class="kjzl_lb_xq_img">
              <img src="../../assets/images/excel.png">
              <img class="suss" src="../../assets/images/suss.png">
            </div>
            <div class="kjzl_lb_xq_nr">
              <h3>{{list.kcmc}}</h3>
              <p>上传时间：{{list.scsj}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <input type="text" name="" v-focus>
    </div>
    <div class="download">
      <ul>
        <li @click="allSelect()"> 
          <img src="../../assets/images/unselect.png" v-show="!allshow">
          <!-- <transition name="fade" > -->
            <img src="../../assets/images/select.png" v-show="allshow">
          <!-- </transition> -->
          <p>全选</p>
        </li>
        <li>
          <p>下载</p>
        </li>
      </ul>
    </div>
	</div>
</template>
 <script>
 import { MessageBox } from 'mint-ui';
 export default {
  name: 'kjzl',
  data:function(){
    return {
      data:[
        {"kcmc":"电路基本理论","scsj":"2017.09.26 10:30"},
        {"kcmc":"数据结构","scsj":"2017.11.26 05:30"},
        {"kcmc":"电磁学","scsj":"2017.10.26 02:40"},
        {"kcmc":"面向对象程序设计语言","scsj":"2017.03.26 14:30"}
      ],
      showList:[{"show":false},{"show":false},{"show":false},{"show":false}],
      xzjd:false,
      allshow:false,
    }
  },
  mounted(){
    // this.data.forEach(function(res,i){
    //   this.showList.puch({"show":false});
    // })
  },
  methods:{
    //选择下载文件
    selectEvent(index){
      var _this=this;
      if(_this.showList[index].show == false){
        _this.showList[index].show=true;
      }else{
        _this.showList[index].show=false;
      }
    },
    // 全选
    allSelect(){
      var _this=this;
      if(_this.allshow == false){
        _this.allshow=true
        _this.showList.forEach(function(r,i){
          _this.showList[i].show=true
        })
      }else{
        _this.allshow=false
        _this.showList.forEach(function(r,i){
          _this.showList[i].show=false
        })
      }
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
<style>
.kjzl{
    height:calc(100% - .7rem);
    font-size: .16rem;
}
.kjzl_lb ul li{
  border-bottom: .01rem solid #ececec;
  padding:0 .15rem;
  background: #ffffff;
}
.kjzl_lb_xq{
  display: flex;
  height: .69rem;
  width: 100%;
}
.kjzl_lb_xq > div{
  display: inline-block;
}
.kjzl_lb_xq_select{
  width: .18rem;
  height: .18rem;
  padding:.25rem 0;
  margin-right: .12rem;
  position: relative;
}
.kjzl_lb_xq_select img{
  width: .18rem;
  height: .18rem;
  position: absolute;
  top: .25rem;
  left: 0;
}
.kjzl_lb_xq_img {
  position: relative;
}
.kjzl_lb_xq_img .suss{
  position: absolute;
  width: .15rem;
  height: .15rem;
  right: -.04rem;
  top:.22rem;
}
.kjzl_lb_xq_img img{
  width: .33rem;
  height: .33rem;
  vertical-align: top;
  margin-top: .18rem;
}
.kjzl_lb_xq_nr{
  width: calc(100% - .33rem);
  padding: .16rem 0 .16rem .12rem;
}
.kjzl_lb_xq_nr h3{
  font-size: .16rem;
  font-family: PingFang-SC-Medium;
  color: #333333;
  height: .2rem;
  line-height: .2rem;
}
.kjzl_lb_xq_nr p{
  font-size: .11rem;
  font-family: PingFang-SC-Medium;
  color: #999999;
  height: .22rem;
  line-height: .22rem;
}
.kjzl_lb_xq_nr > span > img{
  width: .15rem;
}
.fade-enter-active,.fade-leave-active{
    transition: all .1s linear;
}
.fade-enter,.fade-leave{
  opacity: 0;
}
.mint-msgbox{
  width: 2.67rem;
  border-radius: .1rem !important;
}
.mint-msgbox-message{
  font-family: PingFang-SC-Medium;
  font-size:.14rem;
  color: #333333;
}
.mint-msgbox-cancel{
  background: #f2f2f2;
}
.mint-msgbox-confirm{
  background: #3da8f5;
  color: white;
}
.mint-msgbox-content{
  padding: 8px 20px;
}
.mint-msgbox-title{
  color: transparent;
  height: .54rem;
  background: url(../../assets/images/kdelete.png) no-repeat center bottom;
  background-size: .45rem .45rem;
}
.download{
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;  
}
.download ul li{
  list-style: none;
  float: left;
  height: .45rem;
  line-height: .45rem;
}
.download ul li:nth-child(1){
  width: calc(100% - 1.04rem);
  color: #333333;
  background: #ffffff;
}
.download ul li:nth-child(2){
  width: 1.04rem;
  background: #3da8f5;
  text-align: center;
  color: #ffffff;
}
.download ul li p{
  display: inline-block;
  font-size: .16rem;
}
.download ul li img{
  width: .18rem ;
  height: .18rem;
  vertical-align: top;
  margin:.13rem .1rem 0 .15rem;
}
</style>
