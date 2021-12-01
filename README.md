# mobile-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for uat
```
npm run build:uat
```

### 项目版本管理
[Git 分支开发工作流](http://wiki.meicloud.com/pages/viewpage.action?pageId=36019730)

### 准备工作
[app测试和生产下载链接、vpn使用、常见问题和解决方案](http://wiki.meicloud.com/pages/viewpage.action?pageId=36019720)

### app打包后发布流程
[具体流程](https://meixinuat.meicloud.com/mx-h5-docs/mds-release/)

备注：轻应用新增和各种配置已经弄好，打包后的需要修改的各种信息也已经在代码仓库用插件自动修改了。所以打包之后只需要把生成的zip上传，然后关联到新应用即可。

### 美信相关
[使用准备工作](https://meixinuat.meicloud.com/mx-h5-docs/mds-native/)

[底座功能文档](http://mxdev.meicloud.com/mx-native-docs/?id=203)

[空底座需要提供给美信的材料](https://meixinuat.meicloud.com/mx-h5-docs/mds-release/empty-base.html#%E7%A9%BA%E5%BA%95%E5%BA%A7%E6%93%8D%E4%BD%9C%E6%B5%81%E7%A8%8B)

备注：现准备工作已经配置好，使用案例在utils/helper里面，有几个已经在使用的案例，如需其他功能直接在底座文档查找即可

### 项目目录结构说明 src
```
|-- src                       
| |-- assets                     静态资源存放目录
| | |-- images                   图片资源存放目录
| | |-- styles                   公共样式资源存放目录
| | | |-- base.less              基础公共样式存放文件
| | | |-- utils.less             重置vant.ui的样式存放文件
| |-- components                 项目全局公共组件，使用无需引入
| |-- compositions               项目公共逻辑存放文件
| |-- plugins                    项目插件
| | |-- i18n                     双语言
| | |-- vant                     使用到的vant插件
| |-- router                     路由相关
| | |-- index.ts                 路由一些公共钩子和逻辑存放
| | |-- routes.ts                路由地址配置文件
| |-- service                    网络层
| | |-- apiUrlMap                接口地址配置存放
| | |-- index.ts                 网络层公共逻辑存放
| | |-- init.ts                  网络层公共逻辑存放
| | |-- mock.ts                  mock数据
| |-- store                      数据状态管理目录
| |-- utils                      常用函数等存放目录
| | |-- helper.ts                公共函数和方法
| | |-- meta.ts                  项目共有常量
| | |-- types.ts                 typescript存放位置
| |-- views                      项目页面存在文件夹，注意：文件夹小写，页面文件大写
```




