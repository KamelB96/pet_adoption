import dog1 from '../dog1.JPG'
import Button from 'react-bootstrap/Button'

function Home() {
    return (
        <div className="homepage">
        
            <h1>Welcome to Our Pet Adoption Site</h1>
            <h2>We are thrilled to have you here!</h2>
            <h3>We hope you can find the perfect dog to join your family :)</h3>
            <br></br>
            <p>
                Our website features a wide range of adoptable puppies and mature dogs.
                Every dog is special and is looking for a loving home where they can be cherished and cared for.
                It is our goal to making the adoption process smooth and stress-free for you and your new  dog.
            </p>
            <p>
                We are ready to answer your questions and help you navigate the adoption process.
            </p>
            <p>
            On our site you can also <u>post</u>, <u>remove</u>, <u>update</u>, <u>delete</u> your dog.
            </p>
            <br></br>
            <a href="/dogs"><Button>View All Dogs</Button></a>
                <a href="/adoption"><Button>Adopt Now</Button></a>
            <br></br>
            <hr></hr>
            <p>Thank you for choosing to adopt a pet, and we can't wait to help you find your new best friend!</p>
            <br></br>
            <img src={dog1} alt="dog" width = '300'></img>
            <br></br>
        </div>
    )
}

export default Home