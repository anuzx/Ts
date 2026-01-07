import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0); //now this data will always be a number
    
    function click() {
        setCount((c) => c + 1);
    }

  return (
    <div>
          <p>Cups ordered:{count}</p>
          <button onClick={click}></button>
    </div>
  );
}
