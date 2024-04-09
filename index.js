

let D=document.getElementById("day")
let M=document.getElementById("month")
let Y=document.getElementById("year")

let x=document.getElementById("calculator")

x.addEventListener("click",calculate )

let Z=document.getElementById("Ownyears")
Z.innerHTML="--"
let T=document.getElementById("Ownmonths")
T.innerHTML="--"
let W=document.getElementById("Owndays")
W.innerHTML="--"
function calculate(){
let today=new Date()
let Age=today.getFullYear()-Y.value-1

let Month=today.getMonth()-M.value+11
let Day=today.getDate()-D.value

console.log(Age, Month, Day)
Z.innerHTML=Age
T.innerHTML=Month
W.innerHTML=Day

}

