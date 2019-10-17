 <!-- 开奖 -->
<template>
    <div class="lottery">
       <div class="lotryTop">
           <p>彩票开奖</p>
       </div>
       <div class="cup">
            <div class="lotyCon">
                <router-link :to="{path:'/histleague', query:{type:sfc[0].type}}" tag="div" class="lotyList">
                    <p class="lotyMsg">
                        <span class="name">{{sfc[0].type}}</span>
                        <span class="gray">{{sfc[0].issue}}期</span>
                        <span class="gray">{{sfc[0].start_time}}</span>
                        <span class="gray">{{sfc[0].weekday}}</span>
                    </p>
                    <p class="lotteryNum">{{sfc[0].result}}</p>
                    <p class="router-link-button">
                        <span>走势图</span>
                        <span>专家预测</span>
                        <span>中奖查询</span>
                    </p>
                </router-link>
                <router-link :to="{path:'/histleague', query:{type:bqc[0].type}}" tag="div" class="lotyList">
                    <p class="lotyMsg">
                        <span class="name">{{bqc[0].type}}</span>
                        <span class="gray">{{bqc[0].issue}}期</span>
                        <span class="gray">{{bqc[0].start_time}}</span>
                        <span class="gray">{{bqc[0].weekday}}</span>
                    </p>
                    <p class="lotteryNum">{{bqc[0].result}}</p>
                </router-link>
                <router-link :to="{path:'/histleague', query:{type:jqc[0].type}}" tag="div" class="lotyList">
                    <p class="lotyMsg">
                        <span class="name">{{jqc[0].type}}</span>
                        <span class="gray">{{jqc[0].issue}}期</span>
                        <span class="gray">{{jqc[0].start_time}}</span>
                        <span class="gray">{{jqc[0].weekday}}</span>
                    </p>
                    <p class="lotteryNum">{{jqc[0].result}}</p>
                </router-link>
                <router-link :to="{path:'/histleague', query:{type:'竞彩足球',lastTime:lastTime}}" tag="div" class="lotyList">
                    <p class="lotyMsg">
                        <span class="name">{{jczq[0].type}}</span>
                        <span class="gray">{{lastTime}}</span>
                        <span class="gray">{{jczq[0].weekday}}</span>
                    </p>
                    <p><span style="font-size:12px;color:#676767;display:block;line-height:28px">比赛共{{compJz_times}}场，已开奖<em style="font-style:normal;color:#df0057">{{compJz_times}}</em>场</span></p>
                </router-link>
                <router-link :to="{path:'/histleague', query:{type:'竞彩篮球'}}" tag="div" class="lotyList">
                    <p class="lotyMsg">
                        <span class="name">{{jclq[0].type}}</span>
                        <span class="gray lastTime">{{lastTime}}</span>
                        <span class="gray">{{jclq[0].weekday}}</span>
                    </p>
                    <p><span style="font-size:12px;color:#676767;display:block;line-height:28px">比赛共{{compJl_times}}场，已开奖<em style="font-style:normal;color:#df0057">{{compJl_times}}</em>场</span></p>
                </router-link>
            </div>
       </div>
       <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from'../components/index/tabbar'
export default {
    name:'lottery',
    components:{
        Tabbar
    },
    data(){
        return{
            http:this.GLOBAL.http,
            compJl_times:'',
            compJz_times:'',
            datetime: "",
            lastTime:'',
            type:'',
            http:this.GLOBAL.http,
            sfc:[
               {
                issue:'12121',
                type:'胜负彩',
                start_time:'12.30', 
                weekday:'星期三',
                result:'1231213131',
            },
            ],
            bqc:[
                {
                issue:'12121',
                type:'半全场',
                start_time:'12.30', 
                weekday:'星期三',
                result:'1231213131',
            },
            ],
             jqc:[
                {
                issue:'12121',
                type:'任选九',
                start_time:'12.30', 
                weekday:'星期三',
                result:'1231213131',
            },
            ],
            jczq:[
                {
                    type:"竞彩足球",
                    issue:'13549',
                    start_time:'2019-10-10',
                    weekday:'星期二 ',
                    all:'6' ,
                    had:'5' ,
                }
            ],
            jclq:[
                {
                    type:"竞彩篮球",
                    issue:'13549',
                    start_time:'2019-10-10',
                    weekday:'星期二',
                    all:'6' ,
                    had:'5' ,
                }
            ]
        }
    },
    methods:{
        getTime(){
            var day1 = new Date();
            day1.setTime(day1.getTime()-24*60*60*1000);
            var data = day1.getDate();
            var month = day1.getMonth()+1;
            if(data<10){
                this.data = '0'+data
            }else{
                this.data = data
            }
            if(month<10){
                this.month = '0'+month
            }else{
                this.month = month
            }
            var time = day1.getFullYear()+"-" + this.month+ "-" + this.data;
            this.lastTime = time;
            window.localStorage.setItem("time",time);
            window.localStorage.setItem("oldTime",time);
            var time = localStorage.getItem('time');
            var oldTime = localStorage.getItem('oldTime');
        },
        // getWeek(date){
            // var week;     
            // if(date.getDay() == 0) week = "星期日"     
            // if(date.getDay() == 1) week = "星期一"     
            // if(date.getDay() == 2) week = "星期二"     
            // if(date.getDay() == 3) week = "星期三"     
            // if(date.getDay() == 4) week = "星期四"     
            // if(date.getDay() == 5) week = "星期五"     
            // if(date.getDay() == 6) week = "星期六"     
            // return week;  
            // console.log(getWeek(new Date(s1)));
            // console.log("周几"+date.getDay())
        // }
    },
    created(){
        this.getTime();
        // this.getWeek();
	},
    mounted:function(){
    // data
        this.axios.get(this.GLOBAL.http+'/app/beindex/zcResult').then((res)=>{
            var data = res.data;
            var sfc = res.data.sfc;
            var bqc = res.data.bqc;
            var jqc = res.data.jqc;
            if(bqc[0].type == 'bqc'){
                bqc[0].type = '半全场';
                this.bqc.type = bqc[0].type;
            }
            if(sfc[0].type == 'sfc'){
                sfc[0].type = '胜负彩';
                this.sfc.type = sfc[0].type;
            }
            if(jqc[0].type == 'jqc'){
                jqc[0].type = '进球彩';
                this.jqc.type = jqc[0].type;
            }
            sfc[0].start_time = sfc[0].start_time.substr(0, 10);
            bqc[0].start_time = bqc[0].start_time.substr(0, 10);
            jqc[0].start_time = jqc[0].start_time.substr(0, 10);
            sfc[0].result = sfc[0].result.replace(/,/g,' ')
            bqc[0].result = bqc[0].result.replace(/,/g,' ')
            jqc[0].result = jqc[0].result.replace(/,/g,' ')
            this.sfc = sfc;
            this.bqc = bqc;
            this.jqc = jqc;
        });
        console.log(this.lastTime)
        this.axios.get(this.GLOBAL.http+'/app/beindex/jczqResult?date='+this.lastTime).then((res)=>{
            var dataJczq = res.data;
            this.compJz_times = dataJczq.length;
        });
        this.axios.get(this.GLOBAL.http+'/app/beindex/jclqResult?date='+this.lastTime).then((res)=>{
            var dataJclq = res.data;
            this.compJl_times = dataJclq.length;
        });
    }
}
</script>
<style scoped>
.cup{
    margin-top: 1.35rem;
    position: fixed;
    width: 100%;
}
.lottery{
    width: 100%;
}
.lotyCon{
    width: 93%;
    margin: 0 auto;
}
.lotryTop{
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
}
.lotryTop p{
    width: 100%;
    color: black;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0px 8px 10px -10px #d9d9d9;
}
.lotyList{
    box-shadow: 0px 3px 8px 1px #d9d9d9;
    margin:15px auto;
    border-radius: 5px;
    padding:5px 10px;
}
.lotyList .lotyMsg{
    font-size: 12px;
}
.lotyList .lotyMsg .name{
    font-size: 14px;
    font-weight: 900;
    height: .65rem;
    line-height: .65rem;
}
.lotyList .lotyMsg .gray{
    padding:0 5px;
    color: #676767;
    padding:0 5px;
}
.lotyList .lotteryNum{
    font-size: 14px;
    display: flex;
    line-height: .65rem;
    height: .65rem;
}
.lotyList .times{
    font-size: 12px;
    color: #676767;
    line-height: .72rem;
}
.lotyList .times i{
    color: #df0057;
    font-style: normal;
}
.router-link-button{
    display: flex;
    justify-content: left;
    align-items: center;
}
.router-link-button span{
    font-size: 12px;
    display: block;
    margin:9px 4px;
    background: #f3f3f5;
    border-radius: 2px;
    line-height: 28px;
    height: 28px;
    padding:0 6px;
    color:#676767
}
</style>
