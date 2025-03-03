export default function Contact() {
    return (
        <div className="grid grid-flow grid-rows-10 min-h-screen">
            <header className="bg-teal-600 row-span-1">
                <div className="flex items-center h-full px-10 space-x-10">
                    <div id="logo" className="text-white align-middle">LOGO</div>
                    <div id="main-links w-full">
                        <ul className="flex text-center">
                            <li className="w-16 text-white hover:text-amber-300 hover:cursor-pointer transition delay-150 duration-150 ease-in-out">Home</li>
                            <li className="w-16 text-white hover:text-amber-300 hover:cursor-pointer transition delay-150 duration-150 ease-in-out">Contact</li>
                            <li className="w-16 text-white hover:text-amber-300 hover:cursor-pointer transition delay-150 duration-150 ease-in-out">About</li>
                            <li className="w-16 text-white hover:text-amber-300 hover:cursor-pointer transition delay-150 duration-150 ease-in-out">Resume</li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="bg-green-600 row-span-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem.</main>
        </div>
    )
}