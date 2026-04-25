import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./timestable.css"

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

        //let sum = 0;
        //for (let i = 0; i < 6; i++) {
        //    sum += i;
        //}
        //document.write(`1부터 5까지 더하면 ${sum}`);

        //for (let i = 0; i < 1001; i++) {
        //    sum += i;
        //}

        //console.log(`1부터 1000까지 더하면 ${sum}`);

        //for (let i = 0; i < 8; i++) {
        //    document.write(`<h3>${i + 2}단<h3>`);
        //    for (let j = 0; j < 8; j++) {
        //        document.write(`${i + 2} X ${j + 2} = ${(i + 2) * (j + 2)}<br />`);
        //    }
        //    if (i === 2)
        //        break;
        //}

        //let stars = parseInt(prompt("별을 몇 개 표시할까요?"));

        //while (stars > 0) {
        //    document.write("*");
        //    stars--;
        //}

        //do {
        //    document.write("*");
        //    stars--;
        //} while (stars > 0);

        //let n = 10;
        //let sum = 0;

        //for (let i = 1; i <= n; i++) {
        //    if (i % 2 === 1) { // 홀수는 더하지 않음
        //        continue
        //    }
        //    sum += i;

        //    document.write(`${i} ----- ${sum}<br />`);
        //}

        //let seatNo = 0;

        //document.write("<table border='3px'>");
        //for (let i = 0; i < rowNum; i++) {
        //    document.write("<tr>")
        //    for (let j = 1; j <= colNum; j++) {
        //        seatNo = i * colNum + j;
        //        if (seatNo > memNum) break;
        //        document.write(`<td>좌석 ${seatNo}</td>`);
        //    }
        //    document.write("</tr>");
        //}
        //document.write("</table>");
        
        //let num = prompt("숫자를 입력하시오.");
        //if (num !== null) {
        //    document.write("<h1>4의 배수일까 아닐까</h1>");
        //    if (parseInt(num) % 4 === 0) {
        //        document.write(`${num} : 4의 배수입니다.`);
        //    } else {
        //        document.write(`${num} : 4의 배수가 아닙니다.`);
        //    }
        //}

        //let num = prompt("몇 까지 3의 배수를 찾을까요?");
        //if (num !== null) {
        //    document.write("<h1>3의 배수 찾기</h1>");
        //    let n = parseInt(num);
        //    let cnt = 0;
        //    for (let i = 1; i <= n; i++) {
        //        if (i % 3 === 0) {
        //            document.write(`${i}, `);
        //            cnt++;
        //        }
        //    }
        //    document.write(`</br>
        //        <span style="color:red">${n}까지 3의 배수의 개수 : ${cnt}</span>`);
        //}

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