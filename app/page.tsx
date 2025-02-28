import Link from 'next/link'
import Image from 'next/image'

import HomePageImage from '@/public/images/home/main1.jpg'

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-evenly">
      <div className="bg-amber-700 w-full min-h-screen">
        <Image
          src={HomePageImage}
          width={0}
          height={0}
          className='w-full min-h-screen object-cover'
          alt='Main Picture of Home Page' />
      </div>
      <div className="bg-amber-900 w-full min-h-screen">
        <ul className="flex flex-col space-y-10 w-full min-h-screen items-center justify-center text-white">
          <li className="p-2">
            <Link href={'/blockchain'} className='text-3xl underline'>My Resume</Link>
          </li>
          <li className="p-2">
            <Link href={'/projects'} className='text-3xl underline'>Projects</Link>
          </li>
          <li className="p-2">
            <Link href={'/crypto'} className='text-3xl underline'>Crypto and Market</Link>
          </li>
          <li className="p-2">
            <Link href={'/blockchain'} className='text-3xl underline'>Blockchain and Smart Contract</Link>
          </li>
          <li className="p-2">
            <Link href={'/contact'} className='text-3xl underline'>Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
