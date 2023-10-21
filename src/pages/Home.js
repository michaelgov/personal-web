import photo from "../images/pfplinkedin.png"
import './styles/home.css';

function Home() {
    return (
    <>
        <body>
            <h1>Hello! Welcome to my website! It's WIP atm!</h1>
            <img src={photo} className="portrait" alt="pic"/>
            <p> I'll have more information posted soon! :D</p>
        </body>
    </>
    );
}

export default Home;