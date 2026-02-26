
// import user from "./user"
import User from "./user.jsx"
import Userr from "./user1.jsx"
import Collage from "./college.jsx"
import Student from "./student.jsx"
import { useState } from "react"


function App() {
  let userobject ={
    name:"rakesh",
    age:"26",
    email:"rakesh@gopi.com"
  }
   let userobject2 ={
    name:"om",
    age:"26",
    email:"om@gopi.com"
  }
const name = "gopi"

let Colnames = ["ptu",'iit','miit',"cpc","dff","fsfs"]
const [student,setStudent]=useState()  // agar is m koi value nahi ha toh wo dekhi ha hi nhai due this condition  {  student && <Student name={student} /> }
  return (
    
    <div>
      <h2> props in react js</h2>
      <hr />
     <User age = {25} name={name}  email="gopi@gmail.com"/>
     <hr />
     <Userr user ={userobject} />
     <hr />
     <Userr user ={userobject2} />
     <hr />
     <Collage name ={Colnames} />
     <hr />
   {  student && <Student name={student} /> }
   <button onClick={()=>setStudent("gopal")}>update name </button>
    </div>
  )
}
export default App
