/* eslint-disable @next/next/no-img-element */
'use client';

import { fetchProducts } from "@/lib/api";
import NavBar from "../components/navbar";
import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import ProductContainer from "../components/productContainer";

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
        <div className="bg-[#a9a9a9]">
            <NavBar/>
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