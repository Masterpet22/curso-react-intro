import '../style/todoItem.css'
function TodoItem(props){
		return(
			<li className='todoItem'>
				<span className={`icon icon-check ${props.completed && 'icon-check-active'}`}>✔ {props.completed}</span>
				<p className={`todoitem-p ${props.completed && 'todoitem-p-completed'}`}>{props.text}</p>
				<span className={`icon icon-deleted`}>❌</span>
			</li>
		)
}

export { TodoItem }