import SmallRoom from "../rooms/SmallRoom";
import MediumRoom from "../rooms/MediumRoom";
import BigRoom from "../rooms/BigRoom";
import { useState } from "react";

function RoomPage() {

    // state for choice
    const [roomSize, setRoomSize] = useState("");
    // bool only for updating prior state with quick turn
    const [bookingTrigger, setBookingTrigger] = useState(false);

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
        if (roomSize) {
            localStorage.setItem("booked-room", JSON.stringify(roomSize))
        }
        setBookingTrigger(!bookingTrigger)
    }
    // dont want accept/decline to show if theres no choice made
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
    {/* giving the user choices, each choice comes with a description and picture*/ }
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

            {/* here the user choice is handled and respectivly jsx is choosen */}
            <article>
                {handleRoomSize()}
            </article>

            {/* accept or decline showing if choice is made otherwise hidden */}
            <article>
                {showAcceptDecline()}
            </article>
        </div >
    )
}
export default RoomPage;
