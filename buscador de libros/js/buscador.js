// creacion de variables o selectores

const Categoria = document.querySelector('#Categoria');
const NombreDelLibro = document.querySelector('#NombreLibro');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const autor = document.querySelector('#autor');
const ISBN = document.querySelector('#ISBN');
const edicion = document.querySelector('#Edicion');
const resultado = document.querySelector('#resultado');


 
//crear un objeto
const datosBusqueda = {
    Categoria:'',
    NombreDelLibro: '',
    precio: '',
    Autor: '',
    ISBN: '',
    Edición: ''
}

//eventos: Todo aquello que me permita hacer captura en pantalla


document.addEventListener('DOMContentLoaded',()=>{
    //llenar el listado de select year
   // llenarSelect();
    // llenado de la bd de los libros
     mostrarLibros(Libros);

})

Categoria.addEventListener('input',e=>{
   // console.log(e.target.value)
   datosBusqueda.Categoria = e.target.value;
   console.log(datosBusqueda.Categoria)
    filtrarLibro();
})

NombreDelLibro.addEventListener('input',e=>{
   datosBusqueda.NombreDelLibro = e.target.value;
  // console.log(datosBusqueda.NombreDelLibro)
   filtrarLibro();
})

minimo.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.minimo = Number(e.target.value);
    console.log(datosBusqueda.minimo)
    filtrarLibro();
})

maximo.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.maximo =Number(e.target.value);
    console.log(datosBusqueda.maximo)
    filtrarLibro();
})

autor.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.Autor = e.target.value;
    console.log(datosBusqueda.Autor)
   filtrarLibro();
})


edicion.addEventListener('input',e=>{
    datosBusqueda.Edición= e.target.value;
    console.log(datosBusqueda.Edición);
    filtrarLibro();
})


ISBN.addEventListener('input',e=>{
    // console.log(e.target.value)
    datosBusqueda.ISBN = Number(e.target.value);
    console.log(datosBusqueda.ISBN)
   filtrarLibro();
})



// funciones


function mostrarLibros(libros){

     limpiarHTML();

    const contenedor = document.querySelector('#resultado')

    // construir el html para colocar el listado de los libros

     libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `
        <p> categoria:${libro.Categoria}  -  Nombre del libro: ${libro.NombreDelLibro} - Precio: ${libro.precio} -  Autor: ${libro.Autor} -  ${libro.ISBN} -  Edicion: ${libro.Edición}  `;
        contenedor.appendChild(libroHTML);
     });

}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

// funciones para filtrar la informacion

function filtrarLibro(){
    const resultado = Libros.filter(filtrarCategoria).filter(filtrarNombreDelLibro).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarAutor).filter(filtrarISBN).filter(filtrarEdicion)

     // console.log(resultado)

    if(resultado.length){
        mostrarLibros(resultado)
    } else{
        noResultado()
    }

}

function  noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('no hay resultados para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)

} 

function filtrarCategoria(libro){
    if(datosBusqueda.Categoria){
        return libro.Categoria === datosBusqueda.Categoria
    }
    return libro;
}

function filtrarNombreDelLibro(libro){
    if(datosBusqueda.NombreDelLibro){
        return libro.NombreDelLibro === datosBusqueda.NombreDelLibro
    }
    return libro;
}

function filtrarMinimo(libro){
    if(datosBusqueda.minimo){
        return libro.precio >= datosBusqueda.minimo
    }
    return libro;
}
 
function filtrarMaximo(libro){
    if(datosBusqueda.maximo){
        return libro.precio <= datosBusqueda.maximo
    }
    return libro;
}

function filtrarAutor(libro){
    if(datosBusqueda.Autor){
        return libro.Autor === datosBusqueda.Autor
    }
    return libro;
}

function filtrarISBN(libro){
    if(datosBusqueda.ISBN){
        return libro.ISBN === datosBusqueda.ISBN
    }
    return libro;
}

function filtrarEdicion(libro){
    if(datosBusqueda.Edición){
        return libro.Edición === datosBusqueda.Edición
    }
    return libro;
}