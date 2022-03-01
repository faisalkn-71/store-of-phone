
// search phone

const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
    
    // call the toggleSpinner
    loadPhone(searchText);

    // clear search field
    document.getElementById("search-field").value = ""

}


// load phone

const loadPhone = (searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(info => displayPhone(info.data))
}



// display phone

const displayPhone = (phones) => {
    // console.log(phones)
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";
    if(!phones){
        document.getElementById("no-result").style.display = "d-block"
    }
   
    phones.forEach(phone => {
        console.log(phone)

        const div = document.createElement("div")
        div.classList.add("col")

        div.innerHTML = `
            

            <div class="card h-100 p-4 shadow">
            <img width=200px class="mx-auto p-3" src=${phone.image}>
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand: ${phone.brand}</p>
            </div>
              <button class="btn bg-primary text-white fw-bold rounded-pill">Details</button>
          </div>
        `
        phoneContainer.appendChild(div)
    })

}