var h4 = document.querySelector("h4")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")
var pic = document.querySelector("#pic")
add.addEventListener("click" ,function(){
    h4.innerHTML=" Friends "
    h4.style.color ="green" 
})

remove.addEventListener("click",function(){
    h4.innerHTML=" Stranger "
    h4.style.color ="red" 
})



