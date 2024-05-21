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
        bulletPoints: [
            "Processes user input strings into usable, rounded floating point values.",
            "Calculates change due by looping through US currency denominations and storing the appropriate counts.",
            "Displays appropriate currency visuals and quantities to the user based on change calculation."
        ]
    },
    {
        projectName: "Pokémon Mini-Wiki",
        link: "/Projects/Pokémon Search App/index.html",
        shortDescription: "Uses fCC PokéAPI to process user searches and display relevant pokémon info.",
        bulletPoints: [
            "Processes user input and searches for a valid matching pokémon based on name or ID.",
            "Fetches the appropriate pokémon data from fCC PokéAPI.",
            "Displays a clear and concise summary of the data to the user in a friendly UI.",
            "Features a dynamic list of pokémon to select that populates as the user requests."
        ]
    },
    {
        projectName: "Flappy Turk (WIP)",
        link: "/Projects/Flappy Turk/index.html",
        shortDescription: "Flappy Bird clone built with a Turkish friend.",
        bulletPoints: [
            
        ]
    },
    {
        projectName: "Phone Number Validator",
        link: "/Projects/Telephone Number Validator/index.html",
        shortDescription: "Processes user input and returns a formatted US phone number.",
        bulletPoints: [
            "Cleans user input to only includes digits and letters.",
            "Checks input validity based on length and value of optional country code.",
            'Returns a "Valid" / "Invalid" result along with a neatly formatted phone number to the user.',
            "Also automatically translates letter inputs into their corresponding numeric digits."
        ]
    },
    {
        projectName: "Palindrome Checker",
        link: "/Projects/Palindrome Checker/palindrome-checker.html",
        shortDescription: "Checks if a user-entered word or phrase is a palindrome.",
        bulletPoints: [
            "Cleans user input to only include letters and removes casing.",
            "Returns whether the cleaned input string matches a reversed copy of itself."
        ]
    },
];
// async function getProjects() {
//     const baseUrl = window.location.href.replace("index.html", "");
//     const json = await fetch(`${baseUrl}projects.json`);
//     const data = await json.json();
//     return data;
// }
//const projectsss = getProjects();

const isProjectsPage = window.location.href.includes("projects.html");

const linkIcon = '<i class="ph-bold ph-link" style="font-size: 0.75em"></i>';
const maxPreviews = 4;
const projectsDisplay = document.getElementById(isProjectsPage ? "projects-full-display" : "projects-preview-display");

function loadPreviews() {
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

function loadFullProjectDisplays() {
    for (const proj of projects) {
        console.log(proj);
        const bullets = proj["bulletPoints"].length > 0 ? `<div class="bullet-points"><ul>
                <li>${proj["bulletPoints"].join("</li><li>")}</li></ul></div>` : "";
        projectsDisplay.innerHTML +=
            `<div class="project-full shadow-border">
                <div class="project-title"><a class="link" target="_blank" href="
                    ${proj["onOpenLink"] ? proj["onOpenLink"] : proj["link"]}">
                    ${proj["projectName"]} ${linkIcon}</a></div>
                <div class="project-content">
                    <div class="iframe-container"><iframe src="${proj["link"]}" frameborder="0">
                    </iframe></div>
                    <div class="project-content-text">
                        <p class="project-description">${proj["shortDescription"]}</p>
                        ${bullets}
                    </div>
                </div>
            </div>`;
    }
}

if (isProjectsPage) loadFullProjectDisplays();
else loadPreviews();