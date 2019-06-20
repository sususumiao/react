import {NUM_FRUIT_ADD,NUM_FRUIT_SUB}from "../actionTypes"
// 管理员
// 定义一个默认数据
const defaultState={
    fruitNums:100
}
// 把管理员还有数据暴露出去
export default(state=defaultState,action)=>{
    // console.log(action)
    if(action.type === NUM_FRUIT_ADD){
        let newState=JSON.parse(JSON.stringify(state))
        newState.fruitNums += action.value;
        return newState
    }
    if(action.type === NUM_FRUIT_SUB){
        let newState=JSON.parse(JSON.stringify(state))
        newState.fruitNums -= action.value;
        return newState
    }
    return state;
}