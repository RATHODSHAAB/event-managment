export function Navbar() {
    return     <div className="flex justify-center items-center">
             <nav className="flex justify-center items-center rounded-full font-bold gap-8 border-[3px] border-[#03c447]
          backdrop:blur-3xl text-neutral-500 mt-6 p-4 px-6">
            <a href=""  className=" hover:text-white"> Logo </a>
            <a href="./create-event" className=" hover:text-white">Events</a>
            <a href="" className=" hover:text-white"> Chat</a>
            <a href="./signup" className=" hover:text-white">  Login </a>
        </nav>
        </div>
}