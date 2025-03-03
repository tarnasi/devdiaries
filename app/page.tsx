import Link from 'next/link'
import Image from 'next/image'

import HomePageImage from '@/public/images/home/main1.jpg'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Image Section (Hidden on Mobile) */}
      <div className="hidden md:block relative h-full w-full">
        <Image
          src={HomePageImage}
          alt="Main Picture of Home Page"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Links Section */}
      <div className="bg-amber-900 flex flex-col justify-center items-center h-full text-white">
        <ul className="space-y-10 w-3/4 text-center">
          <li className="p-2 border-b-2">
            <Link href="/blockchain" className="text-3xl">My Resume</Link>
          </li>
          <li className="p-2 border-b-2">
            <Link href="/projects" className="text-3xl">Projects</Link>
          </li>
          <li className="p-2 border-b-2">
            <Link href="/crypto" className="text-3xl">Crypto and Market</Link>
          </li>
          <li className="p-2 border-b-2">
            <Link href="/blockchain" className="text-3xl">Blockchain and Smart Contract</Link>
          </li>
          <li className="p-2 border-b-2">
            <Link href="/contact" className="text-3xl">Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
