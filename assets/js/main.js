// Change iframe-wrapper class on click

function changeClass() {
    const el = document.querySelector(".iframe-wrapper");
    el.classList.remove(".iframe-wrapper_height_inital");
    el.classList.add(".iframe-wrapper_height_expand");
}

function clickListener() {
    document.addEventListener("click", () => {
        changeClass();
    });
}

//clickListener();
