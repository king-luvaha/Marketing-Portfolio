// Register scroll trigger gsap plugin
gsap.registerPlugin(ScrollTrigger);

// SCROLL ANIMATIONS
// Animate about section on scroll
gsap.to(".about", {
    marginTop: "-40em", //Animate margin
    scale: "1", // Animate scale
    scrollTrigger: {
        trigger: ".hero", // Element that triggers the animation
        start: "top top", // Part of element and screen that trigger animation
        scrub: true, // Animation sollows the scroll position
        pin: true, // Pin the trigger element to the screen
    }
});

// Cards scroll animation
gsap.from(".card", {
    y: 100,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
    }
});

// FAQ
// Get all of the detail items from the DOM
const detailsItem = document.querySelectorAll(".detail-item");
// loop through the items
detailsItem.forEach(item => {
    // Set a click event for each item
    item.addEventListener("click", () => {
        // Select the detail elements from each item
        const details = item.lastElementChild;
        // Toggle open class
        details.classList.toggle("details-open");
    });
});

// NAVBAR
// Get the menu button and menu from the DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu nav");

// Set a click to event to the menu button
menuBtn.addEventListener("click", () => {
    // Toggle menu open class from CSS
    menu.classList.toggle("menu-open");
})