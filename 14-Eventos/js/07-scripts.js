const carD = document.querySelector('.card');


//otra forma de prevenir el evevt bobling
carD.addEventListener("click", e => {

    if(e.target.classList.contains('titulo')){
        console.log("diste click en titulo");
    }
    if(e.target.classList.contains('precio')){
        console.log("diste click en  precio");
    }
    if(e.target.classList.contains('card')){
        console.log("diste click en  card");
    }


})






console.log();