//Api de localStorage
//dentro  del metodo setItem entre parentesis se guarda el nombre  y la informacion que queremos guardar en el storage. Esta compuesto por una CLAVE a la izquierda y un VALOR a la derecha
//Guardar en Local Storage
// localStorage.setItem('tarea2', 'fiesta loca')
// let tarea = localStorage.getItem('tarea2')//devuelve el valor que tiene la clave 'tarea01' en el almacenamiento

// const tareas = localStorage
// console.log(tareas.length)
// for (let i = 0; i < tareas.length; i++) {
//     let key = localStorage.key(i) // Clave donde esta guardada la info del Est.
//     console.log(key)
//     tarea = localStorage.getItem(key) // Info del Est. en formato JSON
//     console.log(tarea)
//   }

// console.log(tarea)
// console.log(localStorage.length)

// localStorage.clear();

const notaInput = document.getElementById('nota');
const btnGuardar = document.getElementById('btn-guardar');
const almacen = document.getElementById('almacen-notas');

btnGuardar.addEventListener('click', () => {
  const nota = notaInput.value;
  localStorage.setItem('nota', nota);
  // Mostrar mensaje de bienvenida
  almacen.textContent =`${nota}`;
});

notaGuardada = localStorage.getItem( 'nota' );
if( notaGuardada != null  ) {
    almacen.textContent = `${notaGuardada} ` ;
}