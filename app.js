// load phone

const loadPhone = () => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then(info => displayPhone(info.data))
}

loadPhone()


// display phone

const displayPhone = (phones) => {
    // console.log(phones)
    const phoneContainer = document.getElementById("phone-container");
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