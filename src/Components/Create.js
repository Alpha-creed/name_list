import React, { useState } from 'react'
import { styled } from 'styled-components'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/UserReducer';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name,email}))
        navigate("/")
    }

  return (
    <CreateStyled onSubmit={handleSubmit}>
        <h1>Add New User</h1>
      <div>
        <input 
            type="text"
            name="name"
            placeholder='Name'
            onChange={e=>setName(e.target.value)}/>
      </div>
      <div>
      <input 
            type="email"
            name="email"
            placeholder='Email'
            onChange={e=>setEmail(e.target.value)}/>
      </div>
      <Button type="submit" name={"Submit"} width={"300px"} bg={"aqua"}/>
    </CreateStyled>
  )
}

const CreateStyled =styled.form`
left:0;
margin-top:-100px;
position:absolute;
text-align:center;
top:50%;
width:100%; 
background-color:gray;
input{
    margin:20px 0;
    width:300px;
    padding:20px 130px;
    text-align:left;
    border-radius:12px;
    border:none;
    outline:none;
}
`; 
export default Create
