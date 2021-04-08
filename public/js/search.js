const search = async (event) => {
    event.preventDefault();

    console.log("Clicked");

    const zipCode = document.querySelector("#zipcode").value.trim();
    // const cuisine = document.querySelector("#cuisine").value;

    console.log(zipCode);
    // console.log(cuisine);

    if (zipCode) {
        // const response = await fetch(`/results/${zipCode}`, {
        //     // OR //
        // // const response = await fetch(`/search/${zipCode}`, {
        //     method: 'GET'
        // });

        // console.log(response);
        // if (response.ok) {
            document.location.replace(`/results/${zipCode}`)
        // } else {
        //     alert(await response.statusText);
        // }
    };
}

const searchButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", search);