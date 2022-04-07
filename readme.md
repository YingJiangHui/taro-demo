- [taro api](https://taro-docs.jd.com/taro/docs/apis/about/desc)
- [taro-ui文档](https://taro-ui.jd.com/#/)
- [@tarojs/components文档](https://docs.taro.zone/docs/components-desc)
- [taro-hooks文档](https://nervjs.github.io/taro-docs/docs/hooks/)
- [taro-hooks文档2](https://taro-hooks-innocces.vercel.app/)

## 启动
```bash
// node v14 保证没有问题
yarn install
yarn dev:weapp
// 安装微信开发工具点击点击跟目录预览
```

## 问题
情况：请求无法发出报错：fail url not in domain list

解决：微信开发者工具[详情] -> [本地设置] -> 取消勾选“不校验合法域名、web-view(业务)...” -> 重新编译 -> 再次请求

