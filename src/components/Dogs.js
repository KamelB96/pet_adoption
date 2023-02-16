import React, { useState, useEffect } from "react";
import axios from "axios";
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

    return (
    <div>
        <br></br>
        {data.map((dogs) => (
        <div className="dogDisplay" key={dogs.dog_id}>
            <div className="border">
            <h3>{dogs.name}</h3>
            
            <img src={dogs.image_url} alt="dog"></img>
            <p>
            {dogs.name} is a {dogs.breed}. It is {dogs.age} years old.
            <br></br>
            <a href="mailto:{dogs.email}"> Contact Owner </a>

            </p>
            <button onClick={() => handleDelete(dogs.dog_id)}>Delete</button>
            <Link to={`/dogs/${dogs.dog_id}`}><button>Edit</button></Link>
            </div>
            <br></br>
        </div>
        ))}
    </div>
    );
}

export default Dogs;
