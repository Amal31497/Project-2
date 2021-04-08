
const onSubmitHandler = (e) => {
    e.preventDefault();

    //handle file data from the state Before sending
    const data = new FormData();

    data.append('image', fileData)
//add fetch call for image in mySql
     fetch('/uploads', {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'MIME' }
    })
  
   .then((result) => {
       console.log("file sent successful");
   })
      //document.location.replace('/chefDashboard');
     .catch ((err) => {
        console.log(err.message);
    });
};
  
return (
    <div className="App">
        <h1>Practice File Uploading</h1>
        <form onSubmit={onSubmitHandler} />
            <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        
            <button type="submit">submit to back end </button>
        </div>
)


const storePhoto = document.querySelector(".signup-form");
storePhoto.addEventListener("submit", onSubmitHandler);