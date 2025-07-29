import { useState } from "react"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InpuBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser , faCalendarDay , faCircleExclamation , faLocationArrow , faFileImage} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";






export const EventForm = () => {
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [venue , setVenue] = useState("");
    const [date , setDate] = useState("");
    const [imageUrl , setImageUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        try {
            // Get the admin token from localStorage
            const token = localStorage.getItem("token");
            
            if (!token) {
                setError("Authentication required. Please login as admin.");
                setLoading(false);
                return;
            }

            const response = await axios.post("http://localhost:5000/api/v1/event/create-event", {
                title,
                description,
                venue,
                date,
                imageUrl
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            console.log("Event created successfully:", response.data);
            navigate("/");
        } catch (error: any) {
            console.error("Error creating event:", error);
        }

         finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-[#000000] h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className=" bg-[#000000] w-80 text-center text-white p-2 h-max px-4 border-[3px] border-[#03c447]
                backdrop:blur-3xl rounded-4xl">
                    <Heading label={"Event Creation"} />
                    <InputBox 
                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
                    setTitle(e.target.value)
                     }}
                    icon={<FontAwesomeIcon icon={faUser} />}
                    label={"Title"} placeholder={"Enter the event name"} type="text" ></InputBox>


                    <InputBox 
                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
                    setDescription(e.target.value)
                     }}
                    icon={<FontAwesomeIcon icon={faCircleExclamation} />}
                    label={"Description"} placeholder={"Enter the description name"} type="text" ></InputBox>

                    <InputBox 
                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
                    setVenue(e.target.value)
                     }}
                     icon={<FontAwesomeIcon icon={faLocationArrow} />}
                    label={"Venue"} placeholder={"Enter the venue"} type="text" ></InputBox>

                    <InputBox
                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
                    setDate(e.target.value)
                     }}
                     icon={<FontAwesomeIcon icon={faCalendarDay} />}
                     label={"Select the date"} placeholder={"Enter the date"} type="date" > </InputBox>

                    <InputBox 
                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=> {
                    setImageUrl(e.target.value)
                     }}
                    icon={<FontAwesomeIcon icon={faFileImage} />}
                    label={"Image"} placeholder={"Choose the image"} type="file" ></InputBox>


                    <Button  label={loading ? "Creating..." : "Submit"} 
                        onClick={handleSubmit}
             ></Button>
                </div>
            </div>
        </div>
    )
}