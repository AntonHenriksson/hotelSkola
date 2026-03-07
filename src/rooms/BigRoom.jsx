import bigRoomImg from '../assets/bigroom.jpg';

// big room, picture imported because of netlify not showing local image else
function BigRoom() {
    return (
        <div>
            <h2>Stort rum</h2>
            <p>Vårt stora rum erbjuder en rymlig och bekväm miljö för avkoppling och njutning.
                Med plats för hela familjen eller vännerna,
                är det det perfekta valet för en minnesvärd vistelse.</p>
            <img src={bigRoomImg} width={500} height={300} alt="Stort rum" />
        </div>
    );
}
export default BigRoom;