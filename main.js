document.addEventListener("DOMContentLoaded", function () {

    const joinBtn = document.getElementById("joinBtn");
    const joinMsg = document.getElementById("joinMsg");

    joinBtn.addEventListener("click", function () {

        joinMsg.textContent = "Welcome to HUMSS! :>";

        joinMsg.style.color = "green";
        joinMsg.style.fontWeight = "bold";
        joinMsg.style.marginTop = "10px";

        joinBtn.textContent = "YEY!! SEE YOU SOON :>";

        // Disable button after clicking
        joinBtn.disabled = true;

    });

});