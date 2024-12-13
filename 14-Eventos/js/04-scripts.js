const formu = document.querySelector('#formulario');
//  formu.addEventListener('submit', (e)=> {
//     e.preventDefault()//previniendo lo que esta por defecto que no te lleve a otra pagina


//     console.log(e.target.action)
//  })



//esta es otra forma de hacerlo
formu.addEventListener('submit', validarFormulario)

 function validarFormulario(e) {
    e.preventDefault()//previniendo lo que esta por defecto que no te lleve a otra pagina
    
    console.log('consultando una api')
 
    console.log(e.target.action)
 }