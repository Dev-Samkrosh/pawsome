import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        });
    }, []);
    return (
        <Layout>
            <Link className="btn-primary" href={'/products/new'}>Añadir producto</Link>
            <table>
                <thead>
                    <tr>
                        <td>Nombre del producto</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr>
                            <td>{product.title}</td>
                            <td>boton</td>
                        </tr>
                    ))}
                </tbody>
            </table>  
        </Layout>
    );  
}