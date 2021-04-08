const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("clicked")
    // Collect values from the login form
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/chefs/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/chef-form');
        console.log(response)
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);