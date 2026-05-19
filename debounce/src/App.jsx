import React, {useRef} from 'react'

const App = () => {
  let searchRef=useRef(); 
  function debounce(){                     //closure
    let id=null;
    return function callApi(){
      if(id){
        clearTimeout(id);
      }
      setTimeout(()=>{
        console.log("sending request===>"+searchRef.current.value);
      },2000)
    }
  }
  //let callApifn=debounce();
  return (
    <div>
      <input ref={searchRef} type="text" onChange={debounce()} />  
    </div>
  )
}

export default App
