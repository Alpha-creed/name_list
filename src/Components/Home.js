import React from 'react'
import { styled } from 'styled-components'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/UserReducer';

export default function Home() {
    const users = useSelector((state)=>state.users);
   const dispatch = useDispatch();

    const handleDelete=(id)=>{
        dispatch(deleteUser({id:id}))
    }

    return (
    <HomeStyled>
      <h2>Crud App with JSON Server</h2>
      <Link to="/create"><Button name={"Create +"} width={"18px 20px"} bg={"green"}/></Link> 
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`}><Button name={"Edit"} width={"15px 18px"} bg={"blue"}/></Link>
                            <Button onClick={()=>handleDelete(user.id)} name={"Delete"} width={"15px 18px"} bg={"red"}/>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
    padding:20px;
    .table{
        width:100%;
        border-collapse:collapse;
        margin:0px auto;
    }
    .table th{
        text-align:left;
        padding:12px 0;
        color:orange;
        background-color:purple;
    }
    .table tr:hover{
        color:blue;
    }
    .table tr:nth-child(even){
        background-color:#f2f2f2;
    }
    .table td, .table th {
        border-bottom: 1px solid #black;
        padding: 28px;
    }
`;
