import React, { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'Phi'
    },
    {
        id: 2,
        name: 'Long'
    },
    {
        id: 3,
        name: 'Hieu'
    }
]

function Checkbox1(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const [checked,setChecked] = useState();
    const handleSubmit = () => {
        //Call API
        console.log({id: checked});
    }
    return (
        <div style={{ padding: 32 }}>
            {courses.map(course => (
                <div key={course.id}>
                    <input type='radio'
                    checked={checked === course.id}
                    onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default Checkbox1;