import React from 'react';

const Main = () => {
    const now = new Date();
    const display = now.toLocaleTimeString();

    return (
        <div>
            <h3>Main</h3>
            <h1>현재 시각은 {display}</h1>
            <hr />
        </div>
    );
};

export default Main;