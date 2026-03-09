import { useState, useEffect } from "react";
function BookingPage() {

    // state getting all bookings
    const [allBookings, setAllBookings] = useState([]);

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
    // if booking is not null user is shown choice to cancel
    const showCancel = () => {
        return booking ? (
            <button onClick={handleCancel}>Avboka</button>
        ) : null
    }
    return (
        <section>

            {/* if theres  bookings we show the bookings else we tell
                     the user theres no booked room*/}
            <article>
                {allBookings.length > 0 ? (
                    allBookings.map((b) => (
                        <article key={b.storageKey}>
                            <p>{b.room} - {b.name}</p>
                            <p>{b.from}</p>
                            <p>{b.to}</p>
                            <button className="btn" onClick={() => { handleCancel(b.storageKey) }}>
                                Avboka</button>
                        </article>
                    ))
                )
                    : <p>Inga bokningar hittades</p>
                }
            </article>


        </section>
    )
}
export default BookingPage;