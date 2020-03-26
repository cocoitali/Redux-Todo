import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import todoReducer from './reducers'
import TodoContainer from './Containers/TodoContainer'

const store = createStore(todoReducer, applyMiddleware(logger))

const App = () => {
	return (
		<div>
			<TodoContainer />
		</div>
	)
}
const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
