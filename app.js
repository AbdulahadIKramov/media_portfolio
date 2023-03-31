
window.onscroll = function() {scrollEvent()};
const menu = document.querySelector('.menu');
const muneBtn = document.querySelector(".mune-btns")

function scrollEvent(){
    let move = document.querySelector('.navber');
    let offset = Math.floor(document.documentElement.scrollTop) ;
    if(offset > 50){
        move.classList.add("stickiy") 
        
    }else{
        move.classList.remove("stickiy")
    }
    function myFunc(){
        move.classList.toggle("active")
    }
}

muneBtn.addEventListener('click', ()=>{

    menu.classList.toggle("active")
  
})


