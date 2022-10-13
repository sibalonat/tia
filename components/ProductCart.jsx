/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function ProductCart({ product }) {
    return (
        <div className="border w-80 shadow hover:shadow-xl">
            <Link href={`/products/${product.id}`}>
                <a>
                    {/* <img src={product.pictureUrl} alt="" /> */}
                    <Image src={product.pictureUrl} width={320} height={240} alt="" />
                    <div className="p-2 flex justify-between items-baseline">
                        <h2 className="text-lg font-bold">
                            {product.title}
                        </h2>
                        <span>{product.price}</span>
                    </div>
                </a>
            </Link>
        </div>
    );
}