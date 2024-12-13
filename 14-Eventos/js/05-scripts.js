window.addEventListener('scroll',() =>{
//     const scroPX = window.scrollY;
//   console.log(scroPX)


const premium =document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect();
//console.log(ubicacion);


if(ubicacion.top < 785){
    console.log('el elemento ya estaa visible dany'
      //  + alert("Esto es un alert")
    )
 
} else {
    console.log('Aun no, da mas scroll');
}

})