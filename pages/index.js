import Head from "next/head";
// import Link from "next/link";
import ProductCart from "../components/ProductCart";
// import { useEffect, useState } from "react";
// ProductCart

import Title from "../components/Title";
import { getProducts } from "../lib/products";

// for not loading the server with to many requests
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    // revalidate: 5 * 60,
    revalidate: 30,
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
  // console.log(products);
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
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li className="text-black" key={product.id}>
              <ProductCart product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
