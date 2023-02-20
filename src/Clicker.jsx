import { useEffect, useState } from 'react'
import './Clicker.css'

function Clicker(){
    const [count, setCount] = useState(parseInt(localStorage.getItem('count') ?? 0))

    function increaseCount(){
        setCount(count+1)
        // console.log(count);
    }

    useEffect(()=>{
        const savedCount = parseInt(localStorage.getItem('count') ?? 0)
        console.log(savedCount);
        setCount(savedCount)
    }, [])

    useEffect(()=>{
        localStorage.setItem('count', count)
    }, [count])
    
    return <div className='clicker'>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increase count</button>
    </div>
}

export default Clicker