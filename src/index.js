import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Subtract from './components/Subtract'

import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  const decrementCount = decrement => {
    setCount(count - decrement)
  }

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />

      <Subtract decrement={1} onClickFunction={decrementCount} />
      <Subtract decrement={10} onClickFunction={decrementCount} />
      <Subtract decrement={100} onClickFunction={decrementCount} />
      <Subtract decrement={1000} onClickFunction={decrementCount} />
      <span>{count}</span>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
