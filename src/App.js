import React, { useEffect } from 'react';

const App = () => {

  const now = new Date();
  const display = now.toLocaleTimeString();

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
      let name = prompt("이름을 입력하세요.");
      //document.write("<b><big>" + name + "</big></b>님, 환영합니다!<br />");
      document.write(`<b><big>${name}</big></b>님, 환영합니다!`);
      //console.log(`${name}님, 환영합니다!`);
    }


  }, []);

  return (
    <div>
      <p id="text">현재 시각은 {display}</p>
      <h1 id="heading">자바스크립트</h1>
      <p id="text">위 텍스트를 클릭해 보세요</p>
    </div>

  );
};



export default App;