const sendBTN = document.querySelector("#sendBtn");

document.addEventListener("DOMContentLoaded",() => {

    sendBTN.addEventListener("click", (e) => {
        alert("Thank You! Your email was sent!");
    });

});