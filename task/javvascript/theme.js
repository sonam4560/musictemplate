let icon = document.querySelector(".fa-moon");
let bg = document.querySelector("body");

icon.addEventListener("click", function () {
    bg.classList.toggle("theme");
    if (bg.classList.contains("theme") == true) {
        icon.classList.remove("fa-moon");
        icon.innerHTML = "<span class='fa-solid fa-sun'></span>";
    }
    else {
        icon.classList.remove("fa-sun");
        icon.innerHTML = "<span class='fa-solid fa-moon'></span>";


    }
}

);
