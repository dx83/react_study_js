import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Study00 = () => {

    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    }

    useEffect(() => {
        let heading = document.querySelector('#heading');
        heading.onclick = () => {
            //if (window.confirm("정말 배경 이미지를 바꾸겠습니까?")) {
            //  heading.style.color = 'red';
            //}

            //let name = window.prompt("이름을 입력하세요");
            //if (name) {
            //  heading.innerText = `안녕하세요, ${name}님!`;
            //} else {
            //  heading.innerText = "이름을 입력하지 않았습니다.";
            //}
            //document.write(`<h1>어서오세요!</h1>
            //  <p>자바스크립트로 작성된 웹 페이지입니다.</p>`);
            //let name = prompt("이름을 입력하세요.");
            //document.write("<b><big>" + name + "</big></b>님, 환영합니다!<br />");
            //document.write(`<b><big>${name}</big></b>님, 환영합니다!`);
            //console.log(`${name}님, 환영합니다!`);

            //let width;
            //let height;
            //width = 200;
            //height = 50;
            //let area = width * height;
            //console.log(`넓이는 ${area}입니다.`);

            //const PI = 3.14;
            //let radius = prompt("원의 반지름을 입력하세요.");
            //let area = PI * radius * radius;
            //console.log(`${PI}원의 넓이는 ${area}입니다.`);

            //let userNumber = prompt("숫자를 입력하세요.");
            //if (userNumber !== null) {
            //  if (parseInt(userNumber) % 3 === 0) {
            //    alert("3의 배수입니다.");
            //  } else {
            //    alert("3의 배수가 아닙니다.");
            //  }
            //} else {
            //  alert("입력이 취소되었습니다.");
            //}
            //if (userNumber !== null) {
            //  parseInt(userNumber) % 3 === 0 ? alert("3의 배수입니다.") : alert("3의 배수가 아닙니다.");
            //} else {
            //  alert("입력이 취소되었습니다.");
            //}

            //let numberOne = parseInt(prompt("50 미만인 숫자를 입력하세요."));
            //let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));
            //if (numberOne < 10 || numberTwo <10)
            //  alert("숫자 2개 중에서 최소한 하나는 10 미만이군요.");
            //else
            //  alert("숫자 2개 중에서 10 미만인 수는 없습니다.");

            //if (numberOne < 50 && numberTwo < 50)
            //  alert("숫자 2개 모두 50 미만이군요.");
            // else
            //  alert("조건에 맞지 않는 숫자가 있습니다.");

            //let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

            //switch (session) {
            //    case "1": document.write("<P>마케팅 세션은 <strong>201호</strong>에서 ......</p>")
            //        break;
            //    case "2": document.write("<P>개발 세션은 <strong>203호</strong>에서 ......</p>")
            //        break;
            //    case "3": document.write("<P>디자인 세션은 <strong>205호</strong>에서 ......</p>")
            //        break;
            //    default: alert("잘못 입력했습니다.");
            //}
        }
    }, []);

    return (
        <div>
            <h1>Study00</h1>
            <button onClick={toHome}>Home</button>
            <br />
            
            <h1 id="heading">자바스크립트</h1>
            <p id="text">위 텍스트를 클릭해 보세요</p>
        </div>
    );
};

export default Study00;