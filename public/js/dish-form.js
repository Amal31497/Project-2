const dishForm = async(event)=>{
    event.preventDefault();
    console.log("click");
    //const chef_id = document.querySelector(".chefId").getAttribute("id");
    const dish_name = document.querySelector("#dishName").value.trim();
    const cuisine_id = document.querySelector("#cuisineId").value;
    const dish_description = document.querySelector("#dishDescription").value.trim();
    const vegan = $("#meat").prop("checked")
    const has_gluten = $("#gluten").prop("checked")
    const has_dairy = $("#dairy").prop("checked")
    const has_nuts = $("#nuts").prop("checked")
    const has_shellfish = $("#shellfish").prop("checked")
    console.log(vegan)
    if(dish_name && cuisine_id && dish_description){
        const response = await fetch(`/api/dishes/`, {
            method: 'POST',
            body: JSON.stringify({ dish_name, cuisine_id, dish_description, vegan, has_gluten, has_dairy, has_nuts, has_shellfish }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok){
            $(".dish-form").slideUp(400)
        } else {
            alert(await response.statusText)
        }
    }
} 

document.querySelector(".dish-form").addEventListener("submit", dishForm)