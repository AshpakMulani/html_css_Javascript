const left = document.querySelector('.left')
const right = document.querySelector('.right')



left.addEventListener("mouseenter", ()=> {
    left.classList.add("hover-left")
    right.classList.add("no-hover-right")
})

left.addEventListener('mouseleave', () => {
    left.classList.remove('hover-left')
    right.classList.remove("no-hover-right")
})

right.addEventListener("mouseenter", ()=> {
    right.classList.add("hover-right")
    left.classList.add("no-hover-left")
})

right.addEventListener('mouseleave', () => {
    right.classList.remove('hover-right')
    left.classList.remove("no-hover-left")
})
