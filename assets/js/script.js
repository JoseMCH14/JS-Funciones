    function  pintar (color = "green"){ 
    ele.style.backgroundColor = color
    } 

const ele = document.querySelector("#ele1") 
ele.addEventListener("click", function(){
    pintar('yellow')});

