import { useParams } from 'react-router-dom'
import { useState } from 'react'

function Home() {
    return (
        <div>
            <h2>Welcome to Our Pet Adoption Site</h2>
            <p>Here we have a way for people to set their dogs up for adoption. 
                We have a wide varitey of dogs looking for new homes. 
                You can post, remove, update, and delete.  </p>
        </div>
    )
}

export default Home