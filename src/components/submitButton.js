import axios from 'axios'
/*
// Handle submit event
function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementsByClassName('form');
  form.addEventListener('submit', handleSubmit);

  // Collect data from form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const breed = document.getElementById('breed').value;
  const image = document.getElementById('image').value;
  const age = document.getElementById('age').value;

  // Send data to server
  fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify({ name, email, breed, image, age }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      // Handle server response
      if (data.success) {
        console.log('Data submitted successfully');
      } else {
        console.error('Error submitting data: ', data.error);
      }
    })
    .catch(error => {
      console.error('Error submitting data: ', error);
    });
}

export default handleSubmit;*/

const submitForm = async () => {
    try {
    const response = await axios.post('http://localhost:3000/api/submit', 
    {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        breed : document.getElementById('breed').value,
        image : document.getElementById('image').value,
        age : document.getElementById('age').value,
    });
    console.log(response.data);
    alert("Form submitted successfully!");
    } catch (error) {
    console.error(error);
    alert("There was an error submitting the form. Please try again.");
    }
};


export default submitForm;