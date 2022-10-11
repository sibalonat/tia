function stripProduct(product) {
    return {
        id: product.id,
        title: product.attributes.title,
    }
}

export async function getProducts() {
    const response = await fetch('http://localhost:1337/api/products')
    const resData = await response.json()
    const products = await resData.data

    return products.map(stripProduct)
}