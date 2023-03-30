
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector("#dropdownnavBar");

toggleBtn.onclick = function () {
    if (dropDownMenu.style.display === "none") {
        toggleBtnIcon.classList.replace("fa-bars", "fa-xmark");
        toggleBtnIcon.classList.add("fa-solid");
        dropDownMenu.style.display = "block";
    } else {
        toggleBtnIcon.classList.replace("fa-xmark", "fa-bars");
        dropDownMenu.style.display = "none";
    }
}

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});