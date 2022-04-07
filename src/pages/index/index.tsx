import { AtButton } from "taro-ui"
import Taro from '@tarojs/taro';
import {proxy} from '../../request';
import React,{useCallback,useEffect} from 'react';
import { View, Text, Button, Image } from "@tarojs/components";
import {useEnv,useNavigationBar,useModal,useToast,useApp,useRequest} from 'taro-hooks';
import logo from "./hook.png";
import './index.less'


const Index = () => {
  const [appInstance,globalData,setGlobalData]= useApp(true)
  useEffect(()=>{
    console.log(proxy,proxy.host,'host');

    console.log(globalData,'globalData');
  },[globalData])
  // console.log(app,'app');
  const env = useEnv();
  const [,{ setTitle }] = useNavigationBar({ title: "Taro Hooks" });
  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({ mask: true });
  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" });
    });
  }, [show, showToast]);
  const httpService = useRequest(()=>Taro.request({
    header:{'content-type': "application/json"},
    url:'http://localhost:8001/api/v3/users/current-user'
  }),{

    manual:true,
    throwOnError:true,
    onSuccess:(a)=>{
      console.log('response',a);
    },
    onError:(e)=>{
      console.log('错误',e)
    }
  })

  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <AtButton onClick={httpService.run}>AtButton</AtButton>
      <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default Index;
