const projectsField = document.getElementById("showProjects");
const projectList = [
    {
        projectName: "Disease Tracker",
        projectDescription: "Created this as a fun project. Used Bootstrap, Vanilla JavaScript",
        carouselClass: "carousel-item active",
        githubHref: "DiseaseTracker"


    },
    {
        projectName: "Flask Video Downloader",
        projectDescription: "Created this as a fun project. Used Flask, Bootstrap, Youtube-dl",
        carouselClass: "carousel-item",
        githubHref: "Flask-Video-Downloader"


    },
    {
        projectName: "Calendar Application",
        projectDescription: "This was my Project for SPL Course. Used basic logics here.",
        carouselClass: "carousel-item",
        githubHref: "Calendar-Application"


    },
    {
        projectName: "Simple JS Calculator",
        projectDescription: "I made this project while i started learning JavaScript to practice my skills.",
        carouselClass: "carousel-item",
        githubHref: "Simple-JS-Calculator"


    },
];

let projects = "";

document.addEventListener("DOMContentLoaded",() => {

    projectList.forEach((pl) =>{
    projects += `
    <div class="${pl.carouselClass}">
        <div class="col-md-4 ">
            <div class="card card-body p-2 border border-warning progCard">
            <h3 class="text-warning">${pl.projectName}</h3>
            <p class="p-1 text-light">${pl.projectDescription}</p>
            <a class="btn btn-outline-warning bg-dark" href="https://www.github.com\\sajjathossain\\${pl.githubHref}">Github</a>
            </div>
        </div>
    </div>
    `
    });

    projectsField.innerHTML = projects;

});