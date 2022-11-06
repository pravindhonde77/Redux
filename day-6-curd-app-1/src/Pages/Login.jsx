import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthReducer/action'
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes'

const Login = () => {
  const dispatch=useDispatch()
   const navigate=useNavigate()
  const[email,setEmail]=useState("eve.holt@reqres.in")
  const[password,setPassword]=useState("")
   
  const location=useLocation()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      //if the user has logged in successfully then,
      //navigate or redirect the user to page ,where
      //he was going initially.
      dispatch(login({email,password})).then((r)=>{
        console.log(r)
        if(r.type===USER_LOGIN_SUCCESS){
          const comingFrom=location.state.from || "/";
          navigate(comingFrom,{replace:true})
          
        }
      })
      setEmail("");
      setPassword("")

    }

  }

   


  return (
    <div>
      <h1>Login form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Useremail</label>
            <input
             type={"email"}
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Userpassword</label>
            <input 
            type={"password"}
            value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login