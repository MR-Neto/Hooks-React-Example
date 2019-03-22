import React from 'react'
import Hook from './Hook'

function WidthDisplay() {
  const width = Hook(); 

  return (
    <div>
      <p>Window width is {width}</p>
    </div>
  )
}

export default WidthDisplay


