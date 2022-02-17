const urlParams = new URLSearchParams(window.location.search);
const districtID = urlParams.get("filter");

const url = `https://kea2nd-aa6c.restdb.io/rest/coffeeshops?filter=${districtID}`;

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




function handleData(coffeeshops) {
    coffeeshops.forEach((coffeeshop) => {

    //grab the template
    const template = document.querySelector("template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("h2").textContent = coffeeshop.name;
    copy.querySelector(".coffeeShop a").href = `coffeeShop.html?id=${coffeeshop._id}`;
    copy.querySelector(".address").textContent = coffeeshop.address;
    copy.querySelector(".rating").textContent = "★".repeat(coffeeshop.rating);

    

    
    document.querySelector("h1").textContent = coffeeshop.area;


    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
    

    });
}