import React, { useEffect } from 'react'
import { useState} from 'react'

function Alert() {
   const [showElement,setShowElement] = React.useState(true)
   useEffect(() =>{
    setTimeout(function(){
        setShowElement(false)
    },3500)
   })
  return (
    <div>
        {showElement?
        <nav className='nav text-center bg-white text-blue-700 '>
            Please Refresh Page After Every Succesfull Search
        </nav>
      :<></>}
    </div>
  )
}

export default Alert