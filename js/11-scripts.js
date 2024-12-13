const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');
console.log(footer)


btnFlotante.addEventListener('click',mostrar);


function mostrar(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        this.classList.remove('activo')
        this.textContent = ('Idioma y Dinero')
    }else{
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        this.textContent = ('cerrar')

    }
}