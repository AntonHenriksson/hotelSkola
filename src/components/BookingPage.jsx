import { useState } from "react";
function BookingPage() {

    // state only for checking if theres a booking later
    const [booking, setBooking] = useState(localStorage.getItem("booked-room"))

    //remove the booking if cancelling
    const handleCancel = () => {
        localStorage.removeItem("booked-room")
        setBooking(null)
    }
    // if booking is not null user is shown choice to cancel
    const showCancel = () => {
        return booking ? (
            <button onClick={handleCancel}>Avboka</button>
        ) : null
    }
    return (
        <section>
            {/* if theres a booking we show cancel else we tell the user theres no booked room*/}
            <article>
                {booking ? localStorage.getItem("booked-room") : "Du har inga bokade rum"}
            </article>
            {/* here the user is shown the cancel button for the booking if there is one */}
            {showCancel()}
        </section>
    )
}
export default BookingPage;