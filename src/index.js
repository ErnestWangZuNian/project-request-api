import axios from "axios";
import qs from "qs";
//  导出api
class Api {
  constructor(config) {
    axios.create(config);
    this.interceptors = axios.interceptors;
  }
  // get请求
  get(url, params) {
    return axios({
      method: "get",
      url,
      params
    });
  }
  //  post请求
  post(url, data) {
    return axios({
      method: "post",
      url,
      data: qs.stringify(data)
    });
  }
  // 多个请求并发
  all(requests) {
    if (requests instanceof Array) {
      return axios.all(requests);
    } else {
      console.error("并发请求不是一个数组");
    }
  }
  // 创建一个实例
  create(config) {
    return axios.create(config);
  }
}
export default Api;
