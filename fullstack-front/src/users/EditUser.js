import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate();

    const {id}=useParams();

    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        regno:"",
        studentmail:"",
        degree:"",
        birthday:""
    });

    const{firstname,lastname,regno,studentmail,degree,birthday}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/home")
    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>
            
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">
                    FirstName
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your first name"
                    name="firstname"
                    value={firstname}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                    LastName
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your last name"
                    name="lastname"
                    value={lastname}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="RegNo" className="form-label">
                    Registration No.
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your registration number"
                    name="regno"
                    value={regno}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="StudentMail" className="form-label">
                    StudentMail
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your student mail address"
                    name="studentmail"
                    value={studentmail}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Degree" className="form-label">
                    Degree
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your degree"
                    name="degree"
                    value={degree}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Birthday" className="form-label">
                    Birthday
                </label>
                <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your birthday"
                    name="birthday"
                    value={birthday}
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-outline-primary">
                Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
                Cancel
            </Link>
            </form>

        </div>
    </div>
  </div>
}
