const dishForm = async(event)=>{
    event.preventDefault();
    console.log("click");
    const dish_name = document.querySelector("#dishName").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();
    const dish_description = document.querySelector("#dishDescription").value.trim();
    const vegan = document.querySelector("#meat").value.trim();
    const has_gluten = document.querySelector("#gluten").value.trim();
    const has_dairy = document.querySelector("#dairy").value.trim();
    const has_nuts = document.querySelector("#nuts").value.trim();
    const has_shellfish = document.querySelector("#shellfish").value.trim();

    if(dish_name && cuisine && dish_description){
        const response = await fetch(`/api/dishes/`, {
            method: 'POST',
            body: JSON.stringify({ chef_id, dish_name, cuisine, dish_description, vegan, has_gluten, has_dairy, has_nuts, has_shellfish }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok){
            $(".dish-form").slideUp(100)
        } else {
            alert(await response.statusText)
        }
    }
} 

document.querySelector("#dishFormSubmit").addEventListener("click", dishForm)