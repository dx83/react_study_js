import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study01 = () => {

    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    };

    useEffect(() => {
        //let memNum = parseInt(prompt("입장객은 몇 명인가요?"));
        //let colNum = parseInt(prompt("한 줄에 몇 명씩 앉습니까?"));
        //let rowNum = 0;

        //if (memNum % colNum === 0) {
        //    rowNum = memNum / colNum;
        //} else {
        //    rowNum = parseInt(memNum / colNum) + 1;
        //}
        //document.write(`모두 ${rowNum}개의 줄이 필요합니다.`);

        let sum = 0;
        //for (let i = 0; i < 6; i++) {
        //    sum += i;
        //}
        //document.write(`1부터 5까지 더하면 ${sum}`);

        for (let i = 0; i < 1001; i++) {
            sum += i;
        }

        console.log(`1부터 1000까지 더하면 ${sum}`);
    }, []);

    return (
        <div>
            <h1>Study01</h1>
            <button onClick={toHome}>Home</button>
            <br />
        </div>
    );
};

export default Study01;