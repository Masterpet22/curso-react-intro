import React from 'react';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import './style/App.css'

const defaultTodos = [
	{text: 'cebolla nueva', completed: false},
	{text: 'cebolla NUEVA', completed: false},
	{text: 'cebolla vieja', completed: true},
	{text: 'cebolla VIEJA', completed: true},
]
function App() {
	const [searchValue, setSearchValue] = React.useState('')
	console.log(searchValue)
	const [todos, setTodos] = React.useState(defaultTodos)

	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	const searchedTodos = todos.filter(
		(todo)=>{
			const todoText = todo.text.toLowerCase()
			const searchText = searchValue.toLowerCase()
			return todoText.includes(searchText)
		}
	)

	const completeTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos[todoIndex].completed = true
		setTodos(newTodos)
	}
	
	const deleteTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos.splice(todoIndex,1)
		setTodos(newTodos)
	}

	

	return (
		<>

			<TodoCounter completed={completedTodos} total={totalTodos}/>
			<TodoSearch 
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>

			<TodoList>
				{searchedTodos.map(todo =>(
					<TodoItem 
					key={todo.text} 
					text={todo.text} 
					completed={todo.completed}
					onComplete={()=> completeTodo(todo.text)}
					onDelete={()=> deleteTodo(todo.text)}/>
					))}
				
			</TodoList>
			<TodoButton />

		</>
	);
}


export default App;
