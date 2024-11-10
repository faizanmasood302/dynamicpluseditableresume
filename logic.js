// Selecting form elements
var nameInput = document.getElementById("name");
var contactInput = document.getElementById("contact");
var summaryInput = document.getElementById("summary");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var projectsInput = document.getElementById("projects");
var educationInput = document.getElementById("education");
var resumeContent = document.getElementById("resumeContent");
var generateButton = document.getElementById("generateResume");
// Event listener to trigger resume generation
generateButton.addEventListener("click", generateResume);
function generateResume() {
    // Clear previous content
    resumeContent.innerHTML = "";
    // Capture input values
    var name = nameInput.value.trim();
    var contact = contactInput.value.trim();
    var summary = summaryInput.value.trim();
    var skills = skillsInput.value.trim();
    var experience = experienceInput.value.trim();
    var projects = projectsInput.value.trim();
    var education = educationInput.value.trim();
    // Helper function to create and add sections
    var addSection = function (title, content) {
        if (content) {
            var section = document.createElement("div");
            section.classList.add("section");
            var titleElem = document.createElement("h3");
            titleElem.textContent = title;
            var contentElem = document.createElement("p");
            contentElem.innerHTML = content.replace(/\n/g, "<br>");
            section.appendChild(titleElem);
            section.appendChild(contentElem);
            resumeContent.appendChild(section);
        }
    };
    // Append each section if it has content
    addSection("Name", name);
    addSection("Contact Info", contact);
    addSection("Summary", summary);
    addSection("Skills", skills);
    addSection("Experience", experience);
    addSection("Projects", projects);
    addSection("Education", education);
}
