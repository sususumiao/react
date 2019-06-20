import {NUM_FRUIT_ADD,NUM_FRUIT_SUB,NUM_FRUIT_INIT} from "../actionTypes"
import Axios from "axios";
// 增加
export const numsFruitAdd = (unit)=>{
    return {
        type: NUM_FRUIT_ADD,
        value: unit
      }
}
// 减少
export const numsFruitSub = (unit)=>{
    return {
        type: NUM_FRUIT_SUB,
        value: unit
      }
}
export const numsFruitInit=()=>{
  // 返回一个函数
  return(dispatch)=>{
    Axios.get('https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/')
    .then(result=>{
      const action={
        type:NUM_FRUIT_INIT,
        value:result.data.nums
      }
      dispatch(action)
    })
  }
}