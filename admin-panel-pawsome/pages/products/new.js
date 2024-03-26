import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts, setGoToProducts] = useState(false);

    async   function createProduct(ev) {
        ev.preventDefault();
        const data = {title,description,price}
        await axios.post('/api/products', data)
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>Nuevo Producto</h1>
                <label>Nombre de producto</label>
                    <input 
                    type="text" 
                    placeholder="Nombre del producto" 
                    value={title} 
                    onChange={ev => setTitle(ev.target.value)}/>

                <label>Descripción</label>
                    <textarea 
                    placeholder="Descripción"
                    value={description} 
                    onChange={ev => setDescription(ev.target.value)}/>

                <label>Precio (COP)</label>
                    <input 
                    type="text" 
                    value={price}
                    placeholder="Price"                
                    onChange={ev => setPrice(ev.target.value)}/>

                <button 
                    type="submit"
                    className="btn-primary">
                    Guardar
                </button>
            </form>
        </Layout>
    );
}