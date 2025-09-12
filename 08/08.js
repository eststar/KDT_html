document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const inTXT1 = document.querySelector("#txt1");
    const inTXT2 = document.querySelector("#txt2");

    const inLabel1 = document.querySelector(`[for=txt1]`);
    const inLabel2 = document.querySelector(`[for=txt2]`);

    let selVal = sel1.value;
    let elseVal = sel2.value;

    const calcTemp = () => {
        if (inTXT1.value === '') {
            inTXT2.value = '';
            return;
        }

        let temp;
        if (selVal === "℃")
            temp = (parseFloat(inTXT1.value) * 9 / 5) + 32;
        else if (selVal === "℉")
            temp = (parseFloat(inTXT1.value) - 32) * 5 / 9;

        inTXT2.value = parseFloat(temp.toFixed(4));
    }

    inTXT1.addEventListener("input", () => {
        calcTemp();
    });

    sel1.addEventListener("change", () => {
        // inLabel1.innerText = sel1.value;
        // inLabel2.innerText = sel1.value;
        
        // selVal = sel1.value;

        const options = sel2.querySelectorAll("option");
        for (let el of options) {
            if (el.value === sel1.value)
                el.removeAttribute("selected");
            else {
                el.toggleAttribute("selected", true);
                elseVal = el.getAttribute("value");
            }
        }

        inLabel1.innerText = selVal;
        inLabel2.innerText = elseVal;

        calcTemp();
    });

    sel2.addEventListener("change", () => {
        selVal = sel2.value;

        const options = sel1.querySelectorAll("option");
        for (let el of options) {
            if (el.value === selVal)
                el.removeAttribute("selected");
            else {
                el.toggleAttribute("selected", true);
                elseVal = el.getAttribute("value");
            }
        }

        inLabel2.innerText = selVal;
        inLabel1.innerText = elseVal;

        calcTemp();
    });
});