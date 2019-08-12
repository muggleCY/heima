# y

> y

## Build Setup

##制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的TabBar区域，使用MUI的TabBar.html
 +在制作购物车小图标的时候，
    +先把扩展图标的css样式拷贝到项目中，
    +拷贝扩展字体库ttf文件到项目中，
    +为购物车小图标添加样式
3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造TabBar为router-link
##设置路由高亮
##点击TabBar中的路由链接，展示对应的路由组件
##制作首页轮播图
##加载首页轮播图数据
1.应该要用axios（请求后端资源的模块）获取数据
2.axios.get().then().catch()
3.获取的数据应该保存在data上，
4.使用v-for循环渲染每个item
##六宫格图标
1.如果需要用自己的图标，只需要在当前的属性下设置img的大小

##改造新闻资讯路由链接
1.新闻资讯页面制作
    +绘制界面
    +获取数据
        在main.js中配置
        import axios from 'axios'
        axios.defaults.baseURL = '根路径'
        Vue.prototype.axios = axios
        然后配置到Vue原型上
        this.axios.get('/test/1').then(function (response) {}）
    +渲染
2.新闻资讯列表点击跳转到新闻详情
    +获取列表id，rink-router需要跳转到有id的详情页面，属性绑定
    +路由链接的  :id
    +详情页面获取id
      如果没有?   this.$route.params.id
      如果有      this.$route.query.id
3.新闻详情界面
    +scope 如果内容中有图片的话 那么需要设置img为100%并且把scope去掉 
        但是可能会产生污染，需要scss
4.评论子组件
    +获取到的数据都显示在页面中
    +加载更多让pageIndex++，获取更多且不覆盖，concat方法拼接
    +发表评论
        把文本框做双向绑定
        post提交数据（请求的url地址，提交的数据对象，数据格式JSON
        
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
