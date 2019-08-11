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
