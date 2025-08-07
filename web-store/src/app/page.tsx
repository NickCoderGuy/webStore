import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cream text-white w-full min-h-screen justify-center items-center">
      <NavBar/>
      <div className="items-center flex flex-col flex-wrap justify-between gap-2 mt-6">
        <div className="relative flex-1 w-1/3 aspect-[3/1]">
          <Image className="border-4 border-navy" src={"/webStoreBanner.png"}
           alt={"Web Store Banner"} fill={true} />
        </div>
        <div className=" relative flex-1 w-1/3 aspect-[3/1]">
          <Image className="border-4 border-navy" src={"/shopBanner.png"}
           alt={"Shop Banner"} fill={true} />
        </div>
      </div>
    </div>
  );
}
