const productos = [
  {
    nombre: "torta de chocolate",
    precio: 50,
  },
  {
    nombre: "tarta frutal",
    precio: 100,
  },
  {
    nombre: "macarons",
    precio: 150,
  },
  {
    nombre: "cuadrados de coco",
    precio: 400,
  },
  {
    nombre: "budin de naranja",
    precio: 500,
  },
];

let carrito = [];

function mostrarListaProductos() {
  alert("a continuación lista de productos");
  const todosLosProductos = productos.map(
    (producto) => `${producto.nombre} ${producto.precio}$`
  );
  alert(todosLosProductos.join(" - "));
}

function agregarAlCarrito(producto, unidades) {
  const productoEncontrado = productos.find((p) => p.nombre === producto);

  if (productoEncontrado) {
    carrito.push({ producto, unidades, precio: productoEncontrado.precio });
    console.log(carrito);
  } else {
    alert("No tenemos ese producto");
  }
}

function mostrarDetalleCarrito() {
  carrito.forEach((item) => {
    console.log(
      `Producto: ${item.producto}, Unidades: ${
        item.unidades
      }, Total a pagar por producto: ${item.unidades * item.precio}`
    );
  });
}

function calcularTotal() {
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`El total a pagar por su compra es de: ${total}`);
}

let seleccion = prompt("¿Hola, desea comprar algo? (si o no)");

while (seleccion !== "si" && seleccion !== "no") {
  alert("Por favor, ingresa una de las opciones, si o no");
  seleccion = prompt("¿Hola, desea comprar algo? (si o no)");
}

if (seleccion === "si") {
  mostrarListaProductos();
} else if (seleccion === "no") {
  alert("Gracias por su compra. ¡Hasta luego!");
}

while (seleccion !== "no") {
  const producto = prompt("Agrega un producto a tu carrito");
  const unidades = parseInt(
    prompt(`¿Cuántas unidades de ${producto} deseas llevar?`)
  );

  agregarAlCarrito(producto, unidades);

  seleccion = prompt("¿Quiere seguir comprando? (si o no)");

  if (seleccion === "no") {
    mostrarDetalleCarrito();
    calcularTotal();
  }
}
