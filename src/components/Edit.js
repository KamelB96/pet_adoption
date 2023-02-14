import React, { useState } from 'react';
import axios from "axios";

function Edit (){
  let id = window.location.href.split('/')
  id = id[id.length -1]
  console.log(id)

  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);
  const [ dogName, setDogName ] = useState('');
  const [ dogBreed, setDogBreed ] = useState('');
  const [ dogAge, setDogAge ] = useState(0);
  const [ dogImage, setDogImage ] = useState('');
  const [ dogEmail, setDogEmail ] = useState('');
  

  const handleEdit = (dog) => {
    setEditingDog(dog);
  };

  const handleUpdate = async () => {
    const updated = {
      dogName,
      dogBreed,
      dogAge,
      dogImage,
      dogEmail,
    }
    
    try {
      const response = await axios.put(`/api/dogs/${updated.dog_id}`, updated);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(dogName);
  return(

    <div className="form">
            <h1>Edit Information</h1>
        <form action={`/dogs/${id}`} method="PUT">
        <label htmlFor="name">Name:</label>
        <br></br>
        <input type="text" id="name" name="name" required onChange={(e) => setDogName(e.target.value)}></input>
        <br></br>
        <hr></hr>

        <label htmlFor="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed" required onChange={(e) => setDogBreed(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="age">Age:</label><br></br>
        <input type="number" id="age" name="age" required onChange={(e) => setDogAge(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="image">Image URL:</label><br></br>
        <input type="text" id="image" name="image" required onChange={(e) => setDogImage(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <label htmlFor="email">Email:</label><br></br>
        <input type="email" id="email" name="email"required onChange={(e) => setDogEmail(e.target.value)}></input>
        <br></br>
        <hr></hr>
        
        <button onClick={() => handleUpdate(dogs.dog_id)}>Submit</button>
    </form>
    
    </div>
  )
}

export default Edit
