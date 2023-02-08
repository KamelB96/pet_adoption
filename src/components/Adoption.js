
function Adoption() {
    return (
        <div className="form">
            <h1>Adoption Form</h1>
        <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <br></br>
        <br></br>

        <label for="breed">Breed:</label>
        <input type="text" id="breed" name="breed" required></input>
        <br></br>
        <br></br>
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required></input>
        <br></br>
        <br></br>
        
        <label for="image">Image URL:</label>
        <input type="url" id="image" name="image" required></input>
        <br></br>
        <br></br>
        
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"required></input>
        <br></br>
        <br></br>
        
        <input type="submit" value="Submit"></input>
      </form>
      
      </div>
    )
}

export default Adoption