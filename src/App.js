import Form from './components/forms/Form';
import Header from './components/header/Header';
import { useState } from 'react';
import app from "./App.css"
import Login from './components/login/Login'
import {BrowserRouter as Router , Routes, Route, Link, BrowserRouter } from 'react-router-dom' 


function App() {
  const initialState = {
    user: null,
    password: null,
  }
  const [toDo, setTodo] = useState('');
  const [todos , setTodos] = useState([]);
  const [editTodo , setEditTodo] = useState(null)
  const [editingText, setEditingText] = useState('')
  const [user , setUser] = useState('')
  const [token, setToken] = useState(null)

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Routes> 
        <Route path="/" element={<Form toDo={toDo} setTodo={setTodo} todos={todos} setToken={setToken} token={token} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} user={user} />}/>
        <Route path="/login" element={<Login user={user} setUser={setUser} setToken={setToken} token={token}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
