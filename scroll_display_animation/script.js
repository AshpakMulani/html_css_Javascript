const items_all = [...document.querySelectorAll(`[class*="_container"]`)]

// select first 5 elements (till fourth_container) starting from index zero.
const items_rect = items_all.slice(0,5)

// on each scroll event on window call checkVisibility() function
window.addEventListener('scroll', checkRectVisibility)

checkRectVisibility()

function checkRectVisibility() {
    //deviding screen height in 5 parts and triggering animation
    //when scrolle item cross last one bottom part 
    const triggerBottom = window.innerHeight / 5 * 4

    //loop through each container
    items_rect.map((box) => {
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
    });
}

// ****************************  Intersection Observer implimentation **********************

function manageIntersectionVisibility(entries) {
    // all elements being observed are sent as input to callback function
    // loop through all element to check if anything is visible yet in viewport
    entries.map((entry) => {
      // check if it is intersecting with viewport using buildin property
      // and add visible class if being intersected   
      if (entry.isIntersecting) {      
        // lazyload class is used in image tag in html implimentaiton. This class name
        // is added to check whihc paerts we need to lazy load.
        if (String(entry.target.className).includes("lazyload"))
        {     
          // update src tag with image src stored in data-src dataset to start loading image               
          entry.target.src = entry.target.dataset.src;
          // once image is loaded dont observer it and aoide reloading it again on scroll
          observer.unobserve(entry.target);
          // interms of image lazy loading we are setting observer on image and not the parent
          // container and visibile/hide class is for parent container so adding visible to classlist 
          //of parent. For other containers we are directly removing/adding visibility on container 
          entry.target.parentElement.classList.add('visible');
          entry.target.parentElement.classList.remove('hide');       
          //remove hide class from image as well because it gets added in this code in else part
          //when image is not yet intersecting with viewport   
          entry.target.classList.remove('hide')
        }
        // add visibility to containers other than part of lazyload class
        else{    
        entry.target.classList.remove('hide')
        entry.target.classList.add('visible')
        console.log(entry)      
        }  
      }
      // remove visibility for non-inyteresecting containers
      else {
        entry.target.classList.remove('visible')
        entry.target.classList.add('hide')
      }
    });
  }
 
  /*
  can be used to control margin or intersection threshold 

  let options = {
    root: document.querySelector(':root'),
    rootMargin: '0px',
    threshold: 1.0
  }
  */   

  const observer = new IntersectionObserver(manageIntersectionVisibility);
  // add observer for sixth_container  
  observer.observe(items_all[5]);
  // add observer for image child element inside seventh_container 
  observer.observe(items_all[6].firstElementChild);