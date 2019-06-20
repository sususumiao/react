// 引入 管理员
import reducers from "./reducers"
// 引入 仓库生成器
import {createStore} from "redux"






// 把管理员和仓库导出
export default createStore(reducers)