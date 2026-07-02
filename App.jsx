import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function EmployeeCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px' }}>
      <h3>{props.employeeName}</h3>
      <p><strong>ID:</strong> {props.employeeId}</p>
      <p><strong>Department:</strong> {props.department}</p>
    </div>
  );
}


function App(){
  const empname = "Tanish Kumar";
  const empid  = "12";
  const dept = "Google";

  return(
    <div>
      <h2>Employee Detailes</h2>
      <EmployeeCard
         employeeName = {empname}
         employeeId = {empid}
         department = {dept}
      />
    </div>
  );
}

export default App

