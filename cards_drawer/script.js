const card_list = document.querySelectorAll(".card");

console.log(card_list);

card_list.forEach(card => {

    card.addEventListener("click", ()=>{
        removeActive();
        card.classList.add("active");
    
    })    
});


const removeActive = ()=> {
    card_list.forEach(card => {
    card.classList.remove("active");
})};