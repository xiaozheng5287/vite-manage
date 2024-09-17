import axios from "axios";

//配置请求响应拦截

const service = axios.create({
  baseURL: "http://localhost:8080",
});

//请求拦截
service.interceptors.request.use(
  (config) => {
    //在发送请求之前做什么
    /**登录页不需要请求头携带token，其他页面都需要请求头携带token
     *
     */
    if (config.url !== "/login") {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
service.interceptors.response.use(
  (response) => {
    //对响应数据做一些定制化处理
    const res = response.data;
    if (res.code !== 200) {
      alert(res.message || "Error!");
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);


/**
 * get请求需要params，post请求需要data，所以可以进行统一处理
 */
const request = (options) =>{
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    return service(options)
}


export default request