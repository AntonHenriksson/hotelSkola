import { useState, useEffect } from "react";
function BookingPage() {

    // state getting all bookings
    const [allBookings, setAllBookings] = useState([]);

    // using effect to collect all data once when page load
    useEffect(() => {
        const bookings = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const item = JSON.parse(localStorage.getItem(key))
            bookings.push({ ...item, storageKey: key })
        }
        setAllBookings(bookings)
    }, [])

    //remove the booking if cancelling
    const handleCancel = (key) => {
        localStorage.removeItem(key)
        setAllBookings(allBookings.filter(b => b.storageKey !== key));
    }

    return (
        <section>

            {/* if theres  bookings we show the bookings else we tell
                     the user theres no booked room*/}
            <article>
                {allBookings.length > 0 ? (
                    allBookings.map((b) => (
                        <article className="room-container" key={b.storageKey}>

                            <li className="li-spec-room">{b.room} - {b.name}</li>
                            <li className="li-spec-room">{"Från  --"}{b.from}</li>
                            <li className="li-spec-room">{"Till  --"}{b.to}</li>
                            <li className="li-spec-room">
                                <button className="btn" onClick={() => { handleCancel(b.storageKey) }}>
                                    Avboka
                                </button>
                            </li>

                        </article>
                    ))
                )
                    : <article className="container"> <p>Inga bokningar hittades</p></article>
                }
            </article>


        </section >
    )
}
export default BookingPage;