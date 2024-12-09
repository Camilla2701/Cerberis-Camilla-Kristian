const openAddRoom = document.querySelector(".roomSelectCard__button")
const closeAddRoom = document.querySelector(".addRoomCard__button")
const addRoomCard = document.querySelector(".addRoomCard")
const closeSect = document.querySelector(".addRoomCard__closeSection")

openAddRoom.addEventListener("click", () => {
    addRoomCard.classList.add("active")
})

closeAddRoom.addEventListener("click", () =>{
    addRoomCard.classList.remove("active")
})

closeSect.addEventListener("click", () => {
    addRoomCard.classList.remove("active")
})