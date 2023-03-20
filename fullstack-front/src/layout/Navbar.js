import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../pages/images/logo.jpg'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={img1} mx-2 width="35" height="30"/>
                Student Management System
            </Link>
            <button 
                className ="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
            </button>
            
            {/* <Link className="btn btn-outline-light" to="/adduser">
                Add User
            </Link> */}
        </div>
        </nav>
    </div>
  )
}
