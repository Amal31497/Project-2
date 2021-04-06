const search = async (event) => {
    event.preventDeafault();
    const zipCode = document.querySelector("#zipcode").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();

    if(zipCode && cuisine){
        const response = await fetch(`api/search/${cuisine}/${zipCode}`);

        if(response.ok){
            document.location.replace('/search')
        } else {
            alert( await response.statusText);
        }
    }
}

const searchtButton = document.querySelector("#searchBtn");
searchButton.addEventListener("click", search);