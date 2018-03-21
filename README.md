# wzn-api

项目公共 ajax 请求库,基于 axios，vue,react 中都适用

> 目的：提高工作效率，少做一些无用功

---

业务开发过程中，我们会经常用到 ajax 请求，axios 已经给我们提供很多便利的方法，为了在实际项目开发中保持代码一致性，结构一致性，错误统一处理，拦截统一处理，为此简单的处理了一下

---

## 安装使用

> 1：使用 npm 安装

## npm

> npm install --save-dev wzn-api
> 使用 import utils from 'wzn-api

## API 文档

[get 参数(url,data)](https://github.com/ErnestWangZuNian/project-request-api/blob/master/src/index.js) get 请求 </br>

[post 参数(url,data)](https://github.com/ErnestWangZuNian/project-request-api/blob/master/src/index.js) psot 请求 </br>

[all 参数(array)](https://github.com/ErnestWangZuNian/project-request-api/blob/master/src/index.js) 多个请求并发 </br>

[create 参数(array)](https://github.com/ErnestWangZuNian/project-request-api/blob/master/src/index.js) 创建一个 axios 实例 </br>

## 使用方式

```js
import Api from "wzn-api";
// 实例化api
let api = new Api();
// 创建实例自己的拦截器
let instance = api.create();
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
api.get(url, data).then(data => {
  console.log(data);
});
api.post(url, data).then(data => {
  console.log(data);
});
api.all([api.get(url.data), api.get(url1.data1)]).then(datas => {
  console.log(datas);
});
```

## 参考地址

axios 中文文档 https://www.kancloud.cn/yunye/axios/234845 </br>
另一个项目 react 基础环境搭建里面有 api 的使用方式 https://github.com/ErnestWangZuNian/react-in-project.git
