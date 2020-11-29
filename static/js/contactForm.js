const sendBTN = document.querySelector("#sendBtn");
const senderName = document.querySelector("#senderName");
const senderEmail = document.querySelector("#senderEmail");
const senderBody = document.querySelector("#senderBody");
const error = document.querySelector("#error");

document.addEventListener("DOMContentLoaded",() => {
    error.style.display = "none";
    sendBTN.addEventListener("click", (evt) => {
        if(senderName.value.length <= 0 || senderEmail.value.length <= 0 || senderBody.value.length <= 0){
            evt.preventDefault();
            error.style.display = "block";
            error.innerText = "Please fill up all the required fields!";
        }else {
            error.style.display = "none";
            alert("Thank You! Your email was sent!");
        }
    });

});