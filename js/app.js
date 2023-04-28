//tomamos la clase "icon-cart" y la ponemos dentro de una variable
const btnCart = document.querySelector('.container-cart-icon') 

// aca hace lo mismo
const containerCartProducts = document.querySelector('.container-cart-products')

// aca hago lo mismo pero con la clase del icono de la X
const cerrarX = document.querySelector('.icon-close')
 
//cada vez que yo haga click en el carrito, se ejecutara una funcion
// en la cual, le indicamos que ponga o quite (toggle), la clase "hidder-cart"
// que es la que oculta el div, donde esta la informacion de los productos del carrito
btnCart.addEventListener('click', () => {
     //alert(containerCartProducts.classList) //para ver que clases tiene antes de remover
    containerCartProducts.classList.toggle('hidden-cart')
     //alert(containerCartProducts.classList) //para ver que clases tiene despues de remover

})

//la idea de esto es que vuelva a agregar la clase hidder-cart, para que se vuelva a ocultar
cerrarX.addEventListener('click', () => {
    //alert(containerCartProducts.classList) //para ver que clases tiene antes de agregar
    containerCartProducts.classList.add('hidden-cart')
    //alert(containerCartProducts.classList) //para ver que clases tiene despues de agregar
})


// ==============================segundo video================================

//tomamos la clase cart-product
const cartInfo = document.querySelector('cart-product')
