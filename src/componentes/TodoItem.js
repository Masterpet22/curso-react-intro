import '../style/todoItem.css'
import { BiCheck, BiX } from "react-icons/bi";
function TodoItem(props){
		return(
			<li className='todoItem'>
				<span 
				className={`icon icon-check ${props.completed && 'icon-check-active'}`}onClick={props.onComplete}> <BiCheck /> {props.completed}</span>
				<p className={`todoitem-p ${props.completed && 'todoitem-p-completed'}`}>{props.text}</p>
				<span className={`icon icon-deleted`} onClick={props.onDelete}><BiX/></span>
			</li>
		)
}

export { TodoItem }