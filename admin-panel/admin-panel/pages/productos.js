import Layout from "@/components/layout"; // Importación del componente Layout para la estructura de la página
import axios from "axios"; // Importación de axios para realizar solicitudes HTTP
import Link from "next/link"; // Importación de Link para la navegación entre páginas
import { useEffect, useState } from "react"; // Importación de useEffect y useState de React

export default function Productos() {
    const [productos, setProductos] = useState([]); // Estado para almacenar la lista de productos

    useEffect(() => {
        // Al montar la página, se realiza una solicitud GET a '/api/productos' para obtener los productos
        axios.get('/api/productos').then(response => {
            setProductos(response.data); // Se actualiza el estado 'productos' con los datos recibidos
        });
    }, []); // El segundo argumento vacío asegura que este efecto se ejecute solo una vez, al montar la página

    return (
        <Layout> {/* Renderiza el componente Layout */}
            {/* Enlace para agregar un nuevo producto */}
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/productos/nuevos'}>
                Añadir producto
            </Link>
            
            {/* Tabla para mostrar la lista de productos */}
            <table className="basic mt-3">
                <thead>
                    <tr>
                        <td>Nombre del producto</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeo de los productos para mostrarlos en la tabla */}
                    {productos.map(producto => (
                        <tr key={producto._id}> {/* Se recomienda usar un 'key' única al renderizar elementos en una lista */}
                            <td>{producto.nombre}</td> {/* Nombre del producto */}
                            <td>
                                {/* Enlace para editar el producto */}
                                <Link href={'/productos/editar/' + producto._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        {/* Icono de editar */}
                                    </svg>
                                    Editar
                                </Link>
                                {/* Enlace para eliminar el producto */}
                                <Link href={'/productos/eliminar/' + producto._id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        {/* Icono de eliminar */}
                                    </svg>
                                    Eliminar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}