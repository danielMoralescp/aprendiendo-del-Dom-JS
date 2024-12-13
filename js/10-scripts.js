//creamos el enlace
const enlace = document.createElement('a');

//le agregamos como se va a llamar
enlace.textContent = 'enlaceNew';

//le agregamos una direccion
enlace.href = '/newenlace';

console.log(enlace);

enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'enlace-new');
enlace.classList.add('alguna-clase');

enlace.onclick = myfuncion;

//accedemos a donde lo queremos agregar
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[2])



function myfuncion(){
    alert('hizo click')
}




//Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent ='concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent ='concierto de Dejaloux';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent ='$100';
parrafo3.classList.add('precio');


const info = document.createElement('div');
info.classList.add = ('info')
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info)

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto alternativo';



const card = document.createElement('div');
card.classList = ('card');

card.appendChild(imagen);
card.appendChild(info);




console.log(card)

//insertarlo
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[1]);








