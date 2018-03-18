import axios from "axios";
import qs from "qs";
const baseURL = "";
axios.defaults.baseURL = baseURL;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

//  导出api
class Api extends axios {
  constructor() {
    super();
  }
  post(url, data) {
    return axios({
      method: "post",
      url,
      data: qs.stringify(data)
    });
  }
  get(url, params) {
    return axios({
      method: "get",
      url,
      params
    });
  }
}
export default Api;
