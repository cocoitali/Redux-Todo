import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
	todos: [
		{
			value: 'test todo',
			completed: false
		}
	]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { todos: [...state.todos, action.payload] }

		case TOGGLE_TODO:
			return state.todos.map((todo, index) => {
				if (index === action.payload) {
					return { ...todo, completed: !todo.completd }
				}
				return todo
			})

		case DELETE_TODO:
			return state.todos.filter(todo => !todo.completed)
		default:
			return state
	}
}
