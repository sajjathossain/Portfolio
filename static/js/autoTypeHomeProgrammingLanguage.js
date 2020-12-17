const text = document.getElementById("text");

const timeOutTime = 120;
let listIndex = 0;
let currentOutputSize = 0;
let isIncreasing = true;
let textOut = " ";
let output = [
    " Programming Languages ",
    " Frameworks & Libraries "
    ];

function startTyping(){

    if (textOut.length <= output[listIndex].length && isIncreasing) {

        textOut = output[listIndex].substring(0, currentOutputSize + 2);
        text.innerText = output[listIndex].substr(0, currentOutputSize + 2);
        currentOutputSize += 1;

    } else if (isIncreasing === false) {

        textOut = output[listIndex].substring(0, currentOutputSize - 2);
        text.innerText = output[listIndex].substr(0, currentOutputSize - 2);
        currentOutputSize -= 1;

    }

    if (currentOutputSize === output[listIndex].length+2) {
        isIncreasing = false;
    }

    if(isIncreasing===false && textOut.length === 0){
        textOut = " ";
        isIncreasing = true;
        listIndex+=1;

        if(listIndex >= output.length){
            listIndex = 0;
        }

    }

    clearTimeout(startTyping);
    setTimeout(startTyping, timeOutTime);

}


document.addEventListener("DOMContentLoaded", () => {
    startTyping();
});
