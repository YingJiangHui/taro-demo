import Taro,{request} from '@tarojs/taro';
import interceptors from '@/interceptors'

const p = {
  development: 'http://10.0.0.171:8081/api',
  production: 'https://saikul.test'
}
export type RequestOptions = Parameters<typeof Taro.request>[0]
type Method = Exclude<RequestOptions['method'],undefined>
export const proxy = new Proxy<{[key in Method]:()=>void}>({
},{
  get(target,propKey:Method,receiver){
    console.log(receiver);
    return (url:string)=>{
      return Taro.request({url:url,method:propKey.toString().toLocaleUpperCase() as Method})
    }
  }
})

// const getHost = ()=>{
//
// }
//
// interceptors.map((interceptor)=>Taro.addInterceptor(interceptor))
//
// const basicOptions:Parameters<typeof request>[0] = {
//
// }
