document.addEventListener("DOMContentLoaded", () => {
   
    //주사위 노드 선택
    const diceCom = document.querySelector('#com');
    const diceUser = document.querySelector('#user');

    //버튼들의 노드 선택
    //배열로 반환 받음
    //배열이 아니라 NodeList
    const buttons = document.querySelectorAll('#btDiv > button');
    //메세지 노드 선택
    const msgArea = document.querySelector("#msg");

    //버튼 노드들 NodeList 순회하면서 클릭 이벤트 발생하는지 확인
    for (let bt of buttons) {
        bt.addEventListener("click", () => {
            const buttonName = parseInt(bt.innerText.charAt(0));
            // const buttonName = parseInt(bt.innerHTML.charAt(0));
            // const buttonName = bt.innerText;
            const comNum = Math.floor(Math.random() * 6 + 1);

            let userNum = buttonName;
            // for (let item of buttonName) {
            //     if (!isNaN(item)) {
            //         userNum = item;
            //         break;
            //     }
            // }
            
            diceUser.setAttribute("src", `../img/${userNum}.png`);
            diceCom.setAttribute("src", `../img/${comNum}.png`);

            let checkWin = (userNum == comNum) ? "맞춤" : "틀림";

            msgArea.innerHTML = checkWin;

        });
    }

});