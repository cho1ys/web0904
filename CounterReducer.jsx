import React, { useReducer } from 'react';
import counterReducer from './Counter';
import './burger.scss'
const CounterReducer = () => {
   const [state,dispatch] = useReducer(counterReducer,0)
   function burger(){dispatch({type:'BURGER', value : 5000})}
   function potato(){dispatch({type:'POTATO',value : 3000})}
   function coke(){dispatch({type:'COKE',value : 1000})}
   function burgerU(){dispatch({type:'BURGER', value : -5000})}
   function potatoU(){dispatch({type:'POTATO',value : -3000})}
   function cokeU(){dispatch({type:'COKE',value : -1000})}
    return (
        <div>
            <h1>새싹 햄버거 가게</h1>
            <h3>지불할 금액 : {state}</h3>
                
            <div className='b'>
                <button className='burger'onClick={burger}>hamburger</button>
                <button className='burgerU'onClick={burgerU}>uncheck hamburger</button>
            </div>
            <div className='p'>
                <button className='potato'onClick={potato}>potato</button>
                <button className='potatoU'onClick={potatoU}>uncheckpotato</button>
            </div>
            <div className='c'>
                <button className='coke'onClick={coke}>coke</button>
                <button className='cokeU'onClick={cokeU}>uncheckcoke</button>
            </div>
        </div>
    );
};

export default CounterReducer;