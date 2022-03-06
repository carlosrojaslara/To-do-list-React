import React from 'react'

const TodosList = ({todos, setTodos , setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter( (todo) => todo.id !==id));
    }
const toggleComplete = (id) => {
    setTodos (
        todos.map(item=>{
            if(item.id === id) {
                return {...item, completed:!item.completed}
            }
            else return item ;
        })
    )
}

const handleEdit = ({id}) =>{
    const findTodo = todos.find(todo => todo.id ===id);
    setEditTodo(findTodo)
}

  return (
    <ul className='todos-icons'>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <p className='todo-text'>{todo.title}</p>
                <div className='todo-icons'>
                    <button className='todo-icon'  onClick={()=>handleEdit(todo)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='todo-icon'  onClick={()=>handleDelete (todo)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <input  className='todo-icon' type='checkbox' checked={todo.completed} onChange={()=>toggleComplete(todo.id)}></input> 
                </div>
            </li>
        )
        )}
        <hr className='brList'/>
    </ul>
  )
}

export default TodosList