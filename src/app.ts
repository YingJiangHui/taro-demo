import { Component } from "react";
import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss'
import "./app.less";

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
