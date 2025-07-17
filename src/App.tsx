import { Route, Routes } from "react-router-dom";

import "./App.css";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/DahshBoard";
import { EventForm } from "./Pages/EventForm";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-event" element={<EventForm />} />
      </Routes>
    </>
  );
}

export default App;