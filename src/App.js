import React,{Fragment,Component} from 'react';
// 接收store中的数据的一个连接器connect
import {connect} from "react-redux";

class App extends Component{
  render(){
    return(
      <Fragment>
        数据：{this.props.num}
      </Fragment>
    )
  }
}
// store中的数据通过属性 props的方式来使用
// 成就一个数据映射对象
const mapStaeToProps = (state)=>{
  return{
    num:state.fruitNums
  }
}
export default connect(mapStaeToProps,null)(App);
