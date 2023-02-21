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
    {hasClicker&&<>
      <Clicker keyName="clickerA" color={`hsl(${Math.random()*361}deg ${Math.random()*101}% ${Math.random()*101}%)`} />
      <Clicker keyName="clickerB" color={`hsl(${Math.random()*361}deg ${Math.random()*101}% ${Math.random()*101}%)`} />
      <Clicker keyName="clickerC" color={`hsl(${Math.random()*361}deg ${Math.random()*101}% ${Math.random()*101}%)`} />
    </>}
  </div>
  
}

export default App
