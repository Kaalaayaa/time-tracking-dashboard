import "./Dashboard.css"
import Profile from "./Profile"
import Cards from "./Cards"
import data from "../data.json"
import React, {useState } from "react"

function Dashboard() {

  const [planning, setPlanning] = useState("week")

  function daily(){
    setPlanning("day")
    
  }
  function weekly(){
    setPlanning("week")
  }
  function monthly(){
    setPlanning("month")
  }
  

  return (
    <div className="dashboard">
      <Profile planning={planning} daily={daily} weekly={weekly} monthly={monthly}/>
      <Cards  data={data} planning={planning}/>
    </div>
  );
}

export default Dashboard
