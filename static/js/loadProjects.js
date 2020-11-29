const projectsField = document.getElementById("showProjects");
const projectList = [
    {
        projectName: "CRUD Application",
        projectDescription: "Used Raw PHP and MySql Database. ",
        githubHref: "CRUD-Application"


    },
    {
        projectName: "Disease Tracker",
        projectDescription: "Created this as a fun project. Used Bootstrap, Vanilla JavaScript",
        githubHref: "DiseaseTracker"


    },
    {
        projectName: "Flask Video Downloader",
        projectDescription: "Created this as a fun project. Used Flask, Bootstrap, Youtube-dl",
        githubHref: "Flask-Video-Downloader"


    },
    {
        projectName: "Calendar Application",
        projectDescription: "This was my Project for SPL Course. Used basic logics here.",
        githubHref: "Calendar-Application"


    },
    {
        projectName: "Simple JS Calculator",
        projectDescription: "I made this project while i started learning JavaScript to practice my skills.",
        githubHref: "Simple-JS-Calculator"


    },
];


document.addEventListener("DOMContentLoaded",() => {

    let projects = "";
    projectList.forEach((pl) =>{
    projects += `
    <div class="col-md-4 p-2">
        <div class="card bg-dark border border-warning progCard">
            <div class="card-body">
                <h3 class="card-title text-warning">
                    ${pl.projectName}
                </h3>
                <p class="card-text">
                    ${pl.projectDescription}
                </p>
                <a href="https://www.github.com\\sajjathossain\\${pl.githubHref}" class="btn btn-dark border border-warning bg-dark">Github</a>
            </div>
        </div>
    </div>
    `
    });

    projectsField.innerHTML = projects;

});