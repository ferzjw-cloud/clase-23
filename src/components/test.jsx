
import { useState } from "react"


const Test = () => {
    const [product, setProduct] = useState({id: 1, name: "pc", price: 100})

    //let producto = {id: 1, name: "pc", price: 100}
    
    const handleClick = () => {
        setProduct({id: 1, name: "pc", price: 90})
        //alert("hice click en el boton!")
        
       
    }

    return (
        <>
        <div>
            <p>ID del producto: {product.id}</p>
            <p>name del producto: {product.name}</p>
            <p>precio del producto: ${product.price}</p>
            {product.price < 100 && <h4>Producto en rebaja</h4>}
        </div>
        <button onClick={handleClick}>Actualizar precio</button>
        </>
    )
}   

export { Test }