
import { useState } from "react"


const Test = () => {
    const [producto, setProducto] = useState({id: 1, name: "pc", price: 100})
    
    const handleClick = () => {
        //alert("hice click en el boton!")
        setProducto({id: 1, name: "pc", price: 110})
       
    }

    return (
        <>
        <div>
            <p>ID del producto: {producto.id}</p>
            <p>name del producto: {producto.name}</p>
            <p>precio del producto: ${producto.price}</p>
        </div>
        <button onClick={handleClick}>Actualizar precio</button>
        </>
    )
}   

export { Test }