// Selecting form elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const contactInput = document.getElementById("contact") as HTMLInputElement;
const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const projectsInput = document.getElementById("projects") as HTMLTextAreaElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const generateButton = document.getElementById("generateResume") as HTMLButtonElement;

// Event listener to trigger resume generation
generateButton.addEventListener("click", generateResume);

function generateResume() {
  // Clear previous content
  resumeContent.innerHTML = "";

  // Capture input values
  const name = nameInput.value.trim();
  const contact = contactInput.value.trim();
  const summary = summaryInput.value.trim();
  const skills = skillsInput.value.trim();
  const experience = experienceInput.value.trim();
  const projects = projectsInput.value.trim();
  const education = educationInput.value.trim();

  // Helper function to create and add sections
  const addSection = (title: string, content: string) => {
    if (content) {
      const section = document.createElement("div");
      section.classList.add("section");
      const titleElem = document.createElement("h3");
      titleElem.textContent = title;
      const contentElem = document.createElement("p");
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
