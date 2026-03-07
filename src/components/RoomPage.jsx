import SmallRoom from "../rooms/SmallRoom";
import MediumRoom from "../rooms/MediumRoom";
import BigRoom from "../rooms/BigRoom";
import { useState } from "react";

function RoomPage() {

    const [roomSize, setRoomSize] = useState("");
    const [bookingTrigger, setBookingTrigger] = useState(false);


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

    const handleChoice = () => {
        if (roomSize) {
            localStorage.setItem("booked-room", JSON.stringify(roomSize))
        }
        setBookingTrigger(!bookingTrigger)
    }

    const showAcceptDecline = () => {
        if (roomSize && localStorage.getItem("booked-room") !== JSON.stringify(roomSize)) {
            return (
                <>
                    <button onClick={handleChoice}>Boka</button>
                    <button onClick={() => setRoomSize("")}>Avbryt</button>
                </>
            )
        }
    }

    return (
        <div>
            <nav>
                <ul className="ul-nav">
                    <li className="li-room">
                        <button onClick={() => setRoomSize("small")}> small </button></li>
                    <li className="li-room">
                        <button onClick={() => setRoomSize("medium")}> mid </button></li>
                    <li className="li-room">
                        <button onClick={() => setRoomSize("big")}> big </button></li>
                </ul>
            </nav>
            <article>
                {handleRoomSize()}
            </article>
            <article>
                {showAcceptDecline()}
            </article>
        </div >
    )
}
export default RoomPage;
