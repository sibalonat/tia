import { fetchJson } from "./api";

const { CMS_URL } = process.env

function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
    price: '$' + product.attributes.price.toFixed(2),
    pictureUrl: CMS_URL + product.attributes.picture.data.attributes.formats.medium.url,
  };
}

export async function getProduct(id) {
  const response = await fetchJson(`${CMS_URL}/api/products/${id}?populate=*`);

  const product = await response.data;
  return stripProduct(product);
}

export async function getProducts() {
  const response = await fetchJson(`${CMS_URL}/api/products?populate=*`);

  const products = await response.data;

  return products.map(stripProduct);

}


// "picture": {
//   "data": {
//     "id": 1,
//     "attributes": {
//       "name": "marte.png",
//       "alternativeText": "marte.png",
//       "caption": "marte.png",
//       "width": 1920,
//       "height": 1080,
//       "formats": {
//         "thumbnail": {
//           "name": "thumbnail_marte.png",
//           "hash": "thumbnail_marte_1369f74015",
//           "ext": ".png",
//           "mime": "image/png",
//           "path": null,
//           "width": 245,
//           "height": 138,
//           "size": 42.02,
//           "url": "/uploads/thumbnail_marte_1369f74015.png"
//         },
//         "medium": {
//           "name": "medium_marte.png",
//           "hash": "medium_marte_1369f74015",
//           "ext": ".png",
//           "mime": "image/png",
//           "path": null,
//           "width": 750,
//           "height": 422,
//           "size": 256.63,
//           "url": "/uploads/medium_marte_1369f74015.png"
//         },
//         "small": {
//           "name": "small_marte.png",
//           "hash": "small_marte_1369f74015",
//           "ext": ".png",
//           "mime": "image/png",
//           "path": null,
//           "width": 500,
//           "height": 281,
//           "size": 133.33,
//           "url": "/uploads/small_marte_1369f74015.png"
//         },
//         "large": {
//           "name": "large_marte.png",
//           "hash": "large_marte_1369f74015",
//           "ext": ".png",
//           "mime": "image/png",
//           "path": null,
//           "width": 1000,
//           "height": 563,
//           "size": 400.46,
//           "url": "/uploads/large_marte_1369f74015.png"
//         }
//       },
//       "hash": "marte_1369f74015",
//       "ext": ".png",
//       "mime": "image/png",
//       "size": 1013.14,
//       "url": "/uploads/marte_1369f74015.png",
//       "previewUrl": null,
//       "provider": "local",
//       "provider_metadata": null,
//       "createdAt": "2022-10-13T10:07:58.302Z",
//       "updatedAt": "2022-10-13T10:09:36.085Z"
//     }
//   }

