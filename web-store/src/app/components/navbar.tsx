import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
    return (
        <div className=" min-w-screen border-b-4 border-navy bg-pinkish flex flex-row" >
            <div className="p-2" >
                <Image src={"/logo.png"} alt="Fake Web Store Logo"
                    width={60}
                    height={60}/>
            </div>
            <div className="p-2 flex items-center" >
                <Link className="hover:underline hover:text-yellow-200 transition-colors duration-200" href="/">Home</Link>
            </div>
            <div className="p-2 flex items-center" >
                <Link className="hover:underline hover:text-yellow-200 transition-colors duration-200" href="/store">Store</Link>
            </div>
            <div className="p-2 flex items-center" >
                <Link className="hover:underline hover:text-yellow-200 transition-colors duration-200" href="/money">Money</Link>
            </div>
            <div className="p-2 flex items-center" >
                <Link className="hover:underline hover:text-yellow-200 transition-colors duration-200" href="/cart">Cart</Link>
            </div>
            <div className="p-2 flex items-center" >
                <Link className="hover:underline hover:text-yellow-200 transition-colors duration-200" href="/inventory">Inventory</Link>
            </div>
        </div>
    );
}