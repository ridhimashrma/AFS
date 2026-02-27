import React from 'react'

function App() {
  

    let a = Math.random();
    let num1 = 10;
    let num2 = 20;
    return (
    <div>
      <Header></Header> 
    <h1>Hello World</h1>
    <Country></Country>
    <h3>{a}</h3>
      <br />
      <p>{num1} + {num2} = {num1 + num2}</p>
    </div>
  )
}


//componet should start with capital letter

function Header() {
  return (
    <div>
      <div className="logo">Logo</div>
      <ul className="nav-links">
        
        <li>Home</li>

        <li>About</li>
        <li>Contact</li>
      </ul>
    
    </div>
  )
}


  function Country() {
  return (
    <div>
      <div className="logo">Country</div>
      <ul className="nav-links">
        
        <li>Australia</li>

        <li>America</li>
        <li>Canada</li>
      </ul>
    
    </div>
  )
}

export default App