const profileConfig = async(event)=>{
    event.preventDefault();
    const chefId = document.querySelector("#cehfBio").getAttribute("id")
    const chefBio = document.querySelector("#chefBio").value.trim();
    const dishName = document.querySelector("#dishName").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();
    const dishDescription = document.querySelector("#dishDescription").value.trim();
    const meat = document.querySelector("#meat").value.trim();
    const gluten = document.querySelector("#gluten").value.trim();
    const dairy = document.querySelector("#dairy").value.trim();
    const nuts = document.querySelector("#nuts").value.trim();
    const shellfish = document.querySelector("#shellfish").trim();

    if(chefBio && chefId && dishName && cuisine && dishDescription && meat && gluten && dairy && nuts && shellfish){
        const responseChef = await fetch(`/api/chefs/${chefId}`, {
            method: 'PUT',
            body: JSON.stringify({ chefBio }),
            headers: { 'Content-Type': 'application/json' }
        });

        const responseDish = await fetch(`/api/dishes/`, {
            method: 'POST',
            body: JSON.stringify({ chefId, dishName, cuisine, dishDescription, meat, gluten, dairy, nuts, shellfish }),
            headers: { 'Content-Type': 'application/json' }
        })
    }

}