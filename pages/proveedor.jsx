import Layout from "../components/Layout";
import Link from "next/link";

export default () => (
    <div>
        <Layout title="Proveedor" >
            Hello
            <Link prefetch href="/">Go back</Link>
        </Layout>
    </div>
)