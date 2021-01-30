const loadEduField = document.getElementById("showEduInfo");
const eduInfos = [
    {
        name: "Secondary School Certificate",
        year: 2016,
        school: "Bhadrason G C Academy",
        scColSize: 5,
        gradeOrCGPA: "A",
        gColSize: 7,
        schoolLocation: "Bhadrason, Shibchar, Madaripur, Dhaka, Bangladesh"
    },
    {
        name: "Higher Secondary Certificate",
        year: "2017 - 2018",
        school: "Nurul Amin Degree College",
        scColSize: 5,
        gradeOrCGPA: "A-",
        gradeColSize: 7,
        schoolLocation: "Umedpur, Shibchar, Madaripur, Dhaka, Bangladesh"
    },
    {
        name: "Bachelor of Science (CSE)",
        year: "2019 - 2022",
        school: "Ranada Prasad Shaha University",
        scColSize: 6,
        gradeOrCGPA: "A",
        gradeColSize: 6,
        schoolLocation: "Narayanganj, Dhaka, Bangladesh"
    },
];


let eduInfo = "";

document.addEventListener("DOMContentLoaded",() => {

    eduInfos.forEach(
        (edu) => {
            eduInfo += `
            <div class="float-left mt-3">
                <div class="name h2 text-warning">${edu.name}</div>
                <h4 class="progLang">Year : ${edu.year}</h4>
                <div class="vrBar bg-warning float-left hpName"></div>
                <div class="mt-3 ml-3 h5 row">
                    <p class="col-md-${edu.scColSize}"><b class="text-warning">School : </b>${edu.school} </p>
                    <p class="col-md-${edu.gradeColSize}"><b class="text-warning">Grade : </b>${edu.gradeOrCGPA} </p>
                    <p class="col-md-12"><b class="text-warning">Location : </b>${edu.schoolLocation} </p>
                </div>
            </div>
            
            <hr class="bg-warning">
            `
        }
    )

    loadEduField.innerHTML = eduInfo;

});