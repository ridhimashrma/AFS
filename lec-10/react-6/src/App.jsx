import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
function App(){
  let [count,setCount]=useState(0)
  let [random,setRandom] = useState(0)
  function fetchToDo() {
    //code to fetch data
    console.log("data fetched...!")
  }
  function changeCount() {
    setCount(count+1)
  }
  function runOnCountChange() {
    //some work related to count variable
    console.log("count changed...!")
  }
  function changeRandom() {
    setRandom(Math.random())
  }

  //fetchToDo()
  //mounting phase : when the component is rendered for the first time

  // useEffect(()=>{
  //   fetchToDo()

  // },[])

  //unmounting phase : when the component is removed from the screen
  useEffect(()=>{
    fetchToDo()
    let id= setInterval(()=>{
      console.log("running set interval")
    },1000)
    // clearInterval(id)


    //clean up function : it is a function which will be called when the component is removed from the screen
    //runs only on unmounting phase of the component useffect ke andar se return hota hai
      return ()=>{
        clearInterval(id)
        //console.log("component is removed from the screen")
      }

  },[])



  useEffect(()=>{
    runOnCountChange()
  },[count,random])
  // useEffect(()=>{
  //   changeRandom()
  // },[count])


  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={changeCount}>Change count</button>
      <button onClick={changeRandom}>Random</button>
      <h2>count is {count}</h2>
      <h3>random value is {random}</h3>
    </div>
  )
}

export default App