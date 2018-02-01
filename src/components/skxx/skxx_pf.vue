<template>
  <div class="pf">
    <div v-for="(list,index) in 5" v-if="sum == index">
      <div class="pf_star" >
        <h3>班级情况</h3>
        <div class="pf_star_zb">
          <div class="pf_star_zb_xq" v-for="(item,$index) in 3">
            <p><label :data="dataModel[index]['value'+index]">指标{{index}}：</label><span>班级纪律较好，学生学习热情高。</span></p>
            <el-rate v-model="dataModel[index]['value'+$index]"></el-rate>
          </div>
         <!--  <div class="pf_star_zb_xq">
            <p><label>指标2：</label><span>学生学习态度端正，自学能力较强</span></p>
            <el-rate v-model="value2"></el-rate>
          </div>
          <div class="pf_star_zb_xq">
            <p><label>指标3：</label><span>学生主动地学习课程</span></p>
            <el-rate v-model="value3"></el-rate>
          </div> -->
        </div>
      </div>
        <div class="pf_btn">
        <mt-button size="large" v-show="showstar" @click="next(index)">下一项</mt-button>
        <!-- <mt-button size="large" v-show="!showstar" @click="handup()">提交评价</mt-button> -->
        </div>
    </div>
    <div class="pf_pl" v-if="sum == 5">
      <div>
        <h3>就班级上课情况给一点评价吧！</h3>
        <textarea placeholder="请输入您对课堂情况的评价"></textarea>
      </div>
      <div class="pf_btn">
      <!-- <mt-button size="large" v-show="showstar" @click="next()">下一项</mt-button> -->
      <mt-button size="large"  @click="handup()">提交评价</mt-button>
      </div>
    </div>
  </div>
</template>
 <script>
 export default {
  name: 'pf',
  data:function(){
    return {
      value1:0,
      value2:5,
      value3:0,
      // score:0,
      showstar:true,
      sum:0,
      dataModel:[],
    }
  },
  methods:{
    // 下一页
    next(index){
      // this.showstar=false;
      this.sum++;
    console.log(this.dataModel)

    },
    handup(){
      this.$router.go(-1);
    },
  },
  created: function(){
    // 这里是动态生成v-model,这个可以放在网络请求成功里面;
    var _this=this;
    var len = 5;
    // var 
    for (var i = 0; i < len; i ++) {
        var item = {value0: 3,value1:1,value2:3};
        _this.dataModel.push(item);
    }
    console.log(_this.dataModel)
  },
}
</script>
<style>
.pf{
  height:100%;
  font-size: .16rem;
  background: #f7f7f7;
}
.pf_star,.pf_pl > div:nth-child(1){
  margin-bottom: .2rem;
  background: #ffffff;
  border-bottom: .01rem solid #ececec;
}
.pf_star{
  padding:.4rem .15rem 1rem;
}
.pf_pl > div:nth-child(1){
  padding:.4rem .15rem .2rem;
}
.pf h3{
  font-family: PingFang-SC-Bold;
  font-size: .16rem;
  color: #555555;
  margin-bottom: .19rem;
}
.pf_star_zb_xq p{
  display: flex;
}
.pf_star_zb_xq p label{
  font-family: PingFang-SC-Bold;
  font-weight: 700;
  font-size: .15rem;
  color: #555555;
  width: .6rem;
}
.pf_star_zb_xq p span{
  display: inline-block;
  width: calc(100% - .6rem);
  font-size: .15rem;
  color: #777777;
}
.pf_pl textarea{
  width:100%;
  height: 1.73rem;
  padding:.15rem;
  border-radius: .04rem;
  border:.01rem solid #dfe1e3;
  background: #f8fafc;
  resize: none;
  font-size: .14rem;
  font-family: PingFang-SC-Medium;
}
.pf_star_zb{
/*  background: #ffffff;
  border-bottom: .01rem solid #ececec;*/

}
input::-webkit-input-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* WebKit browsers*/
}
input:-moz-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* Mozilla Firefox 4 to 18 */
}
input::-moz-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* Mozilla Firefox 19+*/ 
}
input:-ms-input-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important;  /*Internet Explorer 10+ */
}
/*修改插件样式*/
.pf .el-rate{
  margin:.07rem 0 .12rem .58rem;
}
.pf .el-rate__icon{
  font-size: .24rem !important;
  margin-right: .15rem;
}
.el-rate__icon.hover{
  transform: scale(1)
}
.el-icon-star-off:before{
  content: "\E621";
  color: #DDDFE1;
}
.pf_btn{
  padding: 0 .15rem;
  /*margin-top: 1rem;*/
}
.pf_btn button{
  width: 100%;
  height: .46rem;
  background: #55b2f5;
  color: #ffffff;
  font-size: .17rem;
  font-family: PingFang-SC-Medium;
  border-radius: .06rem;
  border:none;
}
</style>

 