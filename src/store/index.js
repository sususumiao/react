// 引入 管理员
import reducers from "./reducers"
// 引入 仓库生成器
// 中间件
import {createStore,applyMiddleware} from "redux"
// 引入异步工具
import reduxThunk from "redux-thunk"
// 把reactThunk和applyMiddleware传入到第二个参数中




// 把管理员和仓库导出
export default createStore(reducers,applyMiddleware(reduxThunk))