import React from "react";
import axios from 'axios';

function Adoption() {
    const submitForm = (e) => {
        const options = {
            name : document.getElementById('name').value,
            email : document.getElementById('email').value,
            breed : document.getElementById('breed').value,
            image_url : document.getElementById('image').value,
            age : document.getElementById('age').value,
        }
        console.log(options, 'line 13');
          axios.post('http://localhost:3002/dogs', {
            name : document.getElementById('name').value,
            email : document.getElementById('email').value,
            breed : document.getElementById('breed').value,
            image_url : document.getElementById('image').value,
            age : document.getElementById('age').value,
        })
            .then(res => console.log(res, 'line 47'))
            .catch(err => console.log(err));
      };
    return ( 
        <div className="form">
            <h1>Adoption Request Form</h1>
            <h2>Please provide pet information below to request for adoption</h2>
            <br></br>
        <form onSubmit={ submitForm }>
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
        
        <input type="submit"></input>
    </form>
    
    </div>
    
    )
    
}

export default Adoption