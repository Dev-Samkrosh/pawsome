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
                Añade nuevo producto
            </Link>
            <table className="basic">
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
                            buttons
                       </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </Layout>)
}