import Link from "next/link";

export default function NavBar(){
    return (
        <div className=" min-w-screen bg-[#ff3b3f] flex flex-row" >
            <div className="p-2 hover:bg-[#8b0000] focus:outline-none focus:ring-2" >
            <Link  href="/">Home</Link>
            </div>
            <div className="p-2 hover:bg-[#8b0000] focus:outline-none focus:ring-2" >
            <Link  href="/store">Store</Link>
            </div>
            <div className="p-2 hover:bg-[#8b0000] focus:outline-none focus:ring-2" >
            <Link href="/money">Money</Link>
            </div>
            <div className="p-2 hover:bg-[#8b0000] focus:outline-none focus:ring-2" >
            <Link href="/cart">Cart</Link>
            </div>
            <div className="p-2 hover:bg-[#8b0000] focus:outline-none focus:ring-2" >
            <Link href="/inventory">Inventory</Link>
            </div>
        </div>
    );
}