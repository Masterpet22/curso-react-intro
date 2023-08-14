import '../style/todoCounter.css'

function TodoCounter({ total, completed }){
	return(
		<h1>
			Has completado <span>{completed}</span> de <span>{total}</span> Tareas
		</h1>
	)
}

export { TodoCounter }