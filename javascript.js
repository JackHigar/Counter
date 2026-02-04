const minus = document.getElementById("minus");
const reset = document.getElementById("reset")
const plus =document.getElementById("plus")
const splayh= document.getElementById("display")
let count = 0

plus.onclick = function (){
    count++
    splayh.textContent = count ;
}

minus.onclick = function (){
    count--
    splayh.textContent = count ;
}

reset.onclick = function (){
    count = 0
   splayh.textContent = count ;
}
