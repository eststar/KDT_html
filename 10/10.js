document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.querySelector(".mainImg > img");
    const btImg = document.querySelectorAll(".btImg > img");

    let mainSrcAtt = mainImg.getAttribute("src");
    let mainAltAtt = mainImg.getAttribute("alt");
    // console.log(mainAltAtt);
    for (let el of btImg) {
        
        let srcAtt = el.getAttribute("src");
        let altAtt = el.getAttribute("alt");
        // console.log(altAtt);
        // mainSrcAtt = mainImg.getAttribute("src");
        // mainAltAtt = mainImg.getAttribute("alt");

        el.addEventListener("click"/* "mouseover" */, () => {
            // console.log(mainAltAtt);
            mainImg.setAttribute("src", srcAtt);
            mainImg.setAttribute("alt", altAtt);
            el.setAttribute("src", mainSrcAtt);
            el.setAttribute("alt", mainAltAtt);

            mainSrcAtt = mainImg.getAttribute("src");
            mainAltAtt = mainImg.getAttribute("alt");

            srcAtt = el.getAttribute("src");
            altAtt = el.getAttribute("alt");
            console.log(mainAltAtt);
        });
    }
});