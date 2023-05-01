//tomamos la clase "icon-cart" y la ponemos dentro de una variable
const btnCart = document.querySelector('.container-cart-icon') 

// aca hace lo mismo
const containerCartProducts = document.querySelector('.container-cart-products')

// aca hago lo mismo pero con la clase del icono de la X
//const cerrarX = document.querySelector('.icon-close')
 
//cada vez que yo haga click en el carrito, se ejecutara una funcion
// en la cual, le indicamos que ponga o quite (toggle), la clase "hidder-cart"
// que es la que oculta el div, donde esta la informacion de los productos del carrito
btnCart.addEventListener('click', () => {
     //alert(containerCartProducts.classList) //para ver que clases tiene antes de remover
    containerCartProducts.classList.toggle('hidden-cart')
     //alert(containerCartProducts.classList) //para ver que clases tiene despues de remover

})

//la idea de esto es que vuelva a agregar la clase hidder-cart, para que se vuelva a ocultar
//cerrarX.addEventListener('click', () => {
    //alert(containerCartProducts.classList) //para ver que clases tiene antes de agregar
   //containerCartProducts.classList.add('hidden-cart')
    //alert(containerCartProducts.classList) //para ver que clases tiene despues de agregar
//})


// ==============================segundo video================================

//tomamos la clase cart-product
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

// Lista de todos los contenedores de productos
const productList = document.querySelector('.container-items')

// variable de arreglos de productos
let allProducts = []

//tomamos la clase total-pagar
const valorTotal = document.querySelector('.total-pagar')

//tomamos el id #contador-productos
const countProducts = document.querySelector('#contador-productos')



productList.addEventListener('click', e => {
    // 1) console.log(e.target) //el e.target me devuelve el elemento al que le hice click
    // 2) console.log(e.target.classList) //el e.target.classList me devuelve la clase de elemento
                                          //al que le hice click (si es que tiene clase)

    // 3) console.log(e.target.classList.contains('btn-add-cart'))//e.target.classlist.contains('nombreclase')
    //me devuelve verdadero si el elemento que le hice click tiene la clase que le coloque
    //y falso si no tiene esa clase

    if (e.target.classList.contains('btn-add-cart')){
         
        /*aca lo que haremos es cuando apreta el boton, junta todos los datos del producto,
        los mete en allProducts, se fija si se repite para contar cuanta cantidad
        de cada producto se ha seleccionado, el resultado sera que en allProducts
        va a estar correcta toda la informacion de que productos y en que cantidad
        de cada uno se ha elegido
        */

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
        
        //con .some nos fijamos si es que el nuevo producto existe en el carrito
        //ahora abajao vamos a ir sumando las cantidades de veces que existe
        //======================actualiza cantidad del mismo producto======================       
        if (exists){
            const products = allProducts.map(producto => {

            if(producto.titulo === infoProduct.titulo){
                producto.cantidad++;
                return producto;
            }
            else{
                return producto
            }
            //lo que hace es ir comparando cada producto de allProducts con el nuevo producto
            //si tienen el mismo titulo, aumenta en uno la cantidad de la variable producto
            //de la funcion, y devuelve el producto, actualizando el valor que tenia en 
            //allProducts

            //si no tienen el mismo titulo igualmente lo devuelve, pero sin aumentar la cantidad
            //lo deja tal cual estaba
         }    
         )
         
        allProducts = [...products]
        //ahora que ya tenemos en product el resultado final de como deberia quedar allProducts
        //lo que hacemos es reemplazar el valor de allProducts por el de product

        //de esta manera ahora tenemos en allProducts el resultado final con la cantidad actualizada
        }
        //=================== fin actualiza cantidad del mismo producto======================

        //================agrega el nuevo producto que no existia en la lista================
        else{
            //y si exists es falso, lo que quiere decir que el producto no existe en la lista
            //del carrito, lo que hacemos es agregar este producto a la lista. (no actualizamos
            //la cantidad de un producto que ya teniamos en la lista, sino que agregamos a la lista,
            //el nuevo producto)

            allProducts = [...allProducts, infoProduct]
            //con el operador "..." spread, lo que hace es hacer un nuevo arreglo, esparce cada elemento
            //que tenia en la copia original, quedando igual al arreglo original, y al final
            //le mete el nuevo elemento, que en este caso sera el arreglo infoProduct
            //luego actualiza el valor del arreglo original allProducts, con el valor que quedo como
            //resultado en el nuevo arreglo 
            //es una manera de combinar dos arreglos (allProducts y infoProduct) sin mutar 
            //lo que ya teniamos en el arreglo original (allproducts)
            
    
            console.log(allProducts)

        } 
        //============= fin agrega el nuevo producto que no existia en la lista =============
        
        //=== al apretar X en un producto, eliminarlo de la lista y que se descuente del total ====
        rowProduct.addEventListener('click', (e) =>{ //cuando se hace click en la lista del carrito

            if (e.target.classList.contains('icon-close')){ //si donde hacemos click tiene la clase icon-clase (la X la tiene)
                const product = e.target.parentElement //guardamos en nueva variable, el elemento padre del icon-clase. que seria la clase cart-product
                const title = product.querySelector('p').textContent //guardamos en nueva variable el contenido del elemento p, de clase cart-product, en este caso corresponde al titulo del producto

                allProducts = allProducts.filter( productfilter => productfilter.titulo !== title)
                //el .filter lo que hace es hacer un nuevo arreglo con los productos que pasen el filtro
                //en este caso, como title tendra el producto que el usuario apreto la X
                //decimos que haga un nuevo arreglo con los productos que sean diferents del titulo 
                //de ese producto
                //de esta manera en allProducts, solo quedaran los productos que el usuario no haya apretado la X
                //logrando de esta manera eliminar los productos que el usuario si haya apretado la X
                //al mismo tiempo, al eliminarse los productos, se descontaran automaticamente 
                //tanto el contador de productos, como el valor total, ya que esos calculos se hacen
                //mas abajo en base a los productos que hay en arreglo allProducts
                //por lo cual si hay mas productos se iran sumando, y si le quitamos productos a este arreglo
                //se iran descontando

            
                       
            showHTML(); 
            //y aca llamamos nuevamente la funcion showHTML(), que limpia y escribe la lista
            //que tiene el arreglo allProducts.
            //si no lo hacemos, el cambio se produce en el arreglo allProducts, pero no se ve
            //ningun tipo de cambio en la pantalla, los productos siguen apareciendo
            //y no se descuenta el valor total de la compra en la pantalla

            }

        })
        //=== fin al apretar X en un producto, eliminarlo de la lista y que se descuente del total====

        showHTML();
        //aca cuenta cuantos productos se ha seleccionado, cuanto es el dinero final,
        //inserta en el html, en el menu, los productos seleccionados
    }
})

// Funcion para mostrar HTML

const showHTML = () =>{
    // Limpiar HTML de lo que tenia antes en la lista de productos seleccionados:
    rowProduct.innerHTML = " ";

    let totalaPagar = 0;
    let contadorDeProductosEnCarrito = 0; 

    //=====================================================================================
    //        ACA ARRANCA EL PROCESO DE METER EN EL MENU LOS PRODUCTOS SELECCIONADOS
    //=====================================================================================
    
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
    //======estamos dentro del forEach, recorriendo de a una vez el arreglo allProducts======
    //== allProducts tiene la cantidad definitiva de productos seleccionados por el usuario ==
    //================ y en que cantidades, por lo cual en cada iteracion  ==================
    //======== vamos sumando por cada producto el valor por la cantidad, =========
    //============== en variables que iran acumulando la de todos los productos ==============
    totalaPagar = totalaPagar + parseInt(producto.cantidad * producto.precio.slice(1)) //minuto 34 detallar que hace esto
    contadorDeProductosEnCarrito = contadorDeProductosEnCarrito + producto.cantidad    //minuto 34 detallar que hace esto

    }
    )
    //=====================================================================================
    //        TERMINA EL PROCESO DE METER EN EL MENU LOS PRODUCTOS SELECCIONADOS
    //=====================================================================================



    
    //=====================================================================================
    //          INICIA PONER EL TOTAL FINAL $, Y LA CANTIDAD DE PRODUCTOS SELECCIONADOS
    //=====================================================================================

    valorTotal.innerText = `$ ${totalaPagar}` 
    //habiamos tomado la clase del div donde se muestra el total y lo metimos en la variable
    //valorTotal. ahora insertamos en el, totalaPagar, con una plantilla en donde indicamos
    //que primero ponga el simbolo $ , y luego el valor que tenga totalaPagar
    
    countProducts.innerText = contadorDeProductosEnCarrito //minuto 33 detallar que hace esto

    //=====================================================================================
    //         FIN PONER EL TOTAL FINAL $, Y LA CANTIDAD DE PRODUCTOS SELECCIONADOS
    //=====================================================================================

} 





 



