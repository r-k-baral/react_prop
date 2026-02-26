
// import user from "./user"
import User from "./user.jsx"
import Userr from "./user1.jsx"


function App() {
  let userobject ={
    name:"rakesh",
    age:"26",
    email:"rakesh@gopi.com"
  }
  
const name = "gopi"
  return (
    
    <div>
      <h2> props in react js</h2>
     <User age = {25} name={name}  email="gopi@gmail.com"/>
     <Userr user ={userobject} />
    </div>
  )
}
export default App
