const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerimagen(imagen.getAttribute('src'))
    })
})
contenedorLight.addEventListener('click', (e)=>{
    if(e.targe !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburger1.style.opacity= '1'
    }
})
const aparecerimagen = (imagen)=>{
    imagenesLight.src=imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburger1.style.opacity= '0'
}