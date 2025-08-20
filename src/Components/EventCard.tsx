import { Button } from "./Button";
import { EventSubHeading } from "./EventSubHeading";
import { Heading } from "./Heading";



export function EventCard({ event }) {

   const formatDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
       <>
        <div className="w-80 bg-black/60 backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                transition-all duration-300 text-white p-6 space-y-3">

  <Heading label={event.title}  />

  <EventSubHeading label={event.description}  />
  
  <EventSubHeading label={event.venue}  />
  
  <EventSubHeading label={formatDate(event.date)}  />

  <Button label={"More Info"}  />

  

</div>

       </>
        
    )
}