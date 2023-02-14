import React, { useState, useEffect } from "react";
import axios from "axios";
// import dogs from "../../servers/controllers/dogs_controller";
// import EditedDogs from './editButton'
import { Link } from 'react-router-dom';

function Dogs() {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios("http://localhost:3002/dogs");
        setData(result.data);
    };

    fetchData();
    }, []);

    const handleDelete = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3002/dogs/${id}`);
        if (response.status === 200) {
        setData(data.filter((dogs) => dogs.dog_id !== id));
        console.log(data)
        } else {
        console.error("Delete request failed");
        }
    } catch (error) {
        console.error(error);
    }
    };

//     const[editDog, setEditDog] = useState([]);
// useEffect(() => {
//     const fetchEditDog = async () => {
//         const editDogResult = await axios(`http://localhost:3002/dogs`);
//         setEditDog(editDogResult.editDog)
//     };
//     fetchEditDog()
// }, [])


// const handleEdit = async (dogid) => {
//     try {
//       const response = await axios.put(`http://localhost:3002/dogs/${dogid}`);
//       console.log(`handle edit2`)
//       console.log(`${dogid} is dogid`)
//       if (response.status === 200) {
//         //update the state with the edited dog data
//         setEditDog(editDog.map(editDog => editDog.dog_id === dogid.dog_id ? response.data : editDog));
//         console.log(editDog)
//     } else {
//         console.error("Edit request failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

    return (
    <div>
        {data.map((dogs) => (
        <div key={dogs.dog_id}>
            <h3>{dogs.name}</h3>
            <p>
            {dogs.name} is a {dogs.breed}. It is {dogs.age} years old.
            <br></br>
            <a href="mailto:{dogs.email}"> Contact Owner </a>
            <br></br>
            <br></br>
            <img src={dogs.image_url} alt="dog"></img>
            </p>
            <button onClick={() => handleDelete(dogs.dog_id)}>Delete</button>
            <Link to={`/dogs/${dogs.dog_id}`}><button>Edit_Link</button></Link>
            {/* <Link to={`/dogs/${dogs.dog_id}`}><button onClick={() => handleEdit(dogs.dog_id)}>Edit_handleEdit</button></Link> */}
        </div>
        ))}

        {/* <h1>Our Dogs</h1><br></br>
                <div className='dog_card'>
                <div className='dog_image'><img src='{dogs.image_url}' alt='dog'></img></div>
                <h3>{dogs.name}</h3>
                <p>{dogs.name} is a {dogs.breed}. It is {dogs.age} years old</p>
            
                    
                    </div>  */}
    </div>
    );
}

export default Dogs;
