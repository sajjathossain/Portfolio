const sendBTN = document.querySelector("#sendBtn");
const senderName = document.querySelector("#senderName");
const senderEmail = document.querySelector("#senderEmail");
const senderBody = document.querySelector("#senderBody");
const error = document.querySelector("#error");

document.addEventListener("DOMContentLoaded",() => {
    sendBTN.addEventListener("click", () => {

        if(senderName.value.length !== 0 && senderEmail.value.length !== 0 && senderBody.value.length !== 0  ){
            alert("Thank You! Your email was sent!");
            window.location.reload();
        }
    });

});