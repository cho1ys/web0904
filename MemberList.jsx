import React from 'react';

const MemberList = (p) => {
    const { list, ondelete } = p;

    // 스타일 정의
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    };

    const columnStyle = {
        flex: 1,
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={rowStyle}>
                <div style={columnStyle}><h3>이름</h3></div>
                <div style={columnStyle}><h3>나이</h3></div>
                <div style={columnStyle}><h3>지역</h3></div>
                <div style={columnStyle}><h3>삭제</h3></div>
            </div>
            {list.map((m, i) => (
                <div key={i} style={rowStyle}>
                    <div style={columnStyle}>{m.name}</div>
                    <div style={columnStyle}>{m.age}</div>
                    <div style={columnStyle}>{m.region}</div>
                    <div style={columnStyle}>
                        <button onClick={() => ondelete(i)}>x</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MemberList;
