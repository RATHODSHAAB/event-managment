import { EventCard } from "../Components/EventCard"

export const Dashboard = () => {
  return (
    <div className="bg-[#000000] ">
        <div className="flex justify-center items-center">
             <nav className="flex justify-center items-center rounded-full font-bold gap-8 border-[3px] border-[#03c447]
          backdrop:blur-3xl text-neutral-500 mt-6 p-4 px-6">
            <a href=""  className=" hover:text-white"> Logo </a>
            <a href="" className=" hover:text-white">Events</a>
            <a href="" className=" hover:text-white"> Chat</a>
            <a href="./signup" className=" hover:text-white">  Login </a>
        </nav>
        </div>
        
        {/* Data is currently hardcoded i will do call from backend */}
     <div className="min-h-screen w-[100%] bg-[#000000]  flex flex-wrap  justify-around gap-6 px-6 mt-6">
      <EventCard event={"Hackathon"} description={"Only for the AIDS section students"} 
      date={"10th of july"} venue={"seminar hall"}
      ></EventCard>
      <EventCard event={"Hackathon"} description={"Only for the AIDS section students"} 
      date={"10th of july"} venue={"seminar hall"}
      ></EventCard>
      </div>

    </div>
  )
}