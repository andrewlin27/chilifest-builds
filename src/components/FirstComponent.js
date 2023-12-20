import React from 'react'

const FirstComponent = ({fn}) => {
  return (
    <div>
      <button onClick={() => fn(0)}>Reset</button>
    </div>
  )
}

export default FirstComponent