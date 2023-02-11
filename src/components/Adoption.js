import React from "react"
import submitForm from "./submitButton"

function Adoption({dogs}) {
    return ( 
        <div className="form">
            <h1>Adoption Form</h1>
        <form>
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="text" id="name" name="name" required></input>
        <br></br>
        <hr></hr>

        <label htmlFor="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed" required></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="age">Age:</label><br></br>
        <input type="number" id="age" name="age" required></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="image">Image URL:</label><br></br>
        <input type="text" id="image" name="image" required></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="email">Email:</label><br></br>
        <input type="email" id="email" name="email"required></input>
        <br></br>
        <hr></hr>
        
        <input type="submit" onSubmit={ submitForm }></input>
    </form>
    
    </div>
    
    )
    
}

export default Adoption