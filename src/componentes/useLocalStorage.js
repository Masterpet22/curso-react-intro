import React from 'react';
// const defaultTodos = [
// 	{text: 'cebolla nueva', completed: false},
// 	{text: 'cebolla NUEVA', completed: false},
// 	{text: 'cebolla vieja', completed: true},
// 	{text: 'cebolla VIEJA', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

//custom hooks que llamamos useLocalStorage
function useLocalStore(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }
    const [item, setItem] = React.useState(parsedItem)

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return [item, saveItem]
}

export { useLocalStore }