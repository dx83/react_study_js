import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study03 = () => {
    const navigate = useNavigate();

    const calcSum = (n) => {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        document.write(`1부터 ${n}까지 더하면 ${sum}`);
    }


    const hi = user => {
        document.write(`${user}님, 안녕하세요?`);
    };



    const changeBg = (color) => {
        //let result = document.querySelector('#result');
        //result.style.backgroundColor = color;
    };

    const sumMulti = () => {
        let a = prompt("첫 번째 숫자 입력");
        let b = prompt("두 번째 숫자 입력");

        if (a === null || a.trim() === "" || isNaN(a)
            || b === null || b.trim() === "" || isNaN(b))
            return;

        a = parseInt(a);
        b = parseInt(b);
        if (a === b) {
            console.log(a * b);
        } else {
            console.log(a + b);
        }
    };

    const bigNumber = (num1, num2) => {
        if (num1 === null || num1.trim() === "" || isNaN(num1)
            || num2 === null || num2.trim() === "" || isNaN(num2))
            return;

        let a = parseInt(num1);
        let b = parseInt(num2);

        if (a > b) {
            return alert(`${a}(이)가 ${b}보다 큽니다.`);
        } else if (a < b) {
            return alert(`${b}(이)가 ${a}보다 큽니다.`);
        } else if (a === b) {
            return alert(`${a}(와)과 ${b}(은)는 같습니다.`);
        }
    };


    useEffect(() => {
        //let userNumber = prompt("얼마까지 더할까요?");
        //if (userNumber != null) {
        //    calcSum(parseInt(userNumber));
        //}

        // 즉시 실행 함수
        //(function() {
        //    let userName = prompt("이름을 입력하세요.");
        //    document.write(`<p>안녕하세요? <span class="accent">${userName}</span>님!</p>`);
        //}());
        //let sum;
        //(function(a, b) {
        //    sum = a + b;
        //} (100, 200));
        //document.write(`함수 실행 결과 : ${sum}`);
        //hi("김씨");
        //const hello = () => "안녕하세요?";
        //const hello = () => { return "안녕하세요?"; };
        //console.log(hello());

        //sumMulti();
        bigNumber(prompt("비교할 첫 번째 숫자"), prompt("비교할 두 번째 숫자"));

    }, []);

    return (
        <div>
            <h1>Study03</h1>
            <button onClick={() => navigate('/')}>Home</button>
            <br />
            <ul>
                <li><a href="#" onClick={changeBg("green")} style={{ textDecoration: "none", color: "black" }}>Green</a></li>
                <li><a href="#" onClick={changeBg("orange")} style={{ textDecoration: "none", color: "black" }}>Orange</a></li>
                <li><a href="#" onClick={changeBg("purple")} style={{ textDecoration: "none", color: "black" }}>Purple</a></li>
            </ul>
        </div>
    );
};
export default Study03;