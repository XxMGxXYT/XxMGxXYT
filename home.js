// let TRbtn = document.querySelector(".traingle")
// let TRbtn2 = document.querySelector(".traingle2")
// let list = document.querySelector(".list")

// TRbtn.onclick = function(){
//     TRbtn2.classList.remove("hide")
//     list.classList.remove("hide")
//     TRbtn.classList.add("hide")
// }

// TRbtn2.onclick = function(){
//     TRbtn.classList.remove("hide")
//     TRbtn2.classList.add("hide")
//     list.classList.add("hide")
// }

let listBtn = document.querySelector(".listImg");
let listBtn2 = document.querySelector(".listImg2");
let list = document.querySelector(".ul1");

listBtn.onclick = function(){
    listBtn.classList.add("none")
    list.classList.remove("none")
    listBtn2.classList.remove("none")
}

listBtn2.onclick = function(){
    listBtn2.classList.add("none")
    list.classList.add("none")
    listBtn.classList.remove("none")
}