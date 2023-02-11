import React, {useState, useEffect} from "react";
import axios from "axios"

function Dogs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData =async () => {
            const result = await axios(
                "http://localhost:3002/dogs"
            );
            setData(result.data);
        };
        fetchData();
    }, []);
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
            <img src={dogs.image_url} alt='dog'></img>

          </p>
          <form action={`/dogs/${dogs.dog_id}?_method=DELETE`} method="DELETE">
                    <input type="submit" value="DELETE" />
                    </form>
        </div>
      ))}

            {/* <h1>Our Dogs</h1><br></br>
             <div className='dog_card'>
                <div className='dog_image'><img src='{dogs.image_url}' alt='dog'></img></div>
                <h3>{dogs.name}</h3>
                <p>{dogs.name} is a {dogs.breed}. It is {dogs.age} years old</p>
            
                    
                    </div>  */}
            </div>
            ) 
}
 
            export default Dogs