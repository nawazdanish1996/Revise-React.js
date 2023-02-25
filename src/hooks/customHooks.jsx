import React, { useState } from 'react';
import useTitleCount from './useTitleCount';

const CustomHooks = () => {
    const [count, setCount] = useState(0);

    // custom Hook
    useTitleCount(count);

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1)}>Click Me!</button>
    </div>
  )
}

export default CustomHooks;