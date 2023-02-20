import { useState } from 'react'

function Clicker(){
    const [count, setCount] = useState(0)
    return <div style={{border:"black 1px solid"}}>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
    </div>
}

export default Clicker