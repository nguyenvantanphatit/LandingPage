import { Routes, Route, BrowserRouter } from "react-router-dom";
import Room from "../Pages/Room";
import RoomDetail from "../Pages/Room/RoomDetail";
import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Service from "@src/Pages/Service";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" Component={RoomDetail} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
