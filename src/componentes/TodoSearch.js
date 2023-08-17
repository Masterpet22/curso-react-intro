import React, { useState } from 'react'
import '../style/todoSearch.css'


function TodoSearch({
	searchValue, setSearchValue
}){
		return(
		<input placeholder="cortar"
		value={searchValue}
		onChange={(e)=>{
			setSearchValue(e.target.value)
		}}/>
	)
}

export { TodoSearch }