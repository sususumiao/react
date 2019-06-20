// 引入要合并的reducer管理员
import animalReducer from "./animalReducer"
import fruitReducer from "./fruitReducer"
// 引入合并工具
import { combineReducers } from "redux"


// 合并导出
export default combineReducers({animalReducer,fruitReducer})