import { useState, useEffect } from "react";

function Counter() {

    const [count , setCount] = useState(10);

    const [isHidden, setIsHidden] = useState(false);


    useEffect(() => {
        count === 0 && setIsHidden(true);
    },[count]);

    return (
        <div>
            <p>{count}</p>
            {!isHidden && <button onClick={()=> setCount(count-1)}>counter</button>}
            {isHidden && <button onClick={()=> setCount(10)}>reset</button>}
        </div>
    )
}

export default Counter;