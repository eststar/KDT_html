document.addEventListener("DOMContentLoaded", () => {

    // let diceDivTags = [];
    // diceDivTags.push("<h2>주사위 게임</h2>");
    // diceDivTags.push(`<img src="../img/1.png">`);
    // diceDivTags.push(`<img src="../img/1.png">`);

    // const diceDiv = document.querySelector('#diceDiv');
    // diceDiv.innerHTML = diceDivTags.join('');

    // const diceTitle = document.querySelector("#diceDiv > h2");


    // let btDivTags = [];

    // for(let i = 0; i < 6; i++){
    //     btDivTags.push(`<button>${i+1}선택</button>`);
    // }

    // console.log(btDivTags);
    // document.querySelector("#btDiv").innerHTML = btDivTags.join('');

    const diceCom = document.querySelector('#com');
    const diceUser = document.querySelector('#user');

    const buttons = document.querySelectorAll('#btDiv > button');
    const msgArea = document.querySelector("#msgDiv");

    for (let bt of buttons) {
        bt.addEventListener("click", () => {
            let buttonName = bt.innerText;
            console.log(buttonName);
            let userNum = 0;
            for (let item of buttonName) {
                if (!isNaN(item)) {
                    userNum = item;
                    break;
                }
            }
            let comNum = Math.floor(Math.random() * 6 + 1);

            diceUser.setAttribute("src", `../img/${userNum}.png`);
            diceCom.setAttribute("src", `../img/${comNum}.png`);

            let checkWin = (userNum == comNum) ? "맞춤" : "틀림";

            msgArea.innerHTML = checkWin;

        });
    }

});