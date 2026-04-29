import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study04 = () => {
    const navigate = useNavigate();

    let book = {
        title: "자바스크립트",
        pages: 500,
    };

    useEffect(() => {
        console.log(book.title);
    }, []);

    return (
        <div>
            <h1>Study04</h1>
            <button onClick={() => navigate('/')}>HOME</button>
            <br />

        </div>
    );
};

export default Study04;