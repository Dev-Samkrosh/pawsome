import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Productos() {
    const [productos,setProductos] = useState([]);
    useEffect(() => {
        axios.get('/api/productos').then(response => {
            setProductos(response.data);
        });
      }, []);
    return(
        <Layout>
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/productos/nuevos'}>
                Añadir producto
            </Link>
            <table className="basic mt-3">
            <thead>
                <tr>
                    <td>Nombre del producto</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr>
                       <td>{producto.nombre}</td> 
                       <td>
                            <Link href={'/productos/editar/'+producto._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                                Editar
                            </Link>
                            <link>
                            
                            </link>
                       </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </Layout>)
}