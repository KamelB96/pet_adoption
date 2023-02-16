import Button from 'react-bootstrap/Button'

function About() {
    return (
        <div className="aboutpage">
            <h1>Who We Are</h1>
            <div>
                <img src="http://www.aspca.org/sites/default/files/nyc-adoption-center-facebook.jpg" alt="dogshelterimage" height="250px"></img>
                
                <h3>We are a group of animal lovers who want to help animals find their forever home!</h3>

                <p className="aboutpara">
                    Our pet adoption website is always looking to helping pets in need find their forever homes. 
                    Every pet deserves a loving family and a new life, and our job is to make that a reality. 
                    Every member of our team is passionate animal and are committed to providing the best experience for both the adopters and pets. 
                    If you are looking to adpot or give you pet up for adoption our site is the perfect place to start.
                    We provide a detailed profile sbout each pet to help you find the right one.
                </p>
                <a href="/dogs"><Button>View All Dogs</Button></a>
                <a href="/adoption"><Button>Adopt Now</Button></a>
                </div>
        </div> 
    )
}

export default About

//Image credit: https://www.aspca.org/nyc/aspca-adoption-center-nyc