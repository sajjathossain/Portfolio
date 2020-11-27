const languageField = document.querySelector("#languages");

const languages = [
    {
        name : "Python",
        icon : "python.svg",
        description : "Worked with React.js and Express.js. Two popular js library. I also like js very much for its various abilities like fetching data without refreshing a web page."
    },
    {
        name : "PHP",
        icon : "php.svg",
        description : " Comfortable in writing RAW Php Codes. I've used PHP at the backend in some of my projects. It's also one of my favourite languages."
    },
    {
        name : "Javascript",
        icon : "javascript.svg",
        description : "Worked with React.js and Express.js. Two popular js library. I also like js very much for its various abilities like fetching data without refreshing a web page."
    },
    {
        name : "Java",
        icon : "java.svg",
        description : "Learned Java in OOP methods. "
    },
];


document.addEventListener('DOMContentLoaded', () => {

    let output = "";
    languages.forEach((i) => {

    output += `
    <div class="col-md-4">
        <div class="card alert alert-warning progCard">
            <div class="card-body">
                <h3 class="card-title">
                <img src="../../static/images/${i.icon}" alt="" class="navIcons" height="40vh" width="40vw">
                    ${i.name}
                </h3>
                <p class="card-text">
                    ${i.description}
                </p>
            </div>
        </div>
    </div>
    `
    });

    languageField.innerHTML = output;

});

