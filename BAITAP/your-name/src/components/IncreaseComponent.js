import { useState } from 'react';

function IncreaseComponent(props) {
    const [counter,setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="Increase" style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default IncreaseComponent;