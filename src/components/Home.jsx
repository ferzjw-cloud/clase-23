
import { useState, useEffect } from "react"

// un estado es un variable que cuando se actualiza refresca la UI

const Home = () => {
    //destructuring
    //useState [name, setName] = useState()

    const [name, setName] = useState("Fernando")
    const [products, setProducts] = useState([])

   //let listOfProducts = []



    const c1 = "important"
    const c2 = "underline"

    const fetchingData = async () => {
        try {
            const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            if(response.ok) {
                const data = await response.json([])
                setProducts(data)

                products = data
            }
    } catch (error) {
        console.log(error)

    }
}

// ejecuta un efecto secundario, trae la data solo luego de que renreice el componente por primera vez.

useEffect(() => {
    fetchingData()
}, [])

    const handleClick = () => {
        console.log("hice click en el boton!")
        setName("Maria")
    }
    
    return (
        <>
         <main>
            <h1 className={`${c1} ${c2}`}>Welcome {name.toLocaleUpperCase()},  to the Home Page</h1>
            <button onClick={handleClick}>Cambiar nombre</button>
            <section>
                <p>this is the home page content</p>
                <article>
                    <h2>Latest Updates</h2>
                    <p>Stay updated with the latest news and announcements.</p>
                </article>
            </section>
            <section>
                {
                    products.map((product) => {
                        return (
                            <div>
                                <img src={product.api_featured_image} alt={`imagen del producto ${product.name}`}/>
                                <h2>{product.name}</h2>
                                <h3>{product.price_sign}{product.price}</h3>
                                <h3>{product.description}</h3>
                                <p className="category">{product.category ? product.category : "sin categoria"}</p>
                           </div>
                        )
                    }
                )}
            </section>
        </main>
        <footer>
                <p>Copyright 2026</p>
        </footer>
        </>
               
    )
}

export {Home}