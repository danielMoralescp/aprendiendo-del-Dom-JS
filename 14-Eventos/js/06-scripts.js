//event bubbling



const cardiv = document.querySelector('.card');
const infot = document.querySelector('.info');
const ti = document.querySelector('.titulo');


cardiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('hola card');
});
infot.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('hola info');
});
ti.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('hola titulo');
})