import React, { useState } from 'react';

const AddMember = (p) => {
    const {list, setting} = p
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [region,setRegion] = useState('')
   
    return (
        <div>
            <h1>전체 회원 수 : {list.length}</h1>
            이름 : <input type='text' value={name}onChange={(e)=>setName(e.target.value)}/>
            나이 : <input type='text'value={age} onChange={(e)=>setAge(parseInt(e.target.value))}/>
            지역 : <input type='text' value={region}onChange={(e)=>setRegion(e.target.value)}/>
            <button onClick={()=>setting([{name,age,region}])}>추가</button>

        </div>
    );
};

export default AddMember;