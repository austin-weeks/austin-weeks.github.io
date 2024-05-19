const projects = [
    {
        projectName: "Seas of Rebellion",
        onOpenLink: "https://store.steampowered.com/app/2618690/Seas_of_Rebellion/",
        //link: "https://store.steampowered.com/widget/2618690/",
        link: "https://www.youtube.com/embed/0esGvyP1sUM?si=xIRLU8djONRgn3yg",
        shortDescription: "An action roguelike built in <em>C#</em> and <em>Unity Engine</em>.",
        bulletPoints: [
            "Spearheaded the development of Seas of Rebellion, a naval action-roguelike, through C# and Unity Engine.",
            "Designed a responsive system to manage complex user data via JSON files.",
            "Proactively gathered player feedback and integrated improvements.",
            "Built dynamic UI system to manage user input.",
            "Continually strengthened debugging skills, effectively troubleshooting and resolving complex technical issues to ensure a seamless user experience."
        ]
    },
    {
        projectName: "Easy Change Calculator",
        link: "/Projects/Cash Drawer Project/index.html",
        shortDescription: "Displays a visual representation of change for retail transactions.",
        bulletPoints: []
    },
    {
        projectName: "Pokémon Mini-Wiki",
        link: "/Projects/Pokémon Search App/index.html",
        shortDescription: "Uses fCC PokéAPI to process user searches and display relevant pokémon info.",
        bulletPoints: []
    },
    {
        projectName: "Phone Number Validator",
        link: "/Projects/Telephone Number Validator/index.html",
        shortDescription: "Processes user input and returns a formatted US phone number.",
        bulletPoints: []
    },
    {
        projectName: "Palindrome Checker",
        link: "/Projects/Palindrome Checker/palindrome-checker.html",
        shortDescription: "Checks if a user-entered word or phrase is a palindrome.",
        bulletPoints: []
    },
];
// async function getProjects() {
//     const baseUrl = window.location.href.replace("index.html", "");
//     const json = await fetch(`${baseUrl}projects.json`);
//     const data = await json.json();
//     return data;
// }
//const projectsss = getProjects();

const isProjectsPage = false;
//= window.location.href.includes("projects.html");

const linkIcon = '<i class="ph-bold ph-link" style="font-size: 0.75em"></i>';
const maxPreviews = 4;
const projectsDisplay = document.getElementById("projects-display");

function loadProjects() {
    if (isProjectsPage) {
        for (let i = 0; i < projects.length; i++) {
            const bullets = projects[i]["bulletPoints"].length > 0 ? `<div class="bullet-points"><ul>
                <li>${projects[i]["bulletPoints"].join("</li><li>")}</li></ul></div>` : "";
            projectsDisplay.innerHTML += 
            `<div class="project-preview shadow-border">
                <div class="project-title"><a class="link" target="_blank" href="
                    ${projects[i]["onOpenLink"] ? projects[i]["onOpenLink"] : projects[i]["link"]}">
                    ${projects[i]["projectName"]} ${linkIcon}</a></div>
                <div class="iframe-container"><iframe src="${projects[i]["link"]}" frameborder="0">
                </iframe></div>
                <p class="project-description">${projects[i]["shortDescription"]}</p>
                ${bullets}
            </div>`;
        }
    } else {
        for (let i = 0; i < projects.length && i < maxPreviews; i++) {
            projectsDisplay.innerHTML += 
            `<div class="project-preview shadow-border">
                <div class="project-title"><a class="link" target="_blank" href="
                    ${projects[i]["onOpenLink"] ? projects[i]["onOpenLink"] : projects[i]["link"]}">
                    ${projects[i]["projectName"]} ${linkIcon}</a></div>
                <div class="iframe-container"><iframe src="${projects[i]["link"]}" frameborder="0">
                </iframe></div>
                <p class="project-description">${projects[i]["shortDescription"]}</p>
            </div>`;
        }
    }
}

loadProjects();