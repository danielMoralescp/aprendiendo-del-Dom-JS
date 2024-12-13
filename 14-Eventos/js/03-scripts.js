const busqueda1 = document.querySelector('.busqueda');

busqueda1.addEventListener('input', (e)=> {
 if (e.target.value === '') {
    console.log('fallo la validacion')
    
 }
})//para validaciones

// busqueda.addEventListener('keyup', ()=> {
//     console.log('app dany')
//    })