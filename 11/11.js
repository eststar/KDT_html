document.addEventListener("DOMContentLoaded", () => {
    const imgNode = document.querySelector(".mainImg img");
    // const btLT = document.querySelectorAll("button");
    const btLT = document.querySelectorAll("i");

    //이미지 배열
    const imgArr = ["html.png", "css.png", "js.png", "react.png",];
    let idx = 0;

    const updateImg = () => {
       
        if (idx < 0) {
            idx = 0;
            document.querySelector("#left").style.backgroundColor = "rgb(165, 151, 204)";
            document.querySelector("#left").style.color = "rgb(165, 151, 204)";
            // el.style.backgroundColor = "rgb(165, 151, 204)";
        }
        else if (idx > imgArr.length - 1) {
            idx = imgArr.length - 1;
            document.querySelector("#right").style.backgroundColor = "rgb(165, 151, 204)";
            document.querySelector("#right").style.color = "rgb(165, 151, 204)";
            // el.style.backgroundColor = "rgb(165, 151, 204)";
        }
        else{
            document.querySelector("#left").style.backgroundColor = "black";
            document.querySelector("#left").style.color = "white";
            document.querySelector("#right").style.backgroundColor = "black";
            document.querySelector("#right").style.color = "white";
        }
        imgNode.setAttribute('src', `../img/${imgArr[idx]}`);
        imgNode.setAttribute('alt', `imgArr[idx]`.split('.')[0]);

    };

    // updateImg();
    for (let el of btLT) {
        el.addEventListener('click', () => {

            if (el.getAttribute("id") == "left") {
                idx--;
                // if(idx < 0){
                //     idx =0;
                //     el.style.backgroundColor = "rgb(165, 151, 204)";
                // } 
            }

            else if (el.getAttribute("id") == "right") {
                idx++;
                // if(idx > imgArr.length-1){
                //     idx = imgArr.length-1;
                //     el.style.backgroundColor = "rgb(165, 151, 204)";
                // } 
            }


            // if(el.textContent == "<")
            //     idx--;                        
            // else if(el.textContent == '>')
            //     idx++;

            // if(idx < 0){
            //     idx=0;
            //     document.querySelector("#left").style.backgroundColor = "rgb(165, 151, 204)";
            // } 
            // else if(idx > imgArr.length-1){
            //     idx = imgArr.length-1;
            //     document.querySelector("#right").style.backgroundColor = "rgb(165, 151, 204)"";
            // }  

            updateImg();
        });
    }

    updateImg();
});