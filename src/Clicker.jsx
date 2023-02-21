import { useEffect, useState } from 'react'
import './Clicker.css'

const Clicker = props => {

    //destructuring props
    const {increment, keyName, color="darkOrchid"} = props

    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    
    useEffect(()=>{
        // console.log("first render");
        return () => {
            localStorage.removeItem(keyName)
        }
    },[])

    const increaseCount = () => {
        setCount(count+1)
        increment()
    }

    useEffect(()=>{
        const savedCount = parseInt(localStorage.getItem(keyName) ?? 0)
        setCount(savedCount)
    }, [])

    useEffect(()=>{
        localStorage.setItem(keyName, count)
    }, [count])
    
    return (
        <div className='clicker'>
            <p style={{color:color, fontWeight:"bold", fontSize:"2rem"}}>Count: {count}</p>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    )
}

export default Clicker