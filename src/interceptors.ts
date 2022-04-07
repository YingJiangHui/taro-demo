import Taro, { Chain } from '@tarojs/taro';

export interface Interceptor{
  (chain:Chain): Promise<void>
}

// const errorInterceptor:Interceptor = (chain)=>{
//   return Promise.reject()
// }

const interceptors:Interceptor[] = [Taro.interceptors.logInterceptor]
export default interceptors
