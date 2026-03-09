import SmallRoom from "../rooms/SmallRoom";
import MediumRoom from "../rooms/MediumRoom";
import BigRoom from "../rooms/BigRoom";
import Booking from "./Booking";
import { useState } from "react";
import "../styles.css";

function RoomPage() {

    // state for choice with default value for better ux
    const [roomSize, setRoomSize] = useState("small");
    // bool only for updating prior state with quick turn
    const [bookingTrigger, setBookingTrigger] = useState(false);

    // states for Booking-form
    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [userName, setUserName] = useState("");


    // taking user choice and turning it into a jsx show
    const handleRoomSize = () => {
        switch (roomSize) {
            case "small":
                return <SmallRoom />
            case "medium":
                return <MediumRoom />
            case "big":
                return <BigRoom />
            default: null
        }
    }
    // converting object to string and turning a bool to update state
    const handleChoice = () => {

        if (roomSize && arrival && departure) {
            const bookingData = {
                room: roomSize,
                from: arrival,
                to: departure,
                name: userName
            }
            const id = Date.now()
            localStorage.setItem(id, JSON.stringify(bookingData))
        }
        setBookingTrigger(!bookingTrigger)
    }
    // dont want accept to show if theres no choice made
    const showAccept = () => {
        if (roomSize) {
            return (
                <button className="btn" style={{ maxWidth: " 100px" }} onClick={handleChoice}>Boka</button >
            )
        }
    }

    return (

        < div >

            <article>
                {/* here the user choice is handled and respectivly jsx is choosen */}
                {handleRoomSize()}

                {/* showing the booking form */}
                <Booking
                    arrival={arrival}
                    setArrival={setArrival}
                    departure={departure}
                    setDeparture={setDeparture}
                    userName={userName}
                    setUserName={setUserName}
                />
            </article>

            {/* accept showing if choice is made otherwise hidden */}
            <article className="container">
                <span className="ul-nav">

                    {showAccept()}
                    <span className="">

                    </span>
                </span>
            </article>

            {/* giving the user choices, each choice comes with a description*/}
            <nav className="container">
                <ul className="ul-nav">
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("small")}> Singel </button></li>
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("medium")}> Dubbel </button></li>
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("big")}> Deluxe </button></li>
                </ul>
            </nav>

        </div >
    )
}
export default RoomPage;
