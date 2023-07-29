import React from "react";
import { Link } from "react-router-dom";
import clg from './Microcollege.png'

import './work.css'
export function Home(){

return(
    <>

  {/* /.......................NavBar............................./ */}

  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="#"><img src={clg} className="img"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent col-lg-6">
    <ul class="navbar-nav  ">
      <li class="nav-item ">
        <Link class="nav-link" to='/'><h6 className="hv">Home</h6></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/admin'><h6 className="hv">Admin</h6></Link>
      </li>
     <li class="nav-item">
     <Link class="nav-link" to='/client'><h6 className="hv">Client</h6></Link>
    </li>
   
   </ul>
 
  </div>
</nav>
    
    </>
);
}