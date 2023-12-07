import FormularioProducto from "@/components/FormularioProducto";
import Layout from "@/components/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditarPaginaProducto() {
    const [productoInfo, setProductoInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/api/productos?id='+id).then(response => {
        setProductoInfo(response.data);
      });
    }, [id]);
    return (
      <Layout>
        <h1>Editar productos</h1>
        {productoInfo && (
          <FormularioProducto {...productoInfo} />
        )}
      </Layout>
    );
  }