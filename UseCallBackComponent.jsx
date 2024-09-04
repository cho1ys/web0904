import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

const UseCallBackComponent = () => {
    const [count,setCount]=useState(0)
    
    const clickH = useCallback(()=>{
        console.log('count :',count)
    },[count])
        
    useEffect(()=>{
        console.log('렌더링')
    },[clickH])
    return (
        <div>
            <input type='number' value={count}onChange={(e)=>setCount(e.target.value)}/>
            <button onClick={clickH}>숫자 출력</button>
        </div>
    );
};

export default UseCallBackComponent;