document.addEventListener("DOMContentLoaded", ()=>{
    const sels = document.querySelectorAll(".selDiv > select");
    const inTXTs = document.querySelectorAll(".inDiv input"); 
    const inLabels = document.querySelectorAll(".inDiv label"); 
    
    for(let el of sels){
        // el.addEventListener("input", ()=>{
        // console.log("input event");
        // });
        const options = el.querySelectorAll("option");
        for(let opt of options){
            opt.addEventListener("focus", ()=>{
                console.log("focus");
                // if(opt.getAttribute("value") === "℃"){
                //     opt.toggleAttribute  setAttribute("selected");
                // }
            });
            
            
        } 
    
    }
    

});