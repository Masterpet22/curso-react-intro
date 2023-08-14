import './App.css';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import React from 'react';

const defaultTodos = [
	{text: 'la', completed: false},
	{text: 'lala', completed: false},
	{text: 'lalala', completed: false},
	{text: 'lalalala', completed: false}
]
function App() {
	return (
		<React.Fragment>

			<TodoCounter completed={16} total={25}/>
			<TodoSearch />

			<TodoList>
				{defaultTodos.map(todo =>(
					<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
				))}
				
			</TodoList>

			<TodoButton />
		</React.Fragment>
	);
}


export default App;
