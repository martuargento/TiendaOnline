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


        const exists = allProducts.some( producto => producto.titulo === infoProduct.titulo)
        //con el metodo .some podemos saber si un valor esta dentro del arreglo
        //entonces producto sera una variable del metodo donde se va a alojar un producto
        //del arreglo allProducts, por cada iteracion. y se va a comparar especificamente
        //si el titulo de ese producto coincide con el producto que el usuario hizo click
        //recordemos que cuando el usuario hace click en un producto, se guardan los datos
        //de cantidad, titulo y precio, en el arreglo infoProduct

        //este metodo recorrera todo el arreglo donde estan todos los productos del carrito
        //y los comparara uno por uno con el titulo del producto que el usuario toco
        //el boton de añadir al carrito, si ya existe ese titulo en el arreglo allProducts
        //la funcion devolvera verdadero, y sino falso. y a ese resultado lo guardara en la 
        //constante exists

        //podemos comprobar esto haciendo: console.log(exists) e ir tocando los botones
        //y fijandose en consola si se repiten

        
        allProducts = [...allProducts, infoProduct]
        //con el operador "..." spread, lo que hace es hacer un nuevo arreglo, esparce cada elemento
        //que tenia en la copia original, quedando igual al arreglo original, y al final
        //le mete el nuevo elemento, que en este caso sera el arreglo infoProduct
        //luego actualiza el valor del arreglo original allProducts, con el valor que quedo como
        //resultado en el nuevo arreglo 
        //es una manera de combinar dos arreglos (allProducts y infoProduct) sin mutar 
        //lo que ya teniamos en el arreglo original (allproducts

        console.log(allProducts)
        showHTML();
    }
})

// Funcion para mostrar HTML

const showHTML = () =>{
    // Limpiar HTML de lo que tenia antes en la lista de productos seleccionados:
    rowProduct.innerHTML = " ";

    allProducts.forEach(producto =>{ //el forEach recorre todo el arreglo, 
        //y por cada uno de los campos... ejecuta la funcion que hay adentro,
        //producto va a ser donde se va a guardar cada campo del arreglo,
        //mientras se lo este recorriendo  

    const containerProduct = document.createElement('div')
    //con esta variable crearemos el nuevo <div> donde insertaremos en el html, los datos
    //del producto que el usuario haya apretado el boton de compra

    containerProduct.classList.add('cart-product')
    //aca le añadimos a ese <div> la clase cart-product.
        
    containerProduct.innerHTML =    
    // con innerHTML. lo insertamos en el documento html
                                    
    //Hacemos la plantilla de lo que vamos a insertar
    //y reemplazamos en cantidad, titulo del producto y precio
    //por la variable producto.cantidad, producto.titulo y producto.precio que salen
    //de cada iteracion del foreach, que recorre el arreglo allProducts
    `                                      
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${producto.cantidad}</span> 
            <p class="titulo-producto-carrito">${producto.titulo}</p>
            <span class="precio-producto-carrito">${producto.precio}</span>
        </div>
        <!-- icono de X -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24     24"     stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18        6M6 6l12 12" />
        </svg>
    `
    /*hasta aca lo que hicimos, es que una vez que entra al forEach del Arreglo allProducts,  
    donde estan todos los productos que el usuario selecciono..
    por cada iteracion del forEach lo que hace es crear una constante 
    en donde vamos a guardar todo el codigo que vamos a insertar.
    primero crea la constante, creando en ella un elemento div, luego le agrega a ese div
    la clase "cart-product", que es la misma que tiene el documento html original
    y finalmente inserta dentro de ese contenedor div, los datos que proporcionamos en
    la plantilla que hicimos, quedando listo todo el contenido que vamos a insertar
    sobre ese producto en particular, en esa iteracion.
    queda todo listo guardado en la constante containerProduct
    */
    

    
    rowProduct.append(containerProduct)
    //aca insertamos el codigo que hicimos en el <div clase="row-product">
    //del documento html

    /*quedando: 
            <div clase="row-product">
                <div clase="cart-product">
                    Producto insertado
                </div>
            </div> 
    */
    
    }) 
} 





 



