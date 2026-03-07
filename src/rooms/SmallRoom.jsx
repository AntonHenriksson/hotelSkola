import smallRoomImg from '../assets/smallroom.jpg';

// small room, picture imported because of netlify not showing local image else
function SmallRoom() {
    return (
        <div>
            <h2>Small room</h2>
            <p>Vårt lilla rum är perfekt för den som söker en mysig och intim atmosfär.
                Med en säng som rymmer två personer, en liten sittgrupp och en vacker utsikt över naturen,
                erbjuder detta rum en avkopplande och romantisk upplevelse.
                Det är det idealiska valet för par eller ensamresenärer som vill njuta av en lugn och naturnära vistelse.</p>
            <img src={smallRoomImg} width={500} height={300} alt="Bild på litet rum" />
        </div>
    );
}
export default SmallRoom;