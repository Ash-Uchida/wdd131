// we need to hide the dropdown menu when it gets bigger
// make the dropdown menu button clickable

// varilbe.classlist.add or .remove
// in css: .hid{
// display:none
// }
// then we mag=ve a media , hide, display:block

const button = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

button.onclick = function(){
    if (nav.classList.contains("show")){
        nav.classList.remove("show");
    }
    else{
        nav.classList.add("show")
    }
}

