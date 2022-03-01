// show spinner at the of loading
const toggleSpinner = displayStyle => {
   document.getElementById("spinner").style.display = displayStyle;
}


// search phone

const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
   
// call the toggleSpinner
    toggleSpinner("block");
    
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

            // clear phone details section
            const detailsContainer = document.getElementById("phone-details");
            detailsContainer.textContent = ''

            const errorMag = document.getElementById("error").innerText = "Oops!! No Result Found"

            // stop the toggleSpinner
            toggleSpinner("none")
         
        }
    })
}



// display phone

const displayPhone = (phones) => {

    // clear error massage
    document.getElementById("error").innerText = "";
    
    const detailsContainer = document.getElementById("phone-details");
    detailsContainer.textContent = "";

    // phone container section
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";
    
    // show 20 phones in display
    const showPhones = phones.slice(0, 20);
    
    showPhones.forEach(phone => {


        // innerHTML div for phone
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
            <div class="card h-100 p-4 shadow">
            <img width=200px class="img-fluid mx-auto p-3" src=${phone.image}>
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand: ${phone.brand}</p>
            </div>
            <a onclick="loadPhoneDetails('${phone.slug}')" href="#phone-details" class="btn bg-primary text-white fw-bold rounded-pill">Details</a>
        `
        phoneContainer.appendChild(div)
    })

    // stop the toggleSpinner
    toggleSpinner("none");


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
    
    // phone details section
    const detailsContainer = document.getElementById("phone-details");
    detailsContainer.textContent = ''

    // phone sensors
    const sensor = detail.mainFeatures.sensors

    // innerHTML div for phone details
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100 p-4 shadow">
    <img width=300px class="img-fluid mx-auto p-3" src=${detail.image}>
    <div class="card-body">
      <h4 class="card-title">${detail.name}</h4>
      <p class="card-text">Brand: ${detail.brand}</p>
      <p class="card-text">${detail.releaseDate ? detail.releaseDate : "Release Date: Unknown"}</p>
      <p class="card-text">Display Size: ${detail.mainFeatures.displaySize}</p>
      <p class="card-text">Storage: ${detail.mainFeatures.storage}</p>
      <p class="card-text">Memory: ${detail.mainFeatures.memory}</p>
      <p class="card-text">Chip set: ${detail.mainFeatures.chipSet}</p>

      <p class="card-text"><h5>Sensors:</h5> ${sensor}</p>
      
      <div class="card-text"><h5>Others</h5>
      <p>Bluetooth: ${detail.others ? detail.others.Bluetooth: "unknown" }</p>
      <p>GPS: ${detail.others? detail.others.GPS:"unknown" }</p>
      <p>NFC: ${detail.others? detail.others.NFC: "unknown" }</p>
      <p>Radio: ${detail.others? detail.others.Radio: "unknown" }</p>
      <p>USB: ${detail.others? detail.others.USB: "unknown"}</p>
      <p>WLAN: ${detail.others? detail.others.WLAN: "unknown"}</p>
    </div>
      
  </div>
    `

    detailsContainer.appendChild(div)
}


