import React from 'react'
import Header from './component/headerComponent/Header.jsx'
import Footer from './component/footerComponent/Footer.jsx'
import {sum} from './component/headerComponent/Header.jsx'
import {multiply} from './component/headerComponent/Header.jsx'
const App = () => {
  let ans = sum(2,3)
  return (
    <div>
      <Header ans={ans} name="Ridhima"></Header>
      <p>{ans}</p>     
      <Footer email="ridhima@gmail.com"></Footer>
    </div>
  )
}

export default App



{/* java script is written inside {} in react */}
