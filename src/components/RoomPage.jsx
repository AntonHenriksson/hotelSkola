import SmallRoom from "../rooms/SmallRoom";
import MediumRoom from "../rooms/MediumRoom";
import BigRoom from "../rooms/BigRoom";
import Booking from "./Booking";
import { useState } from "react";
import "../styles.css";

function RoomPage() {

    // state for choice with default value for better ux
    const [roomSize, setRoomSize] = useState("Singel-rum");
    // bool for showing booking form, only shows if user has made a choice
    const [showBookingForm, setShowBookingForm] = useState(false);
    // state for showing UX messag with booking
    const [showBookMessage, setShowBookMessage] = useState("");
    const [showBookErrorMessage, setShowBookErrorMessage] = useState("");

    // states for Booking-form
    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [userName, setUserName] = useState("");


    // taking user choice and turning it into a jsx show
    const handleRoomSize = () => {
        switch (roomSize) {
            case "Singel-rum":
                return <SmallRoom />
            case "Dubbel-rum":
                return <MediumRoom />
            case "Deluxe-rum":
                return <BigRoom />
            default: null
        }
    }
    // if any of the messages isnt false it should be shown, else hidden
    const handleBookMessage = () => {
        let message = ""
        showBookErrorMessage ? message = showBookErrorMessage : message = showBookMessage
        return (showBookErrorMessage || showBookMessage ?
            <div className="header" style={{ textAlign: "center" }}>
                {message}
            </div>
            : null
        )
    }

    // converting object to string and turning a bool to update state
    const handleChoice = () => {
        setShowBookErrorMessage("")
        setShowBookMessage("")
        if (!roomSize || !arrival || !departure) {
            setShowBookErrorMessage("Vänligen fyll i alla fälten!")
            return
        }

        const bookingData = {
            room: roomSize,
            from: arrival,
            to: departure,
            name: userName
        }
        const id = Date.now()
        try {
            localStorage.setItem(id, JSON.stringify(bookingData))
            setShowBookingForm(false)
            setShowBookMessage("Din bokning sparades!")
            return
        }
        catch (e) {
            alert("Tekniskt fel, vänligen försök igen")
            return
        }
    }

    // showing the booking form if user has made a choice
    const showBooking = () => {
        if (showBookingForm) {
            return (
                <Booking
                    arrival={arrival}
                    setArrival={setArrival}
                    departure={departure}
                    setDeparture={setDeparture}
                    userName={userName}
                    setUserName={setUserName}
                />
            )
        }
    }
    // showing book button if user has made a choice otherwise hidden
    const showAccept = () => {
        if (showBookingForm) {
            return (
                <>
                    <button className="btn" style={{ maxWidth: " 100px" }} onClick={() => setShowBookingForm(false)}>Avbryt</button >
                    <button className="btn" style={{ maxWidth: " 100px" }} onClick={handleChoice}>Boka</button >

                </>
            )
        }
    }
    // showing button to form for booking, hidden if pressed
    const handleShowBooking = () => {
        if (!showBookingForm)
            return (
                <button className="btn" style={{ maxWidth: " 100px" }} onClick={() => setShowBookingForm(true)}>Välj Datum</button>
            )

    }

    return (

        < div >

            <article>
                {/* here the user choice is handled and respective jsx is choosen */}
                {handleRoomSize()}

                {/* placement of the booking form is here */}
                {showBooking()}
            </article>

            {/* accept showing if choice is made otherwise hidden */}
            <article className="container">
                {handleBookMessage()}
                <span className="ul-nav">
                    {/* placement of buttons, for showing booking form and accept/decline for the same */}
                    {/* these will only be shown if respective state is fulfilled */}
                    {handleShowBooking()}
                    {showAccept()}

                </span>
            </article>

            {/* giving the user choices, each choice comes with a description*/}
            {/* UX these will never be hidden to give the user the feel of control UX */}
            <nav className="container">
                <ul className="ul-nav">
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("Singel-rum")}> Singel </button></li>
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("Dubbel-rum")}> Dubbel </button></li>
                    <li className="li-room">
                        <button className="btn" onClick={() => setRoomSize("Deluxe-rum")}> Deluxe </button></li>
                </ul>
            </nav>

        </div >
    )
}
export default RoomPage;
