import React, {useState} from 'react';

const ClickCounter = () => {
    const [count, setConte] = useState(0)
    return (
        <div>
            <button onClick={()=> setConte(c => c + 1)}>Count {count}</button>
        </div>
    );
};

export default ClickCounter;
