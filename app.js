//MOSTRAR Y OCULTAR CARRITO
const carrito = document.getElementById('carrito')
const contenedorCarrito = document.querySelector('.contenedor-carrito')

function mostrarCarrito(){
    contenedorCarrito.style.display = "block"
}

const x = document.querySelector('.x')

function ocultarCarrito(){
    contenedorCarrito.style.display = "none" 
}

////////////
const botones = document.querySelectorAll('button')
const listaProductos = document.querySelector('.lista-productos')
const vacio = document.querySelector('.vacio')
let cantidad = 0
const cantidadContenedor = document.querySelector('.cantidad')
const precioTotalElementos = document.querySelector('.precio-total')
let precioTotal = 0

botones.forEach(boton=> {

    boton.addEventListener('click', (e) =>{
        cantidad ++;
        vacio.style.display = "none"
        let producto = null
        let propiedades = {}
        producto = e.target.parentElement
        propiedades = {
            nombre : producto.querySelector('.nombre').textContent,
            precio : producto.querySelector('.precio').textContent
        }
        let nombre = document.createElement('span')
        let precio = document.createElement('span')
        precio.classList.add('precio-producto')
        let borrarItem = document.createElement('span')
        borrarItem.classList.add('borrar-item')
        
        let item = document.createElement('li')

        item.appendChild(nombre)
        item.appendChild(precio)
        item.appendChild(borrarItem)
        listaProductos.appendChild(item)
        nombre.innerText = propiedades.nombre
        precio.innerText = propiedades.precio

        let precioItem = parseFloat(propiedades.precio);
        precioTotal = precioItem + precioTotal;
    
        precioTotalElementos.textContent = `Total a Pagar: $${precioTotal.toFixed(2)}`

        borrarItem.innerHTML = 'x'
        borrarItem.addEventListener('click', (b) =>{
            producto = b.target.parentElement
            producto.style.display = "none"
            cantidad --
            cantidadContenedor.innerHTML = cantidad
            precioTotal = precioTotal - precioItem;
            precioTotalElementos.textContent = `Total a Pagar: $${precioTotal.toFixed(2)}`

            if(cantidad == 0){
                vacio.style.display = "flex"
            }
    
        })
        cantidadContenedor.innerHTML = cantidad
        
    })
})


