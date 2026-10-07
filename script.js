const button = document.querySelector("button");

button.addEventListener("click", function () {
    document.querySelector("#destinations").scrollIntoView({
        behavior: "smooth"
    });
});