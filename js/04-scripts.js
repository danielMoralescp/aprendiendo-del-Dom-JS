const card = document.querySelector('.card')
//el quySelector solo te retornara uno solo

const cardall = document.querySelectorAll('.card')
console.log(cardall)


//asi accedemos a poder acceder a la clase del hijo ,tipo css
const info = document.querySelector('.premium .info')
console.log(info)



//otra forma si tienes hijos mellizos
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)
const tercerCard = document.querySelector('section.hospedaje .card:nth-child(3)')
console.log(tercerCard)

//acceder con a los que tienen id
const formulario = document.querySelector('#formulario')
console.log(formulario)


//puedes seleccionar cualquier etiquetas
const nav = document.querySelector('nav')
console.log(nav)