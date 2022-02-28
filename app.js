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
        div.innerHTML = `
            <img src=${phone.image}>
            <h3>${phone.phone_name}</h3>
            <h4>Brand: ${phone.brand}</h4>
        `
        phoneContainer.appendChild(div)
    })

}