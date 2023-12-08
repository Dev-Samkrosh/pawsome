import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FormularioProducto({
        _id,
        nombre:nombreExistente,
        descripcion:descripcionExistente,
        precio:precioExistente,
        imagenes,
    
    }) {
    // Estado local para manejar el formulario
    const [nombre,setNombre] = useState(nombreExistente || '');
    const [descripcion,setDescripcion] = useState(descripcionExistente || '');
    const [precio,setPrecio] = useState(precioExistente || '');
    const [irAProductos, setIrAProductos] = useState(false);
    const router = useRouter();

    // Función para guardar o actualizar el producto
    async function guardarProducto(ev) {
        ev.preventDefault();
        const data = {nombre,descripcion,precio,imagenes};
        if (_id) {
            // Si existe _id, se actualiza el producto
            await axios.put('/api/productos', {...data,_id});
        
        } else {
            // Si no existe _id, se crea un nuevo producto
            await axios.post('/api/productos',data);
        
        }
        setIrAProductos(true); // Se activa para redirigir a la lista de productos después de guardar
    
    }
    // Si se activa irAProductos, redirige a la página de productos
    if (irAProductos) {
        router.push('/productos');
    }

    // Función para cargar imágenes al formulario
    async function cargarImagenes(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            const data = new FormData();
            for (const file of files) {
                data.append('file',file);
            }
            const res = await axios.post('/api/cargar', data)
            console.log(res.data); // Muestra la respuesta de la carga de imágenes en la consola
        }
    }

    return (
        <form onSubmit={guardarProducto}>

            {/* Campo para el nombre del producto */}
            <label>Nombre del producto</label>
            <input
                type="text"
                placeholder="Nombre del producto"
                value={nombre}
                onChange={ev => setNombre(ev.target.value)}
            />

            {/* Campo para cargar imágenes */}
            <label>Imagenes</label>
            <div className="mb-2">
                <label className="w-24 h-24 border flex items-center justify-center flex-col text-sm gap-1 text-gray-400 rounded-lg bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div>
                        Cargar
                    </div>
                    <input type="file" className="hidden" onChange={cargarImagenes} />
                </label>
                {!imagenes?.length && (
                    <div>Este producto no tiene fotos</div>
                )}
            </div>

            {/* Campo para la descripción del producto */}
            <label>Descripción</label>
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={ev => setDescripcion(ev.target.value)}
            />

            {/* Campo para el precio del producto */}
            <label>Precio (COP)</label>
            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={ev => setPrecio(ev.target.value)}
            />

            {/* Botón para guardar el producto */}
            <button
                type="submit"
                className="btn-primario">
                Guardar
            </button>
        </form>
    );
}