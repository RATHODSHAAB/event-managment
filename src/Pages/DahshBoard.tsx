import { EventCard } from "../Components/EventCard"
import { Navbar } from '../Components/Navbar'

export const Dashboard = () => {
  return (
    <div className="bg-[#000000] ">
      <Navbar></Navbar>
        
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