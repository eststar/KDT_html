document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector(".bt > button");
    const msg = document.querySelector(".bt > p");

    const cols = document.querySelectorAll(".col");

    let numArr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; /* [1, 2, 3, 4, 5, 6, 7, 8, 9]; */
    let flag = false; //flag false면  새 게임 시작해야 하는 상황. 새로운 랜덤 배치 중지
    let cnt = 0; //폭탄 아닌곳 선택 개수

    //리셋 함수
    const reset = () => {
        bt.innerHTML = "<span>폭탄섞기</span>";
        flag = false;
        cnt = 0;

        msg.innerHTML = "";
        console.log("reset");
        for (let idx in cols) {
            (cols[idx]).innerHTML = parseInt(idx)+1;
        }
    };

    //폭탄 섞는버튼, 리셋버튼
    bt.addEventListener("click", () => {

        if (!flag) {
            if (cnt == 0) {
                numArr.sort(() => Math.random() - 0.5);
                flag = true;
                msg.innerHTML = "<span>게임중</span>";
                return;
            }
            else               
                reset();         
        }
    });

    for (let el of cols) {
        el.addEventListener("click", () => {

            if (!flag) {
                //처음 배열 안섞였을때
                if (cnt == 0) {
                    msg.innerHTML = "<span>폭탄을 섞어주세요</span>";
                }
                return;
            }

            //숫자 1 포함된 인덱스와 같은 숫자 가진 노드 이면
            if (numArr[parseInt(el.textContent) - 1] == "1") {
                el.innerHTML = `<i class="fa-solid fa-burst"></i>`;
                flag = false;
                msg.innerHTML = "<span>실패</span>";
                bt.innerHTML = "다시하기";
                cnt = -1;
            }
            else {//성공시 개수 카운트 8개면 나머지 한개도 채우고 종료
                el.innerHTML = `<i class="fa-solid fa-shield-heart"></i>`;
                cnt++;
                if (cnt >= 8) {
                    cols[numArr.indexOf(1)].innerHTML = `<i class="fa-solid fa-shield-heart"></i>`;
                    bt.innerHTML = "다시하기";
                    cnt = -1;
                    flag = false;
                    msg.innerHTML = "<span>성공</span>";
                    //폭탄이 있는 배열의 인덱스 와 같은 인덱스의 div.col node 도 성공 이미지
                }
            }
        });
    }
});