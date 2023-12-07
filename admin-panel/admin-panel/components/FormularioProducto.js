import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FormularioProducto({
        nombre:nombreExistente,
        descripcio:descripcionExistente,
        precio:precioExistente,
    
    }) {
    const [nombre,setNombre] = useState(nombreExistente || '');
    const [descripcion,setDescripcion] = useState(descripcionExistente || '');
    const [precio,setPrecio] = useState(precioExistente || '');
    const [irAProductos, setIrAProductos] = useState(false);
    const router = useRouter();
    async function crearProducto(ev) {
        ev.preventDefault();
        const data = {nombre,descripcion,precio};
        await axios.post('/api/productos',data);
        setIrAProductos(true);
    }

    if (irAProductos) {
        router.push('/productos');
    }

    return (
            <form onSubmit={crearProducto}>

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

    );
}