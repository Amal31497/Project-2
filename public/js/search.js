const search = async (event) => {
    event.preventDefault();

    console.log("Clicked");

    const zipCode = document.querySelector("#zipcode").value.trim();
    const cuisine = document.querySelector("#cuisine").value;

    console.log(zipCode);
    console.log(cuisine);

    if (zipCode && cuisine) {
        const response = await fetch(`api/search/${cuisine}/${zipCode}`, {
            method: 'GET'
        });

        if (response.ok) {
            document.location.replace('/results')
        } else {
            alert( await response.statusText );
        }
    };
}

    const searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener("click", search);