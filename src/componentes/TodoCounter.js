import '../style/todoCounter.css'


function TodoCounter({ total, completed }){
	return(
		total == completed ?
		<h1>
			No tienes tareas pendiente 🥳
		</h1>
		:
		<h1>
			Has completado <span>{completed}</span> de <span>{total}</span> Tareas
		</h1>

	)
}

export { TodoCounter }