import './App.css';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';

function App() {
	return (
		<div className="App">

			<TodoCounter />
			<TodoSearch />

			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>

			{/* <TodoButton /> */}
		</div>
	);
}


export default App;
