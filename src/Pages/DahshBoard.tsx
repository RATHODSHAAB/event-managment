import { useEffect, useState } from "react"
import { EventCard } from "../Components/EventCard"
import { Navbar } from '../Components/Navbar'
import axios from "axios"

export const Dashboard = () => {

  const [events, setEvents] = useState([]);

  useEffect(()=>{
  
    const fetchEvent = async () => {
   try {
    const res = await axios.get("http://localhost:5000/api/v1/event/get-event");
    setEvents(res.data);
      console.log(res.data);
  }
  catch (error) {
    console.error("Error while Fetching data",error)
  }
}
  fetchEvent();
  },[])


  return (
    <div className="bg-[#000000] ">
      <Navbar></Navbar>
        
        {/* Data is currently hardcoded i will do call from backend */}
     <div className="min-h-screen w-[100%] bg-[#000000]  flex flex-wrap  justify-around gap-6 px-6 mt-6">
     {events.map((event) => (
  <EventCard  event={event} />
))}
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