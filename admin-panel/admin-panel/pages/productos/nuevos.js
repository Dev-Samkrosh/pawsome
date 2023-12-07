import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

export default function NuevoProducto() {
    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [precio,setPrecio] = useState('');
    async function crearProducto(ev) {
        ev.preventDefault();
        const datos = {nombre,descripcion,precio};
        await axios.post('/api/productos',datos);
    }

    return (
        
        <Layout> 

            <form onSubmit={crearProducto}>
                <h1>Añadir nuevo producto</h1>

                <label>Nombre del producto</label>
                <input type="text" 
                placeholder="Nombre del producto" 
                value={nombre} 
                onChange={ev => setNombre(ev.target.value)}/>

                <label>Descripción</label>
                <textarea 
                placeholder="Descripción" 
                value={descripcion} 
                onChange={ev => setDescripcion(ev.target.value)}/>

                <label>Precio (COP)</label>
                <input type="number" 
                placeholder="Precio" 
                value={precio} 
                onChange={ev => setPrecio(ev.target.value)}/>

                <button 
                type="submit"
                className="btn-primario">
                    Guardar
                </button>
            </form>
            
        </Layout>
    )
}