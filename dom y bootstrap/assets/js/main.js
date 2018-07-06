window.onload = () => {
  agenda();
}

function agenda(){
  const btn_add = document.getElementById('add');

  btn_add.addEventListener('click', () => {
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Titulo de lista tarea");
    input.classList.add("class", "form-group");
    input.value;

    const boton = document.createElement('button');
    const texto = document.createTextNode("Guardar")
    boton.setAttribute("type", "button");
    boton.setAttribute("placeholder", "Guardar");
    boton.classList.add("btn", "btn-success");

  
    cont_input.appendChild(input);
    cont_input.appendChild(boton);
    boton.appendChild(texto);

    boton.addEventListener('click', () => {
      let tarea = document.getElementsByClassName('form-group') [0].value;
      document.getElementsByClassName('form-group')[0].value = '';

      const div_titulo = document.createElement('h3');
      let titulo_text = document.createTextNode(tarea);

      const tareas = document.getElementById('tareas');
      tareas.appendChild(div_titulo);
      div_titulo.appendChild(titulo_text);
      
    })

  });
}

// window.onload = () => {
//   agenda();
// }

// function agenda () {
//   const btn_add = document.getElementById('add');

//     btn_add.addEventListener('click', () => {
//     //Crear elemento input
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('placeholder', 'Título de mi tarea');
//     input.classList.add('class', 'form-group');
//     input.value;
    
//     const contenedor_input = document.getElementById('cont_input');
//     contenedor_input.appendChild(input);

//     //Crear un botón guardar título de tarea

//     const boton = document.createElement('button');
//     boton.setAttribute('type', 'button');
//     buton.classList.add('btn', 'btn-success');
//     const texto = document.createTextNode('Guardar');

//     contenedor_input.appendChild(boton);
//     boton.appendChild(texto);
//     });

// }

