// import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './App.css'
import Clicker from './Clicker'
import NameCard from './NameCard'

function App(props) {

  //destructuring props
  const {clickersCount} = props
  

  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)

  const toggleClicker = () =>{
    if(hasClicker===true){
      setHasClicker(false)
    } else if (hasClicker===false){
      setHasClicker(true)
    }
  }

  const increment = () => {
    setCount(count+1)
  }

  //use spread to make an array of undefined of clickersCount size
  const tempArray = [...Array(clickersCount)]

  return (
    <div>
      <h1>React App</h1>
      <h2>And a fancy subtitle</h2>
      <h3>Total count: {count}</h3>
      <p className="para1" id='welcome'>hello</p>
      <button onClick={toggleClicker}>{hasClicker?'Hide':'Show'} Clicker</button>
      <NameCard />
      {hasClicker&&<>
        {[...Array(clickersCount)].map((value, index)=>{
          return <Clicker
            key={index}
            increment={increment}
            keyName={`clicker${index}`}
            color={`hsl(${Math.random()*361}deg ${Math.random()*101}% ${Math.random()*101}%)`} />
        })}
      </>}
    </div>
  )
}

export default App
