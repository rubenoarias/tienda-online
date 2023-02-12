const btnCart = document.querySelector('.container-cart-icon')
const containerCarProducts =document.querySelector('.container-cart-products')

btnCart.addEventListener('click',()=>{
    containerCarProducts.classList.toggle('hidden-cart')
})
/*===============================*/ 
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('row-product')

/* Lista de todos los contenedores de productos*/ 
const productList = document.querySelector('.container-items')

/*Variables de arreglos de Productos */
let allProducts = []





