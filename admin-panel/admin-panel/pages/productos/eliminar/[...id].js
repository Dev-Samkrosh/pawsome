import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EliminarPaginaProducto() {
    const router = useRouter();
    const [productoInfo, setProductoInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/productos?id='+id).then(response => {setProductoInfo(response.data)})
        
    }, [id]);

    function irAtras() {
        router.push('/productos');
    }
    async function eliminarProducto() {
        await axios.delete('/api/productos?id='+id);
        irAtras();
    }
    return (
    <Layout>
        <h1 className="text-center">¿Realmente quieres elminar el producto "{productoInfo?.nombre}"?</h1>
        
        <div className="flex gap-2 justify-center">
            <button 
            onClick={eliminarProducto}
            className="btn-rojo">
                Sí
            </button>

            <button 
            onClick={irAtras} 
            className="btn-default">
                No
            </button>
        </div>
        
    </Layout>
    )
}