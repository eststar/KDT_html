//웹페이지에 HTML 로드 확인
document.addEventListener("DOMContentLoaded", ()=>{
    //각 노드 선택
    const diceDivCom = document.querySelector('#com');
    const diceDivUser = document.querySelector('#user');
    const btDiv = document.querySelector('#btDiv');
    const msg = document.querySelector('#msg');

    //innerHTML에 넣을 문자열 모을 배열 
    let comTags = [];
    let userTags = [];
    let btDivTags = [];
    
    //주사위 기본 이름 및 그림
    comTags.push(`<h2>Com</h2>`);
    comTags.push(`<img src="../img/1.png" />`);

    diceDivCom.innerHTML = comTags.join('');

    userTags.push(`<h2>User</h2>`);
    userTags.push(`<img src="../img/1.png" />`);

    diceDivUser.innerHTML = userTags.join('');

    //1~6 버튼
    for(let i = 0; i < 6; i++){
        btDivTags.push(`<button>${i+1}선택</button>`);
    }

    btDiv.innerHTML = btDivTags.join('');

    //버튼들의 클릭 입력 확인해서 유저 주사위와 com 주사위 눈 그림 결정. 유저는 버튼의 숫자로, com은 랜덤.
    //주사위 눈 끼리 동일한지 다른지 메세지 출력
    
    const buttons = btDiv.querySelectorAll("button");
    
    for(let bt of buttons){
        bt.addEventListener("click", ()=>{
            const randNum = Math.floor(Math.random()*6 +1);
            const btNum = parseInt(bt.innerText.charAt(0));
            diceDivCom.querySelector("img").setAttribute("src", `../img/${randNum}.png`);
            diceDivUser.querySelector("img").setAttribute("src", `../img/${btNum}.png`);
            msg.innerHTML = (randNum == btNum) ? "맞음" : "다름";
        });
    }
    
    // for(let i in buttons){
    //     console.log(i);
    //     buttons.item(i).addEventListener("click", ()=>{
    //         const randNum = Math.floor(Math.random()*6 +1);
    //         const btNum = buttons.keys(i);

    //         diceDivCom.querySelector("img").setAttribute("src", `../img/${randNum}.png`);
    //         diceDivUser.querySelector("img").setAttribute("src", `../img/${btNum}.png`);
    //         msg.innerHTML = (randNum == btNum) ? "맞음" : "다름";
    //     });
    // }
});