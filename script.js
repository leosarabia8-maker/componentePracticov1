 const txtPrecio = document.getElementById('txt-precio')
        const btnAgregarPrecio = document.getElementById('btn-agregar-precio')
        const txtListadoPrecios = document.getElementById('txt-listado-precios')
        const btnPresentarPrecios = document.getElementById('btn-presentar-precios')
        const txtTotalInventario = document.getElementById('txt-total-inventario')
        const btnCalcularTotal = document.getElementById('btn-calcular-total')
        const btnCargarPrecios = document.getElementById('btn-cargar-precios')
        const TOPE = 6
        let productos = [] 
        btnAgregarPrecio.addEventListener('click', function(e){
            const precio = parseFloat(txtPrecio.value)
            const cantElementos = productos.length
            if (isNaN(precio) || precio <= 0){
                alert("Ingresa un precio válido (mayor que 0).")
                return
            }
            if (cantElementos < TOPE){
                const indice = cantElementos
                productos[indice] = precio
                console.log('productos: ', productos)
                txtPrecio.value = ''
            }
            else{
                alert("Ya no se puede ingresar precios..")
            }
        })
        btnPresentarPrecios.addEventListener('click', function(e){
            txtListadoPrecios.value = ''
            for(let i=0; i < productos.length; i++){
                txtListadoPrecios.value += productos[i] + '\n'
            }
        })
        btnCalcularTotal.addEventListener('click', function(e){
            const total = fnCalcularTotal()
            txtTotalInventario.value = total.toFixed(2)
        })
        btnCargarPrecios.addEventListener('click', function(e){
            const lineas = txtListadoPrecios.value.split('\n')
            const nuevos = lineas.map(l => parseFloat(l.trim())).filter(n => !isNaN(n) && n > 0)
            let cupos = TOPE - productos.length
            if (cupos <= 0){
                alert("Ya no hay cupos para cargar más precios (tope 6).")
                return
            }
            const aCargar = nuevos.slice(0, cupos)
            for (let i = 0; i < aCargar.length; i++){
                productos.push(aCargar[i])
            }
            console.log('productos tras cargar: ', productos)
            txtPrecio.value = ''
            alert("Se cargaron " + aCargar.length + " precio(s).")
        })
        function fnCalcularTotal(){
            let totalInventario = 0 
            for(let i = 0; i < productos.length ; i ++){
                totalInventario = totalInventario + productos[i]
            }
            return totalInventario
        }