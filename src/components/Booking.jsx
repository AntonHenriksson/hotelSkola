import { useState } from "react";

function Booking({ arrival, setArrival, departure, setDeparture, userName, setUserName }) {



    return (
        <div className="container"  >
            <fieldset style={{ border: "solid", borderColor: "grey" }} >
                <legend style={{ textAlign: "center" }}>Boknings detaljer</legend>
                <input type="text" placeholder="Ditt förnamn här"

                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <label>Ankomst </label>
                <input
                    type="date"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                />
                <label>Avfärd </label>
                <input
                    type="date"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                />

            </fieldset>
        </div >
    )
}

export default Booking;