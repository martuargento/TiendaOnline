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
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

// Lista de todos los contenedores de productos
const productList = document.querySelector('.container-items')

// variable de arreglos de productos
let allProducts = []






productList.addEventListener('click', e => {
    // 1) console.log(e.target) //el e.target me devuelve el elemento al que le hice click
    // 2) console.log(e.target.classList) //el e.target.classList me devuelve la clase de elemento
                                          //al que le hice click (si es que tiene clase)

    // 3) console.log(e.target.classList.contains('btn-add-cart'))//e.target.classlist.contains('nombreclase')
    //me devuelve verdadero si el elemento que le hice click tiene la clase que le coloque
    //y falso si no tiene esa clase

    if (e.target.classList.contains('btn-add-cart')){
         
        //console.log(e.target.parentElement)
        //e.target.parentElement retrocede al padre del elemento que le hicimos click
        //y me trae todo ese elemento completo

        const product = e.target.parentElement
        //guardamos el elemento padre en una variable

        //console.log(product.querySelector('h2'))
        //con querySelector, seleccionamos el elemento que queremos traer de product
        //tiene varios elementos, <h2> con el titulo, <p> que tiene el precio,
        //y el boton de añadir el producto propiamente dicho. en este caso mostramos la informacion
        //del elemento h2 seleccionado
        
        //console.log(product.querySelector('h2').textContent)
        //agregando textContent nos trae solo el texto, sin las etiquetas del elemento

        const infoProduct = {
            cantidad: 1,
            titulo: product.querySelector('h2').textContent,
            precio: product.querySelector('p').textContent
        }
        //hacemos un variable de tipo objeto y ponemos la informacion en diferentes campos

        //  console.log(infoProduct)
        //vemos si nos da bien la informacion

        allProducts = [...allProducts, infoProduct]
        //con el operador "..." spread, lo que hace es hacer un nuevo arreglo, esparce cada elemento
        //que tenia en la copia original, quedando igual al arreglo original, y al final
        //le mete el nuevo elemento, que en este caso sera el arreglo infoProduct
        //luego actualiza el valor del arreglo original allProducts, con el valor que quedo como
        //resultado en el nuevo arreglo 
        //es una manera de combinar dos arreglos (allProducts y infoProduct) sin mutar 
        //lo que ya teniamos en el arreglo original (allproducts

        console.log(allProducts)
    }
})

// Funcion para mostrar HTML

const showHTML = () =>{
    allProducts.forEach(product =>{ //el forEach recorre todo el arreglo, 
        //y por cada uno de los campos... ejecuta la funcion que hay adentro,
        //product va a ser donde se va a guardar cada campo del arreglo,
        //mientras se lo este recorriendo  

    const containerProduct = document.createElement('div')
    //con esta variable crearemos el nuevo <div> donde insertaremos en el html, los datos
    //del producto que el usuario haya apretado el boton de compra

    containerProduct.classList.add('cart-product')
    //aca le añadimos a ese <div> la clase cart-product.
        

    }) 
} 





 



