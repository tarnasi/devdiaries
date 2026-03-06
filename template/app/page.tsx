import { MainHeader } from "@/components/includes/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-blue-100 p-5 min-h-screen gap-8">
      <MainHeader />

      {/* Top Main Page Section */}
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

          <div className="font-caveat bg-white text-black text-3xl space-y-5 w-1/2 p-6 pt-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam labore tempore magni. Eius, ducimus laboriosam!
          </div>

        </div>
      </div>

      {/* MainPage Technologies */}
      {/* <div className="h-96 rounded-4xl border shadow-lg overflow-hidden">
        <div className="grid grid-cols-3 h-full bg-white p-4 text-black">
          <div className="bg-blue-200">Lorem.</div>
        </div>
      </div> */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Technologies I Use
            </h2>
            <p className="mt-3 text-gray-500">
              Tools and technologies I work with daily
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/react.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">React</span>
            </div>

            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/nextjs.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">Next.js</span>
            </div>

            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/typescript.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">TypeScript</span>
            </div>

            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/nodejs.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">Node.js</span>
            </div>

            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/docker.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">Docker</span>
            </div>

            <div className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <img src="/icons/aws.svg" className="h-10 mb-3 group-hover:scale-110 transition" />
              <span className="text-sm font-medium text-gray-600">AWS</span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
