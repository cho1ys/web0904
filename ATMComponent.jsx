import React, { useReducer, useState } from 'react';

const ATMComponent = () => {
    const [money, setMoney] = useState(0)
    const [total, dispatch] = useReducer(setTotal,0)
    function setTotal(total, action){
        switch(action.type){
            case'INPUT':
                return total + parseInt(action.price)
            case'OUTPUT':
                return total - parseInt(action.price)
            default:
                return total
        }
    }
    return (
        <div>
            <h1>금액을 입력하세요.</h1>
            <input type='number' value = {money}step='1000' onChange={(e)=>{setMoney(e.target.value)}}/>
            <h1>입금 혹은 출금 버튼을 클릭하세요.</h1>
            <div className='btn'>
            <button onClick={()=>dispatch({type : 'INPUT',price:money})}>입금</button>
            <button onClick={()=>dispatch({type : 'OUTPUT',price:money})}>출금</button>
            </div>
            <h1>현재 잔액 : {total}</h1>
        </div>
    );
};

export default ATMComponent;