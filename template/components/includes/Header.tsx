'use client';
import Image from 'next/image'


export function MainHeader() {
  return (
    <header className="flex items-center justify-between w-full h-20 px-10 bg-white text-black rounded-full border shadow-lg">
      <div className="flex items-center space-x-4">
        <Image src="/next.svg" alt="Logo" width={120} height={120} />
      </div>
      <nav>
        <ul className="flex space-x-4 font-caveat">
          <li><a href="#" className="hover:underline text-lg font-bold">Home</a></li>
          <li><a href="#" className="hover:underline text-lg font-bold">Projects</a></li>
          <li><a href="#" className="hover:underline text-lg font-bold">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

