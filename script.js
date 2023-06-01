const selectOpcProdCompra = document.querySelector ("select");
const divInfoProducto = document.querySelector ("#info-productos");

const spanCantidadProd1 = document.querySelector ("#cant-prod-1");
const spanCantidadProd2 = document.querySelector ("#cant-prod-2");
const spanCantidadProd3 = document.querySelector ("#cant-prod-3");

const CANT_INICIAL_PROD = 100;
const CANT_UNIDADES_COMPRA = 1;

const cantidadesProd = [CANT_INICIAL_PROD,CANT_INICIAL_PROD,CANT_INICIAL_PROD];

function actualizarCantidadProdComprar() {
    cantidadesProd[selectOpcProdCompra.value] += CANT_UNIDADES_COMPRA;
}

function actualzarInfoProducto() {
    let posProducto = selectOpcProdCompra.value;
    let spanCantProdRequerido = document.querySelector(`#cant-prod-${posProducto+1}`);

    spanCantProdRequerido.innerHTML = `
    cantidad: ${cantidadesProd[posProducto]}
    `;
}
