# 前端职责标准

## 职责范围
>根据技术难易程度和支持深度分为七类

1. 基础工作（常规页面制作）
    * PC
    * M
    * 响应式
2. 自有产品专题
3. App内嵌H5页面
4. 富应用（RIA）
    * 单页面应用SPA
    * 轻互动
5. 混合式App开发Hybrid App
6. 前端框架/库
    * ASS http://10.168.0.151:3000/web
    * MASS http://10.168.0.151:2000/web/tpl/index
    * QingUI http://10.168.0.151/qingui/index.html
    * 效率工具 http://10.168.0.151:3000/tool/fit
7. 其他
    * 其他依赖于前端技术的中大型项目
    * 前端技术支持
    * 前端技术翻译文库 http://10.168.0.151/wenku/

## 常规页面制作

> 包括主站各业务线产品页面，按照兼容程度划分为。

#### PC：
* 简单版 HTML＋CSS
* 交互版 HTML＋CSS＋交互JS
* 高级版 HTML＋CSS＋交互JS＋业务JS

#### M：
* HTML＋CSS
* HTML＋CSS＋交互JS

#### 响应式：
* HTML＋CSS

## 自有产品专题
> 包括公司内各业务线产品专题（不包括商业专题）。

> 按照**技术难易度**、**在线生命周期**、**性能要求**分为：

#### 简单专题
* 最及时的响应速度
* 保证浏览器兼容性

#### 常规专题
* 保证浏览器兼容性
* 提供JS交互效果

#### 大型专题
* 保证浏览器兼容性
* 提供JS交互效果
* 处理前后端之间的数据
* 保证高性能，以适应高并发请求

## App内嵌H5页面
> 公司自有各App中内嵌在UIWebview控件中的H5页面。

* App内，UIWebView内容结构、样式正确
* JS交互效果
* JS性能优化
* 前后端数据处理Ajax

## 富应用（RIA）
#### 单页面应用（SPA）（如：广告系统）
> 单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。[详细解释](http://baike.baidu.com/item/SPA/17536313)

* 页面结构、样式
* 交互JS
* 业务JS
* 独立人员支持

#### 轻互动
> 移动端（轻量级）互动专题。[已开发轻互动列表供参考](http://10.168.0.151:2000/web/gallary)

* 页面结构、样式
* 业务JS
* 交互JS
    * 简单版：3工作日
    * 新形势：7－15工作日**（注：新形势只在提案库中挑选实现，不接受需求形式）**

##  混合模式移动应用 （Hybrid App）
> Hybrid App（混合模式移动应用）是指介于web-app、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势”。[详细解释](http://baike.baidu.com/view/8488720.htm)

* App框架
* 接口数据处理展示
* 原生功能支持（包括但不限于GPS、相机等）
* App打包
* App升级

## 前端框架/库
#### ASS
> PC端公共样式交互前端框架ASS的维护，技术支持

#### MASS
> M端公共样式交互前端框架MASS的维护，技术支持

#### 效率工具
> 接受各方的需求，使用前端技术开发工作效率小工具

## 其他
#### 其他依赖于前端技术的中大型项目，比如：

* 错误日志收集系统
* 统计代码优化维护

#### 前端技术支持
* JS代码性能调优



