function getData() {
    fetch("rooms.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Data received:", data);
            populateDOM(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
getData();

const container = document.querySelector(".roomSelectRooms")

function populateDOM(data){
    console.log(data)
    data.forEach((item) => {
        const card = document.createElement("section")
        card.classList.add("roomSelectRooms__room")
        container.appendChild(card)

        if (item.color) {
            card.style.borderColor = item.color;
            card.style.color = item.color;
        }

        const icon = document.createElement("img")
        icon.src = item.icon
        card.appendChild(icon)

        const title = document.createElement("h4")
        title.classList.add("roomSelectRooms__roomTitle")
        title.textContent = item.title
        card.appendChild(title)
        if (item.color) {
            title.style.color = item.color; // Change title color
        }

       
    })
}