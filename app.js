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

    phones.forEach(phone => {
        console.log(phone)
    })

}