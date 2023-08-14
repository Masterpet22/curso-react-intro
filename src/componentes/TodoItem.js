import '../style/todoItem.css'
function TodoItem(props){
		return(
			<li className='todoItem'>
				<span className='icon icon-check icon-check-active'>✔ {props.completed}</span>
				<p className='todoitem-p todoitem-p-completed'>{props.text}</p>
				<span className='icon icon-deleted'>❌</span>
			</li>
		)
}

export { TodoItem }