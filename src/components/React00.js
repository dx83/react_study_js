import React from 'react';
import { useNavigate } from 'react-router-dom';

const React00 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>REACT00</h1>
            <button onClick={() => navigate("/")}>HOME</button>
            
        </div>
    );
};

export default React00;