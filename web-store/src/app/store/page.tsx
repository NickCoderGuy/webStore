'use client';

import { fetchProducts } from "@/lib/api";
import NavBar from "../components/navbar";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import ProductContainer from "../components/productContainer";
import Image from "next/image";

export default function Store() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function load() {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        }
        load();
    },[setProducts])

    return (
        <div className="bg-cream flex flex-col items-center justify-center w-full">
            <NavBar/>
            <div className="mt-10 relative w-[95%] sm:w-2/3 md:w-1/2 lg:w-1/3 aspect-[3/1]">
                <Image className="border-4 border-navy" src={"/shopBanner.png"}
                    alt={"Shop Banner"} fill={true} />
            </div>
            <div className="w-full flex justify-center">
                <div className="mt-10 mb-10 flex flex-wrap gap-4 max-w-6xl w-full px-4">
                    {products.map((product: Product) => (
                    <ProductContainer product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}