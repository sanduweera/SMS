import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        regno:"",
        studentmail:"",
        degree:"",
        birthday:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (

    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">User Details</h2>

            <div className="card">
                <div className="card-header">
                    Details of user id : {user.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>FirstName : </b>
                            {user.firstname}
                        </li>
                        <li className="list-group-item">
                            <b>LastName : </b>
                            {user.lastname}                            
                        </li>
                        <li className="list-group-item">
                            <b>RegistrationNumber : </b>
                            {user.studentmail}                            
                        </li>
                        <li className="list-group-item">
                            <b>StudentMail : </b>
                            {user.studentmail}                            
                        </li>
                        <li className="list-group-item">
                            <b>Degree : </b>
                            {user.degree}                            
                        </li>
                        <li className="list-group-item">
                            <b>Birthday : </b>
                            {user.birthday}                            
                        </li>
                    </ul>
                </div>
            </div>
            <Link className="btn btn-primary my-2" to={"/home"}>Back to Home</Link>
        </div>
    </div>
    </div>
  )
}
