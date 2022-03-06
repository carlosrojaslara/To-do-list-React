import React , {useEffect} from 'react'
import TodosList from '../TodosList';
import Login from '../login/Login'
import { Navigate } from 'react-router-dom'


const Form = ({ toDo , setTodo , todos, setTodos  , editTodo, setEditTodo , user, token}) => {



  const updateTodo = (title , id , completed) => {
      const newTodo = todos.map((todo)=>
          todo.id === id ? {title , id , completed} : todo
      )
      setTodos (newTodo);
      setEditTodo("")
  }  

  
  const handleChange = (e) =>{
      setTodo(e.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault();
      if(!editTodo){
          const newTodo = {id: new Date().getTime(),
            title: toDo,
            completed: false,}
          
          setTodos([...todos , newTodo])
          setTodo("")

      } else {
          updateTodo (toDo, editTodo.id, editTodo.completed)
      }

  }

  useEffect(()=>{
    if(editTodo){
        setTodo(editTodo.title)
    }else{
        setTodo('')
    }
  },[setTodo , editTodo]);
  console.log('token',token)

  return (
    <> 
        {!token && <Navigate to="/login"/>}

        <form className='form' onSubmit={handleSubmit}>
            <input 
                className='formInput' 
                type='text' 
                placeholder='  add task ... '
                value={toDo}
                onChange={handleChange}
            />
            <button className='formButton' type='submit'>{editTodo ? 'OK' : "+" }</button>
        </form>
        <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </>
  )
}

export default Form