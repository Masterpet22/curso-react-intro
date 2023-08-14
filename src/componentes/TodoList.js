import '../style/todoList.css'
function TodoList({ children }){
	return(
		<ul>
			{children}
		</ul>
	)
}

export { TodoList }