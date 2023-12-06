import Layout from "@/components/layout";
import Link from "next/link";

export default function Productos() {
    return(
        <Layout>
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/productos/nuevos'}>
                Añade nuevo producto
            </Link>







        </Layout>)
}