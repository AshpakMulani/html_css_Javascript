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

GIF might not show all smooth animation correctly



## Code Execution

- todo



## Sample demo in video format

-todo