import Head from "next/head";
import Link from "next/link";
// import { useEffect, useState } from "react";

import Title from "../components/Title";
import { getProducts } from "../lib/products";

// for not loading the server with to many requests
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 5 * 60,
  };
}
// server side rendering, compact data, more requests
// export async function getServerSideProps() {
//   const products = await getProducts();
//   return {
//     props: { products }
//   };
// }

// client fetch data
// export default function Home() {
export default function Home({ products }) {
  // this calls the api route on pages
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   ( async () => {
  //     const response = await fetch('/api/products');
  //     const products = await response.json()
  //     // console.log(products);
  //     setProducts(products)
  //   })()
  // }, [])

  return (
    <>
      <Head>
        <title>Dyqoni</title>
      </Head>
      <main className="p-6">
        <Title>Dyqoni</Title>
        <ul>
          {products.map((product) => (
            <li className="text-black" key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>{product.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
