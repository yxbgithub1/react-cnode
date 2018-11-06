import './index.scss'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import registerServiceWorker from './registerServiceWorker'

import store from './store'
import App from './router'

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

//server worker缓存服务
registerServiceWorker()
