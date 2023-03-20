import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
        //console.log("Code With SI.")
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    };

  return (
    <div className='container'>
        <div className='py-4'>{/*for margin i think*/}
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scopr="col">RegistrationNumber</th>
                <th scope="col">StudentMail</th>
                <th scope="col">Degree</th>
                <th scope="col">Birthday</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map((user,index)=>(
                    <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.regno}</td>
                        <td>{user.studentmail}</td>
                        <td>{user.degree}</td>
                        <td>{user.birthday}</td>
                        <td>
                            <Link className="btn btn-primary mx-2"
                            to={`/viewuser/${user.id}`}
                            >
                                View
                            </Link>
                            <Link className="btn btn-success mx-2"
                            to={`/edituser/${user.id}`}
                            >
                                Edit
                            </Link>
                            <button 
                                className="btn btn-danger mx-2"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))
                }

                
            </tbody>
            </table>
        </div>
    </div>
  )
}
