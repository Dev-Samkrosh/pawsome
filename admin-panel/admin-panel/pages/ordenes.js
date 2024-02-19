import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Ordenes() {
  const [ordenes,setOrdenes] = useState([]);
  useEffect(() => {
    axios.get('/api/ordenes').then(response => {
      setOrdenes(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Ordenes</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Pagado</th>
            <th>Persona</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
        {ordenes.length > 0 && ordenes.map(orden => (
          <tr key={orden._id}>
            <td>{(new Date(orden.creadaEl)).toLocaleString()}
            </td>
            <td className={orden.pagado ? 'text-green-600' : 'text-red-600'}>
              {orden.pagado ? 'YES' : 'NO'}
            </td>
            <td>
              {orden.nombre} {orden.email}<br />
              {orden.ciudad} {orden.codigoPostal} {orden.pais}<br />
              {orden.direccion}
            </td>
            <td>
              {orden.line_items.map(l => (
                <>
                  {l.price_data?.product_data.name} x
                  {l.quantity}<br />
                </>
              ))}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </Layout>
  );
}