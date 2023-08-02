import React from 'react';
import { useState } from 'react';
const gifts = [
    'Phi',
    'Hieu',
    'Long'
]

function Input(props) {
    const [gift,setGift] = useState();
    
    const handleInput = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }

    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || 'chua co phan thuong'}</h1>
            <button onClick={handleInput}>Lay Thuong</button>
        </div>
    );
}

export default Input;