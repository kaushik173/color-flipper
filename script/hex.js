const hexcolors = [0,1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexSign = "#";
    for (let i = 0; i < 6; i++) {
       hexSign += hexcolors[getRandomNumber()];
        
    }
    color.textContent = hexSign;
     document.body.style.backgroundColor = hexSign
});

function getRandomNumber(){
    return Math.floor(Math.random() * hexcolors.length);
}
