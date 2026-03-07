import { useState } from "react";
function BookingPage() {

    const [booking, setBooking] = useState(localStorage.getItem("booked-room"))

    const handleCancel = () => {
        localStorage.removeItem("booked-room")
        setBooking(null)
    }
    const showCancel = () => {
        return booking ? (
            <button onClick={handleCancel}>Avboka</button>
        ) : null
    }
    return (
        <section>
            <article>
                {booking ? localStorage.getItem("booked-room") : "You have no booked rooms"}
            </article>
            {showCancel()}
        </section>
    )
}
export default BookingPage;