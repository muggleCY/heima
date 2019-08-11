<template>
    <div class="container">
        <mt-swipe :auto="4000"  class="swipe-container">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src = "item.img" />
            </mt-swipe-item>
        </mt-swipe>

        
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">more</div></a></li> -->
        </ul> 
		
    </div>
</template>
<script>
export default {
    data(){
        return{
            lunbotuList:[{
                id: 1,
                img: require("../../img/1.png"),
            },{
                id: 2,
                img: require("../../img/2.jpg"),
            },{
                id: 3,
                img: require("../../img/3.jpg"),
            }
            ]
        };
    },
    created(){
        // axios
        // .get("")
        // .then(respones=>{
        //     console.log(respones.body)
        // })
        // .catch(error => {
        //     alert("网络错误");
        // });
        console.log(this.lunbotuList);
    },
    methods:{
        
    }

}
</script>
<style scoped>
.swipe-container{
    height: 200px;
}
img{
    width: 100%;
    height: 100%;
}
.mui-grid-view.mui-grid-9 .mui-media{
    background-color: #fff;

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>