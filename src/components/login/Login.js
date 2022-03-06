import React from 'react'
import { useNavigate , Navigate } from 'react-router-dom'
import swal from 'sweetalert';

 

const Login = ( { user , setUser , setToken , token} ) => {

    let navigate  = useNavigate();

    function handleChange (event) {
        const  {name, value } = event.target;
        setUser (prev=>{
            return {
                ...prev,
                [name]: value,
            }
        })
    }
     const handleSubmit = (e) =>{
         e.preventDefault();
         if (user.user === 'user' && user.password ==="password") {
            setToken(user.password)
            navigate('/')
        }   
        else{
            swal("complete form")
        }
         }

  return (
    <>
    {token && <Navigate to="/"/>}
        <form className='form' type="submit" onSubmit={handleSubmit}>
            <label htmlFor='user'>User Name : </label>
            <input
             id="user"
             name='user' 
             value={user.user} 
             onChange={handleChange}
             placeholder="  user name"></input>
            <label htmlFor='user-label' >Password : </label>
            <input name="password" id="password" value={user.password} className='password-submit' type='password' placeholder='  password' onChange={handleChange}></input>
            <br/>
            <button className='form-button'>Enter</button>
        </form>
    </>
  )
  }

export default Login