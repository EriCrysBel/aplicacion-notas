const btnAddNota = document.getElementById('btn-add-notas');
const btnCleanNota = document.getElementById('btn-clean-notas');

// document.addEventListener(DOM)

document.getElementById('btn-add-notas').addEventListener('click', function(){
  getInfo(nota);
  setLocalInfo(nota);
  // showInfo();
});

document.getElementById('btn-clean-notas').addEventListener('click', function(){
  cleanInfo();
  showInfo();
});

// Recoger la información
function getInfo(){
  const nota = document.getElementById('nota').innerHTML;
  console.log(nota);
  return nota;
};

// Almacenar en localstorage
function setLocalInfo(nota){
  // Guardar la información en localstorage
  const clave = Date.now();
  localStorage.setItem('nota', getInfo(nota));
}

// Limpiar la información
function cleanInfo(){
  localStorage.removeItem('nota');
  console.log('Texto eliminado de localstorage');
}

// Mostrar la información
function showInfo(){
  //leerla y mostrarla por pantalla
  //si no hay notas mostrar que no hay notas
  console.log(localStorage.length);
  //limpiamos la pantalla
  document.getElementById('show-notas').innerHTML = ``;
  for(let index = 0;  index < localStorage.length; index++){
    let clave = localStorage.key(index);
    let valor = localStorage(clave);
    console.log(valor)
    let elemento = 
    `
    <div class="lista-notas">
    ${valor}
    </div>
    `
    document.getElementById('show-notas').innerHTML+=elemento
  }
  
}
