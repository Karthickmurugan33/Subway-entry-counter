
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let timeEl = document.getElementById("time")
let count = 0;



function myFunction(){
 count += 1 ;
 countEl.textContent = count;
}
// myFunction();

function mySave(){
    let countStr = count + " - "
    // console.log(count);
saveEl.textContent += countStr;
countEl.textContent = 0 ;
count = 0;
console.log(countStr);
}

function getTime() {
    let time = new Date().getHours()

    if(time > 12){
        
    }
 timeEl.textContent = time   
}
getTime()
// mySave()    