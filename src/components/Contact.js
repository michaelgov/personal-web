import './styles/contact.css';
import Typewriter from "typewriter-effect";

function Contact() {
    return (
    <>
        <body>
            <div id="email">
                <Typewriter 
                        onInit={(Typewriter) => {
                            Typewriter.typeString("michcgov@gmail.com")
                            .start()
                        }}     
                />
            </div>
        </body>
    </>
    );
}

export default Contact;