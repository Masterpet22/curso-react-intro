import './App.css';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import React from 'react';

function App() {
	return (
		<React.Fragment>

			<TodoCounter completed={16} total={25}/>
			<TodoSearch />

			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>

			<TodoButton />
		</React.Fragment>
	);
}


export default App;
