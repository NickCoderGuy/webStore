import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cream text-white w-full min-h-screen justify-center items-center">
      <NavBar/>
      <div className="items-center flex flex-col flex-wrap justify-between gap-2 mt-6">
        <div className="relative flex-1 w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 aspect-[3/1]">
          <Image className="border-4 border-navy" src={"/webStoreBanner.png"}
           alt={"Web Store Banner"} fill={true} />
        </div>
        <div className="flex-1 w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-navy border-4 border-yellow-300 p-4 shadow-lg">
        <h5 className="text-yellow-300 font-bold text-center text-xl mb-2">
          Welcome to Fake Web Store!
        </h5>
        <p className="text-pink-200 font-mono text-center">
          Step right up, internet traveler!  
          This is the ultimate destination for all your totally real and completely necessary fake products.  
          Click around, have fun, and don’t forget to check out our other sites!
        </p>
      </div>
      </div>
    </div>
  );
}
