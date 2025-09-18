document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector(".bt > button");
    const msg = document.querySelector(".bt > p");

    const cols = document.querySelectorAll(".col");

    let numArr = [0, 0, 0, 0, 0, 0, 0, 0, 1]; /* [1, 2, 3, 4, 5, 6, 7, 8, 9]; */
    let flag = false; //flag false면  새 게임 시작해야 하는 상황. 새로운 랜덤 배치 중지
    let cnt = 0; //폭탄 아닌곳 선택 개수

    const reset = ()=>{
        bt.innerHTML = "<span>폭탄섞기</span>";
        flag = false;
        cnt = 0;
        
        msg.innerHTML = "";
        for(let el of cols){
            el.innerHTML =""; /* cols.indexOf(el); */
        }
    };

    bt.addEventListener("click", () => {
        
        if (!flag) {
            numArr.sort(() => Math.random() - 0.5);
            flag = true;
            // resetTable();
            msg.innerHTML = "<span>게임중</span>";
            return;
        }
        // msg.innerHTML = "게임중";
        
    });

    for (let el of cols) {
        el.addEventListener("click", () => {
            
            if (!flag) {
                //처음 배열 안섞였을때 또는 게임 종료되었을때
                if (cnt == 0) msg.innerHTML = "<span>폭탄을 섞어주세요</span>";
                //모든 폭탄 없는 위치 선택 했을때
                /* else
                    msg.innerHTML = "<span>폭탄을 섞어주세요</span>"; */
                reset();
                return;
            }
            
            //숫자 1 포함된 인덱스와 같은 숫자 가진 노드 이면
            if (numArr[parseInt(el.textContent) - 1] == "1") {
                el.innerHTML = `<i class="fa-solid fa-burst"></i>`;
                flag = false;
                msg.innerHTML = "<span>실패</span>";
                bt.innerHTML = "다시하기";
                //cnt = 0;
                // reset();
            }
            else {
                el.innerHTML = `<i class="fa-solid fa-shield-heart"></i>`;
                cnt++;
                if (cnt >= 8) {
                    //cnt = 0;
                    flag = false;
                    msg.innerHTML = "<span>성공</span>";
                    //폭탄이 있는 배열의 인덱스 와 같은 인덱스의 div.col node 도 성공 이미지
                    cols[numArr.indexOf(1)].innerHTML = `<i class="fa-solid fa-shield-heart"></i>`;
                }
            }
        });
    }

    // if (!flag) {
    //     msg.innerHTML = "<span>폭탄을 섞어주세요</span>";
    //     return;
    // }
});