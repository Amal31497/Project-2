
const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log(" Click CVlikck");
    const email = document.querySelector('#foodieEmail').value.trim();
    const password = document.querySelector('#foodiePassword').value.trim();
    const first_name = document.querySelector('#foodieFirstName').value.trim();
    const phone_number = document.querySelector('#foodiePhone').value.trim();
    const address = document.querySelector('#foodieStreet').value.trim();
    const city = document.querySelector('#foodieCity').value.trim();
    const state = document.querySelector('#foodieState').value.trim();
    const zipcode = document.querySelector('#foodieZipcode').value.trim();

    if (email && password) {
      const response = await fetch('api/foodies', {
        method: 'POST',
        body: JSON.stringify({ email, password, first_name, phone_number, address, city, state, zipcode}),

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
