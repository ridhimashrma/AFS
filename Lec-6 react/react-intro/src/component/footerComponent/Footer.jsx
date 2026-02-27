import React from 'react'

const Footer = (props) => {
    console.log(props)
  return (
    <div>
      <h1> Footer </h1>
      <h3>{props.email}</h3>
    </div>
  )
}

export default Footer
