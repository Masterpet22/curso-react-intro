import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoButton } from './componentes/TodoButton';
import './style/App.css'

const defaultTodos = [
	{text: 'la', completed: false},
	{text: 'lala', completed: false},
	{text: 'lalala', completed: false},
	{text: 'lalalala', completed: false}
]
function App() {
	return (
		<>

			<TodoCounter completed={16} total={25}/>
			<TodoSearch />
			<TodoButton />

			<TodoList>
				{defaultTodos.map(todo =>(
					<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
				))}
				
			</TodoList>

		</>
	);
}


export default App;
