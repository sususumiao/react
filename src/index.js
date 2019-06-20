import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入store
import store from "./store"
// 引入 redux和react的连接器 Provider
import {Provider} from "react-redux"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

