 <!-- 我的 -->
<template>
    <div>
        <Minecon :abc = "userMsg"></Minecon>
        <Footer></Footer>
    </div>
</template>
<script>
import Minecon from'../components/Mine/minecon'
import Footer from'../components/index/tabbar'
export default {
    data(){
        return{
            userMsg:''
        }
    },
    components:{
        Minecon,
        Footer
    },
    mounted(){
        var user = JSON.parse(localStorage.getItem('user'));
        this.userMsg = user;
    }
}   
</script>
<style scoped>

</style>
