/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react'


function Playground(props) {
  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)
  const [choice, setChoice] = useState('scissors')

  if (spinnerOn)
    return (
      <div className='container'>
        <h3>The spinner is {spinnerOn ? 'ON' : 'OFF'}</h3>
        <button onClick={() => setSpinnerOn(false)}>Turn spinner off</button>
      </div>
    )
  return (
    <div>
      <h1>Welcome to the Playground!</h1>
      <p>The current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setSpinnerOn(true)}>Turn on the spinner</button>
      <h3>The current weapon is {choice}</h3>
      <button onClick={() => setChoice('scissors')}>Pick scissors</button>
      <button onClick={() => setChoice('rock')}>Pick rock</button>
      <button onClick={() => setChoice('paper')}>Pick paper</button>
    </div>
  )
}


export default Playground