const projects = [
    {
        projectName: "Seas of Rebellion",
        onOpenLink: "https://store.steampowered.com/app/2618690/Seas_of_Rebellion/",
        link: "https://store.steampowered.com/widget/2618690/",
        description: "An action roguelike built in <em>C#</em> and <em>Unity Engine</em>."
    },
    {
        projectName: "Pokémon Mini-Wiki",
        link: "/Projects/Pokémon Search App/index.html",
        description: "Uses fCC PokéAPI to process user searches and display relevant pokémon info."
    },
    {
        projectName: "Phone Number Validator",
        link: "/Projects/Telephone Number Validator/index.html",
        description: "Processes user input and returns a formatted US phone number."
    }
];
// async function getProjects() {
//     const baseUrl = window.location.href.replace("index.html", "");
//     const json = await fetch(`${baseUrl}projects.json`);
//     const data = await json.json();
//     return data;
// }
//const projectsss = getProjects();

const linkIcon = '<i class="ph-bold ph-link" style="font-size: 0.75em"></i>';
const maxPreviews = 3;
const projectsDisplay = document.getElementById("projects-display");

function loadProjects() {
    for (let i = 0; i < projects.length && i < maxPreviews; i++) {
        projectsDisplay.innerHTML += 
        `<div class="project-preview shadow-border">
            <div class="project-title"><a class="link" target="_blank" href="
                ${projects[i]["onOpenLink"] ? projects[i]["onOpenLink"] : projects[i]["link"]}">
                ${projects[i]["projectName"]} ${linkIcon}</a></div>
            <div class="iframe-container"><iframe src="${projects[i]["link"]}" frameborder="0">
            </iframe></div>
            <p class="project-description">${projects[i]["description"]}</p>
        </div>`;
    }
}

loadProjects();