import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-grow items-center">
        <div className="w-1/2 flex flex-col justify-center items-start px-16">
          <h1 className="text-[48px] font-bold font-serif leading-tight text-gray-800">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[24px]w-[600px] mt-6 text-gray-600 font-serif leading-relaxed">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] h-[58px] w-[200px] mt-8 text-[18px] font-serif py-3 px-6 rounded-md text-white hover:bg-[#8b7a60] transition-colors duration-300">
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/jewellary.svg"
            alt="hero image"
            width={450}
            height={350}
            className="rounded-lg shadow-lg p-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
