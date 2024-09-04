import React from 'react';
import { memo } from 'react';
const ChildComponent = (update) => {
    console.log('child 렌더링')
    return (
        <div>
        
        </div>
    );
};

export default memo(ChildComponent);