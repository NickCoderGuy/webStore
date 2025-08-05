import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cream text-white w-full min-h-screen " >
      <NavBar/>
      <div className=" flex flex-wrap w-full justify-center " >
        <div>
        <Image src={"/webStoreBanner.png"} alt={"Web Store Banner"} height={80} width={200} />
        </div>
        <div>
        <Image src={"/shopBanner.png"} alt={"Shop Banner"} height={80} width={200} />
        </div>
      </div>
    </div>
  );
}
