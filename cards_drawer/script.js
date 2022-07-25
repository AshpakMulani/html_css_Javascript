/* select all items with class card so that on click event listrner
can be attached on individual card item */ 
const card_list = document.querySelectorAll(".card");

/* add on click event listner on each card to insert 'active' css class
which makes card bigger in size as compared to other for expanded view */
card_list.forEach(card => {
    card.addEventListener("click", ()=>{
        removeActive();
        card.classList.add("active");    
    })    
});

/* seperate function to remove 'active' class on each card before adding 'active'
class on new card to make sure only one card is active */
const removeActive = ()=> {
    card_list.forEach(card => {
    card.classList.remove("active");
})};