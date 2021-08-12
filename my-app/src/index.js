import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import postsReducer from './Reducer/reducer.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(postsReducer)

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>,
document.getElementById('root'))