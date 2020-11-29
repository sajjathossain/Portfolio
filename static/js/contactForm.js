const sendBTN = document.querySelector("#sendBtn");
const senderName = document.querySelector("#senderName");
const senderEmail = document.querySelector("#senderEmail");
const senderBody = document.querySelector("#senderBody");
const error = document.querySelector("#error");

document.addEventListener("DOMContentLoaded",() => {
    sendBTN.addEventListener("click", () => {

        if(senderName.value.length !== "" && senderEmail.value.length !== "" && senderBody.value.length !== ""  ){
            alert("Thank You! Your email was sent!");
            window.location.reload();
        }
    });

});