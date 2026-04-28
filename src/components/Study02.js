import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study02 = () => {
    const navigate = useNavigate();
    
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

    var sum = 0;
    const addNumber2 = () => {
        sum = 10 + 20;
        //result = 10 * 20; // 리액트에서는 불가
    }

    var x = 10;
    const displayNumber = () => {
        console.log(`x is ${x}`);
        console.log(`y is ${y}`);
        var y = 20;
    }

    const functionSum = () => {
        let n = 10;
        let result = 0;

        for (let i = 1; i <= n; i++) {
            result += i;
        }

        console.log(result);
    }

    const doIt = () => {
        let x = 1;
        console.log(x);
        //let x = 2;    // 재선언 불가
        //console.log(x);
    }

    const addNumber3 = (num1, num2) => {
        let sum = num1 + num2;
        return sum;
    }

    const multiple = (a, b = 5, c = 10) => {
        return a * b + c;
    }

    useEffect(() => {
        //addNumber(10, 5);

        //let num1 = 2;
        //let num2 = 3;
        //let sum = num1 + num2;
        //alert(`결괏값: ${sum}`);

        //addNumber1();

        //addNumber2();
        //console.log(sum);
        //console.log(result); //리엑트에서는 불가

        //displayNumber();

        //var seed = 3;
        //for (let i = 1; i <= 5; i++) {
        //    var seed = 5; // 재선언
        //    var result = seed * i;
        //    console.log(result);
        //}

        //functionSum();
        //console.log(result);// 에러남

        //const user = "Kim";
        //console.log(`My name is ${user}`);

        //user = "Lee";           // 재할당
        //const user = "Lee";     // 재성언
        //console.log(`My name is ${user}`);

        //let x = 10;

        //const display = () => {
        //    console.log(x);
        //    console.log(y); // 선언하기전 실행하면 오류
        //    let y = 20;
        //}
        //display();

        //let x = 10;
        //x = 20;
        //console.log(x);
        //x = "문자열";
        //console.log(x);

        //let result = addNumber3(2, 3);
        //document.write(`두 수를 더한 값: ${result}`);

        //console.log(multiple(5, 10, 20));// 70
        //console.log(multiple(10, 20));   // 210
        //console.log(multiple(30));       // 160



    }, []);

    return (
        <div>
            <h1>Study02</h1>
            <button onClick={() => navigate("/")}>Home</button>
            <br />
        </div>
    );
};

export default Study02;