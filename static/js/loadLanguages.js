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
        description : "Learned Java in OOP methods. Usually use it learn oop concepts as it offers the best way to learn them. "
    },
    {
        name : "C",
        icon : "c.svg",
        description : "This is the first programming language that i learned. Used it to write algorithms and for my programming contests. "
    },{
        name : "Django",
        icon : "django.svg",
        description : "As this framework offers my advanced features so I like it very much. Working with is feels as easy as flask to me."
    },{
        name : "Flask",
        icon : "python.svg",
        description : "Flask is the first framework i learned. It helped me to understand the basics of frameworks. For its ease of use i like use it in my web projects. "
    },{
        name : "React",
        icon : "react.svg",
        description : "First i thought to learn Angular. I learned it because for a beginner reacts learning curve is easier to understand. My plan is to use it in my small SPAs."
    },
];


document.addEventListener('DOMContentLoaded', () => {

    let output = "";
    languages.forEach((i) => {

    output += `
    <div class="col-md-3 p-2 progCard">
        <div class="card bg-dark border border-warning">
            <div class="card-body">
                <h3 class="card-title text-warning">
                <img src="./static/images/${i.icon}" alt="" class="navIcons" height="40vh" width="40vw">
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

