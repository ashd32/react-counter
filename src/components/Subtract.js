import React from 'react'

const Subtract = ({ decrement, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(decrement)
  }
  return <button onClick={handleClick}>-{decrement}</button>
}

export default Subtract
