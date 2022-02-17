const urlParams = new URLSearchParams(window.location.search);
const shopID = urlParams.get("id");

const url = `https://kea2nd-aa6c.restdb.io/rest/coffeeshops/${shopID}`;
console.log(shopID);




// The API-key:
const options = {
    headers: {
        "x-apikey": "620be85b34fd621565858615",
    },
};

fetch(url, options)
.then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    } 
    return response.json();
})
.then((data) => {
    // We have the data
    console.log(data);
    handleData(data);
})
.catch((e) => {
// Woops, something went wrong
console.error("An error occured:", e.message);

});

function handleData(coffeeshop){
        document.querySelector("h2").textContent = coffeeshop.name;
        console.log(coffeeshop.name);
        document.querySelector(".address").textContent = coffeeshop.address;
        document.querySelector(".price").textContent = "$".repeat(coffeeshop.price);
        document.querySelector(".rating").textContent = "★".repeat(coffeeshop.rating);
        document.querySelector(".map").href = `https://www.google.com/maps/place/${coffeeshop.address}`

        

        if(coffeeshop.delivery){
            document.querySelector(".delivery").textContent = "delivery available";
        }
        if(coffeeshop.temporaryClosed){
            document.querySelector(".temporaryClosed").classList.add("showTC");
        }
        if(coffeeshop.price === 0){
            document.querySelector(".price").textContent = "price unknown";
        }

        


        
    
}




