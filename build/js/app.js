    document.addEventListener('DOMContentLoaded', function(){
        crearGaleria();
        navegacionFija();
        resaltarEnlace();
        scrollNav();
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
        img.src = `img/gallery/full/${i}.jpg `
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

    function resaltarEnlace() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    window.addEventListener('scroll', () => {
        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }
        });
    });
}

    function resaltarEnlace() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    window.addEventListener('scroll', () => {
        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active');
            }
        });
    });
}


    function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
