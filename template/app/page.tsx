import { MainHeader } from "@/components/includes/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-blue-300 p-5 min-h-screen gap-8">
      <MainHeader />

      <div className="h-96 rounded-4xl border shadow-lg overflow-hidden">
        <div className="flex h-full">
          
          <div className="relative w-1/2">
            <Image
              src="/pic3.jpeg"
              alt="nice-looking"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="bg-green-500 w-1/2 p-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam labore tempore magni. Eius, ducimus laboriosam!
          </div>

        </div>
      </div>
    </div>
  );
}
