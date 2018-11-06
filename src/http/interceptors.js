import axios from 'axios'

/**
 * 请求拦截
 */
axios.interceptors.request.use(
    config => {
        return config
    },
    err => Promise.reject(err)
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        let { response } = err;

        console.log('请求报错', response.status);
    
        return Promise.reject(err)
    }
)


export default axios