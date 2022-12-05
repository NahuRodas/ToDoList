let campoTareas = document.getElementById('campo-tareas'),
    botonAgregar = document.getElementById('boton-agregar'),
    listaTareas = document.getElementById('lista-tareas');

    // Funcion que facilita la creacion de elementos con etiqueta en el documento HTML
function crearElemento({etiqueta, contenido}) {
    let elemento = document.createElement(etiqueta);
    if(contenido){
        elemento.innerHTML = contenido;
    }
    return elemento;
}

    // Funcion que devuelve TRUE si el campo de tareas esta vacio
function isEmpty(value) {
    return value.trim()==='';
}

    // Agregar la tarea al hacer CLICK en el boton
botonAgregar.addEventListener('click', function (event) {
    event.preventDefault();
    let tarea = campoTareas.value;
    if (! isEmpty(tarea)) {
        let li = crearElemento({
            etiqueta: 'li',
            contenido: `<div class="row">
                            <div class="col-6">
                                <input class='form-check-input me-1' type='checkbox' value=''>
                                <label class="form-check-label">${tarea}</label>  
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <button class = 'btn btn-outline-danger btn-sm remover-tarea'> X </button> 
                            </div>
                        </div>`             
        });
        li.className = 'list-group-item';
        listaTareas.append(li);
        campoTareas.value = '';
        campoTareas.focus();
    }
})

campoTareas.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter') {
        let tarea = campoTareas.value;
        if (! isEmpty(tarea)) {
            let li = crearElemento({
                etiqueta: 'li',
                contenido: `<div class="row">
                                <div class="col-6">
                                    <input class='form-check-input me-1' type='checkbox' value=''>
                                    <label class="form-check-label">${tarea}</label>  
                                </div>
                                <div class="col-6 d-flex justify-content-end">
                                    <button class = 'btn btn-outline-danger btn-sm remover-tarea'> X </button> 
                                </div>
                            </div>`             
            });
            li.className = 'list-group-item';
            listaTareas.append(li);
            campoTareas.value = '';
            campoTareas.focus();
        }
    }
})

    // Funcion para remover tareas
document.addEventListener('click', (e)=>{
    let target = e.target;
    if(target.classList.contains('remover-tarea')){
        target.parentElement.parentElement.parentElement.remove();
    }
})
