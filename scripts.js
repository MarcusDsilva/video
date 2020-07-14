const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src =`http://127.0.0.1:5500/onopiece.html`

    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
  modalOverlay.classList.remove("active")
})