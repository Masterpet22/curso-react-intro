import '../style/todoItem.css'
function TodoItem(props){
		return(
			<li className='todoItem'>
				<span 
				className={`icon icon-check ${props.completed && 'icon-check-active'}`}onClick={props.onComplete}>✔ {props.completed}</span>
				<p className={`todoitem-p ${props.completed && 'todoitem-p-completed'}`}>{props.text}</p>
				<span className={`icon icon-deleted`} onClick={props.onDelete}>❌</span>
			</li>
		)
}

export { TodoItem }