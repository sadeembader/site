alert("Welcome to my website!");

let visitorName = prompt("What is your name?");

alert("Welcome, " + visitorName + "!");

console.log("This is a message from script.js");

let project = {
    title: "Front-end Website",
    tools: ["HTML", "CSS", "JavaScript"],
    duration: "2 months",
    objective: "Build a responsive website"
};

function showProjectDetails() {
    let details = "";

    for (let key in project) {
        details += key + ": " + project[key] + "\n";
    }

    alert(details);
}

let viewProject = confirm(
    "Would you like to check the current project?"
);

if (viewProject) {
    showProjectDetails();
} else {
    alert("No problem! You can check the project later.");
}