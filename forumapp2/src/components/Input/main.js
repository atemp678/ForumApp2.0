import React, { useState } from 'react';

function Input(){
    const [comment, setComment] = useState("");

    return (
        <div>
        <input onChange={() => setComment(comment)}/>
        </div>
    )
}
export default Input;
