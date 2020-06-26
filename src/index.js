import axios from "axios";
const { Axios } = axios;
//  导出api
class Api extends Axios {
  constructor(config) {
    super({
      loading: true,
      message: true,
      ...config,
    });
    this.spread = axios.spread;
    this.Cancel = axios.Cancel;
    this.CancelToken = axios.CancelToken;
    this.isCancel = axios.isCancel;
  }

  // get请求
  get(url, params, config) {
    return super.get(url, {
      params,
      ...config,
    });
  }

  // 并发请求
  all(promise) {
    axios.all(promise);
  }
}
export default Api;
