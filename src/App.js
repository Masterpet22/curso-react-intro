import React from 'react';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import './style/App.css'

// const defaultTodos = [
// 	{text: 'cebolla nueva', completed: false},
// 	{text: 'cebolla NUEVA', completed: false},
// 	{text: 'cebolla vieja', completed: true},
// 	{text: 'cebolla VIEJA', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
	const localStorageTodos = localStorage.getItem('TODOS_V1')
	let parsedTodos
	
	if (!localStorageTodos){
		localStorage.setItem('TODOS_V1', JSON.stringify([]))
		parsedTodos = []
	}else{
		parsedTodos = JSON.parse(localStorageTodos)
	}

	const [searchValue, setSearchValue] = React.useState('')
	const [todos, setTodos] = React.useState(parsedTodos)

	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	const searchedTodos = todos.filter(
		(todo)=>{
			const todoText = todo.text.toLowerCase()
			const searchText = searchValue.toLowerCase()
			return todoText.includes(searchText)
		}
	)
	const saveTodos = (newTodos)=>{
		localStorage.setItem("TODOS_V1", JSON.stringify(newTodos))
		setTodos(newTodos)
	}

	const completeTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos[todoIndex].completed = true
		saveTodos(newTodos)
	}
	
	const deleteTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text == text
		)
		newTodos.splice(todoIndex,1)
		saveTodos(newTodos)
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
