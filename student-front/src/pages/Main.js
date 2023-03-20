import React from "react";
import { Link } from 'react-router-dom';
import addstudent from "./images/addstudent.jpg";
import viewstudents from "./images/viewstudents.jpg";



export default function Main() {
  return (
    
    <div className="py-3">
      <h2>main menu </h2> 
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={addstudent} class="card-img-top" alt="addstudent"/>
      <div class="card-body">
      <Link
                    className="btn btn-primary mx-2"
                    to={`/adduser`}
                  >
                    Add Student
                  </Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={viewstudents} class="card-img-top" alt="view student"/>
      <div class="card-body">
      <Link
                    className="btn btn-primary mx-2"
                    to={`/home`}
                  >
                    View Students
                  </Link>
      </div>
    </div>
  </div>
  
  
</div>
</div>
  )
}