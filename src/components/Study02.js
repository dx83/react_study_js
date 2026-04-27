import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study02 = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    };

    const addNumber = (a, b) => {
        let sum = a + b;
        alert(sum);
    };

    const addNumber1 = () => {
        let num1 = 2;
        let num2 = 3;
        let sum = num1 + num2;
        alert(`결괏값: ${sum}`);
    }

    useEffect(() => {
        //addNumber(10, 5);

        //let num1 = 2;
        //let num2 = 3;
        //let sum = num1 + num2;
        //alert(`결괏값: ${sum}`);
        
        addNumber1();
    }, []);

    return (
        <div>
            <h1>Study02</h1>
            <button onClick={toHome}>Home</button>
            <br />
        </div>
    );
};

export default Study02;