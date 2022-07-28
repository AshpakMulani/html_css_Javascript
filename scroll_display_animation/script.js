const items = document.querySelectorAll(`[class*="_container"]`)

// on each scroll event on window call checkVisibility() function
window.addEventListener('scroll', checkVisibility)

checkVisibility()

function checkVisibility() {
    //deviding screen height in 5 parts and triggering animation
    //when scrolle item cross last one bottom part 
    const triggerBottom = window.innerHeight / 5 * 4

    //loop through each container
    items.forEach(box => {
        //get boxtop of each box on every scroll action
        const boxTop = box.getBoundingClientRect().top
        
        // box top has crossed trigger bottom then remove
        // hide class and add visible class to show it
        if(boxTop < triggerBottom) {
            box.classList.remove('hide')
            box.classList.add('visible')
            
        } 
        // else keep it hidden 
        else {
            box.classList.add('hide')
            box.classList.remove('visible')
        }
    })
}