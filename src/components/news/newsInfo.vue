<template>
    <div class="newsInfo-cotainer" >
        <h3 class="title">{{newsinfo.title}}</h3>
        <div class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击: {{newsinfo.click}}</span>
        </div>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comments :id="this.id"></comments>
    </div>
</template>
<script>
import comments from "../subcomponents/comment.vue"
export default {
    data(){
        return{
            id: this.$route.params.id,
            newsinfo: []
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            var num = this.id;
            this.axios.get('../../../static/newsinfo.json')
            .then((res)=>{
                this.newsinfo = res.data[num-1]
                console.log(res.data[num]);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },
    components: {
        "comments":comments
    }
}
</script>
<style scoped>

.newsInfo-cotainer{
    padding: 0 4px;
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
.content{
    font-size: 14px;
}
</style>