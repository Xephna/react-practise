// import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import Clicker from './Clicker'
import NameCard from './NameCard'

function App() {

  const [hasClicker, setHasClicker] = useState(true)

  function toggleClicker(){
    if(hasClicker===true){
      setHasClicker(false)
    } else if (hasClicker===false){
      setHasClicker(true)
    }
  }

  console.log(hasClicker);

  return <div>
    <p className="para1" id='welcome'>hello</p>
    <button onClick={toggleClicker}>{hasClicker?'Hide':'Show'} Clicker</button>
    <NameCard />
    {hasClicker?<Clicker />:null}
  </div>
  
}

export default App
