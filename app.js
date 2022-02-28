// search phone

const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
   
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
   
    phones.forEach(phone => {
        console.log(phone)

        const div = document.createElement("div")
        div.classList.add("card","h-100","px-3", "py-4","border-0","rounded-3", "shadow",)

        div.innerHTML = `
            <img width=200px class="mx-auto p-3" src=${phone.image}>
            <h4>${phone.phone_name}</h4>
            <h5>Brand: ${phone.brand}</h5>
            <button class="btn bg-primary text-white fw-bold rounded-pill">Details</button>
        `
        phoneContainer.appendChild(div)
    })

}