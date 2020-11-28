const loadEduField = document.getElementById("showEduInfo");
const eduInfos = [
    {
        name: "Secondary School Certificate",
        year: 2016,
        school: "Bhadrason G C Academy",
        gradeOrCGPA: "A",
        schoolLocation: "Bhadrason, Shibchar, Madaripur, Dhaka, Bangladesh"
    },
];


let eduInfo = "";

document.addEventListener("DOMContentLoaded",() => {

    eduInfos.forEach(
        (edu) => {
            eduInfo+= `
            <div class="float-left">
                <div class="name h2 text-warning">${edu.name}</div>
                <h4 class="progLang">Year : ${edu.year}</h4>
                <div class="vrBar bg-warning float-left hpName"></div>
                <div class="mt-3 ml-3 h5 row">
                    <p class="col-md-4"><b class="text-warning">School : </b>${edu.school} </p>
                    <p class="col-md-8"><b class="text-warning">Grade : </b>${edu.gradeOrCGPA} </p>
                    <p class="col-md-12"><b class="text-warning">Location : </b>${edu.schoolLocation} </p>
                </div>
            </div>
            `
        }
    )

    loadEduField.innerHTML = eduInfo;

});