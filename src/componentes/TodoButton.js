import '../style/todoButton.css'
function TodoButton(){
	return(
		<button onClick={
			(e)=>{console.log(e.target)}
		}>+</button>
	)
}
export { TodoButton }