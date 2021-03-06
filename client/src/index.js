import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes.jsx'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://react-pwa-blog.herokuapp.com/'

ReactDOM.render(<Routes />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
