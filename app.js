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
    .then(info => {
        if(info.status == true){
            displayPhone(info.data)
        }
        else{
            // clear phone container
            const phoneContainer = document.getElementById("phone-container");
            phoneContainer.textContent = "";

            const detailsContainer = document.getElementById("phone-details");
            detailsContainer.textContent = ''

         const errorMag = document.getElementById("error").innerText = "Oops!! No Result Found"
         
        }
    })
}



// display phone

const displayPhone = (phones) => {
    // console.log(phones)

    // clear error massage
    document.getElementById("error").innerText = ''
    
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";

    phones.forEach(phone => {
        // console.log(phone)

        const div = document.createElement("div")
        div.classList.add("col")

        div.innerHTML = `
            
            <div class="card h-100 p-4 shadow">
            <img width=200px class="mx-auto p-3" src=${phone.image}>
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand: ${phone.brand}</p>
            </div>
            <a onclick="loadPhoneDetails('${phone.slug}')" href="#phone-details" class="btn bg-primary text-white fw-bold rounded-pill">Phone Details</a>
             
        `
        phoneContainer.appendChild(div)
    })

}

// load phone details

const loadPhoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(info => displayPhoneDetails(info.data))
}

// display phone details

const displayPhoneDetails = (detail) => {
    // console.log(detail)
    // console.log(detail.mainFeatures.sensors)

    const detailsContainer = document.getElementById("phone-details");
    detailsContainer.textContent = ''

    
    
    const sensor = detail.mainFeatures.sensors
    console.log( ...sensor);




    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100 p-4 shadow">
    <img width=300px class="mx-auto p-3" src=${detail.image}>
    <div class="card-body">
      <h5 class="card-title">${detail.name}</h5>
      <p class="card-text">Brand: ${detail.brand}</p>
      <p class="card-text">${detail.releaseDate ? detail.releaseDate : "Release Date: Unknown"}</p>
      <p class="card-text">Display Size: ${detail.mainFeatures.displaySize}</p>
      <p class="card-text">Storage: ${detail.mainFeatures.storage}</p>
      <p class="card-text">Memory: ${detail.mainFeatures.memory}</p>
      <p class="card-text">Chip set: ${detail.mainFeatures.chipSet}</p>
      <p class="card-text"><h5>Sensors:</h5> ${sensor}</p>
      
      <div class="card-text"><h5>Others</h5>
      <p>Bluetooth: ${detail.others.Bluetooth}</p>
      <p>GPS: ${detail.others.GPS}</p>
      <p>NFC: ${detail.others.NFC}</p>
      <p>Radio: ${detail.others.Radio}</p>
      <p>USB: ${detail.others.USB}</p>
      <p>WLAN: ${detail.others.WLAN}</p>
    </div>
      
  </div>
    `

    detailsContainer.appendChild(div)
}


