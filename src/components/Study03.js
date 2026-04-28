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


    }, []);
    return (
        <div>
            <h1>Study03</h1>
            <button onClick={() => navigate('/')}>Home</button>
            <br />
        </div>
    );
};

export default Study03;