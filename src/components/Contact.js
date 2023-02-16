import momo from '../momo.JPG'

function Contact() {
    return (
        <div>
            <div className="contactpage">
            <h1>Contact Us</h1>
            <h3>We are located at:</h3>
                <p>123-45 Sunshine Road</p>
                <p>Metuchen, NJ, 0000</p>
            <a href="mailto:youremail@example.com">Email us</a>
            <br></br>
            <a href="tel:+1-555-555-5555">Call us</a>
            <br></br>
            <hr></hr>
            <p>
            <img src={momo} alt='momo' width='200'></img>
            </p>
            
            </div>
        </div>
         
    )
}

export default Contact