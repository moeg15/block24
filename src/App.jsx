import { puppyList } from "./data"
import { useState } from "react"
import './App.css'

function App() {

const [puppies, setPuppies]= useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)

const handleClick = (puppy) => {
  setFeatPupId(puppy.id)
}
const featuredPup = puppies.find((pup)=>pup.id===featPupId)
console.log(featuredPup)
  return (
    <>
      { puppies.map((puppy) => {
     return <p className="blue" key={puppy.id} onClick={()=>handleClick(puppy)}> {puppy.name}</p>
   })}
    {featPupId && (
        <div className="background"> 
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default App
