const navs = document.querySelector("#navLinks");

const links = [
    {
        iconClass : "home",
        navHref : "/",
        LinkName : "Home"
    },
    {
        iconClass : "graduation-cap",
        navHref : "/qualifications",
        LinkName : "Qualifications"
    },
    {
        iconClass : "code",
        navHref : "/projects",
        LinkName : "Projects"
    },
    {
        iconClass : "commenting",
        navHref : "/contact",
        LinkName : "Contact Me"
    },

];

document.addEventListener("DOMContentLoaded", () => {
    let linkOut = "";
    links.forEach((link) => {
        linkOut += `
         <a class="nav-item nav-link" href="${link.navHref}" data-link><i class="fa fa-${link.iconClass} navIcons" aria-hidden="true"></i>${link.LinkName}</a>
        `;
    });

    navs.innerHTML = linkOut;
});