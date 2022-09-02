const hamburger = document.querySelector('.menu');
const menú = document.querySelector('.menu-navegacion');

//console.log(menú)
//console.log(hamburger)

hamburger.addEventListener('click', ()=>{
    menú.classList.toggle("spread")
})
window.addEventListener('click' , e=>{
    if(menú.classList.contains('spread') && e.target != menú && e.target != hamburger ){


        menú.classList.toggle("spread")
    }

})