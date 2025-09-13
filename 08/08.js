document.addEventListener("DOMContentLoaded", () => {
    //사용할 노드들 선택
    const sels = document.querySelectorAll(".selDiv > select");
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const inTXT1 = document.querySelector("#txt1");
    const inTXT2 = document.querySelector("#txt2");

    const inLabel1 = document.querySelector(`[for=txt1]`);
    const inLabel2 = document.querySelector(`[for=txt2]`);

    //섭씨화씨 
    //.value 방식으로 tag 속성값 바로 접근
    //select의 콘텐츠로 포함되어 있는 option 중 selected 속성이 지정된 요소의 value 속성 바로 사용가능
    const celc = sel1.value;
    const fahren = sel2.value;

    //왼쪽 텍스트 입력요소의 값을 섭씨 화씨 설정에 따라 오른쪽 텍스트 input에 단위 환산 출력
    const calcTemp = () => {
        if (inTXT1.value === '') {
            inTXT2.value = '';
            return;
        }

        let temp;
        if (sel1.value === celc)
            temp = (parseFloat(inTXT1.value) * 9 / 5) + 32;
        else if (sel1.value === fahren)
            temp = (parseFloat(inTXT1.value) - 32) * 5 / 9;

        inTXT2.value = parseFloat(temp.toFixed(4));
    }

    //왼쪽 input에 값이 입력되는 이벤트 발생시
    inTXT1.addEventListener("input", () => {
        calcTemp();
    });

    //textContent - css 스타일이 적용되기 전의 원본 그대로의 텍스트. 
    //              Style 태그 등이 있어 콘텐츠로 css 작성해둬도 효과 적용하지 않고 css코드 자체도 텍스트로 가져옴
    //innerText - css 스타일이 적용된후 보이게되는 텍스트 그대로

    //select 박스에서 선택하는 option 따라 오른쪽 select 박스 및 텍스트 입력 박스의 라벨들도 그에 따라 변경
    const updateUI = () => {
        if (sel1.value === celc) {
            sel2.value = fahren;
            inLabel1.textContent = celc;
            inLabel2.textContent = fahren;
        }
        else if (sel1.value === fahren) {
            sel2.value = celc;
            inLabel1.textContent = fahren;
            inLabel2.textContent = celc;
        }
    };

    //select박스의 option 선택 변경 이벤트
    for (let el of sels) {
        el.addEventListener("change", () => {
            updateUI();
            calcTemp();
        });
    }

    // sel1.addEventListener("change", () => {
    //     updateUI();
    //     calcTemp();

    //     // const options = sel2.querySelectorAll("option");
    //     // for (let el of options) {
    //     //     if (el.value === sel1.value)
    //     //         el.removeAttribute("selected");
    //     //     else {
    //     //         el.toggleAttribute("selected", true);
    //     //         elseVal = el.getAttribute("value");
    //     //     }
    //     // }

    //     // inLabel1.innerText = selVal;
    //     // inLabel2.innerText = elseVal;

    // });

    // sel2.addEventListener("change", () => {
    //     updateUI();
    //     calcTemp();
    // });
});