import React from 'react'
import { Link } from 'react-router-dom'

import image1 from "./images/home.jpg";
import image2 from "./images/add.jpg";

export default function Main() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={image1} height="500px" className="card-img-top" alt="..."/>
      <div class="card-body">
        <Link to="/home" className="btn btn-primary">Home</Link>
        </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={image2} height="500px" className="card-img-top" alt="..."/>
      <div class="card-body">
      <Link to="/adduser" className="btn btn-primary">Add User</Link>
        </div>
    </div>
  </div> 
</div>
  )
}
