const nave = document.querySelector('.navegacion');

nave.addEventListener('mouseenter', () =>{
 console.log('entrando a la nave...')
 nave.style.backgroundColor = 'yellow'
 nave.style.border = 'solid 3px red'
})

nave.addEventListener('mouseout', () =>{
    console.log('saliendo de la nave...')
    nave.style.backgroundColor = 'blue';
    nave.style.color = 'white'
    nave.style.border = 'solid 3px green'
   })