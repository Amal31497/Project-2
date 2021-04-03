
const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#foodieEmail').value.trim();
    const first_name = document.querySelector('#foodieFirstName').value.trim();
    const last_name = document.querySelector('#foodieLastName').value.trim();
    const address = document.querySelector('#foodieStreet').value.trim();
    const city = document.querySelector('#foodieCity').value.trim();
    const state = document.querySelector('#foodieState').value.trim();
    const phone_number = document.querySelector('#foodiePhone').value.trim();
    const zipcode = document.querySelector('#foodieZipcode').value.trim();
    const password = document.querySelector('#foodiePassword').value.trim();

  
    if (email && password) {
      const response = await fetch('api/foodies', {
        method: 'POST',
        body: JSON.stringify({ email, first_name, last_name, address, city, state, phone_number, zipcode, password }),
        headers: { 'Content-Type': 'application/json' },
      });
     
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert( await response.statusText);
      }
    }
};


const submitButton = document.querySelector('#signupbtn');
submitButton.addEventListener("click", signupFormHandler);