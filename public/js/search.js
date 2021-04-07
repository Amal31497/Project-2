const search = async (event) => {
    event.preventDeafault();
    const zipCode = document.querySelector("#zipcode").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();

    console.log(zipCode);
    console.log(cuisine);

    if (zipCode && cuisine) {
        const response = await fetch(`api/search/${cuisine}/${zipCode}`, {
            method: 'GET',
            body: JSON.stringify({ cuisine, zipcode }),
            headers: { 'Content-Type': 'application/json' },
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