import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "../lib/products";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Dyqoni</title>
      </Head>
      <main className="p-6">
        <Title>Dyqoni</Title>
        <ul>
          {products.map((product) => (
            <li className="text-black" key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
