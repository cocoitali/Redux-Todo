import React from 'react'

const Todos = props => {
	return (
		<div>
			<input type='text' value={props.data} onChange={props.inputHandler} />
			<button onClick={props.addHandler}>add todo</button>
			<button onClick={props.deleteTodo}>delete todo</button>
			<ul>
				{props.todos.map((todo, index) => (
					<li onClick={() => props.toggleTodo(index)} key={index}>
						{todo.value}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Todos
