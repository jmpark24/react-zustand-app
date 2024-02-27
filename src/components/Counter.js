import React from 'react'
import { useConterStore } from '../store';

const Counter = () => {
  const { count, increment, reset, setNumber } = useConterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>set number</button>
    </div>
  )
}

export default Counter