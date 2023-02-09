import submitForm from "./submitButton"
import React from "react"

function Adoption() {
    return (
        <div className="form">
            <h1>Adoption Form</h1>
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <br></br>
        <br></br>

        <label htmlFor="breed">Breed:</label>
        <input type="text" id="breed" name="breed" required></input>
        <br></br>
        <br></br>
        
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required></input>
        <br></br>
        <br></br>
        
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image" name="image" required></input>
        <br></br>
        <br></br>
        
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"required></input>
        <br></br>
        <br></br>
        
        <input type="submit" onSubmit={ submitForm } value="Submit"></input>
    </form>
    
    </div>
    
    )
    
}

export default Adoption