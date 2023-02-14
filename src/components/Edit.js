import React, { useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function Edit (){
  let id = window.location.href[window.location.href.length - 1]
  // let { id } = useParams();
  // console.log(window.location.href)
  console.log(id)


  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  const handleEdit = (dog) => {
    setEditingDog(dog);
  };

  const handleUpdate = async (updatedDog) => {
    try {
      const response = await axios.put(`/api/dogs/${updatedDog.dog_id}`, updatedDog);
      setDogs(dogs.map(dog => (dog.dog_id === updatedDog.dog_id ? response.data : dog)));
      setEditingDog(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  return(

    <div className="form">
            <h1>Edit Information</h1>
        <form action={`/dogs/${id}`} method="PUT">
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

export default Edit