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

    


        {/* <div className="grid grid-cols-6 gap-6 p-16 bg-[#000000] min-h-screen">
            <div className="col-span-3 row-span-2 bg-white/30  rounded-3xl p-6 shadow-xl backdrop:blur-lg border-white/20">1</div>
            <div className="col-span-3 row-span-1 bg-white/30 rounded-3xl p-6 shadow-xl border-white/20 backdrop:blur-lg">2</div>
            <div className="col-span-3 row-span-4 bg-white/30 rounded-3xl p-6 border-white/20 shadow-xl backdrop:blur-lg">3</div>
            <div className="col-span-3 row-span-3 bg-white/30 border-white/20 rounded-3xl p-6 shadow-xl backdrop:blur-lg">4</div>
        </div>  */}
    </div>
  )
}