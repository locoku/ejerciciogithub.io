const productos = [
    {
    nombre: 'bebe peluche',
    descripcion: 'peluche de bebe de la pelicula puella magi madoka magica rebelion',
    precio: 250.00,
    imagen: 'imagen1.jpg'
    },
    {
    nombre: 'mini kyubey peluche',
    descripcion: 'peluche de mini kyubey de magia record puella magi madoka magica side story',
    precio: 200.00 ,
    imagen: 'imagen2.jpg'
    },
    {
    nombre: 'homura akemi y madoka kaname peluche',
    descripcion: 'peluches de homura akemi y madoka kaname peluche de puella magi madoka magica',
    precio: 400.00,
    imagen: 'imagen3.jpg'
    },
    {
    nombre: 'akuma homura peluche',
    descripcion: 'peluche de akuma homura de la pelicula puella magi madoka magica rebelion',
    precio: 149.99,
    imagen: 'imagen4.jpg'
    }
    ];
    const catalogo = document.getElementById('catalogo');
    function crearTarjetaProducto(producto) {
        const card = document.createElement('div');
        card.className = 'producto-card';
        const imagen = document.createElement('imagen');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        const titulo = document.createElement('h2');
        titulo.textContent = producto.nombre;
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        const precio = document.createElement('span');
        precio.className = 'precio';
        precio.textContent = `$${producto.precio.toFixed(2)}`;
        const boton = document.createElement('button');
        boton.className = 'btn-comprar';
        boton.textContent = 'Comprar';
        card.appendChild(imagen);
        card.appendChild(titulo);
        card.appendChild(descripcion);
        card.appendChild(precio);

card.appendChild(boton);
return card;
}
function renderizarCatalogo() {
    productos.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    catalogo.appendChild(tarjeta);
    });
}
window.onload = renderizarCatalogo;