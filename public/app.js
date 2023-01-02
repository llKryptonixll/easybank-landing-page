const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const mobileNavigation = document.getElementById("mobile-navigation");

openButton.addEventListener("click", handleClick);
closeButton.addEventListener("click", handleClick);

// switch icon and open close mobile navigation
function handleClick() {
    openButton.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
    mobileNavigation.classList.toggle("hidden");
    mobileNavigation.classList.toggle("grid");
    document.getElementsByTagName("html")[0].classList.toggle("overflow-hidden"); // disables scrolling when sidebar is opened
}