<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要吐槽的内容（不能超过100字）" maxlength="100" v-model="msg"></textarea>
    <mt-button type="primary" size="large"  @click="postComment">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,index) in comments" :key="item.id">
      <div class="cmt-item">
        <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}</div>
        <div class="cmt-content">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="moreComment" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return{
        pageIndex: 1,
        comments: [],
        msg: ""
      };
  },
  created(){
    this.getComment()
  },
  methods: {
    moreComment(){
        this.pageIndex++;
        this.getComment();
    },
    postComment(){
        this.axios.post("http://www.liulongbin.top:3005/api/postcomment/"+this.$route.params.id,{ content:this.msg },{emulateJSON : true})
        .then((res)=>{
            var cmt = {
                user_name: '匿名用户',
                add_time:Date.now(),
                content: this.msg
            };
            this.comments.unshift(cmt);
            this.msg = "";
        })
    },
    getComment() {
        var num = parseInt(this.id)+42;
        this.axios.get("http://www.liulongbin.top:3005/api/getcomments/" +num +"?pageindex="+this.pageIndex)
          .then((res)=>{
              this.comments = this.comments.concat(res.data.message);
          })
          .catch((err)=>{
              console.log(err)
          })
      
    }
  },
  props: ["id"]
};
</script>
<style scoped>
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-item {
  font-size: 13px;
}
.cmt-title {
  line-height: 30px;
  background-color: #cccccc;
}
.cmt-content {
  line-height: 35px;
  text-indent: 2em;
}
</style>