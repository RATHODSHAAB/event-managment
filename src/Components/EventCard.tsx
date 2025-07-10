import { Button } from "./Button";
import { EventSubHeading } from "./EventSubHeading";
import { Heading } from "./Heading";

type CardDetails = {
    event: string;
    description: string;
    date: any;
    venue: string;
}

export function EventCard({ event, description, date, venue}:CardDetails[]) {

    return (
       <>
        <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
          backdrop:blur-3xl rounded-xl">
            <Heading label={event} ></Heading>
            <EventSubHeading label={description} ></EventSubHeading>
            <EventSubHeading label={venue} ></EventSubHeading>
            <EventSubHeading label={date} ></EventSubHeading>
            <Button label={"More Info"} ></Button>
          </div>
       </>
        
    )
}