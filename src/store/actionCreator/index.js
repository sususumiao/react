import {NUM_FRUIT_ADD,NUM_FRUIT_SUB} from "./store/actionTypes"
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