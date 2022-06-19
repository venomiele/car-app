let response = await fetch("car-list.json");
let data = await response.json();
let dropdown = document.querySelector(".dropdown");
let container = document.querySelector(".dropdowns-container");
let modelDrop = document.querySelector(".dropdown-model")
let arr = [];
modelDrop.style.display = "none";
let testObj = Object.values(data[1]);
let testObj2 = testObj[3];
let value1 = dropdown.value;



function fetchText() {
        populateSelect(data);

         function listener(s) {   
            return dropdown.addEventListener("click", (e) => {
            let targetted = e.target.value;
            modelDrop.style.display = "block";
            if(targetted === arr[arr.length-1]) {
                return;
            } else {
                arr.push(e.target.value);
                let filtered = data.filter( function(item) {return item.brand === arr[arr.length-1];})
                let filtered2 = filtered[0].models;
                let filtered3 = filtered2.map( (item) => {return "<option>" + item + "</option>"})
                let filtered4 = filtered3.join("");
                modelDrop.innerHTML = `${filtered4}`

            }
            s = dropdown.value;
            return s;
        });    
    }

        function populateSelect(data) {
            data.forEach(function(s) {
            let x = document.createElement("option");
            dropdown.appendChild(x);
            x.innerHTML = `${s.brand}`;
            })
    };
    listener();
}
fetchText();

let btn = document.querySelector(".submit-btn");
btn.addEventListener("click", () => {
    window.location.replace("/Main Page/main.html");
})



