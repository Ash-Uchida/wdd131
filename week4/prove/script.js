const button = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");
const img = document.querySelector("#img");

button.addEventListener('click', function(){
    button.classList.toggle('open')
    nav.classList.toggle('show')
})

// add event lister for the images
// img.addEventListener('click', function(){

// then we make the bigger image appear so big_pic.png
// then we need to have the x on the right top screen. when that is clicked the big_pic_png dissapears

// })



window.addEventListener('resize', function(){
    const width = this.window.innerWidth;
    if (width >= 890 ){
        button.classList.remove('open')
        nav.classList.remove('show')
    }
})


