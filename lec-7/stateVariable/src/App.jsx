//regular variable 
// import React from 'react'
// const App = () => {
// let count=0;

//   function increase(){
//     count++;
//     console.log(count);
//   }
//   return (
//     <div>
//       <h1> State variable</h1>
//       <h4>count: {count}</h4>
//       <button onClick={increase}>Click</button>
//     </div>
//   )
// }

// export default App






// import React from 'react'
// import {useState} from 'react';
// const App = () => {
//   //state variable---> react keeps track of state variables but not regular variables
//   let [count,setCount]=useState(0);

// //let count=0;

//   function increase(){
//     count++;
//     setCount(count);
//     console.log(count);
//   }
//   return (
//     <div>
//       <h1> State variable</h1>
//       <h4>count: {count}</h4>
//       <button onClick={increase}>Click</button>
//     </div>
//   )
// }

// export default App




import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  function generateRandom() {
    const randomDigit = Math.floor(Math.random() * 10);
    setNumber(randomDigit);
    console.log(randomDigit);
  }

  return (
    <div>
      <h1>Random Number</h1>
      <h4>Number: {number}</h4>
      <button onClick={generateRandom}>Generate</button>
    </div>
  );
};

export default App;
