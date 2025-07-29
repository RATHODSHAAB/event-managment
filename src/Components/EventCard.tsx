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
        <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-xl">
            <Heading label={event.title} ></Heading>
            <EventSubHeading label={event.description} ></EventSubHeading>
            <EventSubHeading label={event.venue} ></EventSubHeading>
            <EventSubHeading label={formatDate(event.date)} ></EventSubHeading>
            <Button label={"More Info"} ></Button>
          </div>
       </>
        
    )
}