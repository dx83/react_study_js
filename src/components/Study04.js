import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study04 = () => {
    const navigate = useNavigate();

    let book = {
        title: "자바스크립트",
        pages: 500,
    };

    const bookDay = () => {
        let now = new Date();
        let firstDay = new Date("2026-04-13");

        let toNow = now.getTime();
        let toFirst = firstDay.getTime();
        let passedTime = toNow - toFirst;

        return passedTime = Math.round(passedTime / (1000 * 60 * 60 * 24));
    };

    const drawLots = () => {
        let seed = prompt("전체 음모자 수: ", "");
        let picked = Math.floor((Math.random() * seed) + 1);

        document.write(`<p>전체 응모자 수: ${seed}</p>`);
        document.write(`<p>담청자: ${picked}번</p>`);
    };

    let seed, picked;

    const openNotice = () => {
        // window.open('주소', '창이름', '옵션');
        window.open(
            '/notice', // 띄울 페이지 주소 (또는 "https://google.com")
            'NoticeWindow', // 새 창의 이름 (중복 방지)
            'width=500, height=600, top=100, left=100' // 창 크기 및 위치 설정
        );
    };

    useEffect(() => {
        //console.log(book.title);

        //let arr1 = new Array();
        //let arr2 = new Array(4);
        //let arr3 = ["one", "two", "three", "four"];
        //let arr4 = Array("one", "two", "three", "four");

        //let numbers = ["one", "two", "three", "four"];

        //for (let i = 0; i < numbers.length; i++) {
        //    document.write(`<p>${numbers[i]}</p>`);
        //}

        //let nums = [1, 2, 3];
        //let chars = ['a', 'b', 'c', 'd'];

        //let numsChar = nums.concat(chars);
        //let charNums = chars.concat(nums);
        //document.write(`nums에 char 합치면: ${numsChar}, <br /> char에 nums 합치면: ${charNums}`);
        //document.write(`<hr />`);

        //let string1 = nums.join();
        //document.write(`구분자 없이: ${string1}<br />`);
        //let string2 = chars.join('/');
        //document.write(`/ 구분자 지정: ${string2}`);

        //let ret1 = nums.push(4, 5);
        //document.write(`length: ${ret1} | 배열: ${nums}<br />`);
        //let ret2 = nums.unshift(0);
        //document.write(`length: ${ret2} | 배열:${nums}`);

        //let popped1 = chars.pop();
        //document.write(`꺼낸 요소: ${popped1}, | 배열: ${chars}<br />`);
        //let popped2 = chars.shift();
        //document.write(`꺼낸 요소: ${popped2} | 배열: ${chars}`);

        //let study = ['html', 'css', 'javascript', 'jquery', 'react', 'node.js'];

        //let js = study.splice(2);
        //document.write(`반환된 배열: ${js}<br />`);
        //document.write(`변경된 배열: ${study}`);
        //document.write(`<hr /><br />`);

        //let jquery = js.splice(1, 1);
        //document.write(`반환된 배열: ${jquery}<br />`);
        //document.write(`변경된 배열: ${js}`);
        //document.write(`<hr /><br />`);

        //let modernJs = js.splice(1, 0, 'typescript');
        //document.write(`반환된 배열: ${modernJs}<br />`);
        //document.write(`변경된 배열: ${js}`);

        //let colors = ["red", "green", "blue", "white", "black"];
        //document.write(colors.slice(2));
        //document.write("<hr />");
        //document.write(colors.slice(2, 4)); // blue, white
        //document.write(colors.slice(2, 3)); // blue

        //let temp = drawLots();

        //window.open("Study00.js", "", "width=500, height=300");

    });

    return (
        <div>
            <h1>Study04</h1>
            <button onClick={() => navigate('/')}>HOME</button>
            <br />
            {/*
            <p>책읽기</p>
            <p style={{ marginLeft: '20px' }}><span style={{ color: 'red' }}>{bookDay()}</span> 일 연속으로 책읽기 달성!!</p>
            <button onClick={openNotice}>공지사항 새 창으로 열기</button>
             */}

        </div>
    );
};

export default Study04;