
// import user from "./user"
import User from "./user.jsx"


function App() {
  
const name = "gopi"
  return (
    
    <div>
      <h2> props in react js</h2>
     <User age = {25} name={name}  email="gopi@gmail.com"/>
    </div>
  )
}
export default App
