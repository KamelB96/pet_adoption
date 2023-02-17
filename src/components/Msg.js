import Button from 'react-bootstrap/Button'

export default function Msg(){
    return(
        <div className="form">
            <h1>Adoption Request Form</h1>
            <h2 id='success'>Success!</h2>
                <h3>You have successfully listed your dog for adoption </h3>
                <p>Your dog will not show up in our View All Dogs page</p>
                <br></br>
                <a href="/dogs"><Button>View All Dogs</Button></a>

            <br></br>
    
    
    </div>
    )
}