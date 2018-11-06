import axios from './interceptors'

var baseURL = 'https://cnodejs.org/api/v1'

//请求超时
axios.defaults.timeout = 30000;

// switch(process.env.NODE_ENV){
//     //开发环境
//     case '':
//         baseURL = '';
//         break;
        
//     //生产环境
//     case '':
//         baseURL = ''
//         break;

//     //测试环境
//     default:
//         //baseURL = ''
//         break;
// }

/**
 * @url = api
 */
export default ({   api, 
                    data = {}, 
                    method = 'POST', 
                    header = {} }) => axios({
                        
    url:api, data, method, baseURL,

    // headers:{
    //     ...header,
    //     method,
    //     appkey: '10001', 
    //     format: 'JSON'
    // }   
})
