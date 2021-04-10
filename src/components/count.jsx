import { useState } from 'react';

const useCount = (i) =>{
    const [count, setCount] = useState(i)
  
    const increment = (a) =>{
      setCount(count +a)
    }
    return {count, increment}
}

export default useCount