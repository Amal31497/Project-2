const profileConfig = async(event)=>{
    console.log("Clicked")
    event.preventDefault();
    const chef_id = document.querySelector("#chefBio").getAttribute("id")
    const chef_description = document.querySelector("#chefBio").value.trim();
    const dish_name = document.querySelector("#dishName").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();
    const dish_description = document.querySelector("#dishDescription").value.trim();
    const vegan = document.querySelector("#meat").value.trim();
    const has_gluten = document.querySelector("#gluten").value.trim();
    const has_dairy = document.querySelector("#dairy").value.trim();
    const has_nuts = document.querySelector("#nuts").value.trim();
    const has_shellfish = document.querySelector("#shellfish").value.trim();
    
    if(chef_description && chef_id && dish_name && cuisine && dish_description){
        const responseChef = await fetch(`/api/chefs/${chef_id}`, {
            method: 'PUT',
            body: JSON.stringify({ chef_description }),
            headers: { 'Content-Type': 'application/json' }
        });

        const responseDish = await fetch(`/api/dishes/`, {
            method: 'POST',
            body: JSON.stringify({ chef_id, dish_name, cuisine, dish_description, vegan, has_gluten, has_dairy, has_nuts, has_shellfish }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(responseChef.ok && responseDish.ok){
            window.location.replace('/chef-page')
        } else {
            alert(await response.statusText)
        }
    }
}

const submitButton = document.getElementsByClassName("chef-form")[0]
submitButton.addEventListener("submit", profileConfig)