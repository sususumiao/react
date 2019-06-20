import React, { Fragment, Component } from 'react';
// 接收store中的数据的一个连接器connect
import { connect } from "react-redux";

class PlusButton extends Component {
  render() {
    return (
      <button onClick={this.props.num_add}>+</button>
    )
  }
}
class SubstrButton extends Component {
  render() {
    return (
      <button onClick={this.props.num_substr}>-</button>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Fragment>
        数据：{this.props.num}
        <PlusButton {...this.props}></PlusButton>
        <SubstrButton {...this.props}></SubstrButton>
      </Fragment>
    )
  }
}
// store中的数据通过属性 props的方式来使用
// 成就一个数据映射对象
const mapStaeToProps = (state) => {
  return {
    num: state.fruitNums
  }
}
const mapDispatch = (dispatch) => {
  return {
    num_add: () => {
      const action = {
        type: 'num_add',
        value: 1
      }
      dispatch(action)
    },
    num_substr: () => {
      const action = {
        type: 'num_substr',
        value: 1
      }
      dispatch(action)
    }
  }
}
export default connect(mapStaeToProps, mapDispatch)(App);
