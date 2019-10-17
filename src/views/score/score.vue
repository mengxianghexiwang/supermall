<template>
    <div>
        <div class="score">
            <div class="scoTopBtn">
                <span @click="cur=0" :class="{bag:cur==0}" class="curfootTit">足球</span>
                <span @click="basketball" :class="{bag:cur==1}">篮球</span>
                <router-link tag="p" to="/league">联赛</router-link>
            </div>
        </div>
        <div class="scoreCon">
            <div class="football" v-show="cur==0">
                <div class="navFootb">
                    <span @click="curfootb=0" :class="{redBot:curfootb==0}" class="curfootbNav">竞彩</span>
                    <span @click="curfootb=1" :class="{redBot:curfootb==1}">足彩</span>
                    <span @click="curfootb=2" :class="{redBot:curfootb==2}">全部</span>
                    <span @click="curfootb=3" :class="{redBot:curfootb==3}">指数</span>
                    <span @click="curfootb=4" :class="{redBot:curfootb==4}">单场</span>
                    <span @click="curfootb=5" :class="{redBot:curfootb==5}">中超</span>
                </div>
                <div class="Footb">
                    <span v-show="curfootb==0">竞彩的</span>
                    <span v-show="curfootb==1">足彩的</span>
                    <span v-show="curfootb==2">全部的</span>
                    <span v-show="curfootb==3">指数的</span>
                    <span v-show="curfootb==4">单场的</span>
                    <span v-show="curfootb==5">中超的</span>
                </div>
            </div>
             <div class="football" v-show="cur==1">
                <div class="navFootb">
                    <span @click="curbaskt=0" :class="{redBot:curbaskt==0}" class="curbasktNav">竞彩</span>
                    <span @click="curbaskt=1" :class="{redBot:curbaskt==1}">全部</span>
                    <span @click="curbaskt=2" :class="{redBot:curbaskt==2}">关注</span>
                </div>
                <div class="Footb">
                    <span v-show="curbaskt==0">竞彩的</span>
                    <span v-show="curbaskt==1">全部的</span>
                    <span v-show="curbaskt==2">关注的</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from'../components/index/tabbar'
export default {
    components:{
        Footer
    },
    data(){
        return{
           cur:0,
           curfootb:0,
           curbaskt:0
        }
    },
    created(){

    },
    methods:{
        basketball(){
            this.cur = 1
            this.curbaskt = 0
        }
    },
    mounted:function(){
        //titBtn
        $('.scoTopBtn span').click(function(){
            $(this).addClass('bag')
        })
        //footNav
        $('.navFootb span').click(function(){
            $(this).addClass('redBot')
        })
    }
}
</script>
<style scoped>
.redBot{
    border-bottom:3px solid red;
    color: red;
}
.bag{
    background:#082e54;
    color: aliceblue
}
.score, .scoTopBtn{
    width: 100%;
}
.scoTopBtn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.scoTopBtn>p{
    font-size: 12px;
    color: gray;
    position: absolute;
    right: 10px;
    
}
.scoTopBtn>span{
    font-size: 12px;
    line-height: 25px;
    height:25px;
    text-align: center;
    width: 20%;
    border:1px solid  black;
    margin:10px;
}
.scoTopBtn>span:nth-child(1){
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-right: 0px;
    border-right: 0;
}
.scoTopBtn>span:nth-child(2){
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-left: 0px;
    border-left: 0;
}
/* football */
.navFootb{
    width: 100%;
    height: .85rem;
}
.navFootb{
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.navFootb>span{
    font-family: '宋体';
    box-sizing: border-box;
    font-size: 16px;
    display: block;
    height: 35px;
    line-height: 35px;
    font-weight: 900;
}
.Footb>span{
    font-size: 12px;
    display: block;
}
</style>
