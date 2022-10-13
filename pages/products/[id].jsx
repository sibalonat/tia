import Head from "next/head";

import Title from "../../components/Title";
import { ApiError } from "../../lib/api";
import { getProduct, getProducts } from "../../lib/products";

export async function getStaticPaths() {
    const products = await getProducts()
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params: { id } }) {
    const product = await getProduct(id)
    try {
        return {
            props: { product },
            revalidate: 5 * 60,
        }
    } catch (error) {
         if (error instanceof ApiError && error.status === 404) {
            return { notFound: true }
        }
        throw error
    }

}

export default function ProductPage({ product }) {
    // console.log(product);
    return (
        <>
            <Head>
                <title>Dyqoni</title>
            </Head>
            <main className="p-6">
                <Title>{product.title}</Title>
                <p>{product.description}</p>
            </main>
        </>
    );
}