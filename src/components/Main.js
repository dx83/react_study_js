import React from 'react';

const Main = () => {
    const now = new Date();
    const display = now.toLocaleTimeString();

    return (
        <div>
            <h1>Main</h1>
            <p id="text">현재 시각은 {display}</p>
            
        </div>
    );
};

export default Main;