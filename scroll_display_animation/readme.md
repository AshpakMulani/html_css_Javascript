# Adding Animations to dofferent object on page while scrolling.

I know...I know.... there is already AOS library for this but, this code repo explores different ways including AOS library to animate objects on screen during scrolling.


## getBoundingClientRect element method
ref : https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

function returns DomRect object about size and position. This object can be scanned to get current position of object and check if it has reached viewport. Custom calculations needs to be performed to udnerstand objects locaiton compared to viewport.

First 5 objects light blue background on page are animated with this type of implimentation 




## intersectionObserver API
ref : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

used for lazy loading, nfinite scrolling, mnaging visibility etc..It helps to understand if object is in viewport or not.

The Intersection Observer API provides a way to asynchronously observe changes for the intersection of a target element with an ancestor element or with a top-level document’s viewport. (ref. MDN docs)

Later 2 object lightpink and light gray background are showung visibility and lazy loading managment using IntersectionObserver





## Animate on Scroll (AOS) Library
ref : https://michalsnik.github.io/aos/

Easiest way to animate things on scroll. Just add library as mentioedn in ref link and add respective data class for animation type



## Code Execution

- clone the code locally
- open code in VSCode and make sure 'live server' extention is installed in vs code
- right click on index.html file and choose 'Open with live server'



## Sample demo in video format



https://user-images.githubusercontent.com/42534082/181877533-e3ceec67-42c3-4332-a3ec-ddc998ffba26.mp4

