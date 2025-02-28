import Link from 'next/link'
import Image from 'next/image'

import HomePageImage from '@/public/images/home/main1.jpg'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-evenly">
      {/* Image Section (Hidden on Mobile) */}
      <div className="bg-amber-700 w-full min-h-screen hidden md:block">
        <Image
          src={HomePageImage}
          width={0}
          height={0}
          className='w-full min-h-screen object-cover'
          alt='Main Picture of Home Page' />
      </div>

      {/* Links Section (Always Visible) */}
      <div className="bg-amber-900 w-full min-h-screen">
        <ul className="flex flex-col space-y-10 w-full min-h-screen items-center justify-center text-white px-24">
          <li className="p-2 border-b-2 w-full text-center">
            <Link href={'/blockchain'} className='text-3xl'>My Resume</Link>
          </li>
          <li className="p-2 border-b-2 w-full text-center">
            <Link href={'/projects'} className='text-3xl'>Projects</Link>
          </li>
          <li className="p-2 border-b-2 w-full text-center">
            <Link href={'/crypto'} className='text-3xl'>Crypto and Market</Link>
          </li>
          <li className="p-2 border-b-2 w-full text-center">
            <Link href={'/blockchain'} className='text-3xl'>Blockchain and Smart Contract</Link>
          </li>
          <li className="p-2 border-b-2 w-full text-center">
            <Link href={'/contact'} className='text-3xl'>Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
