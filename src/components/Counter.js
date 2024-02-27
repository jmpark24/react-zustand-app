import React from 'react'
import { useConterStore } from '../store/useCounterStore';

const Counter = () => {
  const { count, increment, reset, setNumber } = useConterStore();

  const clear = () => {
    useConterStore.persist.clearStorage();  
    // store이름 하나 잡고 persist.clearStorage() 하면 storage 다 날라감, value만 사라지는게 아니라 그냥 다 사라짐
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>one up</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>set number</button>
      <button onClick={clear}>clear</button>
    </div>
  )
}

export default Counter