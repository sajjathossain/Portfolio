const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Home") },
        { path: "/qualifications", view: () => console.log("Qualifications") },
        { path: "/projects", view: () => console.log("Projects") },
        { path: "/contact", view: () => console.log("Contact") },
    ];

    const potentialMatches = routes.map(
        route => {
            return {
                route : route,
                isMatch : location.pathname === route.path
            };
        }
    );

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
        
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});