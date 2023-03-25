
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