/* eslint-disable @next/next/no-img-element */
import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductContainer({ product }: Props){
    return (
        <div className="bg-grayish flex-1 border-4 border-navy p-4 gap-4 w-1/3 min-w-1/4 max-w-1/2 "> 
            <div className="flex flex-col justify-between h-full p-2">
                <img
                src={product.image}
                alt={product.title}
                className="w-full h-1/2 object-contain"
                />
           
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-black line-clamp-2">{product.title}</h2>
                    <p className="text-sm text-black italic">{product.category}</p>
                    <p className="text-base font-bold text-green-600">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-black line-clamp-3">{product.description}</p>
                </div>

                <div className="justify-around flex w-full flex-wrap " >
                    <button className=" w-[40%] mt-4 bg-white border-2 border-navy hover:bg-pinkish text-black text-sm py-2 px-4 shadow-sm transition duration-200">
                        Add to Cart
                    </button>
                    <button className=" w-[40%] mt-4 bg-white border-2 border-navy hover:bg-pinkish text-black text-sm py-2 px-4 shadow-sm transition duration-200">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}