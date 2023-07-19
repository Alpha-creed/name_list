import React, { useState } from 'react'
import Button from './Button';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/UserReducer';


const Update = () => {
    const{id} = useParams();
    const users = useSelector((state)=>state.users);
    const existingUser = users.filter(f=>f.id == id);
    const {name,email} = existingUser[0];
    const [uname,setName] = useState(name);
    const [uEmail,setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uEmail
        }))
        navigate("/")
    }

    return (
    <UpdateStyled onSubmit={handleUpdate} >
        <h1>Update User</h1>
      <div>
        <input 
            type="text"
            name="name"
            placeholder='Name'
            value={uname}
            onChange={e=>setName(e.target.value)}
          />
      </div>
      <div>
      <input 
            type="email"
            name="email"
            placeholder='Email'
            value={uEmail}
            onChange={e=>setEmail(e.target.value)}
            />
      </div>
      <Button type="submit" name={"Update"} width={"300px"} bg={"aqua"}/>
    </UpdateStyled>
  )
};

const UpdateStyled =styled.form`
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
   

export default Update;
