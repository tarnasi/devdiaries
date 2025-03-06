import Image from "next/image";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 justify-center items-center">
      <div className="flex-none h-[400px] bg-amber-200 w-full">
        <div className="relative w-full h-full">
          <Image
            src="https://picsum.photos/2000/400"
            alt="Contact Me"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-grow flex-wrap w-full p-10">
        <div className="flex flex-wrap md:flex-nowrap">
          <form action="#" className="w-full p-3 shadow bg-white order-2 md:order-1">
            <h2 className="text-4xl text-gray-400 underline underline-offset-2">
              Coming SOON
            </h2>
            <hr className="my-4 text-gray-300" />
            <div className="flex flex-col my-2">
              <label htmlFor="">FirstName</label>
              <input
                type="text"
                placeholder="enter your name"
                className="border p-3 mt-2 bg-white"
              />
            </div>

            <div className="flex flex-col my-2">
              <label htmlFor="">LastName</label>
              <input
                type="text"
                placeholder="enter your last name"
                className="border p-3 mt-2 bg-white"
              />
            </div>

            <div className="flex flex-col my-2">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="enter your email"
                className="border p-3 mt-2 bg-white"
              />
            </div>

            <div className="flex flex-col my-2">
              <label htmlFor="">Description</label>
              <textarea
                placeholder="your idea"
                className="border p-3 mt-2 bg-white h-44"
              />
            </div>

            <div className="flex flex-col my-2 w-1/2">
              <button
                type="submit"
                className="text-lg underline underline-offset-4 border p-3 mt-2 bg-sky-300 transition delay-75 ease-in-out hover:cursor-pointer hover:bg-sky-400 hover:text-white hover:border-black hover:underline-offset-8"
              >
                Send
              </button>
            </div>
          </form>

          <div className="w-full mb-2 order-1  md:order-2 md:ml-2">
            <p className="bg-white p-3 shadow">
              <IoPersonSharp className="text-3xl inline-block" /> Shahriyar
              Tarnasi
            </p>
            <div className="flex mt-2 bg-white p-3 shadow">
              <p className="flex items-center w-full">Social</p>
              <Link
                className="text-sky-500 mx-2"
                href="https://www.linkedin.com/in/tarnasi/"
              >
                <BsLinkedin className="text-4xl text-sky-600" />
              </Link>
              <Link
                className="text-sky-500 mx-2"
                href="mailto:shahryar.tarnasi@gmail.com"
              >
                <MdEmail className="text-4xl text-white p-1 bg-sky-600" />
              </Link>
              <Link
                className="text-sky-500 mx-2"
                href="https://t.me/ShahriyarTarnasi"
              >
                <BiLogoTelegram className="text-4xl text-white bg-sky-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
