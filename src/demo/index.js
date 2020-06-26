import Api from "../index";
const api = new Api();

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    console.log(config, "");
    return config;
  },
  (error) => {
    const result = Promise.reject(error);
    return result;
  }
);
// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    console.log(response, "response");
    let result = { ...response };
    if (response.data && response.data.success) {
      result = response.data;
    } else {
      throw response.data.message;
    }
    return result;
  },
  (error) => {
    console.log(error, "ww");
    if (error.response) {
      switch (error.response.status) {
        case 401: {
          window.location.href = "/#/login";
          break;
        }
        default: {
          throw error.response.data.message;
          break;
        }
      }
    }

    const result = Promise.reject(error);
    return result;
  }
);
api.all([api
  .get(
    "/api/article",
    {
      id: 1,
    },
    {
      message: false,
    }
  )
  .then((data) => {
    console.log(data, "www");
    api.Cancel();
  }), api
  .post(
    "/api/article",
    {
      ids: [1,2,3],
      type:1,
    },
    {
      message: false,
    }
  )
  .then((data) => {
    console.log(data, "www");
  })])

