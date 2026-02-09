document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
             header.classList.add('fixed');
        }else{
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const CANT_IMG = 16
     const galeria = document.querySelector('.galeria-imagenes')

     for(let i=1; i <= CANT_IMG ; i++){
        const img = document.createElement('IMG')
        img.src = `src/img/gallery/full/${i}.jpg `
        img.alt = 'imagen galeria'

        //event handler
        img.onclick = function(){
            mostrarImg(i);
        }

        galeria.appendChild(img)
     }
}

function mostrarImg(i){
    const img = document.createElement('IMG')
    img.src = `src/img/gallery/full/${i}.jpg `
    img.alt = 'imagen galeria'



    //MODAL
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //boton
    const cerrarModalBtn = document.createElement('button')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal 

    modal.appendChild(img)
    modal.appendChild(cerrarModalBtn)



     //agergar htoml

     const body = document.querySelector('body')
     body.classList.add('overflow-hidden')
     body.appendChild(modal ) 
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },500);

    
}