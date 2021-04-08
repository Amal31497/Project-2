const chefForm = async(event)=>{
    event.preventDefault();
    console.log("click");
    const chef_id = document.querySelector(".chefId").getAttribute("id")
    const chef_description = document.querySelector("#chefBio").value.trim();
    console.log(chef_description)
    if(chef_description && chef_id){
        const response = await fetch(`/api/chefs/${chef_id}`, {
            method: 'PUT',
            body: JSON.stringify({ chef_description }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok){
            $(".chef-form").slideUp(400)
        } else {
            alert(await response.statusText)
        }
    }
}

document.querySelector("#chefFormSubmit").addEventListener("click", chefForm);

