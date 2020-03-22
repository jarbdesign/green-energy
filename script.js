const p = console.log;

// create function that handles click-event
const controls = document.querySelectorAll(".controls .btn");
let container = document.querySelector(".container");
let data = [
        {
            heading: "Sun power",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "solar-energy-panel-13-1418209-639x441.jpg",
            altd: "https://www.freeimages.com/photo/solar-energy-panel-13-1418209"
        },
        {
            heading: "Wind power",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "wind-power-1-1544815-640x480.jpg",
            altd: "https://www.freeimages.com/photo/wind-power-1-1544815"
        },
        {
            heading: "Water power",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnail: "a-water-powered-mill-in-the-bl-1474852-640x480.jpg",
            altd: "https://www.freeimages.com/photo/a-water-powered-mill-in-the-bl-1474852"
        }
    ];
let buttonArray = [
        controls[0],
        controls[1],
        controls[2]
    ];

function clickedButton(e){
        let clickBtn = e.target;
        
        let index = buttonArray.indexOf(clickBtn);
        p(index);

        for (let a = 0; a < controls.length; a++){
            if(controls[a].id){
                controls[a].removeAttribute("id");
            }
        }
        clickBtn.id = "active";
        container.innerHTML = `
                <div class="content-data"> 
                    <h2>${data[index].heading}</h2>
                    <div class="content-info">
                        <img src="${data[index].thumbnail}" alt="${data[index].altd}">
                        <p>${data[index].bodyText}</p>
                    </div>
                </div>
            `;
    };

for (let t = 0; t < controls.length; t++){
        controls[t].addEventListener("click", clickedButton);
        if(controls[t].id === "active"){
            container.innerHTML = `
                <div class="content-data"> 
                    <h2>${data[t].heading}</h2>
                    <div class="content-info">
                        <img src="${data[t].thumbnail}" alt="${data[t].altd}">
                        <p>${data[t].bodyText}</p>
                    </div>
                </div>
            `;
        }
    }